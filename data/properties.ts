export interface Property {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  assetClass: 'Strategic Land' | 'Prime Residential' | 'Commercial & Mixed-Use' | 'Joint Ventures';
  corridor: 'Westlands' | 'Kilimani' | 'Karen' | 'Upper Hill' | 'Kiambu Road' | 'Athi River';
  priceUsd: number;
  priceKes: string;
  displayPrice: string;
  footprint: string;
  yieldNet?: string;
  projectedIrr?: string;
  completionTarget?: string;
  titleStatus: string;
  zoning: string;
  auditStatus: string;
  description: string;
  imageUrl: string;
  featured?: boolean;
  metrics: {
    label: string;
    value: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
}

export const PROPERTIES: Property[] = [
  {
    id: "prop-01",
    slug: "kilimani-commercial-high-density-land",
    title: "Kilimani Prime Commercial & High-Density Land",
    subtitle: "High-Density Commercial & Residential Corridor • Lot #KLM-409",
    assetClass: "Strategic Land",
    corridor: "Kilimani",
    priceUsd: 3200000,
    priceKes: "KES 415M",
    displayPrice: "$3,200,000 USD (KES 415M)",
    footprint: "1.50 Freehold Acres (65,340 sq ft)",
    projectedIrr: "24.5% IRR",
    titleStatus: "Freehold Single Title Deed • Title Registry Clean",
    zoning: "Commercial / High-Density Res. (24 Storeys)",
    auditStatus: "Title & Survey Verified",
    description: "High-density mixed-use development site situated along Nairobi's prime Kilimani commercial artery. Cleared for vertical expansion up to 24 suspended storeys with dual frontage tarmac access, perimeter wall, and audited zero encumbrances.",
    imageUrl: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80&fit=crop&auto=format",
    featured: true,
    metrics: [
      { label: "Acquisition Price", value: "$3,200,000" },
      { label: "Gross Footprint", value: "1.50 Acres" },
      { label: "Zoning Ceiling", value: "24 Suspended Storeys" }
    ],
    specifications: [
      { label: "Title Architecture", value: "Freehold Title Deed • ArdhiSasa Certified" },
      { label: "Zoning & Density", value: "High-Density Commercial / Residential (24 Storeys)" },
      { label: "Infrastructure Status", value: "Dual-lane tarmac, 3-phase transformer on site" },
      { label: "Exit Underwriting", value: "180-Key Serviced Scheme or Grade-A Medical" }
    ]
  },
  {
    id: "prop-02",
    slug: "the-grand-crest-residences",
    title: "The Grand Crest Residences",
    subtitle: "Westlands Core • General Mathenge Ridge",
    assetClass: "Prime Residential",
    corridor: "Westlands",
    priceUsd: 135000,
    priceKes: "KES 17.5M",
    displayPrice: "From $135,000 USD (KES 17.5M)",
    footprint: "58 – 162 sqm Suites",
    yieldNet: "11.4% Net",
    completionTarget: "Q3 2026",
    titleStatus: "Sectional Title Deed • ArdhiSasa Registered",
    zoning: "Ultra-Luxury Residential / Serviced Suites",
    auditStatus: "Substructure Complete (40% Sold)",
    description: "Contemporary mastercrafted residences offering cantilevered infinity pools, smart building infrastructure, and established expatriate corporate tenancy. Clean digital ArdhiSasa title conveyance with optional Swiss-Belhotel serviced operations.",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80&fit=crop&auto=format",
    featured: true,
    metrics: [
      { label: "Entry Valuation", value: "From $135,000" },
      { label: "Target Net Yield", value: "11.4% Net p.a." },
      { label: "Capital Upside", value: "+32% Off-Plan" }
    ],
    specifications: [
      { label: "1-Bed Executive Suite", value: "58 sqm • $135,000" },
      { label: "2-Bed Premier Residence", value: "96 sqm • $185,000" },
      { label: "3-Bed Sky Villa + DSQ", value: "162 sqm • $270,000" },
      { label: "Rental Guarantee", value: "10-Year Expatriate Corporate Program" }
    ]
  },
  {
    id: "prop-03",
    slug: "the-ololua-private-estate-karen",
    title: "The Ololua Private Estate",
    subtitle: "Karen • Mbagathi Ridge Diplomatic Zone",
    assetClass: "Prime Residential",
    corridor: "Karen",
    priceUsd: 1950000,
    priceKes: "KES 250M",
    displayPrice: "$1,950,000 USD (KES 250M)",
    footprint: "1.00 Manicured Acre",
    yieldNet: "7.8% Net",
    titleStatus: "99-Year Clean Leasehold Title",
    zoning: "Low-Density Diplomatic Residential",
    auditStatus: "Fully Certified Title & Survey",
    description: "Trophy colonial-contemporary residence situated on one private manicured acre in Karen. Features 5 ensuite bedrooms, heated lap pool, solar microgrid, guest wing, mature gardens, and diplomatic-grade security protocols.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80&fit=crop&auto=format",
    featured: true,
    metrics: [
      { label: "Asset Price", value: "$1,950,000 (KES 250M)" },
      { label: "Bedrooms", value: "5 Ensuite + DSQ" },
      { label: "Land Footprint", value: "1.00 Acre Mature Lawn" }
    ],
    specifications: [
      { label: "Accommodations", value: "5 Ensuite Bedrooms, Study, Guest Suite & DSQ" },
      { label: "Grounds & Leisure", value: "1.00 Acre Landscaped Lawn, Heated Lap Pool, Pavilion" },
      { label: "Utilities & Power", value: "Solar Microgrid + Deep Borehole (18m³/hr)" },
      { label: "Title Deed", value: "Clean 99-Year Leasehold Title Deed" }
    ]
  },
  {
    id: "prop-04",
    slug: "karen-emerald-ridge-enclave",
    title: "Karen Emerald Ridge • 5-Acre Private Country Estate",
    subtitle: "Karen South • Near Karen Country Club & Giraffe Centre",
    assetClass: "Prime Residential",
    corridor: "Karen",
    priceUsd: 4500000,
    priceKes: "KES 585M",
    displayPrice: "$4,500,000 USD (KES 585M)",
    footprint: "5.00 Red Soil Acres",
    titleStatus: "Clean Freehold Title Deed",
    zoning: "Low-Density Residential (Half-Acre Minimum)",
    auditStatus: "Title Deed & Survey Verified",
    description: "Rare five-acre indigenous woodland parcel positioned along a quiet private lane in Karen South. Boasts rich red soil, mature indigenous trees, deep borehole access, and perimeter stone walling. Ideal for a private family manor or boutique luxury gated enclave.",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=80&fit=crop&auto=format",
    featured: true,
    metrics: [
      { label: "Land Area", value: "5.00 Acres Red Soil" },
      { label: "Title Deed", value: "Clean Freehold Deed" },
      { label: "Location", value: "Near Karen Country Club" }
    ],
    specifications: [
      { label: "Plot Characteristics", value: "Gentle slope, mature indigenous trees, deep red soil" },
      { label: "Water & Power", value: "High-yield borehole + 3-phase mains connection on site" },
      { label: "Access & Security", value: "Tarmac access, stone perimeter wall, gated community boundary" },
      { label: "Conveyance Status", value: "Freehold Title Deed ready for direct advocate escrow transfer" }
    ]
  },
  {
    id: "prop-05",
    slug: "athi-river-logistics-industrial-footprint",
    title: "Athi River Logistics & Industrial Footprint • 20 Acres",
    subtitle: "Mombasa Rd Arterial • SGR Inland Container Depot Hub",
    assetClass: "Commercial & Mixed-Use",
    corridor: "Athi River",
    priceUsd: 2800000,
    priceKes: "KES 364M",
    displayPrice: "$2,800,000 USD ($140k / Acre)",
    footprint: "20.0 Acres Flat Graded",
    projectedIrr: "14.1% Industrial IRR",
    titleStatus: "99-Year Renewable Industrial Leasehold",
    zoning: "Heavy Industrial / Logistics / Dry Port",
    auditStatus: "NEMA Category-2 Ready",
    description: "Heavy-spec commercial land asset located 5 minutes from the Inland Container Depot (ICD) and SGR Freight Terminal. Renewable 99-year industrial lease with certified NEMA Category-2 clearances, direct slip road ingress, and dual heavy electrical trunk feeds.",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80&fit=crop&auto=format",
    metrics: [
      { label: "Acquisition Price", value: "$2,800,000" },
      { label: "Acre Benchmark", value: "$140,000 / Acre" },
      { label: "Industrial IRR", value: "14.1%" }
    ],
    specifications: [
      { label: "Title Status", value: "99-Year Clean Leasehold Title" },
      { label: "Arterial Access", value: "Mombasa Rd A109 Direct Slip Road" },
      { label: "Permits", value: "NEMA Category-2 Clearances Ready" },
      { label: "Power Infrastructure", value: "Dual Heavy Industrial 33kV Line" }
    ]
  },
  {
    id: "prop-06",
    slug: "the-pinnacle-view-luxury-residences",
    title: "The Pinnacle View Luxury Residences",
    subtitle: "Westlands Panoramic Ridge • General Mathenge Node",
    assetClass: "Prime Residential",
    corridor: "Westlands",
    priceUsd: 85000,
    priceKes: "KES 11.0M",
    displayPrice: "From $85,000 USD (KES 11.0M)",
    footprint: "52 – 148 sqm Units",
    yieldNet: "9.6% Net",
    completionTarget: "Q4 2026",
    titleStatus: "Sectional Title Conveyance Guaranteed",
    zoning: "High-Density Residential & Serviced Suites",
    auditStatus: "Substructure Complete",
    description: "Architectural high-rise landmark positioned along the Westlands ridge with sunset panoramas over Nairobi. Fully serviced residential enclave featuring Technogym health pavilion, heated infinity pool, concierge services, and 100% generator backup.",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80&fit=crop&auto=format",
    metrics: [
      { label: "Starting Price", value: "$85,000 (KES 11M)" },
      { label: "Layouts", value: "1, 2 & 3 Bed Suites" },
      { label: "Location", value: "General Mathenge, Westlands" }
    ],
    specifications: [
      { label: "1-Bed Executive Suite", value: "58 sqm • $85,000 USD" },
      { label: "2-Bed Premier Residence", value: "96 sqm • $145,000 USD" },
      { label: "3-Bed Sky Villa + DSQ", value: "162 sqm • $220,000 USD" },
      { label: "Amenities", value: "Heated infinity pool, Technogym, full generator backup & concierge" }
    ]
  },
  {
    id: "prop-07",
    slug: "riverside-sanctuary-mixed-use-tower",
    title: "Riverside Sanctuary Luxury Residences",
    subtitle: "Riverside Drive • UN Diplomatic Corridor",
    assetClass: "Prime Residential",
    corridor: "Westlands",
    priceUsd: 115000,
    priceKes: "KES 15.0M",
    displayPrice: "From $115,000 USD (Furnished)",
    footprint: "64 – 180 sqm Keys",
    titleStatus: "Clean Sectional Title Deed Registered",
    zoning: "Diplomatic Residential",
    auditStatus: "Full Technical & Legal Audit",
    description: "Designed for discerning homeowners and corporate expatriates on Riverside Drive. Features luxury furnished residences with European fixtures, heated swimming pool, 24-hour concierge, and secure underground parking.",
    imageUrl: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=900&q=80&fit=crop&auto=format",
    metrics: [
      { label: "Furnished Suites", value: "From $115,000 USD" },
      { label: "Tenancy Pool", value: "Embassies & UN Agencies" },
      { label: "Location", value: "Riverside Drive, Westlands" }
    ],
    specifications: [
      { label: "Residence Types", value: "Fully furnished 1 & 2-bedroom executive residences" },
      { label: "Finishes & Fittings", value: "European imported kitchens, hardwood floors, private balconies" },
      { label: "Tenant Profile", value: "Multinational corporate, UN and diplomatic corps long-term leases" },
      { label: "Title Status", value: "Sectional Title Deed registered under Ministry of Lands" }
    ]
  },
  {
    id: "prop-08",
    slug: "kilimani-mixed-use-twin-towers-jv",
    title: "Kilimani Mixed-Use Twin Towers (JV)",
    subtitle: "Urban Regeneration Consortium • 1.8 Acres Corner Plot",
    assetClass: "Joint Ventures",
    corridor: "Kilimani",
    priceUsd: 6500000,
    priceKes: "KES 845M",
    displayPrice: "Seeking $6.5M USD Equity Partner",
    footprint: "1.80 Freehold Acres",
    titleStatus: "Clean Freehold Title Ready for JV Transfer",
    zoning: "Dual 24-Storey Mixed-Use Development",
    auditStatus: "Approvals & Deed Verified",
    description: "Prime commercial corner plot with clean freehold title. Approved for dual 24-storey towers comprising ground-floor boutique retail, grade-A serviced executive suites, and panoramic rooftop amenities. Seeking Anchor Institutional Equity Partner or Tier-1 Co-Developer.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80&fit=crop&auto=format",
    metrics: [
      { label: "Required Co-Capital", value: "$6.5M USD" },
      { label: "Land Equity Valuation", value: "$4.0M USD" },
      { label: "Site Acreage", value: "1.80 Acres Corner Plot" }
    ],
    specifications: [
      { label: "Legal Structure", value: "Advocate escrow & joint venture agreement" },
      { label: "Approved FAR", value: "Dual 24-Storey Suspended Towers" },
      { label: "Landowner Split", value: "35% Equity Share in Completed Development" },
      { label: "Developer Co-Commitment", value: "100% Construction Guarantee" }
    ]
  },
  {
    id: "prop-09",
    slug: "karen-gated-estate-12-luxury-eco-villas-jv",
    title: "Karen Gated Estate • 12 Luxury Country Villas (JV)",
    subtitle: "Low-Density Prime • Karen Country Enclave",
    assetClass: "Joint Ventures",
    corridor: "Karen",
    priceUsd: 3800000,
    priceKes: "KES 495M",
    displayPrice: "$3.8M USD Construction Capex",
    footprint: "5.0 Acres Red Soil",
    titleStatus: "Clean Freehold Single Title Deed",
    zoning: "12 Half-Acre Private Country Villas",
    auditStatus: "Ready to Groundbreak (25% Pre-Sold)",
    description: "Prime red-soil residential land nestled in serene Karen. Full architectural schematics, NEMA environmental licenses, and physical development approvals granted. 12 half-acre contemporary country villas planned with dedicated club amenities. Groundbreaking scheduled 2026.",
    imageUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=80&fit=crop&auto=format",
    metrics: [
      { label: "Development Scale", value: "12 Contemporary Country Villas" },
      { label: "Villa Size", value: "5 Ensuite Bedrooms + DSQ" },
      { label: "Plot Allocation", value: "0.50 Acre per Villa" }
    ],
    specifications: [
      { label: "Architectural Layout", value: "5 ensuite bedrooms, double-volume living area, family lounge & pool" },
      { label: "Grounds & Setting", value: "Private half-acre landscaped gardens within 5-acre gated sanctuary" },
      { label: "Sustainability", value: "Full solar microgrid, rainwater harvesting & deep private borehole" },
      { label: "Title Conveyance", value: "Individual sectional freehold title deeds for each villa" }
    ]
  },
  {
    id: "prop-10",
    slug: "kiambu-road-masterplanned-subdivision",
    title: "Kiambu Road Masterplanned Gated Community Parcel",
    subtitle: "Kiambu Road Growth Corridor • 15 Acres Flat Land",
    assetClass: "Strategic Land",
    corridor: "Kiambu Road",
    priceUsd: 4800000,
    priceKes: "KES 624M",
    displayPrice: "$4,800,000 USD (KES 624M)",
    footprint: "15.00 Freehold Acres",
    projectedIrr: "+42% Masterplan GDV",
    titleStatus: "Freehold Clean Agricultural-to-Residential Conversion",
    zoning: "Gated Townhouse Cluster / Quarter-Acre Scheme",
    auditStatus: "County Planning Approved",
    description: "Prime infrastructure-adjacent acreage along the booming Kiambu Road corridor. Masterplan approvals in place for 54 gated suburban villas with internal asphalt loop, underground drainage, and dedicated recreation club.",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=80&fit=crop&auto=format",
    metrics: [
      { label: "Acquisition Price", value: "$4,800,000" },
      { label: "Per Acre Rate", value: "$320,000 / Acre" },
      { label: "Capital Growth p.a.", value: "12.5%" }
    ],
    specifications: [
      { label: "Zoning Status", value: "Medium-Density Gated Estate" },
      { label: "Road Frontage", value: "350 meters on tarmac distributor" },
      { label: "Power & Water", value: "Borehole permit active, KPLC mains" },
      { label: "Exit Strategy", value: "Retail serviced plots or turnkey build" }
    ]
  }
];

export const CORRIDOR_DATA = [
  {
    node: "Westlands Core",
    netYield: "10.8% Net",
    assetClass: "1 & 2 Bed Serviced Suites",
    acreBenchmark: "KES 350M – 480M",
    demandProfile: "MNC Executives & Expat Tech"
  },
  {
    node: "Kilimani & Kileleshwa",
    netYield: "9.6% Net",
    assetClass: "Mid-Market High-Rises",
    acreBenchmark: "KES 280M – 380M",
    demandProfile: "92%+ Urban Occupancy"
  },
  {
    node: "Karen & Runda Diplomatic",
    netYield: "7.8% (Preservation)",
    assetClass: "Gated Luxury Mansions (0.5–1 Acre)",
    acreBenchmark: "KES 75M – 120M",
    demandProfile: "Ambassadors, UN, Family Offices"
  },
  {
    node: "Upper Hill Financial",
    netYield: "9.2% Net",
    assetClass: "Grade-A Commercial / Medical",
    acreBenchmark: "KES 400M – 550M",
    demandProfile: "Multinational DFIs & Banking HQ"
  },
  {
    node: "Kiambu Road Corridor",
    netYield: "12.5% Capital Growth p.a.",
    assetClass: "Masterplanned Townhouse Gated Estates",
    acreBenchmark: "KES 50M – 85M",
    demandProfile: "Affluent Suburban Family Demand"
  },
  {
    node: "Machakos & SGR Logistics",
    netYield: "14.1% Industrial IRR",
    assetClass: "Logistics, Dry Port & Cold Storage",
    acreBenchmark: "KES 18M – 35M",
    demandProfile: "FMCG, Regional Distribution Hubs"
  }
];

