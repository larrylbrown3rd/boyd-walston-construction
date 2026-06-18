export const residentialProjects = [
  {
    id: 1,
    category: 'Residential',
    title: 'Custom Home Build',
    location: 'The River Region, AL — 2024',
    image: '/aerial.jpg',
  },
  {
    id: 3,
    category: 'Residential',
    title: 'Full Home Renovation',
    location: 'The River Region, AL — 2023',
    image: '/shower-after.jpg',
  },
  {
    id: 5,
    category: 'Residential',
    title: 'Walk-In Closet Build-Out',
    location: 'The River Region, AL — 2023',
    image: '/closet-finished.jpg',
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
    title: 'Commercial Outdoor Space',
    location: 'The River Region, AL — 2023',
    image: '/commercial-patio-3.jpg',
  },
  {
    id: 6,
    category: 'Commercial',
    title: 'Brick Building Construction',
    location: 'The River Region, AL — 2022',
    image: '/brick-building.jpg',
  },
]

export const allProjects = [...residentialProjects, ...commercialProjects]
