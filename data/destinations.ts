/* ------------------ TYPES ------------------ */

export interface Destination {
  id: string
  name: string
  color: string
  keywords: string[]
  description: string
  fullDescription: string
  longDescription?: string
  highlights: string[]
  attractions?: { name: string; description: string }[]
  bestTime: string
  duration?: string
  image: string
}

/* ------------------ DATA ------------------ */

export const destinations: Record<string, Destination> = {
  assam: {
    id: 'assam',
    name: 'Assam',
    color: '#F59E0B',
    keywords: ['Wildlife', 'Tea Gardens', 'Heritage'],
    description:
      'Land of one-horned rhinos, verdant tea gardens, and spiritual journeys.',
    fullDescription:
      'Assam, the gateway to Northeast India, is a land of unparalleled natural beauty and rich cultural heritage.',
    longDescription:
      'The Brahmaputra river flows through the heart of Assam, sustaining its ecosystem and cultural life.',
    highlights: [
      'Kaziranga National Park safari',
      'Brahmaputra river cruise',
      'Tea garden visits',
      'Kamakhya Temple',
    ],
    attractions: [
      { name: 'Kaziranga National Park', description: 'UNESCO World Heritage Site' },
      { name: 'Brahmaputra River', description: 'Mighty river cruises' },
    ],
    bestTime: 'November to March',
    duration: '3–5 days',
    image: '/images/assam.jpg',

  },

  meghalaya: {
    id: 'meghalaya',
    name: 'Meghalaya',
    color: '#EC4899',
    keywords: ['Clouds', 'Waterfalls', 'Culture'],
    description: 'The abode of clouds and waterfalls.',
    fullDescription:
      'Meghalaya is known for living root bridges, misty valleys, and rich tribal culture.',
    longDescription:
      'Clouds roll through hills creating ever-changing landscapes.',
    highlights: ['Living Root Bridges', 'Dawki River', 'Cherrapunjee'],
    attractions: [
      { name: 'Living Root Bridges', description: 'Bio-engineered wonders' },
    ],
    bestTime: 'October to April',
    duration: '2–4 days',
    image: '/images/meghalaya.jpg',

  },

  arunachal: {
    id: 'arunachal',
    name: 'Arunachal Pradesh',
    color: '#8B5CF6',
    keywords: ['Mountains', 'Monasteries', 'Adventure'],
    description: 'Land of the Rising Sun.',
    fullDescription:
      'Remote Himalayan state with ancient monasteries and alpine landscapes.',
    highlights: ['Tawang Monastery', 'Sela Pass'],
    bestTime: 'April–June, Sept–Oct',
    duration: '4–6 days',
    image: '/images/arunachal.jpg',
  },

  nagaland: {
    id: 'nagaland',
    name: 'Nagaland',
    color: '#06B6D4',
    keywords: ['Tribes', 'Festivals', 'Culture'],
    description: 'Land of warrior tribes.',
    fullDescription:
      'Nagaland celebrates vibrant tribal culture and the famous Hornbill Festival.',
    highlights: ['Hornbill Festival', 'Tribal villages'],
    bestTime: 'Nov–Feb',
    duration: '3–5 days',
    image: '/images/nagaland.jpg',
  },

  manipur: {
    id: 'manipur',
    name: 'Manipur',
    color: '#10B981',
    keywords: ['Lakes', 'Dance', 'Culture'],
    description: 'The Jewel of India.',
    fullDescription:
      'Manipur blends classical dance, lakes, and spirituality.',
    highlights: ['Loktak Lake', 'Manipuri Dance'],
    bestTime: 'Oct–Mar',
    duration: '2–4 days',
    image: '/images/manipur.jpg',
  },

  mizoram: {
    id: 'mizoram',
    name: 'Mizoram',
    color: '#F97316',
    keywords: ['Hills', 'Villages', 'Nature'],
    description: 'Rolling hills and bamboo forests.',
    fullDescription:
      'Mizoram offers peaceful landscapes and warm hospitality.',
    highlights: ['Aizawl', 'Blue Mountains'],
    bestTime: 'Oct–Mar',
    duration: '3–4 days',
    image: '/images/mizoram.jpg',
  },

  tripura: {
    id: 'tripura',
    name: 'Tripura',
    color: '#EF4444',
    keywords: ['Palaces', 'Heritage', 'Culture'],
    description: 'Historic palaces and royal legacy.',
    fullDescription:
      'Tripura is known for palaces, temples, and art traditions.',
    highlights: ['Ujjayanta Palace', 'Neermahal'],
    bestTime: 'Nov–Feb',
    duration: '2–3 days',
    image: '/images/tripura.jpg',
  },
}

/* ------------------ HELPERS ------------------ */

export const destinationsList = Object.values(destinations)
export const destinationIds = Object.keys(destinations)
