import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="gradient-hero py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-white/90">
              Have questions? We'd love to hear from you. Contact us anytime.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-black text-gray-900 mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-gray-900">Email</div>
                      <a href="mailto:career@geofinda.com" className="text-primary hover:underline">
                        career@geofinda.com
                      </a>
                      <p className="text-sm text-gray-600 mt-1">We typically respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-gray-900">Phone</div>
                      <div className="space-y-1">
                        <a href="tel:+250787678779" className="text-primary hover:underline block">
                          +250 787 678 779
                        </a>
                        <a href="tel:+250793412293" className="text-primary hover:underline block">
                          +250 793 412 293
                        </a>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">Available Monday-Friday, 9am-6pm</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-gray-900">Address</div>
                      <p className="text-gray-700">
                        Nyarugenge, Kigali<br />
                        Rwanda
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="mt-12 pt-12 border-t border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li><a href="/apply" className="text-primary hover:underline">Apply Now</a></li>
                    <li><a href="/programs" className="text-primary hover:underline">Browse Programs</a></li>
                    <li><a href="/faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
                    <li><a href="/partnership" className="text-primary hover:underline">Partnership Opportunities</a></li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-black text-gray-900 mb-6">Send us a Message</h3>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Subject</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Message</label>
                    <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"></textarea>
                  </div>

                  <button type="submit" className="w-full px-4 py-3 bg-gradient-brand text-white font-bold rounded-lg hover:shadow-lg transition-all">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
