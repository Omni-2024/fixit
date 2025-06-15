
import { ShieldCheck, Heart, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-brand-blue-950 text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading">About WEFIX LTD</h1>
          <p className="mt-4 text-lg text-brand-blue-200">Your trusted partner in repair and maintenance since 2010.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold font-heading mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded on the principle of providing honest, reliable service, WEFIX LTD started as a small, local plumbing business. Over the years, our reputation for quality and speed grew, allowing us to expand our expertise across 12 essential home and business service categories.
            </p>
            <p className="text-muted-foreground">
              Today, we are proud to be a leading service provider, yet we still hold the same small-business values: treat every customer with respect, provide transparent pricing, and guarantee our work.
            </p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" alt="Circuit board" className="rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold font-heading text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <Heart className="h-12 w-12 mx-auto text-brand-blue-700 mb-4" />
              <h3 className="text-xl font-bold font-heading mb-2">Customer First</h3>
              <p className="text-muted-foreground">We prioritize your needs and satisfaction above all else, ensuring a seamless and positive experience.</p>
            </div>
            <div className="p-6">
              <ShieldCheck className="h-12 w-12 mx-auto text-brand-blue-700 mb-4" />
              <h3 className="text-xl font-bold font-heading mb-2">Quality & Safety</h3>
              <p className="text-muted-foreground">Our certified technicians adhere to the highest standards of quality and safety on every job.</p>
            </div>
            <div className="p-6">
              <Target className="h-12 w-12 mx-auto text-brand-blue-700 mb-4" />
              <h3 className="text-xl font-bold font-heading mb-2">Integrity</h3>
              <p className="text-muted-foreground">We believe in transparent pricing, honest communication, and professional conduct.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
