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
    titleStatus: "Freehold Single Title Deed • ArdhiSasa Audit Clean",
    zoning: "Commercial / High-Density Res. (24 Storeys)",
    auditStatus: "Cadastre & Deed Completed",
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
    title: "Karen Emerald Ridge • 5 Acres Bespoke Enclave",
    subtitle: "Karen South • Subdivision Masterplan Approved",
    assetClass: "Strategic Land",
    corridor: "Karen",
    priceUsd: 4500000,
    priceKes: "KES 585M",
    displayPrice: "$4,500,000 USD (KES 585M)",
    footprint: "5.00 Red Soil Acres",
    projectedIrr: "+38.4% Net",
    titleStatus: "Freehold Single Title Deed (Subdivisible into 10 Deeds)",
    zoning: "Low-Density Residential (Half-Acre Minimum)",
    auditStatus: "Survey & Masterplan Completed",
    description: "Prime indigenous woodland parcel positioned within Karen's most coveted private corridor. Pre-engineered architectural scheme accommodates 10 sovereign half-acre private residential estates with complete communal infrastructure.",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=80&fit=crop&auto=format",
    featured: true,
    metrics: [
      { label: "Acquisition Price", value: "$4,500,000" },
      { label: "Subdivision IRR", value: "+38.4% Net" },
      { label: "Plot Yield", value: "10 x 0.5-Acre Lots" }
    ],
    specifications: [
      { label: "Title Architecture", value: "Freehold Title (Subdivisible to 10 Deeds)" },
      { label: "Water & Power", value: "Deep borehole + 3-Phase Mains on site" },
      { label: "Access Corridor", value: "Paved dual-access via Karen Country Club" },
      { label: "Target GDV", value: "$6.8M Gross GDV on individual parcel retail" }
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
      { label: "Entry Allocation", value: "$85,000" },
      { label: "Net Cashflow", value: "9.6% Net p.a." },
      { label: "Gross Yield", value: "11.8% Gross" }
    ],
    specifications: [
      { label: "1-Bed Executive Suite", value: "58 sqm • $85,000" },
      { label: "2-Bed Premier Residence", value: "96 sqm • $145,000" },
      { label: "3-Bed Sky Villa + DSQ", value: "162 sqm • $220,000" },
      { label: "Operator", value: "Prime Managed Asset Program" }
    ]
  },
  {
    id: "prop-07",
    slug: "riverside-sanctuary-mixed-use-tower",
    title: "Riverside Sanctuary Mixed-Use Tower",
    subtitle: "Riverside Drive • UN Diplomatic Corridor",
    assetClass: "Prime Residential",
    corridor: "Westlands",
    priceUsd: 115000,
    priceKes: "KES 15.0M",
    displayPrice: "From $115,000 USD (Furnished)",
    footprint: "64 – 180 sqm Keys",
    yieldNet: "12.4% Annual USD",
    titleStatus: "ArdhiSasa Cleared Sectional Title",
    zoning: "Diplomatic Mixed-Use Hospitality",
    auditStatus: "Full Technical & Legal Audit",
    description: "Designed and operated specifically for medium-term leases catering to multinational executives, embassy delegates, and UN staff in Gigiri and Riverside Drive. Fully furnished hospitality keys under professional management with automated cross-border quarterly dividend distributions.",
    imageUrl: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=900&q=80&fit=crop&auto=format",
    metrics: [
      { label: "Anticipated Cash Yield", value: "12.4% Annual USD" },
      { label: "Turnkey Entry", value: "$115,000 Furnished" },
      { label: "Lease Operator", value: "Swiss-Belhotel Operations" }
    ],
    specifications: [
      { label: "Management Structure", value: "Swiss-Belhotel Professional Operations" },
      { label: "Distribution Frequency", value: "Quarterly USD Escrow Payouts" },
      { label: "Target Tenant Pool", value: "UN, World Bank, Embassy Expatriates" },
      { label: "Cap Rate Model", value: "Underwritten at 92% Average Occupancy" }
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
    projectedIrr: "24.5% Net IRR",
    titleStatus: "Clean Freehold Title Vested in SPV",
    zoning: "Dual 24-Storey Mixed-Use Towers",
    auditStatus: "Data Room Open",
    description: "Prime commercial corner plot with clean freehold title already vested into the Special Purpose Vehicle (SPV). Approved for dual 24-storey towers comprising ground-floor boutique retail, grade-A serviced executive suites, and panoramic rooftop amenities. Seeking Anchor Institutional Equity Partner or Tier-1 Co-Developer.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80&fit=crop&auto=format",
    metrics: [
      { label: "Required Equity", value: "$6.5M USD" },
      { label: "Land Equity Value", value: "$4.0M USD" },
      { label: "Underwritten IRR", value: "24.5% Net" }
    ],
    specifications: [
      { label: "SPV Governance", value: "Neutral Advocate Escrow & Custody" },
      { label: "Approved FAR", value: "Dual 24-Storey Suspended Towers" },
      { label: "Landowner Split", value: "35% Equity Share in Completed GDV" },
      { label: "Developer Co-Commitment", value: "100% Construction Guarantee" }
    ]
  },
  {
    id: "prop-09",
    slug: "karen-gated-estate-12-luxury-eco-villas-jv",
    title: "Karen Gated Estate • 12 Luxury Eco-Villas (JV)",
    subtitle: "Low-Density Prime • Karen Country Enclave",
    assetClass: "Joint Ventures",
    corridor: "Karen",
    priceUsd: 3800000,
    priceKes: "KES 495M",
    displayPrice: "$3.8M USD Construction Capex",
    footprint: "5.0 Acres Red Soil",
    projectedIrr: "34.0% Net Margin",
    titleStatus: "Freehold Clean Single Deed",
    zoning: "12 Half-Acre Private Country Villas",
    auditStatus: "Ready to Groundbreak (25% Pre-Sold)",
    description: "Prime red-soil residential land nestled in serene Karen. Full architectural schematics, NEMA environmental licenses, and physical development approvals granted. 12 half-acre contemporary country villas planned with dedicated club amenities. Groundbreaking scheduled Q3 2026.",
    imageUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=80&fit=crop&auto=format",
    metrics: [
      { label: "Construction Funding", value: "$3.8M USD" },
      { label: "Pre-Sold Units", value: "3 of 12 (25%)" },
      { label: "Projected Net Margin", value: "34.0%" }
    ],
    specifications: [
      { label: "Land Footprint", value: "5.00 Acres Pristine Red Soil" },
      { label: "Villa Schemes", value: "5-Bedroom Ensuite + DSQ + Pool" },
      { label: "Sales Velocity", value: "3 Key Units Reserved at Deposit" },
      { label: "Target IRR", value: "28.5% Underwritten Exit" }
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

