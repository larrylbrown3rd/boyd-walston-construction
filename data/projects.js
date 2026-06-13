export const residentialProjects = [
  { id: 1, category: 'Residential', title: 'Custom Home Build', location: 'Pike Road, AL — 2024' },
  { id: 3, category: 'Residential', title: 'Full Home Renovation', location: 'Pike Road, AL — 2023' },
  { id: 5, category: 'Residential', title: 'Home Addition', location: 'Pike Road, AL — 2023' },
]

export const commercialProjects = [
  { id: 2, category: 'Commercial', title: 'Office Build-Out', location: 'Montgomery, AL — 2024' },
  { id: 4, category: 'Commercial', title: 'Warehouse Construction', location: 'Montgomery, AL — 2023' },
  { id: 6, category: 'Commercial', title: 'Restaurant Build-Out', location: 'Montgomery, AL — 2022' },
]

export const allProjects = [...residentialProjects, ...commercialProjects]
