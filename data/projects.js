export const residentialProjects = [
  {
    id: 1,
    category: 'Residential',
    title: 'Custom Shower Build',
    location: 'Pike Road, AL — 2024',
    image: '/shower-tile.png',
    description:
      'Full shower renovation with large-format tile, pebble floor, matte black fixtures, built-in bench, and recessed niche.',
    scope: ['Demo and waterproofing', 'Large-format wall tile', 'Pebble shower floor', 'Matte black fixtures', 'Built-in bench and niche'],
    investment: 'Contact us for a project estimate',
  },
  {
    id: 3,
    category: 'Residential',
    title: 'Concrete Patio Pour',
    location: 'Pike Road, AL — 2024',
    image: '/concrete-patio.png',
    description:
      'Backyard concrete patio extension with forms, pour, and finish work tied into the existing home.',
    scope: ['Excavation and grading', 'Formwork and rebar', 'Concrete pour and finish', 'Site cleanup'],
    investment: 'Contact us for a project estimate',
  },
  {
    id: 5,
    category: 'Residential',
    title: 'Walk-In Closet Build-Out',
    location: 'Pike Road, AL — 2024',
    image: '/walk-in-closet.png',
    description:
      'Custom walk-in closet with floor-to-ceiling cabinetry, hanging rods, drawers, and matte black hardware.',
    scope: ['Custom cabinetry', 'Shelving and hanging storage', 'Drawer stacks', 'Hardware and trim'],
    investment: 'Contact us for a project estimate',
  },
  {
    id: 7,
    category: 'Residential',
    title: 'Attic Room Conversion',
    location: 'Pike Road, AL — 2024',
    image: '/attic-room.png',
    objectPosition: 'center 25%',
    description:
      'Finished attic conversion with new flooring, paint, trim, electrical, and HVAC updates in a vaulted space.',
    scope: ['Flooring installation', 'Drywall and paint', 'Trim and baseboards', 'Electrical and vent updates'],
    investment: 'Contact us for a project estimate',
  },
]

export const commercialProjects = [
  {
    id: 2,
    category: 'Commercial',
    title: 'Luxury Building Exterior',
    location: 'Central Alabama — 2024',
    image: '/luxury-building.jpg',
    description:
      'Exterior improvement and finish work on a commercial property, including facade updates and professional presentation.',
    scope: ['Exterior prep and repair', 'Finish upgrades', 'Site coordination', 'Final walkthrough'],
    investment: 'Contact us for a project estimate',
  },
  {
    id: 4,
    category: 'Commercial',
    title: 'Commercial Framing',
    location: 'Central Alabama — 2024',
    image: '/framing-crew.png',
    description:
      'Structural framing for a commercial build with crew on site, lumber staging, and coordinated field execution.',
    scope: ['Framing layout', 'Wall and roof framing', 'Structural coordination', 'Jobsite safety and staging'],
    investment: 'Contact us for a project estimate',
  },
  {
    id: 6,
    category: 'Commercial',
    title: 'Commercial Outdoor Patio',
    location: 'Central Alabama — 2024',
    image: '/commercial-patio-outdoor.png',
    description:
      'Commercial outdoor break area with concrete patio, picnic seating, planters, bollards, and lighting.',
    scope: ['Concrete patio pour', 'Site furnishings layout', 'Planters and landscaping', 'Lighting and bollards'],
    investment: 'Contact us for a project estimate',
  },
]

export const governmentProjects = [
  {
    id: 8,
    category: 'Government',
    title: 'Memorial Plaza Masonry',
    location: 'Central Alabama — 2024',
    image: '/commercial-after.png',
    description:
      'Institutional masonry and plaza restoration with CMU construction, brick paving, and monument integration.',
    scope: ['Site protection and prep', 'CMU and brick masonry', 'Plaza paving and finishes', 'Monument pedestal work'],
    investment: 'Contact us for a project estimate',
  },
  {
    id: 9,
    category: 'Government',
    title: 'Campus Hardscape Restoration',
    location: 'Central Alabama — 2024',
    image: '/commercial-before.png',
    objectPosition: 'object-center',
    description:
      'Courtyard masonry rebuild on an active institutional campus, including block work, rebar, and phased site protection.',
    scope: ['Phased site protection', 'CMU layout and install', 'Rebar and structural tie-ins', 'Finish coordination'],
    investment: 'Contact us for a project estimate',
  },
]

export const allProjects = [
  ...residentialProjects,
  ...commercialProjects,
  ...governmentProjects,
]
