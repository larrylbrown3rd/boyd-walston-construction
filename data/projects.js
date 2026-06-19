export const residentialProjects = [
  {
    id: 1,
    category: 'Residential',
    title: 'Custom Shower Build',
    location: 'The River Region, AL — 2024',
    image: '/shower-tile.png',
  },
  {
    id: 3,
    category: 'Residential',
    title: 'Concrete Patio Pour',
    location: 'The River Region, AL — 2024',
    image: '/concrete-patio.png',
  },
  {
    id: 5,
    category: 'Residential',
    title: 'Walk-In Closet Build-Out',
    location: 'The River Region, AL — 2024',
    image: '/walk-in-closet.png',
  },
  {
    id: 7,
    category: 'Residential',
    title: 'Attic Room Conversion',
    location: 'The River Region, AL — 2024',
    image: '/attic-room.png',
    objectPosition: 'center 25%',
  },
]

export const commercialProjects = [
  {
    id: 2,
    category: 'Commercial',
    title: 'Luxury Building Exterior',
    location: 'The River Region, AL — 2024',
    image: '/luxury-building.jpg',
  },
  {
    id: 4,
    category: 'Commercial',
    title: 'Commercial Framing',
    location: 'The River Region, AL — 2024',
    image: '/framing-crew.png',
  },
  {
    id: 6,
    category: 'Commercial',
    title: 'Commercial Outdoor Patio',
    location: 'The River Region, AL — 2024',
    image: '/commercial-patio-outdoor.png',
  },
]

export const allProjects = [...residentialProjects, ...commercialProjects]
