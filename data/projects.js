export const HMMA_LOCATION = 'Hyundai Motor Manufacturing of Alabama — 2026'

export const residentialProjects = [
  {
    id: 1,
    category: 'Residential',
    title: 'Custom Shower Build',
    location: 'Montgomery, AL — 2024',
    image: '/residential-remodel-shower.png',
    description:
      'Walk-in shower with large-format marble-look tile, glass enclosure, and a custom hex mosaic niche.',
    scope: ['Plumbing rough-in', 'Waterproofing membrane', 'Large-format wall tile', 'Custom niche tile work', 'Glass enclosure', 'Fixtures and finish'],
    investment: 'Contact us for a project estimate',
  },
  {
    id: 2,
    category: 'Residential',
    title: 'Bathroom Restoration',
    location: 'Pike Road, AL — 2024',
    image: '/bathroom-renovation-complete.png',
    description:
      'Complete bathroom restoration and remodel, transforming a damaged space into a modern walk-in shower with premium finishes.',
    scope: ['Demo and cleanup', 'Plumbing and waterproofing', 'Custom tile installation', 'Fixture and hardware install', 'Final punch and walkthrough'],
    investment: 'Contact us for a project estimate',
  },
  {
    id: 17,
    category: 'Residential',
    title: 'Guest Bath Addition',
    location: 'Montgomery, AL — 2024',
    image: '/residential-remodel-guest-bath.png',
    description:
      'Guest bath remodel with marble vanity, backlit mirror, wood shelving, and wood-look tile flooring.',
    scope: ['Vanity and countertop install', 'Fixtures and lighting', 'Flooring and trim', 'Paint and finish work'],
    investment: 'Contact us for a project estimate',
  },
  {
    id: 18,
    category: 'Residential',
    title: 'Barn Door Bath Entry',
    location: 'Pike Road, AL — 2024',
    image: '/bathroom-barn-door.png',
    description:
      'Interior renovation featuring a custom barn door entry, updated flooring, trim, and a refreshed bathroom layout.',
    scope: ['Barn door install', 'Flooring and trim', 'Paint and finish', 'Bathroom coordination'],
    investment: 'Contact us for a project estimate',
  },
  {
    id: 3,
    category: 'Residential',
    title: 'Concrete Patio Pour',
    location: 'Pike Road, AL — 2024',
    image: '/concrete-patio-pour.png',
    description:
      'Backyard concrete patio extension with site prep, rebar, professional pour, and smooth finish work tied into the existing home.',
    scope: ['Site prep and laser layout', 'Formwork and rebar', 'Concrete truck pour', 'Finish and cleanup'],
    investment: 'Contact us for a project estimate',
  },
  {
    id: 5,
    category: 'Residential',
    title: 'Walk-In Closet Build-Out',
    location: 'Pike Road, AL — 2024',
    image: '/closet-finished.png',
    description:
      'Custom walk-in closet with floor-to-ceiling cabinetry, hanging rods, drawer stacks, and matte black hardware.',
    scope: ['Custom cabinet build', 'Shelving and hanging storage', 'Drawer stacks', 'Paint, hardware, and trim'],
    investment: 'Contact us for a project estimate',
  },
  {
    id: 7,
    category: 'Residential',
    title: 'Attic Room Conversion',
    location: 'Pike Road, AL — 2024',
    image: '/attic-finished.png',
    objectPosition: 'center 25%',
    description:
      'Finished attic conversion with insulation, framing, flooring, paint, trim, electrical, and HVAC updates in a vaulted space.',
    scope: ['Framing and insulation', 'Flooring installation', 'Drywall and paint', 'Electrical and vent updates'],
    investment: 'Contact us for a project estimate',
  },
  {
    id: 16,
    category: 'Residential',
    title: 'Kitchen Renovation',
    location: 'Pike Road, AL — 2024',
    image: '/kitchen-after.png',
    description:
      'Full kitchen remodel with quartz countertops, white shaker cabinets, farmhouse sink, pot filler, subway tile, and custom range hood.',
    scope: ['Demo and structural updates', 'Drywall and insulation', 'Cabinet and countertop install', 'Custom hood, tile, and fixtures'],
    investment: 'Contact us for a project estimate',
  },
  {
    id: 15,
    category: 'Residential',
    title: 'Kitchen Hood Build',
    location: 'Pike Road, AL — 2024',
    image: '/kitchen-hood-finished.png',
    description:
      'Custom kitchen vent hood with board-and-batten detail, wood mantel trim, and coordination with the full kitchen renovation.',
    scope: ['Custom carpentry', 'Hood enclosure framing', 'Trim and finish detail', 'Coordination with kitchen layout'],
    investment: 'Contact us for a project estimate',
  },
  {
    id: 32,
    category: 'Residential',
    title: 'Tongue and Groove Patio',
    location: 'Central Alabama — 2026',
    image: '/tongue-and-groove-patio.png',
    description:
      'Covered patio build with a custom tongue-and-groove wood ceiling, ceiling fan, and a finished outdoor living space tied into the home.',
    scope: ['Tongue-and-groove ceiling install', 'Patio structure and trim', 'Ceiling fan and electrical', 'Finish carpentry'],
    investment: 'Contact us for a project estimate',
  },
]

export const featuredResidentialProjects = residentialProjects.filter(
  (project) => ![2, 3, 5, 18].includes(project.id)
)

const georgianaOperaHouseProject = {
  id: 26,
  category: 'Commercial Roofing',
  title: 'Georgiana Opera House Roof',
  location: 'Georgiana, AL — 2025',
  image: '/georgiana-opera-roof-complete.png',
  description:
    'Complete roof replacement at the historic Georgiana Opera House, including removal of the old metal roofing system, installation of all new decking, and a new modified bitumen roofing system.',
  scope: ['Metal roof removal', 'New decking installation', 'Modified bitumen roofing system'],
  investment: 'Contact us for a project estimate',
}

const prattvilleForestryMulchingProject = {
  id: 37,
  category: 'Commercial',
  title: 'Forestry Mulching',
  location: 'Prattville Square Shopping Center — 2026',
  image: '/forestry-mulching-prattville-square.png',
  description:
    'Commercial land clearing and forestry mulching at Prattville Square Shopping Center with skid steer equipment to remove brush, small trees, and overgrowth along the property line.',
  scope: ['Forestry mulching', 'Brush and tree clearing', 'Site line maintenance', 'Equipment coordination'],
  investment: 'Contact us for a project estimate',
}

export const featuredCommercialProjects = [
  georgianaOperaHouseProject,
  {
    id: 10,
    category: 'Commercial',
    title: 'Outdoor Patio & Amenities',
    location: HMMA_LOCATION,
    image: '/commercial-patio-complete.png',
    description:
      'Full commercial outdoor break area with concrete patio, picnic seating, black planters, lighting, and site amenities.',
    scope: ['Excavation & Grading', 'Concrete patio pour', 'Site furnishings and seating', 'Planters and landscaping', 'Lighting and charging stations'],
    investment: 'Contact us for a project estimate',
  },
]

const excavationAndGradingProject = {
  id: 33,
  category: 'Civil',
  title: 'Excavation and Grading',
  location: 'Central Alabama — 2026',
  image: '/excavation-and-grading.png',
  description:
    'Site excavation and grading with excavator and dump truck, including earthwork, gravel placement, and grade control around an active residential property.',
  scope: ['Site excavation', 'Grading and earthwork', 'Gravel placement', 'Equipment coordination'],
  investment: 'Contact us for a project estimate',
}

const civilSiteExcavationProject = {
  id: 35,
  category: 'Civil',
  title: 'Hyundai Motor Manufacturing Alabama — Excavation',
  location: HMMA_LOCATION,
  image: '/commercial-concrete-pour.png',
  description:
    'Large-scale commercial excavation with coordinated equipment, earthwork, and site prep for Hyundai Motor Manufacturing of Alabama.',
  scope: ['Site excavation preparing for concrete pour', 'Earthwork and grading', 'Equipment coordination', 'Site safety'],
  investment: 'Contact us for a project estimate',
}

const civilSiteGradingProject = {
  id: 36,
  category: 'Civil',
  title: 'Site Grading — Asphalt Paving Prep',
  location: 'Enterprise Car Rental — 2026',
  image: '/site-grading.png',
  description:
    'Site grading and prep for asphalt paving with skid steer equipment, grade checking, and subgrade preparation.',
  scope: ['Site grading and prep for asphalt paving'],
  investment: 'Contact us for a project estimate',
}

export const civilProjects = [
  civilSiteExcavationProject,
  civilSiteGradingProject,
  {
    id: 30,
    category: 'Civil',
    title: 'Tuskegee University — Site Excavation',
    location: 'Tuskegee, AL — 2026',
    image: '/tuskegee-civil-excavation.png',
    description:
      'Site excavation and earthwork for an institutional project at Tuskegee University with coordinated equipment and grade control.',
    scope: ['Site excavation', 'Earthwork and grading', 'Equipment coordination', 'Site safety'],
    investment: 'Contact us for a project estimate',
  },
  {
    id: 31,
    category: 'Civil',
    title: 'Tuskegee University — Site Prep',
    location: 'Tuskegee, AL — 2026',
    image: '/tuskegee-civil-site-prep.png',
    description:
      'Site preparation and subgrade work ahead of construction at Tuskegee University.',
    scope: ['Site clearing', 'Subgrade prep', 'Layout and staking', 'Drainage coordination'],
    investment: 'Contact us for a project estimate',
  },
  excavationAndGradingProject,
]

export const featuredCivilProjects = [civilSiteExcavationProject, civilSiteGradingProject]

export const projectsOverview = [
  {
    id: 10,
    category: 'Commercial',
    title: 'Outdoor Patio & Amenities',
    location: HMMA_LOCATION,
    description:
      'Complete outdoor patio build-out with custom planters, lighting, and seating.',
    image: '/commercial-patio-complete.png',
    href: '/projects/commercial',
  },
  {
    id: 27,
    category: 'Residential',
    title: 'Framing',
    location: 'Titus, AL',
    description:
      'Structural framing and construction for a residential build.',
    image: '/aerial.jpg',
    href: '/projects/residential',
  },
  {
    id: 28,
    category: 'Residential',
    title: 'Bathroom Renovation',
    location: 'Tallassee, AL',
    description:
      'Full bathroom remodel with custom tile shower, marble finishes, and modern fixtures.',
    image: '/residential-remodel-master-bath.png',
    href: '/projects/residential',
  },
]

export const commercialProjects = [
  georgianaOperaHouseProject,
  prattvilleForestryMulchingProject,
  {
    id: 19,
    category: 'Commercial',
    title: 'Enterprise Car Rental — Grading',
    location: 'Enterprise Car Rental — 2026',
    image: '/site-grading.png',
    description:
      'Commercial site grading and layout with skid steer equipment, grade checking, and subgrade preparation.',
    scope: ['Site grading', 'Grade verification', 'Equipment coordination', 'Subgrade prep'],
    investment: 'Contact us for a project estimate',
  },
  {
    id: 20,
    category: 'Commercial',
    title: 'Exterior Lift Work',
    location: HMMA_LOCATION,
    image: '/exterior-lift-work.png',
    description:
      'Commercial exterior maintenance and renovation using boom lift access for second-story window and facade work.',
    scope: ['Lift setup and safety', 'Exterior prep', 'Window and facade work', 'Site cleanup'],
    investment: 'Contact us for a project estimate',
  },
  {
    id: 21,
    category: 'Commercial',
    title: 'Building Renovation',
    location: HMMA_LOCATION,
    image: '/exterior-renovation-progress.png',
    description:
      'Large-scale exterior renovation with window protection, facade updates, and coordinated lift access.',
    scope: ['Window protection', 'Exterior prep and repair', 'Lift coordination', 'Finish protection'],
    investment: 'Contact us for a project estimate',
  },
  {
    id: 11,
    category: 'Commercial',
    title: 'Hyundai Motor Manufacturing Alabama — Excavation',
    location: HMMA_LOCATION,
    image: '/commercial-concrete-pour.png',
    description:
      'Large-scale commercial excavation with coordinated equipment, earthwork, and site prep for Hyundai Motor Manufacturing of Alabama.',
    scope: ['Site excavation', 'Earthwork and grading', 'Equipment coordination', 'Site safety'],
    investment: 'Contact us for a project estimate',
  },
  {
    id: 4,
    category: 'Commercial',
    title: 'Commercial Painting',
    location: HMMA_LOCATION,
    image: '/commercial-framing.png',
    description:
      'Large-scale commercial exterior painting with boom lift access, surface prep, and a finished facade from street level.',
    scope: ['Exterior prep', 'Boom lift setup and safety', 'Spray and brush painting', 'Site cleanup'],
    investment: 'Contact us for a project estimate',
  },
  {
    id: 22,
    category: 'Commercial',
    title: 'Brick Building Site Work',
    location: HMMA_LOCATION,
    image: '/commercial-brick-site.png',
    description:
      'Active commercial site work at a multi-story brick building with compaction, utility coordination, and mud-season logistics.',
    scope: ['Site compaction', 'Utility coordination', 'Equipment staging', 'Safety and access control'],
    investment: 'Contact us for a project estimate',
  },
  {
    id: 23,
    category: 'Commercial',
    title: 'Utility Trench Work',
    location: HMMA_LOCATION,
    image: '/commercial-utility-work.png',
    description:
      'Commercial utility trenching and underground work at an active building site with crew and equipment on site.',
    scope: ['Trench excavation', 'Utility placement', 'Backfill and compaction', 'Site restoration'],
    investment: 'Contact us for a project estimate',
  },
  {
    id: 8,
    category: 'Commercial',
    title: 'Memorial Plaza Masonry',
    location: 'Alabama State University — 2026',
    image: '/lockhart-hall-plaza.png',
    description:
      'Institutional masonry and plaza restoration with CMU construction, brick paving, and monument integration at Lockhart Hall.',
    scope: ['Site protection and prep', 'CMU and brick masonry', 'Plaza paving and finishes', 'Monument pedestal work'],
    investment: 'Contact us for a project estimate',
  },
  {
    id: 9,
    category: 'Commercial',
    title: 'Campus Hardscape Restoration',
    location: 'Alabama State University — 2026',
    image: '/masonry-blocks-progress.png',
    objectPosition: 'center',
    description:
      'Courtyard masonry rebuild on an active institutional campus, including block work, rebar, and phased site protection.',
    scope: ['Phased site protection', 'CMU layout and install', 'Rebar and structural tie-ins', 'Finish coordination'],
    investment: 'Contact us for a project estimate',
  },
  {
    id: 24,
    category: 'Commercial',
    title: 'Campus Masonry Work',
    location: 'Alabama State University — 2026',
    image: '/campus-masonry-work.png',
    description:
      'On-campus masonry project with block layout, mortar work, cement mixing, and protected walkways between historic buildings.',
    scope: ['Material staging', 'Block and mortar work', 'Walkway protection', 'Site cleanup'],
    investment: 'Contact us for a project estimate',
  },
  {
    id: 25,
    category: 'Commercial',
    title: 'Site Demolition & Clearing',
    location: HMMA_LOCATION,
    image: '/site-demolition.png',
    description:
      'Heavy demolition and site clearing with excavator and skid steer equipment to prepare property for new work.',
    scope: ['Demolition', 'Debris removal', 'Site clearing', 'Equipment coordination'],
    investment: 'Contact us for a project estimate',
  },
]

export const governmentProjects = []

export const allProjects = [
  ...residentialProjects,
  ...commercialProjects,
  ...civilProjects,
  ...governmentProjects,
]

export const residentialGalleryPhotos = [
  { src: '/tongue-and-groove-patio.png', alt: 'Tongue and groove patio', title: 'Tongue and Groove Patio' },
  { src: '/tongue-and-groove-patio-ceiling.png', alt: 'Tongue and groove patio ceiling detail', title: 'Tongue and Groove Patio' },
  { src: '/residential-remodel-master-bath.png', alt: 'Master bath remodel', title: 'Residential Remodel' },
  { src: '/residential-remodel-shower.png', alt: 'Custom shower build', title: 'Residential Remodel' },
  { src: '/residential-remodel-guest-bath.png', alt: 'Guest bath remodel', title: 'Residential Remodel' },
  { src: '/residential-remodel-shower-niche.png', alt: 'Shower niche tile detail', title: 'Residential Remodel' },
  { src: '/kitchen-after.png', alt: 'Kitchen renovation', title: 'Kitchen Renovation', objectPosition: 'top' },
  { src: '/kitchen-hood-finished.png', alt: 'Custom kitchen hood', title: 'Custom Kitchen Hood Build' },
  { src: '/closet-finished.png', alt: 'Walk-in closet', title: 'Walk-In Closet Build-Out' },
  { src: '/attic-finished.png', alt: 'Attic conversion', title: 'Attic Room Conversion', objectPosition: 'center 25%' },
  { src: '/concrete-patio-pour.png', alt: 'Concrete patio pour', title: 'Concrete Patio Pour' },
  { src: '/kitchen-before.png', alt: 'Kitchen before remodel', title: 'Kitchen Before' },
  { src: '/kitchen-after.png', alt: 'Kitchen after remodel', title: 'Kitchen After' },
]

export const commercialGalleryPhotos = [
  { src: '/georgiana-opera-roof-progress.png', alt: 'Georgiana Opera House roof before', title: 'Georgiana Opera House Roof — Before' },
  { src: '/georgiana-opera-roof-complete.png', alt: 'Georgiana Opera House roof after', title: 'Georgiana Opera House Roof — After' },
  { src: '/georgiana-opera-roof-demo.png', alt: 'Georgiana Opera House metal roof removal', title: 'Georgiana Opera House Roof' },
  { src: '/commercial-patio-complete.png', alt: 'Commercial patio complete', title: 'Outdoor Patio & Amenities' },
  { src: '/forestry-mulching-prattville-square.png', alt: 'Forestry mulching at Prattville Square Shopping Center', title: 'Forestry Mulching — Prattville Square Shopping Center' },
  { src: '/exterior-lift-work.png', alt: 'Exterior lift work', title: 'Exterior Lift Work' },
  { src: '/lockhart-hall-plaza.png', alt: 'Completed memorial plaza masonry at Lockhart Hall', title: 'Memorial Plaza Masonry' },
  { src: '/campus-masonry-work.png', alt: 'Campus masonry block work between historic university buildings', title: 'Campus Masonry Work' },
  { src: '/masonry-blocks-progress.png', alt: 'Courtyard masonry rebuild with CMU blocks and rebar on campus', title: 'Campus Hardscape Restoration' },
]

export const civilGalleryPhotos = [
  { src: '/commercial-concrete-pour.png', alt: 'Hyundai Motor Manufacturing Alabama excavation', title: 'Hyundai Motor Manufacturing Alabama — Excavation' },
  { src: '/site-grading.png', alt: 'Site grading and prep for asphalt paving', title: 'Site Grading — Asphalt Paving Prep' },
  { src: '/excavation-and-grading.png', alt: 'Excavation and grading with excavator', title: 'Excavation and Grading' },
  { src: '/tuskegee-civil-excavation.png', alt: 'Excavation at Tuskegee University', title: 'Tuskegee University — Site Excavation' },
  { src: '/tuskegee-civil-site-prep.png', alt: 'Site prep at Tuskegee University', title: 'Tuskegee University — Site Prep' },
  { src: '/commercial-site-excavation.png', alt: 'Site excavation', title: 'Site Excavation' },
  { src: '/site-demolition.png', alt: 'Site demolition', title: 'Site Demolition' },
]
