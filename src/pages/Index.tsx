
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { ArrowRight, Zap, Droplets, Wrench, Heater, Bug, Wind, ShieldCheck, Star } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: <Heater size={28} />, title: "Heating", description: "Reliable heating and furnace repairs." },
  { icon: <Droplets size={28} />, title: "Plumbing", description: "From leaky faucets to burst pipes." },
  { icon: <Zap size={28} />, title: "Electrics", description: "Safe and certified electrical solutions." },
  { icon: <Bug size={28} />, title: "Pest Control", description: "Effective and discreet pest removal." },
  { icon: <Wind size={28} />, title: "Air Conditioning", description: "AC repair, installation, and maintenance." },
  { icon: <Wrench size={28} />, title: "General Repairs", description: "Handyman services for all your needs." },
];

const Index = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-brand-blue-50 py-20 md:py-32">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4 leading-tight">Fast, Reliable Repairs.</h1>
          <p className="text-lg md:text-xl text-brand-blue-800 max-w-3xl mx-auto mb-8">
            Your trusted partner for 24/7 emergency response and expert maintenance across 12 essential service categories.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-brand-yellow-400 hover:bg-brand-yellow-500 text-brand-blue-900" asChild>
              <a href="#services">Explore Services</a>
            </Button>
            <Button size="lg" variant="outline" className="border-brand-blue-700 text-brand-blue-700 hover:bg-brand-blue-100 hover:text-brand-blue-800" asChild>
              <Link to="/contact">Book Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">Our Core Services</h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">We handle everything from emergencies to routine maintenance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Customer Feedback Section */}
      <section className="bg-brand-blue-50 py-20 md:py-28">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Trusted by Homeowners</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto mb-12">Don't just take our word for it. Here's what our clients say.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm text-left">
                <div className="flex text-brand-yellow-400 mb-2">
                  {[...Array(5)].map((_, star) => <Star key={star} fill="currentColor" className="h-5 w-5" />)}
                </div>
                <p className="text-gray-800 font-semibold mb-2">"Incredibly fast response! The plumber fixed our issue in under an hour. Highly recommend."</p>
                <p className="text-muted-foreground text-sm">- Sarah J, London</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Preview Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Your Local Repair Experts</h2>
            <p className="text-muted-foreground mb-4 text-lg">
              For over a decade, WEFIX LTD has been the go-to provider for emergency and maintenance services. Our mission is simple: to provide top-quality workmanship and unmatched customer service, ensuring your peace of mind.
            </p>
            <p className="text-muted-foreground mb-6">
              Our certified technicians are equipped with the best tools and a commitment to getting the job done right the first time.
            </p>
            <Button size="lg" asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="relative h-80">
            <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop" alt="Technician working on a laptop" className="rounded-lg shadow-xl object-cover w-full h-full" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
