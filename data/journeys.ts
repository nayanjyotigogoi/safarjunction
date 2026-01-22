/* ======================================================
   TYPES
====================================================== */

export type Difficulty = 'Easy' | 'Moderate' | 'Adventure'

export interface JourneyDay {
  day: number
  title: string
  description: string
  meals?: string[]
}

/* Hotel categories */
export type HotelCategory = 'Standard' | 'Deluxe' | 'Luxury' |'Super Deluxe'| 'Superior'

/* Pricing table row */
export interface PricingRow {
  pax: number
  standard?: {
    cpai?: number
    mpai?: number
  }
  deluxe?: {
    cpai?: number
    mapai?: number
  }
  luxury?: {
    cpai?: number
    mapai?: number
  }
}

export interface Journeys {
  /* ---------- Core ---------- */
  id: string
  title: string
  duration: string
  price: number
  popularity: number
  bestSeller?: boolean
  region: string
  difficulty: Difficulty
  travelers: number
  color: string
  image: string
  description: string
  highlights: string[]

  /* ---------- Detailed ---------- */
  fullDescription?: string
  route?: string[]
  itinerary?: JourneyDay[]

  hotels?: HotelCategory[]

  pricingTable?: PricingRow[]

  inclusions?: string[]
  exclusions?: string[]
}

/* ======================================================
   DATA — SINGLE SOURCE OF TRUTH
====================================================== */

export const journeys: Record<string, Journeys> = {
'1': {
  id: '1',
  title: 'Classic Meghalaya Escape',
  duration: '05N / 06D',
  price: 10050, // base teaser price (2 pax, Std CPAI)
  popularity: 1200,
  bestSeller: true,
  region: 'Guwahati · Shillong · Cherrapunjee',
  difficulty: 'Moderate',
  travelers: 1200,
  color: '#EC4899',
  image: '/images/meghalaya.jpg',
  description:
    'A classic journey through misty hills, waterfalls, and living root bridges of Meghalaya.',

  fullDescription:
    'Classic Meghalaya Escape is a perfectly balanced journey covering the highlights of Meghalaya — serene hill towns, dramatic landscapes, living root bridges, and local culture. Ideal for first-time visitors to the Northeast.',

  highlights: [
    'Shillong Hill Views',
    'Cherrapunjee Waterfalls',
    'Living Root Bridges',
    'Misty Valleys',
  ],

  /* ---------- ROUTE ---------- */
  route: [
    'Guwahati',
    'Shillong',
    'Cherrapunjee',
    'Guwahati',
  ],

  /* ---------- ITINERARY ---------- */
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Guwahati',
      description:
        'Arrive in Guwahati and enjoy a relaxed transfer to your hotel. Unwind after your journey.',
      meals: ['Dinner'],
    },
    {
      day: 2,
      title: 'Guwahati to Shillong',
      description:
        'Drive to Shillong, the Scotland of the East. En route enjoy waterfalls and hill views.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 3,
      title: 'Shillong Exploration',
      description:
        'Explore Shillong’s lakes, viewpoints, and colonial charm.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 4,
      title: 'Shillong to Cherrapunjee',
      description:
        'Travel to Cherrapunjee, famous for dramatic cliffs, waterfalls, and clouds.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 5,
      title: 'Cherrapunjee Leisure',
      description:
        'Visit living root bridges, limestone caves, and enjoy nature at leisure.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 6,
      title: 'Departure',
      description:
        'Return to Guwahati after breakfast for onward journey.',
      meals: ['Breakfast'],
    },
  ],

  /* ---------- HOTEL CATEGORIES ---------- */
  hotels: ['Standard', 'Deluxe', 'Luxury'],

  /* ---------- PRICING TABLE ---------- */
  pricingTable: [
    {
      pax: 2,
      standard: { cpai: 19550, mpai: 22550 },
      deluxe: { cpai: 20750, mapai: 23750 },
      luxury: { cpai: 25750, mapai: 28750 },
    },
    {
      pax: 4,
      standard: { cpai: 14300, mpai: 17300 },
      deluxe: { cpai: 15500, mapai: 18500 },
      luxury: { cpai: 20500, mapai: 23500 },
    },
    {
      pax: 6,
      standard: { cpai: 13050, mpai: 16050 },
      deluxe: { cpai: 14250, mapai: 17250 },
      luxury: { cpai: 19250, mapai: 22250 },
    },
    {
      pax: 8,
      standard: { cpai: 13175, mpai: 16175 },
      deluxe: { cpai: 14375, mapai: 17375 },
      luxury: { cpai: 19375, mapai: 22375 },
    },
    {
      pax: 10,
      standard: { cpai: 12050, mpai: 15050 },
      deluxe: { cpai: 13250, mapai: 16250 },
      luxury: { cpai: 18250, mapai: 21250 },
    },
    {
      pax: 12,
      standard: { cpai: 10750, mpai: 13750 },
      deluxe: { cpai: 12750, mapai: 15750 },
      luxury: { cpai: 17750, mapai: 20750 },
    },
    {
      pax: 20,
      standard: { cpai: 10050, mpai: 13050 },
      deluxe: { cpai: 11250, mapai: 14250 },
      luxury: { cpai: 16250, mapai: 19250 },
    },
  ],
},

'2': {
  id: '2',
  title: 'Meghalaya & Kaziranga Signature Luxury Journey',
  duration: '07N / 08D',
  price: 16100, // base teaser: 2 pax, Standard CPAI
  popularity: 890,
  bestSeller: true,
  region: 'Guwahati · Shillong · Cherrapunjee · Kaziranga',
  difficulty: 'Moderate',
  travelers: 890,
  color: '#F59E0B',
  image: '/images/kaziranga.jpg',
  description:
    'A refined journey blending misty hillscapes, waterfalls, living root bridges, and the wild landscapes of Kaziranga National Park.',

  fullDescription:
    'This thoughtfully curated luxury journey blends Meghalaya’s dramatic landscapes with the wilderness of Kaziranga National Park. Designed for travelers seeking nature, culture, wildlife, and refined comfort across Assam and Meghalaya.',
 
    highlights: [
    'Shillong Hill Views',
    'Cherrapunjee Waterfalls',
    'Living Root Bridges',
    'Misty Valleys',
  ],
  /* ---------- ROUTE ---------- */
  route: [
    'Guwahati',
    'Shillong',
    'Cherrapunjee',
    'Kaziranga National Park',
    'Guwahati',
  ],

  /* ---------- ITINERARY ---------- */
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Guwahati – Gateway to Northeast India',
      description:
        'Arrive in Guwahati and transfer to your hotel. Evening at leisure to unwind after arrival.',
      meals: ['Dinner'],
    },
    {
      day: 2,
      title: 'Guwahati to Shillong',
      description:
        'Scenic drive into the hills toward Shillong. Arrive and enjoy a relaxed evening in the colonial hill town.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 3,
      title: 'Shillong Exploration',
      description:
        'Explore Shillong’s viewpoints, lakes, and experience its blend of Khasi culture and colonial heritage.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 4,
      title: 'Shillong to Cherrapunjee',
      description:
        'Drive to Cherrapunjee, known for waterfalls, limestone cliffs, rolling clouds, and dramatic landscapes.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 5,
      title: 'Cherrapunjee Nature Experience',
      description:
        'Discover living root bridges, caves, misty valleys, and viewpoints overlooking the plains of Bangladesh.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 6,
      title: 'Cherrapunjee to Kaziranga National Park',
      description:
        'Travel back into Assam toward Kaziranga National Park. Evening at leisure amidst forest surroundings.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 7,
      title: 'Kaziranga – Wildlife & Wilderness',
      description:
        'A relaxed day amidst the wild landscapes of Kaziranga, known for grasslands, wetlands, and wildlife.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 8,
      title: 'Kaziranga to Guwahati – Departure',
      description:
        'Drive back to Guwahati after breakfast for onward journey.',
      meals: ['Breakfast'],
    },
  ],

  /* ---------- HOTEL CATEGORIES ---------- */
  hotels: ['Standard', 'Deluxe', 'Luxury'],

  /* ---------- PRICING TABLE ---------- */
  pricingTable: [
    {
      pax: 2,
      standard: { cpai: 28250, mpai: 32450 },
      deluxe: { cpai: 35250, mapai: 39450 },
      luxury: { cpai: 42250, mapai: 47500 },
    },
    {
      pax: 4,
      standard: { cpai: 21250, mpai: 25450 },
      deluxe: { cpai: 28250, mapai: 32450 },
      luxury: { cpai: 35250, mapai: 40500 },
    },
    {
      pax: 6,
      standard: { cpai: 19580, mpai: 23800 },
      deluxe: { cpai: 26580, mapai: 30783 },
      luxury: { cpai: 33500, mapai: 38850 },
    },
    {
      pax: 8,
      standard: { cpai: 19570, mpai: 23780 },
      deluxe: { cpai: 26750, mapai: 30950 },
      luxury: { cpai: 33750, mapai: 39000 },
    },
    {
      pax: 10,
      standard: { cpai: 18250, mpai: 22450 },
      deluxe: { cpai: 25250, mapai: 29450 },
      luxury: { cpai: 32250, mapai: 37500 },
    },
    {
      pax: 12,
      standard: { cpai: 17600, mpai: 21800 },
      deluxe: { cpai: 24600, mapai: 28800 },
      luxury: { cpai: 31600, mapai: 36900 },
    },
    {
      pax: 20,
      standard: { cpai: 16100, mpai: 20300 },
      deluxe: { cpai: 23100, mapai: 27300 },
      luxury: { cpai: 30100, mapai: 35400 },
    },
  ],
},

'3': {
  id: '3',
  title: 'Assam Wildlife & Meghalaya Hill Retreat',
  duration: '05N / 06D',
  price: 11250, // base teaser: 2 pax, Standard CPAI
  popularity: 756,
  region: 'Guwahati · Kaziranga National Park · Shillong',
  difficulty: 'Moderate',
  travelers: 756,
  color: '#10B981',
  image: '/images/kaziranga1.jpg',
  description:
    'A beautifully balanced journey combining Assam’s iconic wildlife landscapes with the cool, cloud-kissed hills of Meghalaya.',

  fullDescription:
    'Assam Wildlife & Meghalaya Hill Retreat is a thoughtfully designed journey for travelers seeking nature, serenity, and comfort within a compact timeframe. This experience blends the raw wilderness of Kaziranga with the tranquil elegance of Shillong, offering a refined introduction to Northeast India’s most celebrated destinations.',

  /* ---------- HIGHLIGHTS ---------- */
  highlights: [
    'Kaziranga National Park Wilderness',
    'One-Horned Rhinoceros Habitat',
    'Scenic Drives Through Assam & Meghalaya',
    'Shillong Hill Views & Lakes',
    'Balanced Wildlife and Hill Experience',
    'Relaxed Pace with Premium Comfort',
  ],

  /* ---------- ROUTE ---------- */
  route: [
    'Guwahati',
    'Kaziranga National Park',
    'Shillong',
    'Guwahati',
  ],

  /* ---------- ITINERARY ---------- */
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Guwahati – Welcome to Assam',
      description:
        'Arrive in Guwahati and transfer to your hotel. The rest of the day is relaxed, allowing you to ease into the rhythm of the Northeast.',
      meals: ['Dinner'],
    },
    {
      day: 2,
      title: 'Guwahati to Kaziranga National Park',
      description:
        'Drive through scenic countryside to Kaziranga National Park, a UNESCO World Heritage Site known for its grasslands and wetlands.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 3,
      title: 'Kaziranga – Wilderness & Natural Grandeur',
      description:
        'A full day amidst Kaziranga’s unique ecosystem, home to one-horned rhinos, elephants, wild buffalo, and rich birdlife.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 4,
      title: 'Kaziranga to Shillong',
      description:
        'Depart for Shillong, transitioning from Assam’s plains into Meghalaya’s cool highlands with scenic views along the way.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 5,
      title: 'Shillong – Hills, Lakes & Leisure',
      description:
        'Explore Shillong’s lakes, viewpoints, and relaxed hill ambience, often called the Scotland of the East.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 6,
      title: 'Shillong to Guwahati – Departure',
      description:
        'Drive back to Guwahati after breakfast for your onward journey.',
      meals: ['Breakfast'],
    },
  ],

  /* ---------- HOTEL CATEGORIES ---------- */
  hotels: ['Standard', 'Deluxe', 'Luxury'],

  /* ---------- PRICING TABLE ---------- */
  pricingTable: [
    {
      pax: 2,
      standard: { cpai: 20750, mpai: 23750 },
      deluxe: { cpai: 25750, mapai: 28750 },
      luxury: { cpai: 30750, mapai: 34500 },
    },
    {
      pax: 4,
      standard: { cpai: 15500, mpai: 18500 },
      deluxe: { cpai: 20500, mapai: 23500 },
      luxury: { cpai: 25500, mapai: 29250 },
    },
    {
      pax: 6,
      standard: { cpai: 14250, mpai: 17250 },
      deluxe: { cpai: 19250, mapai: 22250 },
      luxury: { cpai: 24250, mapai: 28000 },
    },
    {
      pax: 8,
      standard: { cpai: 14375, mpai: 17375 },
      deluxe: { cpai: 19375, mapai: 22375 },
      luxury: { cpai: 24375, mapai: 28125 },
    },
    {
      pax: 10,
      standard: { cpai: 13850, mpai: 15225 },
      deluxe: { cpai: 17225, mapai: 19975 },
      luxury: { cpai: 21475, mapai: 22475 },
    },
    {
      pax: 12,
      standard: { cpai: 12750, mpai: 14250 },
      deluxe: { cpai: 15575, mapai: 17325 },
      luxury: { cpai: 18075, mapai: 19325 },
    },
    {
      pax: 20,
      standard: { cpai: 11250, mpai: 12925 },
      deluxe: { cpai: 15175, mapai: 16675 },
      luxury: { cpai: 16925, mapai: 17425 },
    },
  ],
},

'4': {
  id: '4',
  title: 'The Grand Northeast Explorer',
  duration: '12N / 13D',
  price: 21075, // base teaser: 2 pax, Standard CPAI
  popularity: 420,
  bestSeller: true,
  region:
    'Guwahati · Shillong · Cherrapunjee · Kaziranga · Dirang · Tawang · Bomdila',
  difficulty: 'Adventure',
  travelers: 420,
  color: '#8B5CF6',
  image: '/images/northeast.jpg',
  description:
    'The most comprehensive and immersive journey across Assam, Meghalaya, and Arunachal Pradesh — designed for travelers who want to experience the Northeast in its fullest form.',

  fullDescription:
    'The Grand Northeast Explorer is a signature expedition crafted for travelers seeking depth, diversity, and a slow, luxurious pace. From wildlife reserves and cloud-covered hills to Himalayan monasteries and high-altitude passes, this journey unfolds gracefully, allowing every destination to be truly experienced — never rushed.',

  /* ---------- HIGHLIGHTS ---------- */
  highlights: [
    'Complete Seven-Sister Style Exploration',
    'Kaziranga National Park Wilderness',
    'Shillong & Cherrapunjee Landscapes',
    'Eastern Himalayan Mountain Passes',
    'Tawang Monastery & High-Altitude Culture',
    'Slow-Paced Luxury Expedition',
  ],

  /* ---------- ROUTE ---------- */
  route: [
    'Guwahati (3N)',
    'Shillong (2N)',
    'Cherrapunjee (1N)',
    'Kaziranga (2N)',
    'Dirang (1N)',
    'Tawang (2N)',
    'Bomdila (1N)',
  ],

  /* ---------- ITINERARY ---------- */
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Guwahati – Gateway to the Northeast',
      description:
        'Arrive in Guwahati and transfer to your hotel. The day is kept relaxed to unwind after arrival.',
      meals: ['Dinner'],
    },
    {
      day: 2,
      title: 'Guwahati – Leisure & Acclimatisation',
      description:
        'A relaxed day in Guwahati for gentle exploration, rest, or personal time before heading into the hills.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 3,
      title: 'Guwahati – Final Day Before Hills',
      description:
        'Another comfortable day in Guwahati to ensure proper acclimatisation and a stress-free transition.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 4,
      title: 'Guwahati to Shillong',
      description:
        'Scenic drive to Shillong through rolling hills, pine forests, waterfalls, and misty valleys.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 5,
      title: 'Shillong – Hills, Culture & Calm',
      description:
        'Explore Shillong’s lakes, viewpoints, colonial heritage, and Khasi culture at a relaxed pace.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 6,
      title: 'Shillong to Cherrapunjee',
      description:
        'Drive to Cherrapunjee, famed for clouds, waterfalls, limestone cliffs, and dramatic landscapes.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 7,
      title: 'Cherrapunjee to Kaziranga National Park',
      description:
        'Journey back into Assam toward Kaziranga National Park, a UNESCO World Heritage Site.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 8,
      title: 'Kaziranga – Wildlife Landscape',
      description:
        'A full day amidst Kaziranga’s grasslands and wetlands, home to one-horned rhinos and rich wildlife.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 9,
      title: 'Kaziranga to Dirang',
      description:
        'Scenic ascent into Arunachal Pradesh, transitioning into Himalayan terrain and cooler climates.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 10,
      title: 'Dirang to Tawang',
      description:
        'Drive deeper into the Eastern Himalayas through high mountain passes and breathtaking panoramas.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 11,
      title: 'Tawang – High-Altitude Himalayan Experience',
      description:
        'A full day in Tawang to experience its monasteries, culture, and serene high-altitude landscapes.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 12,
      title: 'Tawang to Bomdila',
      description:
        'Descend toward Bomdila, enjoying panoramic Himalayan views and a peaceful final evening.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 13,
      title: 'Bomdila – Departure',
      description:
        'After breakfast, proceed for your onward journey, concluding the Grand Northeast Explorer.',
      meals: ['Breakfast'],
    },
  ],

  /* ---------- HOTEL CATEGORIES ---------- */
  hotels: ['Standard', 'Deluxe', 'Luxury'],

  /* ---------- PRICING TABLE ---------- */
  pricingTable: [
    {
      pax: 2,
      standard: { cpai: 51850, mpai: 54850 },
      deluxe: { cpai: 56650, mapai: 60550 },
      luxury: { cpai: 62950, mapai: 67850 },
    },
    {
      pax: 4,
      standard: { cpai: 36200, mpai: 39500 },
      deluxe: { cpai: 40400, mapai: 44150 },
      luxury: { cpai: 46700, mapai: 51500 },
    },
    {
      pax: 6,
      standard: { cpai: 31900, mpai: 34900 },
      deluxe: { cpai: 37850, mapai: 40850 },
      luxury: { cpai: 43850, mapai: 47750 },
    },
    {
      pax: 8,
      standard: { cpai: 29850, mpai: 33425 },
      deluxe: { cpai: 36125, mapai: 39425 },
      luxury: { cpai: 41525, mapai: 45125 },
    },
    {
      pax: 10,
      standard: { cpai: 26600, mpai: 31400 },
      deluxe: { cpai: 33200, mapai: 36200 },
      luxury: { cpai: 38600, mapai: 42500 },
    },
    {
      pax: 12,
      standard: { cpai: 24670, mpai: 30670 },
      deluxe: { cpai: 32450, mapai: 35450 },
      luxury: { cpai: 38450, mapai: 42650 },
    },
    {
      pax: 20,
      standard: { cpai: 21075, mpai: 27075 },
      deluxe: { cpai: 24675, mapai: 30675 },
      luxury: { cpai: 32675, mapai: 38675 },
    },
  ],
},


'5': {
  id: '5',
  title: 'Assam Heritage, Wildlife & River Island Sojourn',
  duration: '09N / 10D',
  price: 17250, // base teaser: 2 pax, Standard CPAI
  popularity: 680,
  region:
    'Guwahati · Manas National Park · Kaziranga National Park · Sibsagar · Majuli',
  difficulty: 'Moderate',
  travelers: 680,
  color: '#06B6D4',
  image: '/images/majuli.jpg',
  description:
    'A refined exploration of Assam’s iconic wildlife reserves, royal heritage towns, and the world’s largest inhabited river island.',

  fullDescription:
    'Assam Heritage, Wildlife & River Island Sojourn is a thoughtfully curated journey that blends wilderness, history, spirituality, and slow cultural immersion. Designed for discerning travelers, this experience moves beyond sightseeing into a deeper connection with Assam’s landscapes, traditions, and riverine life.',

  /* ---------- HIGHLIGHTS ---------- */
  highlights: [
    'Manas & Kaziranga National Parks',
    'One-Horned Rhinoceros Habitat',
    'Ahom Royal Heritage of Sibsagar',
    'Majuli – World’s Largest River Island',
    'Vaishnavite Monastic Traditions',
    'Slow Travel & Cultural Immersion',
  ],

  /* ---------- ROUTE ---------- */
  route: [
    'Guwahati (2N)',
    'Manas National Park (2N)',
    'Kaziranga National Park (2N)',
    'Sibsagar (1N)',
    'Majuli (2N)',
  ],

  /* ---------- ITINERARY ---------- */
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Guwahati – The Brahmaputra Gateway',
      description:
        'Arrive in Guwahati and transfer to your hotel. The rest of the day is reserved for relaxation and acclimatisation.',
      meals: ['Dinner'],
    },
    {
      day: 2,
      title: 'Guwahati – Leisure & Acclimatisation',
      description:
        'A full day at leisure for gentle exploration, rest, or personal time before the journey continues.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 3,
      title: 'Guwahati to Manas National Park',
      description:
        'Drive to Manas National Park, a UNESCO World Heritage Site known for pristine forests and riverine landscapes.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 4,
      title: 'Manas – Wilderness & Serenity',
      description:
        'A full day immersed in the untouched beauty of Manas, celebrated for biodiversity and peaceful forest settings.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 5,
      title: 'Manas to Kaziranga National Park',
      description:
        'Journey through Assam’s countryside toward Kaziranga National Park, set amidst grasslands and wetlands.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 6,
      title: 'Kaziranga – Iconic Wildlife Landscape',
      description:
        'Experience the natural grandeur of Kaziranga, home to rhinos, elephants, wild buffalo, and abundant birdlife.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 7,
      title: 'Kaziranga to Sibsagar – Ahom Royal Legacy',
      description:
        'Drive to Sibsagar, the former capital of the Ahom Kingdom, rich in history and architectural heritage.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 8,
      title: 'Sibsagar to Majuli – River Island Experience',
      description:
        'Proceed to Majuli, the world’s largest inhabited river island, known for satras and cultural traditions.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 9,
      title: 'Majuli – Culture, Spirituality & Slow Living',
      description:
        'A full day to experience Majuli’s Vaishnavite culture, rural lifestyle, and serene riverine environment.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 10,
      title: 'Majuli – Departure',
      description:
        'After breakfast, proceed for your onward journey, concluding a deeply immersive Assam exploration.',
      meals: ['Breakfast'],
    },
  ],

  /* ---------- HOTEL CATEGORIES ---------- */
  hotels: ['Standard', 'Deluxe', 'Luxury'],

  /* ---------- PRICING TABLE ---------- */
  pricingTable: [
    {
      pax: 2,
      standard: { cpai: 44150, mpai: 47150 },
      deluxe: { cpai: 49150, mapai: 51250 },
      luxury: { cpai: 52650, mapai: 53850 },
    },
    {
      pax: 4,
      standard: { cpai: 28250, mpai: 30450 },
      deluxe: { cpai: 32450, mapai: 34450 },
      luxury: { cpai: 36450, mapai: 38050 },
    },
    {
      pax: 6,
      standard: { cpai: 23000, mpai: 25200 },
      deluxe: { cpai: 27250, mapai: 29250 },
      luxury: { cpai: 31250, mapai: 32850 },
    },
    {
      pax: 8,
      standard: { cpai: 22250, mpai: 24825 },
      deluxe: { cpai: 26025, mapai: 28425 },
      luxury: { cpai: 30250, mapai: 32425 },
    },
    {
      pax: 10,
      standard: { cpai: 20200, mpai: 22200 },
      deluxe: { cpai: 24600, mapai: 26800 },
      luxury: { cpai: 28850, mapai: 30450 },
    },
    {
      pax: 12,
      standard: { cpai: 18450, mpai: 20650 },
      deluxe: { cpai: 24600, mapai: 25450 },
      luxury: { cpai: 27250, mapai: 28850 },
    },
    {
      pax: 20,
      standard: { cpai: 17250, mpai: 18975 },
      deluxe: { cpai: 20775, mapai: 22375 },
      luxury: { cpai: 23975, mapai: 26375 },
    },
  ],
},


'6': {
  id: '6',
  title: 'Assam Wilderness Trilogy: Manas • Nameri • Kaziranga',
  duration: '07N / 08D',
  price: 13725, // base teaser: 2 pax, Deluxe CPAI
  popularity: 510,
  region:
    'Guwahati · Manas National Park · Nameri National Park · Kaziranga National Park',
  difficulty: 'Moderate',
  travelers: 510,
  color: '#EF4444',
  image: '/images/wildlife.jpg',
  description:
    'A refined journey through three of Assam’s most pristine wildlife sanctuaries, curated for travelers who value untouched landscapes and immersive wilderness experiences.',

  fullDescription:
    'Assam Wilderness Trilogy is a thoughtfully paced journey through Manas, Nameri, and Kaziranga — three of Assam’s most celebrated natural reserves. Designed for slow, immersive travel, this experience balances comfort with deep wilderness, offering a seamless progression from riverine forests to expansive grasslands.',

  /* ---------- HIGHLIGHTS ---------- */
  highlights: [
    'Manas National Park Riverine Forests',
    'Nameri’s Pristine River & Woodland Ecosystems',
    'Kaziranga National Park Grasslands',
    'One-Horned Rhinoceros Habitat',
    'Quiet, Crowd-Free Wildlife Zones',
    'Slow-Paced Nature & Biodiversity Experience',
  ],

  /* ---------- ROUTE ---------- */
  route: [
    'Guwahati (1N)',
    'Manas National Park (2N)',
    'Nameri National Park (2N)',
    'Kaziranga National Park (2N)',
  ],

  /* ---------- ITINERARY ---------- */
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Guwahati – Gateway to Assam',
      description:
        'Arrive in Guwahati and transfer to your hotel. The evening is kept relaxed before entering Assam’s wilderness regions.',
      meals: ['Dinner'],
    },
    {
      day: 2,
      title: 'Guwahati to Manas National Park',
      description:
        'Drive to Manas National Park, a UNESCO World Heritage Site known for riverine forests and Himalayan foothill landscapes.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 3,
      title: 'Manas – Untamed Wilderness',
      description:
        'A full day immersed in Manas’ serene and biodiverse forest environment, ideal for slow exploration and relaxation.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 4,
      title: 'Manas to Nameri National Park',
      description:
        'Journey to Nameri National Park along the Jia Bhoroli River, admired for its dense forests and tranquil setting.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 5,
      title: 'Nameri – Forests, Rivers & Stillness',
      description:
        'Spend the day surrounded by Nameri’s quiet wilderness, encouraging reflection and a deep connection with nature.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 6,
      title: 'Nameri to Kaziranga National Park',
      description:
        'Drive toward Kaziranga National Park, Assam’s most iconic wildlife reserve with sweeping grasslands and wetlands.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 7,
      title: 'Kaziranga – Iconic Wildlife Landscape',
      description:
        'A full day in Kaziranga, home to one-horned rhinos, elephants, wild buffalo, and rich birdlife.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 8,
      title: 'Kaziranga – Departure',
      description:
        'After breakfast, proceed for your onward journey, concluding the Assam Wilderness Trilogy.',
      meals: ['Breakfast'],
    },
  ],

  /* ---------- HOTEL CATEGORIES ---------- */
  hotels: ['Deluxe', 'Super Deluxe', 'Superior'],

  /* ---------- PRICING TABLE ---------- */
  pricingTable: [
    {
      pax: 2,
      deluxe: { cpai: 31225, pai: 33325 },
      superDeluxe: { cpai: 34375, mapai: 36475 },
      superior: { cpai: 38750, mapai: 40250 },
    },
    {
      pax: 4,
      deluxe: { cpai: 21575, mpai: 23325 },
      superDeluxe: { cpai: 24375, mapai: 26475 },
      superior: { cpai: 28650, mapai: 32850 },
    },
    {
      pax: 6,
      deluxe: { cpai: 19245, mpai: 21050 },
      superDeluxe: { cpai: 22450, mapai: 24505 },
      superior: { cpai: 26583, mapai: 30783 },
    },
    {
      pax: 8,
      deluxe: { cpai: 18925, mpai: 20675 },
      superDeluxe: { cpai: 22075, mapai: 23950 },
      superior: { cpai: 26750, mapai: 30950 },
    },
    {
      pax: 10,
      deluxe: { cpai: 17125, mpai: 18875 },
      superDeluxe: { cpai: 20275, mapai: 22450 },
      superior: { cpai: 25250, mapai: 29450 },
    },
    {
      pax: 12,
      deluxe: { cpai: 15925, mpai: 17675 },
      superDeluxe: { cpai: 18725, mapai: 21783 },
      superior: { cpai: 24583, mapai: 28783 },
    },
    {
      pax: 20,
      deluxe: { cpai: 13725, mpai: 15475 },
      superDeluxe: { cpai: 16583, mapai: 20583 },
      superior: { cpai: 23283, mapai: 27583 },
    },
  ],
},


'7': {
  id: '7',
  title: 'Arunachal Himalayan Highlands – Tawang Signature Journey',
  duration: '06N / 07D',
  price: 12075, // base teaser: 2 pax, Standard CPAI
  popularity: 340,
  region:
    'Bhalukpung · Bomdila · Tawang · Dirang',
  difficulty: 'Adventure',
  travelers: 340,
  color: '#F97316',
  image: '/images/arunachal1.jpg',
  description:
    'A majestic high-altitude expedition through Arunachal Pradesh’s most revered Himalayan corridors, blending spiritual calm with dramatic mountain landscapes.',

  fullDescription:
    'The Arunachal Himalayan Highlands journey is a deeply immersive exploration of the Eastern Himalayas. From forested foothills to snow-kissed passes and sacred monasteries, this signature Tawang experience is crafted for travelers who value slow travel, spiritual depth, and refined comfort in remote mountain regions.',

  /* ---------- HIGHLIGHTS ---------- */
  highlights: [
    'High-Altitude Himalayan Mountain Drives',
    'Extended Stay in Tawang for Acclimatisation',
    'Eastern Himalayan Valleys & Passes',
    'Monastic Landscapes & Spiritual Calm',
    'Snow-Kissed Peaks & Alpine Forests',
    'Slow, Immersive Mountain Travel',
  ],

  /* ---------- ROUTE ---------- */
  route: [
    'Bhalukpung (1N)',
    'Bomdila (1N)',
    'Tawang (3N)',
    'Dirang (1N)',
  ],

  /* ---------- ITINERARY ---------- */
  itinerary: [
    {
      day: 1,
      title: 'Arrival at Bhalukpung – Gateway to Arunachal Pradesh',
      description:
        'Arrive at Bhalukpung, a serene foothill town marking the entry point to Arunachal Pradesh. Surrounded by forests and rivers, the day is kept relaxed.',
      meals: ['Dinner'],
    },
    {
      day: 2,
      title: 'Bhalukpung to Bomdila',
      description:
        'Ascend into the hills toward Bomdila, a picturesque mountain town known for monasteries, valleys, and sweeping Himalayan views.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 3,
      title: 'Bomdila to Tawang',
      description:
        'One of the most breathtaking drives in Northeast India, crossing dramatic high-altitude terrain and panoramic Himalayan landscapes.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 4,
      title: 'Tawang – Himalayan Serenity',
      description:
        'A full day to experience Tawang’s spiritual calm, alpine beauty, and high-altitude serenity at a relaxed pace.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 5,
      title: 'Tawang – Mountains & Monastic Calm',
      description:
        'Another full day in Tawang for deeper immersion into its culture, spirituality, and surrounding mountain landscapes.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 6,
      title: 'Tawang to Dirang',
      description:
        'Descend toward Dirang, a charming Himalayan valley town with gentler terrain and scenic beauty.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 7,
      title: 'Dirang – Departure',
      description:
        'After breakfast, proceed for your onward journey, concluding the Arunachal Himalayan Highlands experience.',
      meals: ['Breakfast'],
    },
  ],

  /* ---------- HOTEL CATEGORIES ---------- */
  hotels: ['Standard', 'Deluxe', 'Luxury'],

  /* ---------- PRICING TABLE ---------- */
  pricingTable: [
    {
      pax: 2,
      standard: { cpai: 27450, mpai: 29250 },
      deluxe: { cpai: 30750, mapai: 32250 },
      luxury: { cpai: 33450, mapai: 36150 },
    },
    {
      pax: 4,
      standard: { cpai: 18650, mpai: 20450 },
      deluxe: { cpai: 21750, mapai: 23450 },
      luxury: { cpai: 25250, mapai: 28250 },
    },
    {
      pax: 6,
      standard: { cpai: 16915, mpai: 18415 },
      deluxe: { cpai: 19615, mapai: 21100 },
      luxury: { cpai: 23500, mapai: 27100 },
    },
    {
      pax: 8,
      standard: { cpai: 16625, mpai: 18125 },
      deluxe: { cpai: 19325, mapai: 21125 },
      luxury: { cpai: 23062, mapai: 26662 },
    },
    {
      pax: 10,
      standard: { cpai: 15050, mpai: 16550 },
      deluxe: { cpai: 17750, mapai: 19350 },
      luxury: { cpai: 21750, mapai: 25350 },
    },
    {
      pax: 12,
      standard: { cpai: 14200, mpai: 15750 },
      deluxe: { cpai: 16150, mapai: 18766 },
      luxury: { cpai: 21166, mapai: 24766 },
    },
    {
      pax: 20,
      standard: { cpai: 12075, mpai: 13575 },
      deluxe: { cpai: 14200, mapai: 17250 },
      luxury: { cpai: 20100, mapai: 23700 },
    },
  ],
},


'8': {
  id: '8',
  title: 'Kaziranga to Tawang – The Ultimate Assam & Himalayan Passage',
  duration: '08N / 09D',
  price: 17250, // base teaser: 2 pax, Standard CPAI
  popularity: 260,
  region:
    'Guwahati · Kaziranga · Dirang · Tawang · Bomdila',
  difficulty: 'Adventure',
  travelers: 260,
  color: '#8B5CF6',
  image: '/images/tawang-kaziranga.jpg',
  description:
    'A spectacular journey blending Assam’s iconic wildlife landscapes with the dramatic high-altitude beauty of Arunachal Pradesh.',

  fullDescription:
    'This journey seamlessly connects Assam’s grasslands and wetlands with the soaring Himalayan passes of Arunachal Pradesh. From Kaziranga’s iconic wildlife to Tawang’s sacred mountain landscapes, this expedition is designed for travelers who seek contrast, completeness, and immersive high-altitude experiences.',

  /* ---------- HIGHLIGHTS ---------- */
  highlights: [
    'Kaziranga National Park Wildlife Landscapes',
    'Transition from Assam Plains to Himalayan Highlands',
    'Extended Stay in Tawang for Acclimatisation',
    'High-Altitude Mountain Passes & Valleys',
    'Eastern Himalayan Monastic Culture',
    'Wildlife to Himalayas in One Seamless Journey',
  ],

  /* ---------- ROUTE ---------- */
  route: [
    'Guwahati (1N)',
    'Kaziranga (2N)',
    'Dirang (1N)',
    'Tawang (3N)',
    'Bomdila (1N)',
  ],

  /* ---------- ITINERARY ---------- */
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Guwahati – The Brahmaputra Gateway',
      description:
        'Arrive in Guwahati and transfer to your hotel. The day is reserved for rest and relaxation to ensure a smooth start.',
      meals: ['Dinner'],
    },
    {
      day: 2,
      title: 'Guwahati to Kaziranga National Park',
      description:
        'Drive through Assam’s fertile plains to Kaziranga National Park. Check in to your wildlife lodge amidst grasslands and wetlands.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 3,
      title: 'Kaziranga – Iconic Wildlife Experience',
      description:
        'A full day immersed in Kaziranga’s wildlife landscape, renowned for one-horned rhinoceroses, elephants, and rich birdlife.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 4,
      title: 'Kaziranga to Dirang – Entering the Himalayas',
      description:
        'Begin the ascent into Arunachal Pradesh, driving through river valleys and winding mountain roads toward Dirang.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 5,
      title: 'Dirang to Tawang',
      description:
        'Continue deeper into the Eastern Himalayas toward Tawang, crossing alpine terrain and high mountain passes.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 6,
      title: 'Tawang – Himalayan Grandeur',
      description:
        'A full day to experience Tawang’s serene atmosphere, snow-clad peaks, and spiritual landscapes.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 7,
      title: 'Tawang – Culture, Calm & Altitude',
      description:
        'Another day in Tawang for deeper immersion into Himalayan culture, spirituality, and high-altitude beauty.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 8,
      title: 'Tawang to Bomdila',
      description:
        'Descend toward Bomdila, a scenic Himalayan town known for monasteries and panoramic mountain views.',
      meals: ['Breakfast', 'Dinner'],
    },
    {
      day: 9,
      title: 'Bomdila – Departure',
      description:
        'After breakfast, proceed for your onward journey, concluding an extraordinary Assam–Himalayan expedition.',
      meals: ['Breakfast'],
    },
  ],

  /* ---------- HOTEL CATEGORIES ---------- */
  hotels: ['Standard', 'Deluxe', 'Luxury'],

  /* ---------- PRICING TABLE ---------- */
  pricingTable: [
    {
      pax: 2,
      standard: { cpai: 44150, mpai: 47150 },
      deluxe: { cpai: 49150, mapai: 51250 },
      luxury: { cpai: 52650, mapai: 53850 },
    },
    {
      pax: 4,
      standard: { cpai: 28250, mpai: 30450 },
      deluxe: { cpai: 32450, mapai: 34450 },
      luxury: { cpai: 36450, mapai: 38050 },
    },
    {
      pax: 6,
      standard: { cpai: 23000, mpai: 25200 },
      deluxe: { cpai: 27250, mapai: 29250 },
      luxury: { cpai: 31250, mapai: 32850 },
    },
    {
      pax: 8,
      standard: { cpai: 22250, mpai: 24825 },
      deluxe: { cpai: 26025, mapai: 28425 },
      luxury: { cpai: 30250, mapai: 32425 },
    },
    {
      pax: 10,
      standard: { cpai: 20200, mpai: 22200 },
      deluxe: { cpai: 24600, mapai: 26800 },
      luxury: { cpai: 28850, mapai: 30450 },
    },
    {
      pax: 12,
      standard: { cpai: 18450, mpai: 20650 },
      deluxe: { cpai: 24600, mapai: 25450 },
      luxury: { cpai: 27250, mapai: 28850 },
    },
    {
      pax: 20,
      standard: { cpai: 17250, mpai: 18975 },
      deluxe: { cpai: 20775, mapai: 22375 },
      luxury: { cpai: 23975, mapai: 26375 },
    },
  ],
},

}
