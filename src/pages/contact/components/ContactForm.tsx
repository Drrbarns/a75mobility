
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const formDataToSend = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d4bpmd6oquaeac4hdtng', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <div className="mb-8">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-[#F29F05]/10 text-[#F29F05] rounded-full text-sm font-semibold">
                  Send Message
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-[#0B1A33] mb-6">
                Get in Touch
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed">
                Ready to transform your mobility experience? Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6" data-readdy-form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#0B1A33] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F29F05] focus:border-transparent text-sm"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#0B1A33] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F29F05] focus:border-transparent text-sm"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#0B1A33] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F29F05] focus:border-transparent text-sm"
                    placeholder="+233 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-[#0B1A33] mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F29F05] focus:border-transparent text-sm"
                    placeholder="Enter company name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-[#0B1A33] mb-2">
                  Service Interest
                </label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F29F05] focus:border-transparent text-sm appearance-none bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="vehicle-purchase">Vehicle Purchase</option>
                    <option value="fleet-management">Fleet Management</option>
                    <option value="charging-infrastructure">Charging Infrastructure</option>
                    <option value="battery-solutions">Battery Solutions</option>
                    <option value="maintenance-support">Maintenance & Support</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                  <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#0B1A33] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F29F05] focus:border-transparent text-sm resize-none"
                  placeholder="Tell us about your mobility needs and how we can help..."
                ></textarea>
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.message.length}/500 characters
                </div>
              </div>

              {/* Submit Status */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <i className="ri-check-circle-line text-green-600 mr-2"></i>
                    <span className="text-green-800">Message sent successfully! We'll get back to you soon.</span>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <i className="ri-error-warning-line text-red-600 mr-2"></i>
                    <span className="text-red-800">Failed to send message. Please try again.</span>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || formData.message.length > 500}
                className="w-full bg-[#F29F05] text-white py-4 rounded-lg font-semibold hover:bg-[#e89004] transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:pl-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#0B1A33] mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#F29F05]/10 rounded-xl flex items-center justify-center mr-4 mt-1">
                    <i className="ri-phone-line text-[#F29F05] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0B1A33] mb-1">Phone</h4>
                    <p className="text-gray-600">+233 503 336 665</p>
                    <p className="text-sm text-gray-500">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#F29F05]/10 rounded-xl flex items-center justify-center mr-4 mt-1">
                    <i className="ri-mail-line text-[#F29F05] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0B1A33] mb-1">Email</h4>
                    <p className="text-gray-600">info@a75mobility.com</p>
                    <p className="text-sm text-gray-500">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#F29F05]/10 rounded-xl flex items-center justify-center mr-4 mt-1">
                    <i className="ri-map-pin-line text-[#F29F05] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0B1A33] mb-1">Address</h4>
                    <p className="text-gray-600">Adabraka. Accra Ghana</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#F29F05]/10 rounded-xl flex items-center justify-center mr-4 mt-1">
                    <i className="ri-time-line text-[#F29F05] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0B1A33] mb-1">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-[#0B1A33] mb-4">Follow Us</h4>
                <div className="flex space-x-3">
                  {[
                    { icon: 'ri-linkedin-fill', href: '#' },
                    { icon: 'ri-facebook-fill', href: '#' },
                    { icon: 'ri-instagram-fill', href: '#' },
                    { icon: 'ri-twitter-x-fill', href: '#' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-[#F29F05]/10 hover:bg-[#F29F05] rounded-lg flex items-center justify-center text-[#F29F05] hover:text-white transition-all cursor-pointer"
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
