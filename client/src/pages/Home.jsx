import { Facebook, Instagram, aedin, Twitter } from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0b2e] to-[#130a1c] text-white">
      {/* Navigation */}
      <header className="container mx-auto py-4 px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold">
            CreBFi
          </a>
          <nav className="hidden md:flex ml-10 space-x-6">
            <a href="#" className="text-sm opacity-80 hover:opacity-100">
              Home
            </a>
            <a href="#" className="text-sm opacity-80 hover:opacity-100">
              Features
            </a>
            <a href="#" className="text-sm opacity-80 hover:opacity-100">
              How it works
            </a>
            <a href="#" className="text-sm opacity-80 hover:opacity-100">
              For creators
            </a>
            <a href="#" className="text-sm opacity-80 hover:opacity-100">
              Join Us
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-sm">
            Login
          </a>
          <span>|</span>
          <a href="#" className="text-sm">
            Sign up
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-16 pb-32 text-center relative">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 max-w-3xl mx-auto">
          Experience new
          <br />
          Opportunities with <span className="text-[#3b82f6]">CreBFi</span>
        </h1>
        <p className="text-lg opacity-80 max-w-xl mx-auto mb-8">
          Transform your creativity into cryptocurrency with our web3 platform
        </p>
        <button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-md px-8 py-2">Get Started</button>

        {/* Circular Gradient */}
        <div className="w-full max-w-3xl h-[300px] mx-auto mt-8 relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#3b82f6]/30 to-transparent blur-md"></div>
          <div className="absolute inset-0 rounded-full border border-[#3b82f6]/20"></div>
        </div>

        {/* Partners */}
        <div className="mt-16">
          <p className="text-xs uppercase tracking-wider opacity-60 mb-6">OUR PARTNERS</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-[#1e0e34] rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="opacity-80">
            Empower creators, foster collaborations, ensure transparency, and revolutionize digital content
            monetization.
          </p>
        </div>

        <div className="bg-[#1e0e34] rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="opacity-80">
            CreBFi is a decentralized ecosystem of creators, collaborating creators, and consumers, all benefiting from
            blockchain technology and NFT assets.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-2 text-center">Our Features</h2>
        <p className="text-center opacity-80 mb-12">Discover what CreBFi can do for you</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1e0e34] rounded-xl p-6">
            <div className="mb-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Content reward system</h3>
            <p className="opacity-80">
              Monetize your content with our innovative reward system and receive compensation for your creativity.
            </p>
          </div>

          <div className="bg-[#1e0e34] rounded-xl p-6">
            <div className="mb-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Interactive social features</h3>
            <p className="opacity-80">
              Connect with a thriving creative community, collaborate on projects, and build your network.
            </p>
          </div>

          <div className="bg-[#1e0e34] rounded-xl p-6">
            <div className="mb-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Creators Profile</h3>
            <p className="opacity-80">Create a profile that highlights your skills and showcases your portfolio.</p>
          </div>

          <div className="bg-[#1e0e34] rounded-xl p-6">
            <div className="mb-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Market Place for Service and Assets</h3>
            <p className="opacity-80">
              Explore a dynamic marketplace where you can sell and purchase creative services and digital assets.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-12 text-center">How it works</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1e0e34] rounded-xl p-8">
            <div className="text-5xl font-bold text-gray-400 mb-6">01</div>
            <h3 className="text-xl font-bold mb-3">Create your profile</h3>
            <p className="opacity-80">
              Highlight your skills as a professional creator. Complete your profile with your portfolio and get
              verified.
            </p>
          </div>

          <div className="bg-[#1e0e34] rounded-xl p-8">
            <div className="text-5xl font-bold text-gray-400 mb-6">02</div>
            <h3 className="text-xl font-bold mb-3">Earn Points</h3>
            <p className="opacity-80">
              Generate points by creating engaging content, participating in the community, and completing tasks.
            </p>
          </div>

          <div className="bg-[#1e0e34] rounded-xl p-8">
            <div className="text-5xl font-bold text-gray-400 mb-6">03</div>
            <h3 className="text-xl font-bold mb-3">Market Place</h3>
            <p className="opacity-80">
              Explore a dynamic marketplace where you can sell and purchase creative services, NFTs, use your earned
              points to buy or sell goods, software, or NFT sets.
            </p>
          </div>

          <div className="bg-[#1e0e34] rounded-xl p-8">
            <div className="text-5xl font-bold text-gray-400 mb-6">04</div>
            <h3 className="text-xl font-bold mb-3">Creators profile and skill matching</h3>
            <p className="opacity-80">
              Create a profile that highlights your skills and showcases your portfolio. Our AI system will match you
              with projects and collaborators perfectly suited to your expertise.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-2 text-center">Frequently asked questions</h2>
        <p className="text-center opacity-80 mb-8">Everything you need to know about the product and billing.</p>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          <AccordionItem value="item-1" className="border-b border-gray-700">
            <AccordionTrigger className="text-left py-4">Is there a free trial available?</AccordionTrigger>
            <AccordionContent className="pb-4 opacity-80">
              Yes, you can try our platform for free for 30 days. If you want, we'll provide you with a free,
              personalized 30-minute onboarding call to get you up and running.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-b border-gray-700">
            <AccordionTrigger className="text-left py-4">What payment methods do you accept?</AccordionTrigger>
            <AccordionContent className="pb-4 opacity-80">
              We accept all major credit cards, PayPal, and various cryptocurrencies for payment.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-b border-gray-700">
            <AccordionTrigger className="text-left py-4">What is your refund policy?</AccordionTrigger>
            <AccordionContent className="pb-4 opacity-80">
              We offer a 30-day money-back guarantee for all our plans. If you're not satisfied, just contact our
              support team.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border-b border-gray-700">
            <AccordionTrigger className="text-left py-4">What kind of support do you provide?</AccordionTrigger>
            <AccordionContent className="pb-4 opacity-80">
              We provide 24/7 support via email, live chat, and phone. Our dedicated support team is always ready to
              help.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-[#1e0e34] rounded-xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Take the next step toward optimized &<br />
            streamlined operations.
          </h2>
          <p className="opacity-80 mb-8 max-w-2xl mx-auto">
            Discover how our platform can empower your business. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-md px-8 py-2">Get Started</button>
            <button variant="outline" className="border-white text-white hover:bg-white/10 rounded-md px-8 py-2">
              Login
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-12 text-center">Get In Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center">
            <div>
              <p className="opacity-80 mb-6">
                A good design is not only aesthetically pleasing, but also functional. It should be able to solve a
                problem.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20">
                  <Facebook className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20">
                  <Twitter className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20">
                  <Instagram className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20">
                  <aedin className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#1e0e34] rounded-xl p-6">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full bg-[#130a1c] border border-gray-700 rounded-md p-3 text-white"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full bg-[#130a1c] border border-gray-700 rounded-md p-3 text-white"
                  />
                </div>
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-[#130a1c] border border-gray-700 rounded-md p-3 text-white"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-[#130a1c] border border-gray-700 rounded-md p-3 text-white"
                ></textarea>
              </div>
              <Button className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-md py-3">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CreBFi</h3>
            <p className="opacity-70 text-sm mb-4">We make web3 simple, creative and accessible to everyone.</p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 opacity-70" />
              <Twitter className="w-5 h-5 opacity-70" />
              <Instagram className="w-5 h-5 opacity-70" />
              <aedin className="w-5 h-5 opacity-70" />
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 opacity-70 text-sm">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Works</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Help</h4>
            <ul className="space-y-2 opacity-70 text-sm">
              <li>
                <a href="#">Customer Support</a>
              </li>
              <li>
                <a href="#">Delivery Details</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2 opacity-70 text-sm">
              <li>
                <a href="#">Free eBooks</a>
              </li>
              <li>
                <a href="#">Development Tutorial</a>
              </li>
              <li>
                <a href="#">How to - Blog</a>
              </li>
              <li>
                <a href="#">Youtube Playlist</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Home