document.addEventListener('DOMContentLoaded', () => {

    // Intersection Observer for Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Content Data Setup
    const accommodations = [
        {
            title: "Grand Hyatt Bali (Nusa Dua)",
            desc: "Set like a crown jewel along the pristine white sands of Nusa Dua, the Grand Hyatt Bali is a sprawling tropical oasis featuring cascading waterfalls, lush landscaped gardens, and a spectacular river pool. This five-star sanctuary masterfully blends traditional Balinese village architecture with world-class luxury.",
            price: "₹18,500 – ₹24,000 / night",
            image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
            link: "https://www.hyatt.com/en-US/hotel/indonesia/grand-hyatt-bali/balgh"
        },
        {
            title: "The Ritz-Carlton, Bali",
            desc: "Perched elegantly atop a towering limestone cliff in Nusa Dua, The Ritz-Carlton delivers breathtaking views of the azure Indian Ocean. Featuring a pristine white-sand beach and private pool villas, this resort promises a tranquil, high-end escape marked by unparalleled hospitality.",
            price: "₹38,000 – ₹55,000 / night",
            image: "https://images.unsplash.com/photo-1582719478250-c89404bb8a0e?auto=format&fit=crop&w=1200&q=80",
            link: "https://www.ritzcarlton.com/en/hotels/dpsrz-the-ritz-carlton-bali/overview/"
        },
        {
            title: "Novotel Bali Nusa Dua (Budget Friendly)",
            desc: "A fantastic, cost-effective 5-star option located in the heart of the secure ITDC complex. Offers a massive lagoon pool, excellent family suites, and a private beach club accessible via a quick, complimentary shuttle.",
            price: "₹7,000 – ₹9,500 / night",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
            link: "https://all.accor.com/hotel/6328/index.en.shtml"
        },
        {
            title: "Holiday Inn Resort Bali Benoa (Budget Friendly)",
            desc: "Located just north of Nusa Dua in Tanjung Benoa, this beachfront resort is incredibly family-friendly with dedicated kids' zones, four pools, and exceptional value without compromising on 5-star comfort.",
            price: "₹8,500 – ₹11,000 / night",
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
                    <span><strong>Kid Suitability:</strong> 10/10</span>
                    <span><strong>Senior Suitability:</strong> 10/10</span>
                </div>
            `,
            image: "https://en.wikipedia.org/wiki/Special:FilePath/Baby_crab_at_Nusa_Dua.JPG"
        },
        {
            day: "Day 2: Marine Discovery & Uluwatu Spectacle",
            content: `
                <p><strong>Morning:</strong> Private glass-bottom catamaran tour at Sanur Beach Reefs (safe for seniors/toddlers).</p>
                <p><strong>Afternoon:</strong> Lunch at Zula Vegetarian Paradise. Visit <a href="https://goo.gl/maps/puja-mandala" target="_blank" style="color: var(--secondary-color);">Puja Mandala</a> cultural complex.</p>
                <p><strong>Evening:</strong> Dramatic sea cliffs of <a href="https://goo.gl/maps/uluwatu" target="_blank" style="color: var(--secondary-color);">Uluwatu Temple</a>. Sunset Kecak Fire Dance performance.</p>
                <p><em>Uluwatu Temple: Balancing precariously on a sheer 70-meter cliff above the crashing surf, it is a magnificent ancient sea temple bathed in golden hour magic.</em></p>
                <div class="itinerary-stats">
                    <span><strong>Energy:</strong> Moderate</span>
                    <span><strong>Kid Suitability:</strong> 9/10</span>
                    <span><strong>Senior Suitability:</strong> 8/10</span>
                </div>
            `,
            image: "https://en.wikipedia.org/wiki/Special:FilePath/Uluwatu@bali.jpg"
        },
        {
            day: "Day 3: Highlands & Cultural Heart of Ubud",
            content: `
                <p><strong>Morning:</strong> Early departure to <a href="https://goo.gl/maps/tegalalang" target="_blank" style="color: var(--secondary-color);">Tegalalang Rice Terraces</a> to beat the heat.</p>
                <p><strong>Afternoon:</strong> Sustainable agricultural estate tour in Tampaksiring (Cacao/Spices). Plant-based lunch at <a href="https://sayurihealingfood.com/" target="_blank" style="color: var(--secondary-color);">Sayuri Healing Café</a>.</p>
                <p><strong>Evening:</strong> Visit historic Ubud Royal Palace and artisanal sections of Ubud Market.</p>
                <p><em>Tegalalang Rice Terraces: Carved into the emerald valleys of Ubud, showcasing the breathtaking ingenuity of the ancient Balinese subak irrigation system.</em></p>
                <div class="itinerary-stats">
                    <span><strong>Energy:</strong> High (Walking)</span>
                    <span><strong>Kid Suitability:</strong> 8/10</span>
                    <span><strong>Senior Suitability:</strong> 7/10</span>
                </div>
            `,
            image: "https://en.wikipedia.org/wiki/Special:FilePath/Tegallalang_Rice_Terraces_Bali_1.jpg"
        },
        {
            day: "Day 4: Sustainable Recreation at Waterbom Bali",
            content: `
                <p><strong>Morning:</strong> Base at a privately reserved double-sized luxury gazebo at <a href="https://www.waterbom-bali.com/" target="_blank" style="color: var(--secondary-color);">Waterbom Bali</a>. Lazy river for seniors/toddlers.</p>
                <p><strong>Afternoon:</strong> High-velocity water slides for teens. Wood-fired vegetarian pizzas delivered to the gazebo.</p>
                <p><strong>Evening:</strong> Premium multi-course vegetarian dining at Tanaman Restaurant in Seminyak.</p>
                <p><em>Waterbom Bali: Voted among the best waterparks in Asia, a thrilling tropical playground nestled within lush, landscaped gardens.</em></p>
                <div class="itinerary-stats">
                    <span><strong>Energy:</strong> Very High</span>
                    <span><strong>Kid Suitability:</strong> 10/10</span>
                    <span><strong>Senior Suitability:</strong> 9/10 (Cabanas)</span>
                </div>
            `,
            image: "https://en.wikipedia.org/wiki/Special:FilePath/Cabanas_At_Waterbom_Amusement_Park,_Kuta_Bali.JPG"
        },
        {
            day: "Day 5: Royal Heritage & Farewell Sunset",
            content: `
                <p><strong>Morning:</strong> Visit <a href="https://goo.gl/maps/taman-ayun" target="_blank" style="color: var(--secondary-color);">Taman Ayun Temple</a> in Mengwi (flat manicured stone pathways).</p>
                <p><strong>Afternoon:</strong> Customized lunch at <a href="https://ganeshaeksanskriti.com/" target="_blank" style="color: var(--secondary-color);">Ganesha Ek Sanskriti</a>.</p>
                <p><strong>Evening:</strong> Iconic <a href="https://goo.gl/maps/tanah-lot" target="_blank" style="color: var(--secondary-color);">Tanah Lot Sea Temple</a>. Private farewell dinner on the lawn terraces overlooking the ocean.</p>
                <p><em>Tanah Lot: Silhouetted against the vibrant canvas of the Balinese sky, an iconic pilgrimage site perched on a jagged offshore rock formation.</em></p>
                <div class="itinerary-stats">
                    <span><strong>Energy:</strong> Moderate</span>
                    <span><strong>Kid Suitability:</strong> 8/10</span>
                    <span><strong>Senior Suitability:</strong> 9/10</span>
                </div>
            `,
            image: "https://en.wikipedia.org/wiki/Special:FilePath/Tanah-Lot_Bali_Indonesia_Pura-Tanah-Lot-01.jpg"
        },
        {
            day: "Day 6: Curated Procurement & Return",
            content: `
                <p><strong>Morning:</strong> Relaxed breakfast and check-out. Visit <a href="https://krisnabali.co.id/" target="_blank" style="color: var(--secondary-color);">Krisna Oleh Oleh</a> premium handicraft center for fixed-price souvenirs.</p>
                <p><strong>Afternoon:</strong> Denpasar International Airport (DPS) at 12:30 PM. VIP concierge assisted check-in for Singapore Airlines flight to Jaipur.</p>
                <div class="itinerary-stats">
                    <span><strong>Energy:</strong> Low</span>
                    <span><strong>Kid Suitability:</strong> 8/10</span>
                    <span><strong>Senior Suitability:</strong> 9/10</span>
                </div>
            `,
            image: "https://en.wikipedia.org/wiki/Special:FilePath/Taman_Ayun.jpg"
        }
    ];

    // Render Accommodations
    const accGrid = document.getElementById('accommodation-grid');
    accommodations.forEach(acc => {
        accGrid.innerHTML += `
            <div class="card">
                <img src="${acc.image}" alt="${acc.title}" class="card-img">
                <div class="card-content">
                    <h3 class="card-title">${acc.title}</h3>
                    <p>${acc.desc}</p>
                    <p style="margin-top: 1rem; font-weight: 600; color: var(--secondary-color);">${acc.price}</p>
                    <a href="${acc.link}" target="_blank" style="display: inline-block; margin-top: 1rem; padding: 0.5rem 1rem; background: var(--primary-color); color: white; text-decoration: none; border-radius: 4px; font-weight: 500; font-size: 0.9rem;">Official Website</a>
                </div>
            </div>
        `;
    });

    // Render Itinerary Accordion
    const accContainer = document.getElementById('itinerary-accordion');
    itinerary.forEach((day, index) => {
        accContainer.innerHTML += `
            <div class="accordion-item">
                <div class="accordion-header">
                    <span>${day.day}</span>
                    <span>+</span>
                </div>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <img src="${day.image}" alt="Day ${index + 1}" class="itinerary-image">
                        ${day.content}
                    </div>
                </div>
            </div>
        `;
    });

    // Accordion Logic
    const headers = document.querySelectorAll('.accordion-header');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('span:last-child');
            
            content.classList.toggle('active');
            icon.textContent = content.classList.contains('active') ? '-' : '+';
        });
    });

    // Open the first accordion by default
    if(headers.length > 0) {
        headers[0].click();
    }
});
