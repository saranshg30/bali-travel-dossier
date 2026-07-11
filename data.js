const EXPEDITION_DATA = {
    bali_oct2: {
        id: "bali_oct2",
        title: "Bali Family Retreat (Oct 2-7)",
        bg: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1920&q=80",
        dashboard: {
            origin: "Jaipur, India",
            dest: "Bali (DPS)",
            baseCity: "Nusa Dua",
            dates: "Oct 2 – Oct 7, 2026",
            cohort: "12–16 Guests",
            travelTime: "12-14 Hrs",
            transport: "Private Coach",
            meals: "Strict Jain/Veg"
        },
        budget: {
            premium: { baseCost: 100500, flightPerPax: 48000 },
            budget: { baseCost: 65000, flightPerPax: 28000 }
        },
        aviation: [
            {
                title: "Singapore Airlines (SQ)",
                desc: "Premium comfort via DEL to DPS.",
                features: ["Transit: Changi Airport (SIN)", "Baggage: 30kg Checked", "Dietary: AVML & VJML", "Pitch: 32-inch comfort"]
            },
            {
                title: "Ground Transportation",
                desc: "Private 25-seater Executive Coach.",
                features: ["Vehicle: Isuzu Elf Coach", "Storage: Dedicated cooler", "Access: Direct temple drop-offs"]
            }
        ],
        budgetAviation: [
            {
                title: "AirAsia / IndiGo (Connecting)",
                desc: "Cost-effective routing via KUL or BKK.",
                features: ["Transit: Kuala Lumpur / Bangkok", "Baggage: 20kg Pre-purchased", "Dietary: Pre-booked Veg Meals", "Pitch: Standard 28-inch"]
            },
            {
                title: "Ground Transportation",
                desc: "Standard 15-Seater Minivans.",
                features: ["Vehicle: 2x Toyota Hiace", "Storage: Standard trunk", "Access: Standard drop-offs"]
            }
        ],
        accommodations: [
            {
                title: "Grand Hyatt Bali",
                desc: "Pristine white sands in Nusa Dua.",
                fullDesc: "Features cascading waterfalls, 5 pools, and completely flat pathways.",
                price: "₹18,500 / night",
                image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
                link: "https://www.hyatt.com/"
            },
            {
                title: "The Ritz-Carlton",
                desc: "Cliff-top luxury in Nusa Dua.",
                fullDesc: "Private pool villas, glass elevators, pristine beach.",
                price: "₹38,000 / night",
                image: "https://images.unsplash.com/photo-1582719478250-c89404bb8a0e?auto=format&fit=crop&w=1200&q=80",
                link: "https://www.ritzcarlton.com/"
            }
        ],
        budgetAccommodations: [
            {
                title: "Hilton Garden Inn Bali",
                desc: "Affordable family comfort in Nusa Dua.",
                fullDesc: "Excellent family-friendly hotel with a great kids pool, perfectly balancing cost and security.",
                price: "₹5,500 / night",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
                link: "https://www.hilton.com/"
            },
            {
                title: "Bali Dynasty Resort (Kuta)",
                desc: "Highly-rated budget family resort.",
                fullDesc: "Features dedicated family bunk-bed rooms and an impressive mini water park on site.",
                price: "₹6,800 / night",
                image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
                link: "https://bdr.pphotels.com/"
            }
        ],
        culinary: [
            {
                title: "Queen's Tandoor",
                desc: "Premier Indian dining with a separate vegetarian kitchen.",
                fullDesc: "Strict Jain food preparation available.",
                image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Sayuri Healing Café",
                desc: "Famous plant-based café in Ubud.",
                fullDesc: "Excellent for modern high-quality vegan dining.",
                image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80"
            }
        ],
        itinerary: [
            {
                dayNum: 1, date: "2nd October", flight: "09:50 AM Arrival (SQ/AirAsia)", checkIn: "Resort Selection", lunch: "Villa Courtyard (Light Jain Lunch)", sightseeing: "Resort Beach Walk", activity: "Relaxation and Ocean Acclimatization", dinner: "Queen's Tandoor", desc: "VIP Concierge assists through dedicated lanes. Scenic drive to the resort.", image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Baby_crab_at_Nusa_Dua.JPG"
            },
            {
                dayNum: 2, date: "3rd October", flight: "-", checkIn: "-", lunch: "Zula Vegetarian Paradise", sightseeing: "Puja Mandala & Uluwatu Temple", activity: "Glass-bottom catamaran & Sunset Kecak Fire Dance", dinner: "Resort Special Veg Banquet", desc: "Private glass-bottom catamaran tour at Sanur Beach Reefs. Dramatic sea cliffs of Uluwatu.", image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Uluwatu%40bali.jpg"
            },
            {
                dayNum: 3, date: "4th October", flight: "-", checkIn: "-", lunch: "Sayuri Healing Café (Ubud)", sightseeing: "Tegalalang Rice Terraces & Ubud Palace", activity: "Sustainable agricultural estate tour", dinner: "Indian Thali in Ubud", desc: "Early departure to Tegalalang to beat the heat. Visit historic Ubud Royal Palace.", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Tegallalang_Rice_Terraces_Bali_1.jpg"
            },
            {
                dayNum: 4, date: "5th October", flight: "-", checkIn: "-", lunch: "Gazebo Wood-fired Veg Pizza", sightseeing: "Waterbom Bali", activity: "Lazy river & cabana relaxation", dinner: "Tanaman Plant-Based (Seminyak)", desc: "Base at a reserved double-sized gazebo at Waterbom Bali. Lazy river for seniors/toddlers.", image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Cabanas_At_Waterbom_Amusement_Park%2C_Kuta_Bali.JPG"
            },
            {
                dayNum: 5, date: "6th October", flight: "-", checkIn: "-", lunch: "Ganesha Ek Sanskriti", sightseeing: "Taman Ayun Temple", activity: "Historic Temple Walks", dinner: "Tanah Lot Private Lawn Farewell Dinner", desc: "Visit Taman Ayun Temple in Mengwi. Iconic Tanah Lot Sea Temple sunset.", image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Tanah-Lot_Bali_Indonesia_Pura-Tanah-Lot-01.jpg"
            },
            {
                dayNum: 6, date: "7th October", flight: "08:00 PM Departure", checkIn: "Check-out at 12:00 PM", lunch: "Resort Lounge", sightseeing: "Krisna Oleh Oleh Center", activity: "Premium Souvenir Shopping", dinner: "Airport Lounge (Jain Options)", desc: "Relaxed morning. Souvenir shopping before heading to DPS for departure back to India.", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1920&q=80"
            }
        ]
    },
    bali_oct15: {
        id: "bali_oct15",
        title: "Bali Family Retreat (Oct 15-20)",
        bg: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1920&q=80",
        dashboard: { origin: "Jaipur, India", dest: "Bali (DPS)", baseCity: "Nusa Dua", dates: "Oct 15 – Oct 20, 2026", cohort: "12–16 Guests", travelTime: "12-14 Hrs", transport: "Private Coach", meals: "Strict Jain/Veg" },
        budget: { premium: { baseCost: 105000, flightPerPax: 49000 }, budget: { baseCost: 68000, flightPerPax: 29000 } },
        aviation: [
            { title: "Singapore Airlines (SQ)", desc: "Premium comfort via DEL to DPS.", features: ["Transit: Changi Airport (SIN)", "Baggage: 30kg Checked", "Dietary: AVML & VJML", "Pitch: 32-inch comfort"] },
            { title: "Ground Transportation", desc: "Private 25-seater Executive Coach.", features: ["Vehicle: Isuzu Elf Coach", "Storage: Dedicated cooler", "Access: Direct temple drop-offs"] }
        ],
        budgetAviation: [
            { title: "AirAsia / IndiGo (Connecting)", desc: "Cost-effective routing via KUL or BKK.", features: ["Transit: Kuala Lumpur / Bangkok", "Baggage: 20kg Pre-purchased", "Dietary: Pre-booked Veg Meals", "Pitch: Standard 28-inch"] },
            { title: "Ground Transportation", desc: "Standard 15-Seater Minivans.", features: ["Vehicle: 2x Toyota Hiace", "Storage: Standard trunk", "Access: Standard drop-offs"] }
        ],
        accommodations: [
            { title: "Grand Hyatt Bali", desc: "Pristine white sands in Nusa Dua.", fullDesc: "Features cascading waterfalls, 5 pools.", price: "₹18,500 / night", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80", link: "https://www.hyatt.com/" },
            { title: "The Ritz-Carlton", desc: "Cliff-top luxury in Nusa Dua.", fullDesc: "Private pool villas, glass elevators, pristine beach.", price: "₹38,000 / night", image: "https://images.unsplash.com/photo-1582719478250-c89404bb8a0e?auto=format&fit=crop&w=1200&q=80", link: "https://www.ritzcarlton.com/" }
        ],
        budgetAccommodations: [
            { title: "Hilton Garden Inn Bali", desc: "Affordable family comfort in Nusa Dua.", fullDesc: "Excellent family-friendly hotel with a great kids pool.", price: "₹5,500 / night", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80", link: "https://www.hilton.com/" },
            { title: "Bali Dynasty Resort (Kuta)", desc: "Highly-rated budget family resort.", fullDesc: "Features dedicated family bunk-bed rooms and a mini water park.", price: "₹6,800 / night", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80", link: "https://bdr.pphotels.com/" }
        ],
        culinary: [
            { title: "Queen's Tandoor", desc: "Premier Indian dining with a separate vegetarian kitchen.", fullDesc: "Strict Jain food preparation available.", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80" },
            { title: "Sayuri Healing Café", desc: "Famous plant-based café in Ubud.", fullDesc: "Excellent for modern high-quality vegan dining.", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80" }
        ],
        itinerary: [
            { dayNum: 1, date: "15th October", flight: "09:50 AM Arrival", checkIn: "Resort Selection", lunch: "Villa Courtyard (Light Jain Lunch)", sightseeing: "Resort Beach Walk", activity: "Relaxation and Ocean Acclimatization", dinner: "Queen's Tandoor", desc: "VIP Concierge assists. Scenic drive to the resort.", image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Baby_crab_at_Nusa_Dua.JPG" },
            { dayNum: 2, date: "16th October", flight: "-", checkIn: "-", lunch: "Zula Vegetarian Paradise", sightseeing: "Puja Mandala & Uluwatu Temple", activity: "Glass-bottom catamaran & Sunset Kecak Fire Dance", dinner: "Resort Special Veg Banquet", desc: "Private glass-bottom catamaran tour at Sanur Beach Reefs.", image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Uluwatu%40bali.jpg" },
            { dayNum: 3, date: "17th October", flight: "-", checkIn: "-", lunch: "Sayuri Healing Café (Ubud)", sightseeing: "Tegalalang Rice Terraces & Ubud Palace", activity: "Sustainable agricultural estate tour", dinner: "Indian Thali in Ubud", desc: "Early departure to Tegalalang to beat the heat.", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Tegallalang_Rice_Terraces_Bali_1.jpg" },
            { dayNum: 4, date: "18th October", flight: "-", checkIn: "-", lunch: "Gazebo Wood-fired Veg Pizza", sightseeing: "Waterbom Bali", activity: "Lazy river & cabana relaxation", dinner: "Tanaman Plant-Based (Seminyak)", desc: "Base at a reserved gazebo at Waterbom Bali.", image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Cabanas_At_Waterbom_Amusement_Park%2C_Kuta_Bali.JPG" },
            { dayNum: 5, date: "19th October", flight: "-", checkIn: "-", lunch: "Ganesha Ek Sanskriti", sightseeing: "Taman Ayun Temple", activity: "Historic Temple Walks", dinner: "Tanah Lot Private Lawn Farewell Dinner", desc: "Visit Taman Ayun Temple in Mengwi.", image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Tanah-Lot_Bali_Indonesia_Pura-Tanah-Lot-01.jpg" },
            { dayNum: 6, date: "20th October", flight: "08:00 PM Departure", checkIn: "Check-out at 12:00 PM", lunch: "Resort Lounge", sightseeing: "Krisna Oleh Oleh Center", activity: "Premium Souvenir Shopping", dinner: "Airport Lounge (Jain Options)", desc: "Relaxed morning. Souvenir shopping before departure.", image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1920&q=80" }
        ]
    },
    lanka_oct2: {
        id: "lanka_oct2",
        title: "Sri Lanka Heritage Trail (Oct 2-7)",
        bg: "https://images.unsplash.com/photo-1588614959060-4d144f28b207?auto=format&fit=crop&w=1920&q=80",
        dashboard: { origin: "Jaipur, India", dest: "Colombo (CMB)", baseCity: "Bentota / Galle", dates: "Oct 2 – Oct 7, 2026", cohort: "12–16 Guests", travelTime: "8-10 Hrs", transport: "Private AC Coach", meals: "Strict Jain/Veg" },
        budget: { premium: { baseCost: 95000, flightPerPax: 38000 }, budget: { baseCost: 55000, flightPerPax: 16000 } },
        aviation: [
            { title: "Air India (AI) / SriLankan", desc: "Fastest routing from JAI to CMB via New Delhi.", features: ["Transit: Delhi (DEL) - 2h transit", "Baggage: 30kg Checked", "Dietary: Hindu Veg & Jain (VJML)", "Pitch: Standard Economy/Business"] },
            { title: "Ground Transportation", desc: "Private AC Coach via the Southern Expressway.", features: ["Vehicle: Premium 20-Seater Coach", "Storage: Ample luggage space", "Driver: Expert local navigator"] }
        ],
        budgetAviation: [
            { title: "IndiGo Airlines", desc: "Cost-effective routing via Chennai or Delhi.", features: ["Transit: Chennai / Delhi", "Baggage: 15kg included", "Dietary: Buy-on-board Veg", "Pitch: 28-inch standard"] },
            { title: "Ground Transportation", desc: "Standard 15-Seater Minivans.", features: ["Vehicle: Dual AC Minivans", "Storage: Standard trunk", "Access: Standard drop-offs"] }
        ],
        accommodations: [
            { title: "Taj Bentota Resort & Spa", desc: "Classic 5-star beachfront luxury.", fullDesc: "Highly experienced with Indian dietary needs. Massive pool.", price: "₹15,000 / night", image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=1200&q=80", link: "https://www.tajhotels.com/" },
            { title: "Jetwing Lighthouse, Galle", desc: "A breathtaking architectural masterpiece.", fullDesc: "Very family-friendly, offering a dedicated kids' pool.", price: "₹22,000 / night", image: "https://images.unsplash.com/photo-1548625361-ec7b4f51e06d?auto=format&fit=crop&w=1200&q=80", link: "https://www.jetwinghotels.com/" }
        ],
        budgetAccommodations: [
            { title: "Wunderbar Beach Hotel", desc: "Value beachfront comfort in Bentota.", fullDesc: "Offers family-friendly amenities and great sea views without the 5-star price tag.", price: "₹4,500 / night", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80", link: "https://www.booking.com/" },
            { title: "Hotel Weltevreden (Galle)", desc: "Historic budget charm inside the Fort.", fullDesc: "A charming colonial-style guesthouse located within the historic fort.", price: "₹3,800 / night", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80", link: "https://www.agoda.com/" }
        ],
        culinary: [
            { title: "Rajdhani Restaurant (Colombo)", desc: "Reliable authentic Indian vegetarian meals.", fullDesc: "Well-regarded for being extremely Jain-friendly.", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" },
            { title: "Navratna at Taj Samudra", desc: "Upscale formal Indian dining.", fullDesc: "Highly experienced 5-star chefs catering strictly to Jain requirements.", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80" }
        ],
        itinerary: [
            { dayNum: 1, date: "2nd October", flight: "11:30 AM Arrival (CMB)", checkIn: "Resort Selection", lunch: "Resort Welcome Lunch", sightseeing: "Bentota Beach", activity: "Check-in and coastal relaxation", dinner: "Special Jain Buffet", desc: "Drive via Southern Expressway to Bentota.", image: "https://images.unsplash.com/photo-1588614959060-4d144f28b207?auto=format&fit=crop&w=1920&q=80" },
            { dayNum: 2, date: "3rd October", flight: "-", checkIn: "-", lunch: "Local Veg Café", sightseeing: "Madu River Safari", activity: "Mangrove boat ride & Turtle Hatchery", dinner: "Resort Dining", desc: "Safe and calm boat ride through mangroves.", image: "https://images.unsplash.com/photo-1546708973-518342416b60?auto=format&fit=crop&w=1920&q=80" },
            { dayNum: 3, date: "4th October", flight: "-", checkIn: "Galle Location", lunch: "Indian Hut Galle", sightseeing: "Galle Dutch Fort", activity: "Historic walks along the ramparts", dinner: "Galle Fort Boutique Dining", desc: "Explore the UNESCO World Heritage site's pedestrian-friendly streets.", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1920&q=80" },
            { dayNum: 4, date: "5th October", flight: "-", checkIn: "-", lunch: "Jain Prep Lunch", sightseeing: "Unawatuna Beach", activity: "Glass bottom boat & relaxing waves", dinner: "Resort Special", desc: "A short drive to one of the most famous horseshoe-shaped beaches.", image: "https://images.unsplash.com/photo-1600201389868-b76bb062a4fa?auto=format&fit=crop&w=1920&q=80" },
            { dayNum: 5, date: "6th October", flight: "-", checkIn: "Colombo Location", lunch: "Sri Vihar (Colombo)", sightseeing: "Colombo City Tour", activity: "Gangaramaya Temple & Independence Square", dinner: "Navratna (Taj Samudra)", desc: "Drive back up to the capital. Explore the vibrant city.", image: "https://images.unsplash.com/photo-1590059346618-1850d0322d64?auto=format&fit=crop&w=1920&q=80" },
            { dayNum: 6, date: "7th October", flight: "02:00 PM Departure", checkIn: "Check-out at 11:00 AM", lunch: "Rajdhani Restaurant", sightseeing: "Galle Face Green", activity: "Morning stroll & final souvenirs", dinner: "Airport or In-Flight", desc: "Transfer to CMB Airport for the return journey via Delhi.", image: "https://images.unsplash.com/photo-1588614959060-4d144f28b207?auto=format&fit=crop&w=1920&q=80" }
        ]
    },
    lanka_oct15: {
        id: "lanka_oct15",
        title: "Sri Lanka Heritage Trail (Oct 15-20)",
        bg: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1920&q=80",
        dashboard: { origin: "Jaipur, India", dest: "Colombo (CMB)", baseCity: "Bentota / Galle", dates: "Oct 15 – Oct 20, 2026", cohort: "12–16 Guests", travelTime: "8-10 Hrs", transport: "Private AC Coach", meals: "Strict Jain/Veg" },
        budget: { premium: { baseCost: 98000, flightPerPax: 39000 }, budget: { baseCost: 57000, flightPerPax: 17000 } },
        aviation: [
            { title: "Air India (AI) / SriLankan", desc: "Fastest routing from JAI to CMB via New Delhi.", features: ["Transit: Delhi (DEL) - 2h transit", "Baggage: 30kg Checked", "Dietary: Hindu Veg & Jain (VJML)", "Pitch: Standard Economy/Business"] },
            { title: "Ground Transportation", desc: "Private AC Coach via the Southern Expressway.", features: ["Vehicle: Premium 20-Seater Coach", "Storage: Ample luggage space", "Driver: Expert local navigator"] }
        ],
        budgetAviation: [
            { title: "IndiGo Airlines", desc: "Cost-effective routing via Chennai or Delhi.", features: ["Transit: Chennai / Delhi", "Baggage: 15kg included", "Dietary: Buy-on-board Veg", "Pitch: 28-inch standard"] },
            { title: "Ground Transportation", desc: "Standard 15-Seater Minivans.", features: ["Vehicle: Dual AC Minivans", "Storage: Standard trunk", "Access: Standard drop-offs"] }
        ],
        accommodations: [
            { title: "Taj Bentota Resort & Spa", desc: "Classic 5-star beachfront luxury.", fullDesc: "Highly experienced with Indian dietary needs. Massive pool.", price: "₹15,000 / night", image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=1200&q=80", link: "https://www.tajhotels.com/" },
            { title: "Jetwing Lighthouse, Galle", desc: "A breathtaking architectural masterpiece.", fullDesc: "Very family-friendly, offering a dedicated kids' pool.", price: "₹22,000 / night", image: "https://images.unsplash.com/photo-1548625361-ec7b4f51e06d?auto=format&fit=crop&w=1200&q=80", link: "https://www.jetwinghotels.com/" }
        ],
        budgetAccommodations: [
            { title: "Wunderbar Beach Hotel", desc: "Value beachfront comfort in Bentota.", fullDesc: "Offers family-friendly amenities and great sea views without the 5-star price tag.", price: "₹4,500 / night", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80", link: "https://www.booking.com/" },
            { title: "Hotel Weltevreden (Galle)", desc: "Historic budget charm inside the Fort.", fullDesc: "A charming colonial-style guesthouse located within the historic fort.", price: "₹3,800 / night", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80", link: "https://www.agoda.com/" }
        ],
        culinary: [
            { title: "Rajdhani Restaurant (Colombo)", desc: "Reliable authentic Indian vegetarian meals.", fullDesc: "Well-regarded for being extremely Jain-friendly.", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" },
            { title: "Navratna at Taj Samudra", desc: "Upscale formal Indian dining.", fullDesc: "Highly experienced 5-star chefs catering strictly to Jain requirements.", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80" }
        ],
        itinerary: [
            { dayNum: 1, date: "15th October", flight: "11:30 AM Arrival (CMB)", checkIn: "Resort Selection", lunch: "Resort Welcome Lunch", sightseeing: "Bentota Beach", activity: "Check-in and coastal relaxation", dinner: "Special Jain Buffet", desc: "Drive via Southern Expressway to Bentota.", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1920&q=80" },
            { dayNum: 2, date: "16th October", flight: "-", checkIn: "-", lunch: "Local Veg Café", sightseeing: "Madu River Safari", activity: "Mangrove boat ride & Turtle Hatchery", dinner: "Resort Dining", desc: "Safe and calm boat ride through mangroves.", image: "https://images.unsplash.com/photo-1546708973-518342416b60?auto=format&fit=crop&w=1920&q=80" },
            { dayNum: 3, date: "17th October", flight: "-", checkIn: "Galle Location", lunch: "Indian Hut Galle", sightseeing: "Galle Dutch Fort", activity: "Historic walks along the ramparts", dinner: "Galle Fort Boutique Dining", desc: "Explore the UNESCO World Heritage site's pedestrian-friendly streets.", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1920&q=80" },
            { dayNum: 4, date: "18th October", flight: "-", checkIn: "-", lunch: "Jain Prep Lunch", sightseeing: "Unawatuna Beach", activity: "Glass bottom boat & relaxing waves", dinner: "Resort Special", desc: "A short drive to one of the most famous horseshoe-shaped beaches.", image: "https://images.unsplash.com/photo-1600201389868-b76bb062a4fa?auto=format&fit=crop&w=1920&q=80" },
            { dayNum: 5, date: "19th October", flight: "-", checkIn: "Colombo Location", lunch: "Sri Vihar (Colombo)", sightseeing: "Colombo City Tour", activity: "Gangaramaya Temple & Independence Square", dinner: "Navratna (Taj Samudra)", desc: "Drive back up to the capital. Explore the vibrant city.", image: "https://images.unsplash.com/photo-1590059346618-1850d0322d64?auto=format&fit=crop&w=1920&q=80" },
            { dayNum: 6, date: "20th October", flight: "02:00 PM Departure", checkIn: "Check-out at 11:00 AM", lunch: "Rajdhani Restaurant", sightseeing: "Galle Face Green", activity: "Morning stroll & final souvenirs", dinner: "Airport or In-Flight", desc: "Transfer to CMB Airport for the return journey via Delhi.", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1920&q=80" }
        ]
    }
};
