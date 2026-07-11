document.addEventListener('DOMContentLoaded', () => {

    // Global State
    let currentData = null;
    let isBudgetMode = false;

    // --- PORTAL LOGIC ---
    const portalScreen = document.getElementById('portal-screen');
    const mainApp = document.getElementById('main-app');
    const portalCards = document.querySelectorAll('.portal-card');
    const backToPortalBtn = document.getElementById('back-to-portal');

    portalCards.forEach(card => {
        card.addEventListener('click', () => {
            const expId = card.getAttribute('data-expedition');
            // Reset budget mode on new selection
            isBudgetMode = false;
            document.getElementById('tier-toggle').checked = false;
            updateTierLabels();

            loadExpedition(expId);
            
            // Transition
            portalScreen.classList.remove('portal-active');
            portalScreen.classList.add('hidden');
            mainApp.classList.remove('hidden');
            mainApp.classList.add('app-active');
            window.scrollTo(0, 0);
        });
    });

    backToPortalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        mainApp.classList.remove('app-active');
        mainApp.classList.add('hidden');
        portalScreen.classList.remove('hidden');
        portalScreen.classList.add('portal-active');
    });

    // --- RENDER LOGIC ---
    const loadExpedition = (expId) => {
        currentData = EXPEDITION_DATA[expId];
        
        // 1. Update Hero & Nav
        document.getElementById('nav-brand').textContent = currentData.title.split('(')[0].trim().toUpperCase();
        document.getElementById('hero-title').textContent = currentData.title;
        document.getElementById('overview').style.backgroundImage = `url('${currentData.bg}')`;

        // 2. Update Dashboard
        const dash = document.getElementById('main-dashboard');
        dash.innerHTML = `
            <div class="dash-item"><span class="dash-label">Origin</span><span class="dash-value">${currentData.dashboard.origin}</span></div>
            <div class="dash-item"><span class="dash-label">Destination</span><span class="dash-value">${currentData.dashboard.dest}</span></div>
            <div class="dash-item"><span class="dash-label">Base City</span><span class="dash-value">${currentData.dashboard.baseCity}</span></div>
            <div class="dash-item"><span class="dash-label">Dates</span><span class="dash-value">${currentData.dashboard.dates}</span></div>
            <div class="dash-item"><span class="dash-label">Cohort</span><span class="dash-value">${currentData.dashboard.cohort}</span></div>
            <div class="dash-item"><span class="dash-label">Travel Time</span><span class="dash-value">${currentData.dashboard.travelTime}</span></div>
            <div class="dash-item"><span class="dash-label">Transport</span><span class="dash-value">${currentData.dashboard.transport}</span></div>
            <div class="dash-item"><span class="dash-label">Meals</span><span class="dash-value">${currentData.dashboard.meals}</span></div>
        `;

        // 3. Render Quick Snapshot (Vertical Layout)
        const timelineContainer = document.getElementById('snapshot-timeline');
        timelineContainer.innerHTML = '';
        currentData.itinerary.forEach(day => {
            timelineContainer.innerHTML += `
                <div class="timeline-day-card glass-panel">
                    <h3 class="timeline-day-title">Day ${day.dayNum} (${day.date})</h3>
                    <ul class="timeline-details">
                        <li><strong>Flight:</strong> ${day.flight}</li>
                        <li><strong>Check-in:</strong> ${day.checkIn}</li>
                        <li><strong>Lunch:</strong> ${day.lunch}</li>
                        <li><strong>Sightseeing:</strong> ${day.sightseeing}</li>
                        <li><strong>Activity:</strong> ${day.activity}</li>
                        <li><strong>Dinner at:</strong> ${day.dinner}</li>
                    </ul>
                </div>
            `;
        });

        // 6. Render Dynamic Itinerary Accordion
        const accContainer = document.getElementById('itinerary-accordion');
        const itineraryBg = document.getElementById('itinerary-bg');
        accContainer.innerHTML = '';
        
        currentData.itinerary.forEach((day) => {
            accContainer.innerHTML += `
                <div class="accordion-item" data-bg="${day.image}">
                    <div class="accordion-header">
                        <span>Day ${day.dayNum}: ${day.sightseeing.split('&')[0]}</span>
                        <span>+</span>
                    </div>
                    <div class="accordion-content">
                        <div class="accordion-body">
                            <p>${day.desc}</p>
                            <div class="itinerary-stats">
                                <span><strong>Highlight:</strong> ${day.activity}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        // Rebind accordion events
        const headers = document.querySelectorAll('.accordion-header');
        headers.forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                const icon = header.querySelector('span:last-child');
                const parent = header.parentElement;
                
                const isActive = content.classList.contains('active');
                
                document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('active'));
                document.querySelectorAll('.accordion-header span:last-child').forEach(s => s.textContent = '+');
                
                if (!isActive) {
                    content.classList.add('active');
                    icon.textContent = '-';
                    itineraryBg.style.backgroundImage = `url('${parent.getAttribute('data-bg')}')`;
                } else {
                    itineraryBg.style.backgroundImage = 'none';
                }
            });
        });

        if(headers.length > 0) {
            headers[0].click();
        }

        renderTogglableSections();

        // Interactive Budget Calculator Initialization
        const slider = document.getElementById('guest-slider');
        slider.value = 12; // reset
        calculateBudget(12);
        
        // Re-trigger scroll animations manually for loaded content
        setTimeout(() => {
            document.querySelectorAll('.animate-on-scroll').forEach(el => {
                const rect = el.getBoundingClientRect();
                if(rect.top < window.innerHeight) {
                    el.classList.add('visible');
                }
            });
        }, 100);
    };

    const renderTogglableSections = () => {
        if(!currentData) return;

        // Render Aviation
        const avGrid = document.getElementById('aviation-grid');
        avGrid.innerHTML = '';
        const aviationData = isBudgetMode ? currentData.budgetAviation : currentData.aviation;
        
        aviationData.forEach(av => {
            let lis = av.features.map(f => `<li>${f}</li>`).join('');
            avGrid.innerHTML += `
                <div class="aviation-card">
                    <h3>${av.title}</h3>
                    <p>${av.desc}</p>
                    <ul>${lis}</ul>
                </div>
            `;
        });

        // Render Accommodations & Culinary Flip Cards
        const renderFlipCards = (data, containerId, hasLink) => {
            const container = document.getElementById(containerId);
            container.innerHTML = '';
            data.forEach(item => {
                let linkHtml = hasLink ? `<a href="${item.link}" target="_blank" class="official-btn">Official Website</a>` : '';
                let priceHtml = item.price ? `<h4>${item.price}</h4>` : '';
                let imgFallback = "this.src='https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=800&q=80'";
                container.innerHTML += `
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src="${item.image}" alt="${item.title}" onerror="${imgFallback}">
                                <div class="content">
                                    <h3>${item.title}</h3>
                                    <p style="margin-top:0.5rem; color:#666;">${item.desc}</p>
                                    <p style="margin-top:1rem; font-weight:600; color:var(--secondary-color); font-size:0.9rem;">Hover for details ↻</p>
                                </div>
                            </div>
                            <div class="flip-card-back">
                                <h3 style="margin-bottom:1rem; color:white;">${item.title}</h3>
                                <p>${item.fullDesc}</p>
                                ${priceHtml}
                                ${linkHtml}
                            </div>
                        </div>
                    </div>
                `;
            });
        };
        const accData = isBudgetMode ? currentData.budgetAccommodations : currentData.accommodations;
        renderFlipCards(accData, 'accommodation-grid', true);
        
        // Culinary is always premium (Jain requirements)
        renderFlipCards(currentData.culinary, 'culinary-grid', false);
    };

    // --- TIER TOGGLE LOGIC ---
    const tierToggle = document.getElementById('tier-toggle');
    const labels = document.querySelectorAll('.tier-label');
    
    const updateTierLabels = () => {
        if(isBudgetMode) {
            labels[0].classList.remove('premium-active');
            labels[1].classList.add('budget-active');
        } else {
            labels[0].classList.add('premium-active');
            labels[1].classList.remove('budget-active');
        }
    };

    tierToggle.addEventListener('change', (e) => {
        isBudgetMode = e.target.checked;
        updateTierLabels();
        renderTogglableSections();
        calculateBudget(parseInt(document.getElementById('guest-slider').value));
    });

    // --- BUDGET CALCULATOR ---
    const slider = document.getElementById('guest-slider');
    const display = document.getElementById('guest-count-display');
    const statsContainer = document.getElementById('budget-stats');
    
    const calculateBudget = (guests) => {
        if(!currentData) return;
        
        const budgetParams = isBudgetMode ? currentData.budget.budget : currentData.budget.premium;
        
        const flightCost = budgetParams.flightPerPax * guests;
        const totalCost = budgetParams.baseCost * guests;
        
        statsContainer.innerHTML = `
            <div class="stat-box">
                <h3>${guests}</h3>
                <p>Total Guests</p>
            </div>
            <div class="stat-box">
                <h3>₹${(flightCost/100000).toFixed(2)}L</h3>
                <p>Flights Total</p>
            </div>
            <div class="stat-box">
                <h3>₹${(totalCost/100000).toFixed(2)}L</h3>
                <p>Total Projected Outlay</p>
            </div>
        `;
    };

    slider.addEventListener('input', (e) => {
        const val = e.target.value;
        display.textContent = val;
        calculateBudget(parseInt(val));
    });

    // Intersection Observer for Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    // Periodically check for new .animate-on-scroll elements (since DOM changes)
    setInterval(() => {
        document.querySelectorAll('.animate-on-scroll:not(.observed)').forEach(el => {
            el.classList.add('observed');
            observer.observe(el);
        });
    }, 1000);

});
