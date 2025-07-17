import { Zap, Droplets, Wrench, Heater, Wind, Bug } from 'lucide-react'

export interface Service {
    title: string
    slug: string
    icon: any
    description: string
    longDescription: string
    features: string[]
    image: string
    rates: {
        weekday: Record<string, number | null> | null
        weekend: Record<string, number | null> | null
    }
    emergencyAvailable: boolean
    certifications?: string[]
}

export const services: Service[] = [
    {
        title: "Heating & Gas",
        slug: "heating-gas",
        icon: Heater,
        description: "Reliable heating and furnace repairs.",
        longDescription:
            "Our certified gas engineers provide comprehensive heating solutions for residential and commercial properties. From emergency boiler repairs to complete system installations, we ensure your property stays warm and safe year-round.",
        features: [
            "Boiler installation, repair and maintenance (combi, system, open-vent)",
            "Radiator installation and repairs",
            "Thermostat and room control systems",
            "Central heating system flushing",
            "Pump replacement and servicing",
            "Commercial heating solutions",
            "Gas safety inspections",
            "Emergency call-outs available 24/7",
        ],
        image: "/placeholder.svg?height=400&width=600",
        rates: {
            weekday: { "07-19": 130, "19-24": 165, "00-07": 225 },
            weekend: { "07-19": 155, "19-24": 185, "00-07": 255 },
        },
        emergencyAvailable: true,
        certifications: ["Gas Safe Registered", "OFTEC Certified"],
    },
    {
        title: "Plumbing",
        slug: "plumbing",
        icon: Droplets,
        description: "From leaky faucets to burst pipes.",
        longDescription:
            "Professional plumbing services covering everything from minor repairs to major installations. Our experienced plumbers use the latest tools and techniques to solve your plumbing problems efficiently.",
        features: [
            "Leak detection and repair",
            "Blockage clearance (sinks, toilets, pipes)",
            "Bathroom and kitchen refurbishments",
            "Cylinder and cistern works",
            "Pipework installation and replacement",
            "Immersion heater installation",
            "Pump servicing",
            "Gutter and downpipe repair",
        ],
        image: "/services/Plumber.png?height=400&width=600",
        rates: {
            weekday: { "07-19": 130, "19-24": 155, "00-07": 225 },
            weekend: { "07-19": 155, "19-24": 185, "00-07": 255 },
        },
        emergencyAvailable: true,
    },
    {
        title: "Commercial Heating & Gas",
        slug: "commercial-heating-gas",
        icon: Heater,
        description: "Commercial heating services for businesses.",
        longDescription:
            "Specialized commercial heating and gas services designed for businesses, offices, and industrial facilities. We understand the importance of maintaining comfortable working environments and comply with all commercial regulations.",
        features: [
            "Industrial boiler installation and maintenance",
            "High-capacity radiator systems",
            "Commercial system design and planning",
            "Compliance certification and documentation",
            "Preventive maintenance programs",
            "Emergency commercial call-outs",
            "Energy efficiency assessments",
            "Multi-site service contracts",
        ],
        image: "/services/Commercial Boiler.png?height=400&width=600",
        rates: {
            weekday: { "07-19": 165, "19-24": 205, "00-07": 250 },
            weekend: { "07-19": 185, "19-24": 205, "00-07": 275 },
        },
        emergencyAvailable: true,
        certifications: ["Commercial Gas Safe", "F-Gas Certified"],
    },
    {
        title: "Electrics",
        slug: "electrics",
        icon: Zap,
        description: "Safe and certified electrical solutions.",
        longDescription:
            "Comprehensive electrical services from qualified electricians. Whether you need a simple socket installation or a complete rewire, we ensure all work meets current safety standards and regulations.",
        features: [
            "Full property rewiring",
            "Fuse box upgrades and installations",
            "New circuits and socket installations",
            "Lighting design and installation",
            "Security system wiring",
            "Appliance installation and testing",
            "PAT testing services",
            "Electrical condition reports",
            "Commercial electrical works",
        ],
        image: "/services/Electrician.png?height=400&width=600",
        rates: {
            weekday: { "07-19": 110, "19-24": 145, "00-07": 205 },
            weekend: { "07-19": 145, "19-24": 175, "00-07": 245 },
        },
        emergencyAvailable: true,
        certifications: ["NICEIC Approved", "Part P Certified"],
    },
    {
        title: "Air Conditioning",
        slug: "air-conditioning",
        icon: Wind,
        description: "AC repair, installation, and maintenance.",
        longDescription:
            "Professional air conditioning services for residential and commercial properties. From installation to maintenance, we keep your spaces comfortable year-round with energy-efficient cooling solutions.",
        features: [
            "Split system installation and repair",
            "Ducted air conditioning systems",
            "Commercial cooling solutions",
            "Regular maintenance and servicing",
            "Energy efficiency assessments",
            "Filter replacement and cleaning",
            "Refrigerant leak detection",
            "System upgrades and modernization",
        ],
        image: "/services/AC image.png?height=400&width=600",
        rates: {
            weekday: null,
            weekend: { "07-19": 155, "19-24": 185, "00-07": 255 },
        },
        emergencyAvailable: false,
        certifications: ["F-Gas Certified", "City & Guilds Qualified"],
    },
    {
        title: "Carpentry",
        slug: "carpentry",
        icon: Wrench,
        description: "Expert carpentry services.",
        longDescription:
            "Skilled carpentry services for all your woodwork needs. From structural repairs to bespoke joinery, our craftsmen deliver quality workmanship using traditional techniques and modern tools.",
        features: [
            "Structural repairs (doors, windows, staircases)",
            "Flooring installation and repair",
            "Bespoke joinery and cabinetry",
            "Kitchen and bathroom fitting",
            "Emergency boarding services",
            "Interior fittings and trim work",
            "Timber treatment and finishing",
            "Custom furniture creation",
        ],
        image: "/services/Carpentry.png?height=400&width=600",
        rates: {
            weekday: { "07-19": 110, "19-24": 145, "00-07": 205 },
            weekend: { "07-19": 145, "19-24": 175, "00-07": 245 },
        },
        emergencyAvailable: true,
    },
    {
        title: "Building Works",
        slug: "building-works",
        icon: Wrench,
        description: "General building and renovation work.",
        longDescription:
            "Comprehensive building services from minor repairs to major renovations. Our skilled builders handle everything from brickwork to complete property transformations with attention to detail and quality craftsmanship.",
        features: [
            "Brickwork and masonry repairs",
            "Plastering and rendering",
            "Extensions and renovations",
            "Loft conversions",
            "External render and cladding",
            "Demolition services",
            "Site cleanup and preparation",
            "Structural alterations",
        ],
        image: "/services/Refurbs.png?height=400&width=600",
        rates: {
            weekday: { "07-19": 110, "19-24": 145, "00-07": 205 },
            weekend: { "07-19": 145, "19-24": 175, "00-07": 245 },
        },
        emergencyAvailable: true,
    },
    // {
    //     title: "Pest Control",
    //     slug: "pest-control",
    //     icon: Bug,
    //     description: "Effective and discreet pest removal.",
    //     longDescription:
    //         "Professional pest control services using safe, effective methods to eliminate unwanted pests from your property. We provide both treatment and prevention solutions to keep your home or business pest-free.",
    //     features: [
    //         "Rodent control and prevention",
    //         "Insect treatment and elimination",
    //         "Bird control solutions",
    //         "Humane pest removal methods",
    //         "Environmentally friendly treatments",
    //         "Property inspection and assessment",
    //         "Ongoing prevention programs",
    //         "Commercial pest management",
    //     ],
    //     image: "/services/Plumber.png?height=400&width=600",
    //     rates: {
    //         weekday: null,
    //         weekend: { "07-19": 145, "19-24": 175, "00-07": 245 },
    //     },
    //     emergencyAvailable: false,
    // },
    {
        title: "Jetting (Drains)",
        slug: "drain-jetting",
        icon: Droplets,
        description: "Professional drain jetting services.",
        longDescription:
            "High-pressure drain jetting services to clear blockages and maintain your drainage system. Our advanced equipment can handle everything from minor blockages to major drain problems.",
        features: [
            "High-pressure drain jetting",
            "CCTV drain surveys and inspections",
            "Drain lining and relining",
            "Root cutting and removal",
            "Grease trap cleaning",
            "Preventive maintenance programs",
            "Emergency drain clearance",
            "Commercial drainage solutions",
        ],
        image: "/services/Drain cleaning image.png?height=400&width=600",
        rates: {
            weekday: { "07-19": 160, "19-24": 195, "00-07": 225 },
            weekend: { "07-19": 185, "19-24": 215, "00-07": 285 },
        },
        emergencyAvailable: true,
    },
    {
        title: "Roofing",
        slug: "roofing",
        icon: Wind,
        description: "Expert roofing repairs and installations.",
        longDescription:
            "Complete roofing services from emergency repairs to full installations. Our experienced roofers work with all types of roofing materials and provide reliable solutions to protect your property.",
        features: [
            "Emergency leak repairs",
            "Full re-roofing (slate, tile, flat)",
            "Leadwork and flashing",
            "Rooflight and Velux installation",
            "Gutter, fascia and soffit replacement",
            "Chimney repairs and maintenance",
            "Roof inspections and surveys",
            "Commercial roofing solutions",
        ],
        image: "/services/Plumber.png?height=400&width=600",
        rates: {
            weekday: { "07-19": 110, "19-24": 145, "00-07": 205 },
            weekend: { "07-19": 145, "19-24": 175, "00-07": 245 },
        },
        emergencyAvailable: true,
    },
    {
        title: "Boiler Service",
        slug: "boiler-service",
        icon: Heater,
        description: "Professional boiler servicing.",
        longDescription:
            "Annual boiler servicing to ensure your heating system runs safely and efficiently. Our Gas Safe registered engineers provide comprehensive maintenance to extend your boiler's lifespan and maintain warranty coverage.",
        features: [
            "Annual boiler servicing",
            "Safety inspections and testing",
            "Efficiency optimization",
            "Component cleaning and adjustment",
            "Gas safety certificate provision",
            "Warranty compliance maintenance",
            "Performance diagnostics",
            "Preventive maintenance advice",
        ],
        image: "/services/Boiler Service.png?height=400&width=600",
        rates: {
            weekday: { "07-19": 125, "19-24": 165, "00-07": null },
            weekend: { "07-19": 155, "19-24": 185, "00-07": null },
        },
        emergencyAvailable: false,
        certifications: ["Gas Safe Registered"],
    },
    {
        title: "Gas Safety Certificate",
        slug: "gas-safety-certificate",
        icon: Zap,
        description: "Certified gas safety inspections.",
        longDescription:
            "Official Gas Safety Certificate inspections for landlords and homeowners. Our Gas Safe registered engineers provide thorough safety checks and issue certificates for legal compliance and insurance requirements.",
        features: [
            "Comprehensive gas appliance testing",
            "Safety inspection and assessment",
            "Gas leak detection",
            "Ventilation checks",
            "Official certificate provision",
            "Landlord compliance documentation",
            "Insurance requirement fulfillment",
            "Annual renewal reminders",
        ],
        image: "/services/Plumber.png?height=400&width=600",
        rates: {
            weekday: { "07-19": 125, "19-24": 165, "00-07": null },
            weekend: { "07-19": 155, "19-24": 185, "00-07": null },
        },
        emergencyAvailable: false,
        certifications: ["Gas Safe Registered"],
    },
    {
        title: "Boiler Service & Gas Certificate",
        slug: "boiler-service-gas-certificate",
        icon: Heater,
        description: "Full boiler servicing and certification.",
        longDescription:
            "Combined boiler service and Gas Safety Certificate in one convenient appointment. Save time and money with our comprehensive package that covers both annual maintenance and safety certification requirements.",
        features: [
            "Complete boiler servicing",
            "Full gas safety inspection",
            "Efficiency testing and optimization",
            "Safety certificate provision",
            "Component maintenance and cleaning",
            "Performance diagnostics",
            "Compliance documentation",
            "Cost-effective combined service",
        ],
        image: "/services/Boiler Service.png?height=400&width=600",
        rates: {
            weekday: { "07-19": 230, "19-24": 310, "00-07": null },
            weekend: { "07-19": 290, "19-24": 350, "00-07": null },
        },
        emergencyAvailable: false,
        certifications: ["Gas Safe Registered"],
    },
]
