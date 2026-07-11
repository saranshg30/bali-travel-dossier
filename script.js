document.addEventListener('DOMContentLoaded', () => {

    // 1. Intersection Observer for Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    // 2. Data Structures
    const snapshotTable = [
        { day: 1, dest: "Ngurah Rai Airport (DPS)", loc: "Tuban", win: "09:50 AM" },
        { day: 1, dest: "Queen's Tandoor", loc: "Nusa Dua", win: "07:00 PM - 08:30 PM" },
        { day: 2, dest: "Glass-Bottom Catamaran", loc: "Sanur Reefs", win: "08:30 AM - 11:30 AM" },
        { day: 2, dest: "Puja Mandala & Uluwatu", loc: "South Kuta", win: "01:30 PM & 04:30 PM" },
        { day: 3, dest: "Tegalalang & Ubud Palace", loc: "Ubud Region", win: "07:45 AM & 04:30 PM" },
        { day: 4, dest: "Waterbom Bali", loc: "Kuta", win: "09:00 AM - 04:00 PM" },
        { day: 4, dest: "Tanaman Plant-Based", loc: "Seminyak", win: "07:00 PM - 09:00 PM" },
        { day: 5, dest: "Taman Ayun & Tanah Lot", loc: "Mengwi / Beraban", win: "09:00 AM & 04:30 PM" },
        { day: 6, dest: "Krisna Oleh Oleh Center", loc: "Tuban", win: "10:00 AM - 12:00 PM" }
    ];

    const aviation = [
        {
            title: "Trunk Carrier: Singapore Airlines (SQ)",
            desc: "Selected for wide-body premium comfort (A350 / B787-10), optimal cabin air quality, and strict adherence to special dietary lines.",
            features: [
                "<strong>Transit:</strong> Changi Airport (SIN) - 2h 15m smooth transit.",
                "<strong>Baggage:</strong> 30kg Checked / 7kg Cabin.",
                "<strong>Dietary:</strong> Asian Vegetarian (AVML) & Strict Jain (VJML) verified.",
                "<strong>Pitch:</strong> 32-inch pitch for senior comfort."
            ]
        },
        {
            title: "Ground Transportation Logistics",
            desc: "Bypassing small ride-hailing cars to keep the cohort together securely.",
            features: [
                "<strong>Vehicle:</strong> Private 25-seater Isuzu Elf Executive Coach.",
                "<strong>Storage:</strong> Dedicated cooler storage for chilled water & snacks.",
                "<strong>Access:</strong> Drop-offs directly at main temple entrances.",
                "<strong>Driver:</strong> Professional local driver trained for narrow historic routes."
            ]
        }
    ];

    const accommodations = [
        {
            title: "Grand Hyatt Bali (Nusa Dua)",
            desc: "Set like a crown jewel along the pristine white sands of Nusa Dua, the Grand Hyatt Bali is a sprawling tropical oasis.",
            fullDesc: "Features cascading waterfalls, 5 pools, and completely flat pathways ideal for seniors and strollers. Masterfully blends traditional Balinese village architecture with world-class luxury.",
            price: "₹18,500 / night",
            image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
            link: "https://www.hyatt.com/en-US/hotel/indonesia/grand-hyatt-bali/balgh"
        },
        {
            title: "The Ritz-Carlton, Bali",
            desc: "Perched elegantly atop a towering limestone cliff in Nusa Dua, The Ritz-Carlton delivers breathtaking views.",
            fullDesc: "Features a pristine white-sand beach and private pool villas. This resort promises a tranquil, high-end escape marked by unparalleled hospitality and glass elevator cliff transits.",
            price: "₹38,000 / night",
            image: "https://images.unsplash.com/photo-1582719478250-c89404bb8a0e?auto=format&fit=crop&w=1200&q=80",
            link: "https://www.ritzcarlton.com/en/hotels/dpsrz-the-ritz-carlton-bali/overview/"
        },
        {
            title: "Novotel Bali Nusa Dua",
            desc: "A fantastic, cost-effective 5-star option located in the heart of the secure ITDC complex.",
            fullDesc: "Offers a massive lagoon pool, excellent family suites, and a private beach club accessible via a quick, complimentary shuttle. Extremely budget-friendly for large groups.",
            price: "₹7,000 / night",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
            link: "https://all.accor.com/hotel/6328/index.en.shtml"
        },
        {
            title: "Holiday Inn Resort Benoa",
            desc: "Located just north of Nusa Dua in Tanjung Benoa, this beachfront resort is incredibly family-friendly.",
            fullDesc: "Features dedicated kids' zones, four pools, and exceptional value without compromising on 5-star comfort. Perfect for toddlers and active teenagers.",
            price: "₹8,500 / night",
            image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
            link: "https://www.ihg.com/holidayinnresorts/hotels/us/en/bali/dpsbb/hoteldetail"
        }
    ];

    const itinerary = [
        {
            day: "Day 1: Arrival & Oceanfront Settlement",
            content: `
                <p><strong>Morning:</strong> Touch down at Denpasar (DPS) via <a href="https://www.singaporeair.com/" target="_blank" style="color: var(--secondary-color);">Singapore Airlines</a> SQ944 at 09:50 AM. VIP Concierge assists through dedicated e-VoA lanes.</p>
                <p><strong>Afternoon:</strong> 25-minute scenic drive to Nusa Dua resort. Private check-in and villa courtyard light lunch (no onion/garlic).</p>
                <p><strong>Evening:</strong> Relaxed beachfront walk. Authentic welcome dinner at <a href="https://bali.queenstandoor.com/" target="_blank" style="color: var(--secondary-color);">Queen's Tandoor Nusa Dua</a>.</p>
                <div class="itinerary-stats">
                    <span><strong>Energy:</strong> Low (Restorative)</span>
                    <span><strong>Kid/Senior:</strong> 10/10</span>
                </div>
            `,
            image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Baby_crab_at_Nusa_Dua.JPG"
        },
        {
            day: "Day 2: Marine Discovery & Uluwatu Spectacle",
            content: `
                <p><strong>Morning:</strong> Private glass-bottom catamaran tour at Sanur Beach Reefs (safe for seniors/toddlers).</p>
                <p><strong>Afternoon:</strong> Lunch at Zula Vegetarian Paradise. Visit <a href="https://goo.gl/maps/puja-mandala" target="_blank" style="color: var(--secondary-color);">Puja Mandala</a> cultural complex.</p>
                <p><strong>Evening:</strong> Dramatic sea cliffs of <a href="https://goo.gl/maps/uluwatu" target="_blank" style="color: var(--secondary-color);">Uluwatu Temple</a>. Sunset Kecak Fire Dance performance.</p>
                <div class="itinerary-stats">
                    <span><strong>Energy:</strong> Moderate</span>
                    <span><strong>Kid/Senior:</strong> 9/10</span>
                </div>
            `,
            image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Uluwatu%40bali.jpg"
        },
        {
            day: "Day 3: Highlands & Cultural Heart of Ubud",
            content: `
                <p><strong>Morning:</strong> Early departure to <a href="https://goo.gl/maps/tegalalang" target="_blank" style="color: var(--secondary-color);">Tegalalang Rice Terraces</a> to beat the heat.</p>
                <p><strong>Afternoon:</strong> Sustainable agricultural estate tour in Tampaksiring. Plant-based lunch at <a href="https://sayurihealingfood.com/" target="_blank" style="color: var(--secondary-color);">Sayuri Healing Café</a>.</p>
                <p><strong>Evening:</strong> Visit historic Ubud Royal Palace and artisanal sections of Ubud Market.</p>
                <div class="itinerary-stats">
                    <span><strong>Energy:</strong> High (Walking)</span>
                    <span><strong>Kid/Senior:</strong> 7/10</span>
                </div>
            `,
            image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Tegallalang_Rice_Terraces_Bali_1.jpg"
        },
        {
            day: "Day 4: Sustainable Recreation at Waterbom Bali",
            content: `
                <p><strong>Morning:</strong> Base at a privately reserved double-sized luxury gazebo at <a href="https://www.waterbom-bali.com/" target="_blank" style="color: var(--secondary-color);">Waterbom Bali</a>. Lazy river for seniors/toddlers.</p>
                <p><strong>Afternoon:</strong> High-velocity water slides for teens. Wood-fired vegetarian pizzas delivered to the gazebo.</p>
                <p><strong>Evening:</strong> Premium multi-course vegetarian dining at Tanaman Restaurant in Seminyak.</p>
                <div class="itinerary-stats">
                    <span><strong>Energy:</strong> Very High</span>
                    <span><strong>Kid/Senior:</strong> 10/10</span>
                </div>
            `,
            image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Cabanas_At_Waterbom_Amusement_Park%2C_Kuta_Bali.JPG"
        },
        {
            day: "Day 5: Royal Heritage & Farewell Sunset",
            content: `
                <p><strong>Morning:</strong> Visit <a href="https://goo.gl/maps/taman-ayun" target="_blank" style="color: var(--secondary-color);">Taman Ayun Temple</a> in Mengwi (flat manicured stone pathways).</p>
                <p><strong>Afternoon:</strong> Customized lunch at <a href="https://ganeshaeksanskriti.com/" target="_blank" style="color: var(--secondary-color);">Ganesha Ek Sanskriti</a>.</p>
                <p><strong>Evening:</strong> Iconic <a href="https://goo.gl/maps/tanah-lot" target="_blank" style="color: var(--secondary-color);">Tanah Lot Sea Temple</a>. Private farewell dinner on the lawn terraces overlooking the ocean.</p>
                <div class="itinerary-stats">
                    <span><strong>Energy:</strong> Moderate</span>
                    <span><strong>Kid/Senior:</strong> 9/10</span>
                </div>
            `,
            image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Tanah-Lot_Bali_Indonesia_Pura-Tanah-Lot-01.jpg"
        }
    ];

    const culinary = [
        {
            title: "Queen's Tandoor (Nusa Dua)",
            desc: "The premier Indian dining establishment featuring a completely separate vegetarian kitchen.",
            fullDesc: "Chefs are fully trained in strict Jain food preparation (avoiding root vegetables, onions, garlic). Signature: Paneer Butter Masala & Yellow Dal Tadka.",
            image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Ganesha Ek Sanskriti",
            desc: "Beautifully styled Indian restaurant known for consistent quality and excellent family-style thalis.",
            fullDesc: "Easily accommodates large group bookings up to 20 pax in private dining rooms. Signature: Crispy vegetable pakoras and Kashmiri Pulao.",
            image: "https://images.unsplash.com/photo-1606851094655-b25cb7a60627?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Sayuri Healing Café (Ubud)",
            desc: "Famous plant-based café in Ubud that uses organic, locally sourced ingredients.",
            fullDesc: "Excellent spot for teenagers and adults interested in modern, high-quality vegan dining. Signature: Raw vegan berry cheesecakes & green smoothies.",
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80"
        }
    ];

    // 3. Render Snapshot Table
    const tbody = document.querySelector('.snapshot-table tbody');
    snapshotTable.forEach(row => {
        tbody.innerHTML += `
            <tr>
                <td>${row.day}</td>
                <td>${row.dest}</td>
                <td>${row.loc}</td>
                <td>${row.win}</td>
            </tr>
        `;
    });

    // 4. Render Aviation Grid
    const avGrid = document.getElementById('aviation-grid');
    aviation.forEach(av => {
        let lis = av.features.map(f => `<li>${f}</li>`).join('');
        avGrid.innerHTML += `
            <div class="aviation-card">
                <h3>${av.title}</h3>
                <p>${av.desc}</p>
                <ul>${lis}</ul>
            </div>
        `;
    });

    // 5. Render Flip Cards (Accommodations & Culinary)
    const renderFlipCards = (data, containerId, hasLink = false) => {
        const container = document.getElementById(containerId);
        data.forEach(item => {
            let linkHtml = hasLink ? `<a href="${item.link}" target="_blank" class="official-btn">Official Website</a>` : '';
            let priceHtml = item.price ? `<h4>${item.price}</h4>` : '';
            container.innerHTML += `
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="${item.image}" alt="${item.title}">
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
    renderFlipCards(accommodations, 'accommodation-grid', true);
    renderFlipCards(culinary, 'culinary-grid', false);

    // 6. Render Dynamic Itinerary
    const accContainer = document.getElementById('itinerary-accordion');
    const itineraryBg = document.getElementById('itinerary-bg');
    
    itinerary.forEach((day, index) => {
        accContainer.innerHTML += `
            <div class="accordion-item" data-bg="${day.image}">
                <div class="accordion-header">
                    <span>${day.day}</span>
                    <span>+</span>
                </div>
                <div class="accordion-content">
                    <div class="accordion-body">
                        ${day.content}
                    </div>
                </div>
            </div>
        `;
    });

    const headers = document.querySelectorAll('.accordion-header');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('span:last-child');
            const parent = header.parentElement;
            
            // Toggle current
            const isActive = content.classList.contains('active');
            
            // Close all
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

    // 7. Interactive Budget Calculator
    const slider = document.getElementById('guest-slider');
    const display = document.getElementById('guest-count-display');
    const statsContainer = document.getElementById('budget-stats');
    
    const calculateBudget = (guests) => {
        const baseCost = 100500;
        const flightCost = 48000 * guests;
        const totalCost = baseCost * guests;
        
        statsContainer.innerHTML = `
            <div class="stat-box">
                <h3>${guests}</h3>
                <p>Total Guests</p>
            </div>
            <div class="stat-box">
                <h3>₹${(flightCost/100000).toFixed(2)}L</h3>
                <p>SQ Flights Total</p>
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
    
    calculateBudget(12); // Initialize
});
