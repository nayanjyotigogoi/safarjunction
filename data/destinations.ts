/* ------------------ TYPES ------------------ */

export interface NamedDescription {
  name: string
  description: string
}

export interface Destination {
  id: string
  name: string
  color: string

  keywords: string[]

  description: string
  fullDescription: string
  longDescription?: string

  highlights: string[]

  attractions?: NamedDescription[]

  geographyAndNature?: string[]

  wildlifeExperiences?: NamedDescription[]

  riverAndIslandCulture?: NamedDescription[]

  spiritualAndHeritageSites?: NamedDescription[]

  teaAndCraftExperiences?: string[]

  luxuryStayStyles?: string[]

  idealFor?: string[]

  whyItMatters?: string

  bestTime: string
  duration?: string
  image: string
}

/* ------------------ DATA ------------------ */

export const destinations: Record<string, Destination> = {
assam: {
  id: 'assam',
  name: 'Assam — The Soul of the Brahmaputra',
  color: '#F59E0B',

  keywords: [
    'Luxury Wildlife',
    'Tea Heritage',
    'River Life',
    'Spiritual Journeys',
    'Slow Travel',
    'Cultural Heart of Northeast',
  ],

  description:
    'The cultural, natural, and spiritual heart of Northeast India, where the Brahmaputra shapes life, landscapes, and legacy.',

  fullDescription:
    'Assam is not just a gateway to the Northeast—it is a complete destination in itself. Anchored by the mighty Brahmaputra River, Assam unfolds gently, offering depth, authenticity, and timeless experiences rooted in nature, spirituality, and heritage.',

  longDescription:
    'Defined by vast alluvial plains, rolling tea estates, dense grasslands, wetlands, and forested wildlife reserves, Assam is one of the most biologically rich regions in Asia. From royal Ahom history to sacred Shakti traditions, from river islands to UNESCO-listed wilderness, Assam delivers a refined form of luxury—grounded, immersive, and deeply meaningful.',

  geographyAndNature: [
    'Alluvial plains shaped by the Brahmaputra',
    'Expansive tea plantations and fertile floodplains',
    'Dense grasslands and wetlands',
    'Forested wildlife reserves',
    'River islands and dynamic riverine landscapes',
  ],

  wildlifeExperiences: [
    {
      name: 'Kaziranga National Park',
      description:
        'UNESCO World Heritage Site and one of the world’s most important wildlife habitats, renowned for its one-horned rhinoceroses, elephants, wild buffalo, swamp deer, and exceptional birdlife.',
    },
    {
      name: 'Manas National Park',
      description:
        'A pristine UNESCO Biosphere Reserve at the Himalayan foothills, offering untouched forests, riverine landscapes, and a quieter, more exclusive wildlife experience.',
    },
    {
      name: 'Nameri National Park',
      description:
        'A hidden sanctuary known for its calm river ecosystems, dense forests, and contemplative wilderness stays ideal for nature connoisseurs.',
    },
  ],

  riverAndIslandCulture: [
    {
      name: 'Majuli',
      description:
        'The world’s largest inhabited river island and the spiritual heart of Assam, known for Vaishnavite Satras, handcrafted traditions, and a deeply rooted slow-living philosophy.',
    },
  ],

  spiritualAndHeritageSites: [
    {
      name: 'Kamakhya Temple',
      description:
        'One of India’s most powerful Shakti Peethas, central to ancient tantric traditions and a cornerstone of Assam’s spiritual identity.',
    },
    {
      name: 'Sivasagar',
      description:
        'The former capital of the Ahom dynasty, featuring royal tanks, historic temples, and architectural remnants of a 600-year-old kingdom.',
    },
  ],

  teaAndCraftExperiences: [
    'Assam tea estates and plantation landscapes',
    'Colonial-era tea bungalow stays',
    'Local craftsmanship and handloom traditions',
    'Authentic Assamese cuisine and slow dining',
  ],

  luxuryStayStyles: [
    'Riverside retreats along the Brahmaputra',
    'Luxury wildlife lodges near national parks',
    'Boutique heritage-style accommodations',
    'Nature resorts integrated with surroundings',
  ],

  idealFor: [
    'Luxury wildlife travelers',
    'Cultural and heritage explorers',
    'Slow-travel enthusiasts',
    'Families seeking meaningful journeys',
    'International guests discovering Northeast India',
  ],

  whyItMatters:
    'Assam is the foundation of a luxury Northeast journey—offering access, balance, and depth through a rare blend of nature, culture, and spirituality.',

  highlights: [
    'Kaziranga National Park wildlife safaris',
    'Majestic Brahmaputra river experiences',
    'Tea estate landscapes and heritage stays',
    'Spiritual journeys to Kamakhya Temple',
    'Cultural exploration of Sivasagar and Majuli',
  ],

  bestTime: 'November to March',
  duration: '4–7 days',
  image: '/images/assam.jpg',
},


meghalaya: {
  id: 'meghalaya',
  name: 'Meghalaya — The Abode of Clouds',
  color: '#38BDF8',

  keywords: [
    'Cloudscapes',
    'Waterfalls & Caves',
    'Romantic Escapes',
    'Eco Luxury',
    'Slow Travel',
    'Highland Serenity',
  ],

  description:
    'A land suspended between earth and sky, where clouds drift through forests and waterfalls sculpt ancient cliffs.',

  fullDescription:
    'Meghalaya, meaning “The Abode of Clouds”, is among the most visually poetic destinations in South Asia. Defined by atmosphere rather than monuments, it offers an experience shaped by mist, altitude, rain, and emotion—delivered with quiet elegance and understated luxury.',

  longDescription:
    'Rising sharply from the plains of Assam, Meghalaya is a highland plateau of rolling cloud-covered hills, deep limestone gorges, dense subtropical forests, and countless waterfalls. One of the wettest regions on Earth, its landscapes are constantly shifting—sunlight, shadow, mist, and rain creating an ever-changing natural canvas.',

  geographyAndNature: [
    'Highland plateau rising from the Assam plains',
    'Rolling hills wrapped in clouds and mist',
    'Deep limestone gorges and cave systems',
    'Dense subtropical forests',
    'Some of the highest rainfall zones on Earth',
  ],

  wildlifeExperiences: [
    {
      name: 'Living Root Bridges',
      description:
        'Naturally grown from living tree roots over centuries, these sustainable, functional bridges embody the Khasi philosophy of harmony with nature and are among Meghalaya’s most profound natural wonders.',
    },
    {
      name: 'Waterfalls & Gorges',
      description:
        'Towering waterfalls cascading into deep valleys, especially dramatic during monsoon and post-monsoon months, best experienced slowly through observation, silence, and photography.',
    },
  ],

  riverAndIslandCulture: [
    {
      name: 'Highland Rivers & Valleys',
      description:
        'Crystal-clear rivers cutting through gorges and valleys, forming serene pools and dramatic viewpoints across the plateau.',
    },
  ],

  spiritualAndHeritageSites: [
    {
      name: 'Indigenous Khasi, Garo & Jaintia Cultures',
      description:
        'Known for matrilineal societies, strong community bonds, and deep respect for land and forests, expressed subtly through daily life, architecture, and rituals.',
    },
  ],

  teaAndCraftExperiences: [
    'Hill walks through mist-covered landscapes',
    'Nature-led photography and writing retreats',
    'Quiet village explorations',
    'Local music, architecture, and everyday cultural rhythms',
  ],

  luxuryStayStyles: [
    'Secluded nature lodges',
    'Hilltop retreats with panoramic views',
    'Boutique eco-luxury stays',
    'Minimalist accommodations integrated with nature',
  ],

  idealFor: [
    'Couples and honeymooners',
    'Nature and landscape lovers',
    'Photographers and writers',
    'Travelers seeking calm and introspection',
    'Guests who value experience over excess',
  ],

  whyItMatters:
    'Meghalaya offers something rare in modern travel—a sense of stillness. It doesn’t overwhelm; it envelops. It doesn’t impress loudly; it lingers quietly, providing the emotional and visual counterbalance in a luxury Northeast journey.',

  highlights: [
    'Living Root Bridges of Meghalaya',
    'Cloud-draped hills and misty valleys',
    'Dramatic waterfalls and limestone gorges',
    'Shillong’s refined hill-town charm',
    'Cherrapunjee and Mawsynram’s elemental landscapes',
  ],

  bestTime: 'October to April',
  duration: '4–6 days',
  image: '/images/meghalaya.jpg',
},


arunachal: {
  id: 'arunachal',
  name: 'Arunachal Pradesh — Land of the Dawn-Lit Mountains',
  color: '#8B5CF6',

  keywords: [
    'Himalayan Wilderness',
    'Spiritual Journeys',
    'High-Altitude Luxury',
    'Remote Landscapes',
    'Transformational Travel',
    'Eastern Himalayas',
  ],

  description:
    'India’s easternmost frontier, where the first rays of the sun illuminate vast Himalayan landscapes and profound silence.',

  fullDescription:
    'Arunachal Pradesh is a land of scale, solitude, and spiritual depth. Known as the Land of the Dawn-Lit Mountains, it is not a destination to be rushed—it is a journey undertaken slowly, where remoteness, authenticity, and raw natural beauty define the experience.',

  longDescription:
    'Defined by towering Eastern Himalayan ranges, deep river valleys, alpine meadows, and dense forests transitioning from subtropical to alpine, Arunachal Pradesh offers one of Asia’s most diverse landscapes within a single state. Snow-clad peaks, glacial lakes, and high mountain passes create a sense of grandeur that feels both humbling and transformative.',

  geographyAndNature: [
    'Towering Eastern Himalayan mountain ranges',
    'High-altitude passes and alpine plateaus',
    'Deep river valleys and glacial-fed streams',
    'Snow-covered peaks and highland lakes',
    'Forests ranging from subtropical to alpine ecosystems',
  ],

  wildlifeExperiences: [
    {
      name: 'Eastern Himalayan Wilderness',
      description:
        'Remote forests and mountain ecosystems offering rare biodiversity, dramatic landscapes, and a profound sense of isolation ideal for nature-focused travelers.',
    },
  ],

  spiritualAndHeritageSites: [
    {
      name: 'Tawang Monastery',
      description:
        'The largest monastery in India and the spiritual heart of Arunachal Pradesh, set amid vast open valleys and deeply influenced by Tibetan Mahayana Buddhist traditions.',
    },
    {
      name: 'Tribal Cultures of Arunachal',
      description:
        'Home to 26 major tribes and over 100 sub-tribes, each with distinct languages, customs, and spiritual practices rooted deeply in land and ancestry.',
    },
  ],

  riverAndIslandCulture: [
    {
      name: 'Himalayan River Valleys',
      description:
        'Scenic river valleys such as Dirang and Bomdila that soften the high-altitude terrain with pastoral beauty, hot springs, and fertile landscapes.',
    },
  ],

  teaAndCraftExperiences: [
    'Monastery visits and spiritual contemplation',
    'High-altitude landscape photography',
    'Cultural interactions with indigenous communities',
    'Slow journeys through mountain valleys and passes',
  ],

  luxuryStayStyles: [
    'Boutique mountain lodges with panoramic views',
    'Premium hotels designed for high-altitude comfort',
    'Remote retreats emphasizing safety and serenity',
    'Warm, personalized hospitality in isolated settings',
  ],

  idealFor: [
    'Experienced travelers seeking rare destinations',
    'Luxury explorers who value depth over convenience',
    'Spiritual seekers and cultural enthusiasts',
    'Landscape photographers and writers',
    'Guests seeking transformational journeys',
  ],

  whyItMatters:
    'True luxury today lies in access to places still untouched by mass tourism. Arunachal Pradesh offers vast open spaces, minimal crowds, cultural authenticity, and profound silence—making the journey demanding, deliberate, and deeply extraordinary.',

  highlights: [
    'Tawang Monastery and high-altitude Buddhist culture',
    'Crossing the dramatic Sela Pass',
    'Dirang’s river valleys and hot springs',
    'Bomdila’s monasteries and mountain viewpoints',
    'Dawn-lit Himalayan landscapes and glacial lakes',
  ],

  bestTime: 'April to June, September to October',
  duration: '5–8 days',
  image: '/images/arunachal.jpg',
},


nagaland: {
  id: 'nagaland',
  name: 'Nagaland — Tribes, Traditions & Highlands',
  color: '#06B6D4',

  keywords: [
    'Living Tribal Culture',
    'Highland Landscapes',
    'Cultural Luxury',
    'Festival Journeys',
    'Authentic Encounters',
    'Story-Driven Travel',
  ],

  description:
    'A land of fierce identity and living traditions, where people, culture, and highland landscapes define the experience.',

  fullDescription:
    'Nagaland is one of India’s most culturally intact and experiential destinations. Shaped not by monuments but by people—their customs, stories, music, and relationship with the land—it offers luxury travelers something increasingly rare: authenticity without dilution.',

  longDescription:
    'Mountainous and naturally isolated, Nagaland is defined by forested highland ranges, deep valleys, and remote tribal villages perched on mist-covered ridges. This isolation has allowed ancient traditions to survive in their original form, making every journey here deeply immersive and emotionally resonant.',

  geographyAndNature: [
    'Forested highland mountain ranges',
    'Deep valleys and mist-covered ridgelines',
    'Remote hilltop tribal villages',
    'Cool climates and dramatic skies',
  ],

  wildlifeExperiences: [
    {
      name: 'Dzukou Valley',
      description:
        'A pristine high-altitude valley known for rolling green meadows, seasonal wildflowers, and profound silence—often regarded as one of Northeast India’s most beautiful landscapes.',
    },
  ],

  riverAndIslandCulture: [
    {
      name: 'Highland Valleys & Water Systems',
      description:
        'Seasonal streams and valleys that sustain village life, agriculture, and a deep connection between communities and their land.',
    },
  ],

  spiritualAndHeritageSites: [
    {
      name: 'Kohima',
      description:
        'Nagaland’s political and cultural capital, known for its scenic hilltop setting, calm rhythm, and role as the gateway to understanding Naga history and identity.',
    },
    {
      name: 'Kohima War Cemetery',
      description:
        'A deeply moving World War II memorial commemorating the Battle of Kohima, symbolizing sacrifice and resilience while overlooking sweeping highland valleys.',
    },
  ],

  teaAndCraftExperiences: [
    'Traditional tribal crafts and textiles',
    'Village architecture and indigenous design',
    'Storytelling and oral history traditions',
    'Local music, food, and community gatherings',
  ],

  luxuryStayStyles: [
    'Boutique hotels and heritage-style stays',
    'Scenic hilltop accommodations',
    'Culturally sensitive lodgings with local engagement',
    'Warm, deeply personal hospitality experiences',
  ],

  idealFor: [
    'Cultural connoisseurs',
    'International travelers seeking unexplored India',
    'Festival-focused luxury journeys',
    'Writers, anthropologists, and photographers',
    'Guests who value story, identity, and depth',
  ],

  whyItMatters:
    'In an era of curated and performative travel, Nagaland offers something real—living tribal heritage, powerful landscapes, and cultural encounters that are genuine, not staged. It is not easy, and that is precisely why it is unforgettable.',

  highlights: [
    'Living traditions of the Naga tribes',
    'Hornbill Festival — the Festival of Festivals',
    'Dzukou Valley’s highland meadows',
    'Kohima War Cemetery and World War II history',
    'Nagaland’s vibrant contemporary music culture',
  ],

  bestTime: 'October to March',
  duration: '4–6 days',
  image: '/images/nagaland.jpg',
},


manipur: {
  id: 'manipur',
  name: 'Manipur — The Jewel of India',
  color: '#10B981',

  keywords: [
    'Cultural Elegance',
    'Floating Landscapes',
    'Classical Arts',
    'Slow Luxury',
    'Lyrical Nature',
    'Refined Heritage',
  ],

  description:
    'A land of quiet elegance and refined culture, where still waters, graceful traditions, and deep identity create rare harmony.',

  fullDescription:
    'Often called “The Jewel of India”, Manipur is a destination where nature, art, and history exist in delicate balance. It reveals itself gently—through serene landscapes, living traditions, and an understated sense of luxury rooted in culture and calm.',

  longDescription:
    'Defined by a fertile central valley encircled by forested hills, Manipur forms a natural amphitheatre of beauty and seclusion. Wetlands, freshwater ecosystems, and one of the world’s most unique floating landscapes create an environment ideal for slow, immersive travel and quiet observation.',

  geographyAndNature: [
    'Lush green Imphal Valley',
    'Encircling forested hill ranges',
    'Wetlands and freshwater ecosystems',
    'Floating landscapes formed by natural biomass',
  ],

  wildlifeExperiences: [
    {
      name: 'Loktak Lake',
      description:
        'The heart of Manipur, known for its floating islands called phumdis and an ever-changing, meditative water landscape shaped by the seasons.',
    },
    {
      name: 'Keibul Lamjao National Park',
      description:
        'The world’s only floating national park, home to the endangered Sangai deer and a rare ecosystem sustained entirely on floating biomass.',
    },
  ],

  riverAndIslandCulture: [
    {
      name: 'Floating Communities of Loktak',
      description:
        'Life shaped by water and floating landforms, offering insight into a unique coexistence between humans and a dynamic natural environment.',
    },
  ],

  spiritualAndHeritageSites: [
    {
      name: 'Kangla Fort',
      description:
        'The ancient seat of Manipur’s kings and the political and spiritual heart of historic Manipur, holding deep emotional and cultural significance.',
    },
    {
      name: 'Vaishnavite Traditions of Manipur',
      description:
        'Spiritual practices deeply woven into daily life, closely connected to Manipuri classical dance, music, and devotional storytelling.',
    },
  ],

  teaAndCraftExperiences: [
    'Manipuri classical dance and music traditions',
    'Handloom, textiles, and indigenous craftsmanship',
    'Quiet cultural walks through Imphal',
    'Observation-led travel focused on art and ritual',
  ],

  luxuryStayStyles: [
    'Boutique and premium city hotels',
    'Peaceful lakeside accommodations near Loktak',
    'Valley stays emphasizing calm and privacy',
    'Warm, deeply personal hospitality experiences',
  ],

  idealFor: [
    'Cultural connoisseurs',
    'Slow-travel luxury seekers',
    'International guests exploring lesser-known India',
    'Photographers and writers',
    'Travelers drawn to quiet sophistication',
  ],

  whyItMatters:
    'Manipur does not seek attention—it earns admiration. With rare ecological wonders, deep artistic traditions, refined landscapes, and emotional calm, it becomes the gentle, graceful counterpoint in a luxury Northeast India journey.',

  highlights: [
    'Loktak Lake and its floating phumdis',
    'Keibul Lamjao National Park and the Sangai deer',
    'Manipuri classical dance and living culture',
    'Kangla Fort and royal heritage',
    'Imphal’s calm cultural rhythm',
  ],

  bestTime: 'October to March',
  duration: '3–5 days',
  image: '/images/manipur.jpg',
},

mizoram: {
  id: 'mizoram',
  name: 'Mizoram — Land of Rolling Hills & Bamboo Forests',
  color: '#F97316',

  keywords: [
    'Rolling Hills',
    'Bamboo Forests',
    'Quiet Luxury',
    'Eco Conscious Travel',
    'Community Living',
    'Slow Serenity',
  ],

  description:
    'A land of gentle hills, bamboo forests, and deeply rooted community values where simplicity itself becomes luxury.',

  fullDescription:
    'Mizoram is a destination of calm order and quiet beauty. Known for its rolling green landscapes and vast bamboo forests, it offers an experience shaped by harmony, discipline, and a deeply human connection to nature rather than spectacle or excess.',

  longDescription:
    'Mountainous and landlocked, Mizoram unfolds in layers of hills, ridges, valleys, and green corridors. Dense bamboo forests—among the largest in Asia—shape the land, architecture, and daily life, creating a rare sense of visual calm, ecological balance, and soft isolation ideal for slow, reflective travel.',

  geographyAndNature: [
    'Endless rolling hills and ridgelines',
    'Deep valleys and gorges',
    'Dense bamboo forests forming green corridors',
    'Hidden waterfalls within untouched terrain',
  ],

  wildlifeExperiences: [
    {
      name: 'Vantawng Falls',
      description:
        'The highest waterfall in Mizoram, surrounded by dense forest and best admired from elevated viewpoints, offering a powerful yet serene natural spectacle.',
    },
    {
      name: 'Bamboo Forest Landscapes',
      description:
        'Living green corridors that define Mizoram’s ecology, culture, and sustainability, offering immersive journeys through layered forested terrain.',
    },
  ],

  riverAndIslandCulture: [
    {
      name: 'Highland Valleys & Water Systems',
      description:
        'Quiet valleys and seasonal watercourses that support agriculture, settlement, and a balanced relationship between people and land.',
    },
  ],

  spiritualAndHeritageSites: [
    {
      name: 'Mizo Faith & Community Traditions',
      description:
        'A society shaped by strong Christian values and traditional Mizo customs, emphasizing discipline, gratitude, unity, and social harmony.',
    },
  ],

  teaAndCraftExperiences: [
    'Bamboo-based handicrafts and architecture',
    'Local music, choirs, and community singing',
    'Festivals centered on togetherness and gratitude',
    'Locally sourced food and handmade crafts',
  ],

  luxuryStayStyles: [
    'Clean, comfortable boutique hotels',
    'Hilltop stays with panoramic views',
    'Quiet retreats emphasizing peace and privacy',
    'Personalized hospitality rooted in community values',
  ],

  idealFor: [
    'Slow-travel luxury seekers',
    'Cultural explorers',
    'Eco-conscious international travelers',
    'Writers, thinkers, and creatives',
    'Guests seeking silence, structure, and serenity',
  ],

  whyItMatters:
    'In an increasingly noisy world, Mizoram offers something rare—order, calm, and balance. It does not compete for attention; it creates space for reflection, connection, and stillness, making it a restorative pause within a luxury Northeast India journey.',

  highlights: [
    'Rolling hills and layered green landscapes',
    'Vantawng Falls and forest viewpoints',
    'Bamboo forests shaping daily life and culture',
    'Aizawl’s orderly hilltop urban charm',
    'Music, community traditions, and quiet hospitality',
  ],

  bestTime: 'October to March',
  duration: '3–5 days',
  image: '/images/mizoram.jpg',
},


tripura: {
  id: 'tripura',
  name: 'Tripura — Royal Heritage & Quiet Grandeur',
  color: '#EF4444',

  keywords: [
    'Royal Heritage',
    'Lake Palaces',
    'Sacred Landscapes',
    'Quiet Luxury',
    'Cultural Depth',
    'Slow Travel',
  ],

  description:
    'A land of refined royal legacy and contemplative calm, where heritage whispers rather than declares.',

  fullDescription:
    'Tripura is a destination of measured luxury and quiet grandeur. Often overlooked for its modest scale, it rewards discerning travelers with depth over drama—palaces that echo history, sacred sites carved into stone, and a pace of life that invites reflection rather than spectacle.',

  longDescription:
    'Characterised by rolling hills, fertile plains, forests, and river systems, Tripura carries a soft, enclosed elegance shaped by geography and history. Its proximity to Bangladesh has created a unique cultural synthesis, blending royal traditions with indigenous and regional influences in a harmonious, understated manner.',

  geographyAndNature: [
    'Rolling hills and fertile plains',
    'Forested landscapes and river systems',
    'Soft, enclosed geography creating a sense of privacy',
    'Cultural synthesis influenced by proximity to Bangladesh',
  ],

  wildlifeExperiences: [
    {
      name: 'Rudrasagar Lake',
      description:
        'A serene freshwater lake that forms the setting for Neermahal, offering reflective waters, calm surroundings, and a sense of quiet grandeur.',
    },
  ],

  riverAndIslandCulture: [
    {
      name: 'Lake-Centred Heritage Landscapes',
      description:
        'Water bodies such as Rudrasagar Lake that shape royal architecture, settlement patterns, and contemplative cultural experiences.',
    },
  ],

  spiritualAndHeritageSites: [
    {
      name: 'Ujjayanta Palace',
      description:
        'The architectural crown jewel of Tripura, a neo-classical palace set amidst landscaped gardens, once a royal residence and now a museum reflecting monarchical elegance.',
    },
    {
      name: 'Neermahal',
      description:
        'India’s only lake palace, blending Hindu and Islamic architectural styles and rising gracefully from the still waters of Rudrasagar Lake.',
    },
    {
      name: 'Unakoti',
      description:
        'An enigmatic archaeological and sacred site featuring massive rock-cut Shaivite carvings, offering a deeply spiritual and mystical presence.',
    },
  ],

  teaAndCraftExperiences: [
    'Traditional tribal crafts and weaving',
    'Folk music and dance rooted in storytelling',
    'Cultural walks through Agartala',
    'Observation-led heritage exploration',
  ],

  luxuryStayStyles: [
    'Boutique city hotels',
    'Heritage-inspired accommodations',
    'Personalized, dignified hospitality',
    'Calm environments focused on comfort and context',
  ],

  idealFor: [
    'Heritage and architecture enthusiasts',
    'Cultural connoisseurs seeking lesser-known India',
    'Slow-travel luxury seekers',
    'Scholars, writers, and photographers',
    'Travelers who value elegance without excess',
  ],

  whyItMatters:
    'Tripura does not seek grandeur—it embodies grace. With its royal legacy, ancient sacred sites, and peaceful cultural rhythm, it provides a dignified, reflective conclusion to a luxury journey through Northeast India.',

  highlights: [
    'Ujjayanta Palace and royal heritage',
    'Neermahal — India’s only lake palace',
    'Unakoti’s ancient rock-cut sculptures',
    'Agartala’s calm cultural character',
    'Tripura’s blend of tribal and royal traditions',
  ],

  bestTime: 'October to March',
  duration: '2–4 days',
  image: '/images/tripura.jpg',
},

}

/* ------------------ HELPERS ------------------ */

export const destinationsList = Object.values(destinations)
export const destinationIds = Object.keys(destinations)
