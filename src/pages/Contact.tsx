
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-brand-blue-950 text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white">Get In Touch</h1>
          <p className="mt-4 text-lg text-brand-blue-200">We're here to help, 24/7. Reach out to us anytime.</p>
        </div>
      </div>

      <div className="container py-20">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold font-heading mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand-blue-100 p-3 rounded-full text-brand-blue-700">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <p className="text-muted-foreground">For emergencies or direct contact.</p>
                  <a href="tel:123-456-7890" className="text-brand-blue-700 font-medium hover:underline">123-456-7890</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-brand-blue-100 p-3 rounded-full text-brand-blue-700">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="text-muted-foreground">For inquiries and quotes.</p>
                  <a href="mailto:contact@wefixltd.com" className="text-brand-blue-700 font-medium hover:underline">contact@wefixltd.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-brand-blue-100 p-3 rounded-full text-brand-blue-700">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Office Address</h3>
                  <p className="text-muted-foreground">123 Fixit Lane, Repairtown, RT 54321</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold font-heading mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div>
                <Label htmlFor="service">Service Needed</Label>
                <Input id="service" placeholder="e.g., Leaky Pipe, AC not cooling" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us more about your issue..." />
              </div>
              <Button type="submit" size="lg" className="w-full">Submit Inquiry</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
