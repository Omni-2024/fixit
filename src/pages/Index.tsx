
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { ArrowRight, Zap, Droplets, Wrench, Heater, Bug, Wind, ShieldCheck, Star,Phone } from "lucide-react";
import { Link } from "react-router-dom";
import {useState} from "react";
import ServiceModal from "@/components/ServiceModal.tsx";
import {services} from "@/data/services.ts";
import ServiceCardSimple from "@/components/ServiceCard";

// const services = [
//     {
//         title: "Heating & Gas",
//         icon: <Heater size={28} />,
//         description: "Reliable heating and furnace repairs.",
//         longDescription:
//             "Installation, repair and maintenance of boilers (combi, system, open-vent), radiators, thermostats and room controls; system flushing; pump replacement; commercial heating solutions.",
//         rates: {
//             weekday: { "07-19": 130, "19-24": 165, "00-07": 225 },
//             weekend: { "07-19": 155, "19-24": 185, "00-07": 255 },
//         },
//     },
//     {
//         title: "Plumbing",
//         icon: <Droplets size={28} />,
//         description: "From leaky faucets to burst pipes.",
//         longDescription:
//             "Leak detection and repair; blockages (sinks, toilets, pipes); bathroom and kitchen refurbishments; cylinder and cistern works; pipework installation/replacement; immersion heaters; pump servicing; gutter and downpipe repair.",
//         rates: {
//             weekday: { "07-19": 130, "19-24": 155, "00-07": 225 },
//             weekend: { "07-19": 155, "19-24": 185, "00-07": 255 },
//         },
//     },
//     {
//         title: "Commercial Heating & Gas",
//         icon: <Heater size={28} />,
//         description: "Commercial heating services for businesses.",
//         longDescription:
//             "All heating & gas services scaled for commercial premises, including industrial boilers, high-capacity radiators, system design and compliance certifying.",
//         rates: {
//             weekday: { "07-19": 165, "19-24": 205, "00-07": 250 },
//             weekend: { "07-19": 185, "19-24": 205, "00-07": 275 },
//         },
//     },
//     {
//         title: "Electrics",
//         icon: <Zap size={28} />,
//         description: "Safe and certified electrical solutions.",
//         longDescription:
//             "Full rewiring; fuse-box upgrades; new circuits and socket installations; lighting and security systems; appliance installation; PAT testing; condition reports; commercial electrical works.",
//         rates: {
//             weekday: { "07-19": 110, "19-24": 145, "00-07": 205 },
//             weekend: { "07-19": 145, "19-24": 175, "00-07": 245 },
//         },
//     },
//     {
//         title: "Air Conditioning",
//         icon: <Wind size={28} />,
//         description: "AC repair, installation, and maintenance.",
//         longDescription:
//             "Installation, servicing, and repair of air conditioning units, split systems, ducted units, and commercial cooling solutions.",
//         rates: {
//             weekday: null,
//             weekend: { "07-19": 155, "19-24": 185, "00-07": 255 },
//         },
//     },
//     {
//         title: "Carpentry",
//         icon: <Wrench size={28} />,
//         description: "Expert carpentry services.",
//         longDescription:
//             "Structural repairs (doors, windows, staircases, flooring); bespoke joinery (cupboards, units); emergency boarding; interior fittings; timber treatment and finishing.",
//         rates: {
//             weekday: { "07-19": 110, "19-24": 145, "00-07": 205 },
//             weekend: { "07-19": 145, "19-24": 175, "00-07": 245 },
//         },
//     },
//     {
//         title: "Building Works",
//         icon: <Wrench size={28} />,
//         description: "General building and renovation work.",
//         longDescription:
//             "Brickwork, plastering, masonry repointing; extensions and renovations; loft conversions; external render; demolition; site cleanup and preparation.",
//         rates: {
//             weekday: { "07-19": 110, "19-24": 145, "00-07": 205 },
//             weekend: { "07-19": 145, "19-24": 175, "00-07": 245 },
//         },
//     },
//     {
//         title: "Pest Control",
//         icon: <Bug size={28} />,
//         description: "Effective and discreet pest removal.",
//         longDescription:
//             "Identification, treatment and prevention of common pests including rodents, insects and birds using humane and environmentally friendly solutions.",
//         rates: {
//             weekday: null,
//             weekend: { "07-19": 145, "19-24": 175, "00-07": 245 },
//         },
//     },
//     {
//         title: "Jetting (Drains)",
//         icon: <Droplets size={28} />,
//         description: "Professional drain jetting services.",
//         longDescription:
//             "High-pressure drain jetting; CCTV drain surveys; drain lining and relining.",
//         rates: {
//             weekday: { "07-19": 160, "19-24": 195, "00-07": 225 },
//             weekend: { "07-19": 185, "19-24": 215, "00-07": 285 },
//         },
//     },
//     {
//         title: "Roofing",
//         icon: <Wind size={28} />,
//         description: "Expert roofing repairs and installations.",
//         longDescription:
//             "Emergency leaks; full re-roofing (slate, tile, flat); leadwork; rooflight/Velux installation; gutter, fascia and soffit replacement; chimney repairs.",
//         rates: {
//             weekday: { "07-19": 110, "19-24": 145, "00-07": 205 },
//             weekend: { "07-19": 145, "19-24": 175, "00-07": 245 },
//         },
//     },
//     {
//         title: "Boiler Service",
//         icon: <Heater size={28} />,
//         description: "Professional boiler servicing.",
//         longDescription:
//             "Annual servicing and maintenance of boilers to ensure safety, efficiency and compliance with regulations.",
//         rates: {
//             weekday: { "07-19": 125, "19-24": 165, "00-07": null },
//             weekend: { "07-19": 155, "19-24": 185, "00-07": null },
//         },
//     },
//     {
//         title: "Gas Safety Certificate",
//         icon: <Zap size={28} />,
//         description: "Certified gas safety inspections.",
//         longDescription:
//             "Annual servicing, safety inspection, efficiency testing; supply of Gas Safe certificate for compliance and insurance purposes.",
//         rates: {
//             weekday: { "07-19": 125, "19-24": 165, "00-07": null },
//             weekend: { "07-19": 155, "19-24": 185, "00-07": null },
//         },
//     },
//     {
//         title: "Boiler Service & Gas Certificate",
//         icon: <Heater size={28} />,
//         description: "Full boiler servicing and certification.",
//         longDescription:
//             "Annual servicing, safety inspection, efficiency testing; supply of Gas Safe certificate for compliance and insurance purposes.",
//         rates: {
//             weekday: { "07-19": 230, "19-24": 310, "00-07": null },
//             weekend: { "07-19": 290, "19-24": 350, "00-07": null },
//         },
//     },
// ];


const Index = () => {
    const [activeRate, setActiveRate] = useState<"weekday" | "weekend">("weekday");
    const [selectedService, setSelectedService] = useState(null);

    const featuredServices = services.slice(0, 6)



    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section
                className="relative w-full bg-cover bg-center bg-no-repeat md:aspect-[3/1] min-h-[500px]"
                style={{ backgroundImage: "url('/BG.jpg')" }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4 leading-tight text-white">
                        Fast, Reliable Repairs.
                    </h1>
                    <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-8">
                        Your trusted partner for 24/7 emergency response and expert maintenance across 12 essential service
                        categories.
                    </p>
                    <div className="flex justify-center">
                        <Button
                            asChild
                            className="bg-brand-yellow-100 hover:bg-brand-yellow-100/90 text-brand-primary-100 px-8 py-4 text-lg font-semibold shadow-md transition duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center"
                        >
                                <Link to="/contact">Request Quote</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 md:py-28 bg-white">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading">Our Core Services</h2>
                        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
                            We handle everything from emergencies to routine maintenance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {featuredServices.map((service) => (
                            <ServiceCardSimple
                                key={service.slug}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                slug={service.slug}
                            />
                        ))}
                    </div>

                    <div className="text-center">
                        <Button asChild size="lg" className="bg-brand-primary-100 hover:bg-brand-primary-100/90">
                            <Link to="/services" className="flex items-center gap-2">
                                View All Services
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Customer Feedback Section */}
            <section className="bg-brand-primary-100 py-20 md:py-28">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-white">Trusted by Homeowners</h2>
                    <p className="text-lg text-gray-300 mt-2 max-w-2xl mx-auto mb-12">
                        Don't just take our word for it. Here's what our clients say.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white p-6 rounded-lg shadow-sm text-left">
                                <div className="flex text-brand-yellow-100 mb-2">
                                    {[...Array(5)].map((_, star) => (
                                        <Star key={star} fill="currentColor" className="h-5 w-5" />
                                    ))}
                                </div>
                                <p className="text-gray-800 font-semibold mb-2">
                                    "Incredibly fast response! The plumber fixed our issue in under an hour. Highly recommend."
                                </p>
                                <p className="text-muted-foreground text-sm">- Sarah J, Dublin</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Us Preview Section */}
            <section className="py-20 md:py-28 bg-white">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-brand-primary-100">
                            Your Local Repair Experts
                        </h2>
                        <p className="text-muted-foreground mb-4 text-lg">
                            For over a decade, WEFIX LTD has been the go-to provider for emergency and maintenance services. Our
                            mission is simple: to provide top-quality workmanship and unmatched customer service, ensuring your
                            peace of mind.
                        </p>
                        <p className="text-muted-foreground mb-6">
                            Our certified technicians are equipped with the best tools and a commitment to getting the job done
                            right the first time.
                        </p>
                        <Button className="bg-brand-primary-100" size="lg" asChild>
                            <Link to="/about">Learn More About Us</Link>
                        </Button>
                    </div>
                    <div className="relative h-80">
                        <img
                            src="/map.jpeg?height=400&width=600"
                            alt="Technician working"
                            className="rounded-lg shadow-xl object-cover w-full h-full"
                        />
                    </div>
                </div>
            </section>
        </div>  );
};

export default Index;
