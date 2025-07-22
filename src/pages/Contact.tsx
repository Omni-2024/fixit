
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin } from 'lucide-react';
import { sendContactEmail } from '@/lib/EmailJs.ts';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!form.service) newErrors.service = 'Service is required';
    if (!form.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');
    const success = await sendContactEmail(form.name, form.email, form.service, form.message);

    if (success) {
      setStatus('success');
      setForm({ name: '', email: '', service: '', message: '' });
    } else {
      setStatus('error');
    }
  };

  return (
      <div>
        {/* Page Header */}
        <div className="bg-brand-primary-100 text-white py-20">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-white">Get In Touch</h1>
            <p className="mt-4 text-lg text-brand-secondary-100">We're here to help, 24/7. Reach out to us anytime.</p>
          </div>
        </div>

        <div className="container py-20">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold font-heading mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-primary-100 p-3 rounded-full text-brand-secondary-50">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Phone</h3>
                    <p className="text-muted-foreground">For emergencies or direct contact.</p>
                    <a href="tel:+353 (86) 8758890" className="text-brand-primary-100 font-medium hover:underline">
                      +353 (86) 8758890
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-primary-100 p-3 rounded-full text-brand-secondary-50">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Email</h3>
                    <p className="text-muted-foreground">For inquiries and quotes.</p>
                    <a href="mailto:contact@wefixltd.com" className="text-brand-primary-100 font-medium hover:underline">
                      contact@wefixltd.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-primary-100 p-3 rounded-full text-brand-secondary-50">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Office Address</h3>
                    <p className="text-brand-primary-100">Lissane East, Clarecastle, Co. Clare</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold font-heading mb-6">Send Us a Message</h2>
              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" value={form.name} onChange={handleChange} placeholder="John Doe" />
                  {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
                  {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                </div>
                <div>
                  <Label htmlFor="service">Service Needed</Label>
                  <Input id="service" value={form.service} onChange={handleChange} placeholder="e.g., Leaky Pipe, AC not cooling" />
                  {errors.service && <p className="text-sm text-red-500">{errors.service}</p>}
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" value={form.message} onChange={handleChange} placeholder="Tell us more about your issue..." />
                  {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                </div>

                <Button type="submit" size="lg" className="w-full bg-brand-primary-100" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Submit Inquiry'}
                </Button>

                {status === 'success' && (
                    <p className="text-green-600 text-sm mt-2">Your message has been sent. We'll get back to you shortly.</p>
                )}
                {status === 'error' && (
                    <p className="text-red-600 text-sm mt-2">Something went wrong. Please try again later.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Contact;
