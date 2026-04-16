import Link from 'next/link';

export default function JoinUs() {
  return (
    <main className="pt-20">
      <nav className="fixed top-0 w-full z-50 bg-[#001e40] shadow-[0_20px_40px_rgba(0,30,64,0.08)] flex justify-between items-center px-8 h-20 max-w-full">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-[#f8be1c] font-['Space_Grotesk'] uppercase">
            Husky Hack
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link className="text-[#f8be1c] border-b-2 border-[#f8be1c] pb-1 font-['Space_Grotesk'] tracking-tighter uppercase font-bold transition-all duration-300" href="/">
              Home
            </Link>
            <a className="text-white/80 hover:text-white font-['Space_Grotesk'] tracking-tighter uppercase font-bold hover:bg-white/10 transition-all duration-300" href="#details">
              Details
            </a>
            <a className="text-white/80 hover:text-white font-['Space_Grotesk'] tracking-tighter uppercase font-bold hover:bg-white/10 transition-all duration-300" href="#schedule">
              Schedule
            </a>
          </div>
        </div>
        <Link
          href="/"
          className="bg-secondary-container text-on-secondary-container px-6 py-2 rounded-lg font-['Space_Grotesk'] uppercase font-bold tracking-tighter scale-95 active:scale-90 transition-all hover:bg-white/10"
        >
          Back Home
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-32 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            className="w-full h-full object-cover"
            alt="Modern collaborative workspace with diverse developers coding together in a bright, tech-focused environment with large windows"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1lUdEQj7tdAKk1I9o4LuIgpBRyPL8hLMUk7IcB33LeXh6DvoyQGEtGIskViDACOdXEq8YyJwGsG6BLldI4859eOGqcZYQrpiae8FHkMsobK773GrsDCK4r7DmFpCe6DBGTFRHs62zXFvTzCLI3dlOj8K_HcLQKrhYApIH-B8sHKa6gNLKeN1q8WsgrBOfJNwF8XUZZkUrGP4Hw8AX6QJ3bkQUx7Wz7vgKS4LOJ6rpc9jvTAE_mEqxdX228NjgpjRNPd8WNKYDCrE"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#001e40] to-[#003366] opacity-80 z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="bg-secondary text-on-primary text-xs font-bold uppercase tracking-widest px-3 py-1 mb-6 inline-block">2024 VANGUARD EDITION</span>
            <h1 className="text-on-primary font-headline text-5xl md:text-7xl font-black tracking-tighter mb-6">
              LEAVE YOUR <span className="text-secondary-fixed-dim">MARK</span>.
            </h1>
            <p className="text-on-primary/80 text-xl md:text-2xl leading-relaxed mb-10 max-w-2xl">
              Join 500+ builders, designers, and visionaries at George Brown College's premier innovation marathon.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join? Bento Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 bg-surface-container-low p-10 rounded-xl relative overflow-hidden group">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">rocket_launch</span>
              <h3 className="font-headline text-3xl font-bold mb-4 text-primary">Why Join Husky Hack?</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
                It's more than a competition. It's an ecosystem designed to accelerate your growth through high-intensity collaboration and industry exposure.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity">
              <img
                className="w-full h-full object-cover"
                alt="Close-up of diverse hands collaborating on a glass surface with colorful sticky notes and architectural sketches"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7RXqNUllAZlDYzdkfFAOX5F9y00Mub4PuWyZnkYbNBY0bVaSGDaIvkruabQJ9KXzW_bU0t1fFHmIdDQvPvFumKURWMO3Pv0ADAqk_OBANBLOE2gl8j-Wr027HFJ15wPSTk3KjOuZVerCdF765AJvKcsyAEHBNFK59gTPz-ApIzl2NxYltNZgAeqK6IBg2BEgT0zxqFon2wAnLrXeMo5Cqo1iP7bww9mOk-KRgaxZcCDuqcBFsOb8bZkhdJgnPdWhrzAb-BGzyb1c"
              />
            </div>
          </div>
          <div className="md:col-span-4 bg-primary text-on-primary p-10 rounded-xl flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-secondary-fixed-dim text-4xl mb-4">groups</span>
              <h4 className="font-headline text-2xl font-bold mb-2">Mentorship</h4>
              <p className="text-on-primary-container">Learn directly from senior engineers at Toronto's top tech firms.</p>
            </div>
          </div>
          <div className="md:col-span-4 bg-secondary-container p-10 rounded-xl flex flex-col justify-between border-l-8 border-secondary">
            <div>
              <span className="material-symbols-outlined text-on-secondary-container text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>trophy</span>
              <h4 className="font-headline text-2xl font-bold mb-2 text-on-secondary-container">Prizes</h4>
              <p className="text-on-secondary-container/80">$15,000+ in total prize pool, including hardware, cash, and internships.</p>
            </div>
          </div>
          <div className="md:col-span-8 bg-surface-container-highest p-10 rounded-xl flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">hub</span>
              <h4 className="font-headline text-2xl font-bold mb-2 text-primary">Networking</h4>
              <p className="text-on-surface-variant">Connect with recruiters and co-founders in our dedicated networking lounge.</p>
            </div>
            <div className="w-full md:w-48 h-32 rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="People talking at a tech conference networking event with soft bokeh lights in the background"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTI-zV5BhrXelxIPgC0G60XEMfT3NVXuYlx66pTHeMt5J5SkszQMzb5kbAn6W2JDECVqMSjt7q1r4eNflZLSMetfCnGSpuOaA9od_RiS9_d3WD4GZegQ0KEKEXTTyuQtRKBvG1jUe_sC6KuPQF94UWzB1Bv0WgGMy-BBmwWy_7tghAg3KmrqOtLN2iOo1rAyrTDK_f6o3bRoLbINiB4P83gaKoo1ntwGgrFWl_M0tr_WSExWKMCe5lyvWUSWwoDH-2_IEDDXCDGAk"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-headline text-4xl md:text-5xl font-black text-primary tracking-tight mb-6">REGISTER NOW</h2>
            <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
              Secure your spot for 48 hours of pure innovation. No experience required—just a passion for building things that matter.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold">1</span>
                <div>
                  <p className="font-bold text-primary">Fill out the form</p>
                  <p className="text-sm text-on-surface-variant">Tell us about yourself and your skills.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold">2</span>
                <div>
                  <p className="font-bold text-primary">Join Discord</p>
                  <p className="text-sm text-on-surface-variant">Once accepted, you'll receive an invite to our server.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold">3</span>
                <div>
                  <p className="font-bold text-primary">Build the Future</p>
                  <p className="text-sm text-on-surface-variant">Arrive on Nov 15 and start hacking!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-surface p-8 md:p-12 rounded-xl shadow-sm border-b-4 border-secondary">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-label">Full Name</label>
                  <input
                    className="w-full bg-surface-container-highest border-none p-4 rounded-lg focus:ring-0 focus:border-b-2 focus:border-primary transition-all"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-label">Email Address</label>
                  <input
                    className="w-full bg-surface-container-highest border-none p-4 rounded-lg focus:ring-0 focus:border-b-2 focus:border-primary transition-all"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-label">School / Institution</label>
                <input
                  className="w-full bg-surface-container-highest border-none p-4 rounded-lg focus:ring-0 focus:border-b-2 focus:border-primary transition-all"
                  placeholder="George Brown College"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-label">Primary Skills</label>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Frontend', 'Backend', 'UX/UI Design', 'AI/ML', 'Business'].map((skill) => (
                    <label key={skill} className="cursor-pointer">
                      <input className="hidden peer" type="checkbox" />
                      <span className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-highest peer-checked:bg-primary peer-checked:text-on-primary transition-colors">
                        {skill}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-label">GitHub / Portfolio (Optional)</label>
                <input
                  className="w-full bg-surface-container-highest border-none p-4 rounded-lg focus:ring-0 focus:border-b-2 focus:border-primary transition-all"
                  placeholder="https://github.com/username"
                  type="url"
                />
              </div>
              <button
                className="w-full bg-secondary-container text-on-secondary-container py-4 rounded-lg font-headline font-black text-xl hover:bg-secondary-fixed transition-all border-b-4 border-secondary active:translate-y-1 active:border-b-0"
                type="submit"
              >
                CONFIRM REGISTRATION
              </button>
              <p className="text-center text-xs text-on-surface-variant">
                By clicking confirm, you agree to our Code of Conduct and Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 overflow-hidden bg-primary text-on-primary">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-headline text-6xl md:text-8xl font-black opacity-10 leading-none select-none mb-[-2rem]">HACK THE FUTURE</h2>
          <div className="relative z-10">
            <h3 className="font-headline text-3xl md:text-5xl font-black mb-8">Ready to start building?</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                className="bg-secondary-fixed-dim text-on-secondary-fixed px-10 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform"
                href="#register"
              >
                Get Started
              </a>
              <a
                className="px-10 py-4 rounded-lg font-bold text-lg border border-on-primary/20 hover:bg-on-primary/10 transition-colors"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
          <h2 className="font-headline text-6xl md:text-8xl font-black opacity-10 leading-none select-none mt-[-2rem]">HACK THE FUTURE</h2>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#001e40]">
        <div className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
          <div className="text-xl font-bold text-[#f8be1c] font-headline">Husky Hack Vanguard</div>
          <div className="flex gap-8">
            <a className="font-['Manrope'] text-sm tracking-wide uppercase font-medium text-[#e4e1e7]/80 hover:text-[#f8be1c] hover:underline decoration-[#f8be1c] decoration-2 underline-offset-4 transition-all" href="#">
              Code of Conduct
            </a>
            <a className="font-['Manrope'] text-sm tracking-wide uppercase font-medium text-[#e4e1e7]/80 hover:text-[#f8be1c] hover:underline decoration-[#f8be1c] decoration-2 underline-offset-4 transition-all" href="#">
              Privacy Policy
            </a>
            <a className="font-['Manrope'] text-sm tracking-wide uppercase font-medium text-[#e4e1e7]/80 hover:text-[#f8be1c] hover:underline decoration-[#f8be1c] decoration-2 underline-offset-4 transition-all" href="#">
              Contact Us
            </a>
          </div>
          <p className="font-['Manrope'] text-sm tracking-wide uppercase font-medium text-[#fbf8fe]">© 2024 George Brown College. Husky Hack Vanguard.</p>
        </div>
      </footer>
    </main>
  );
}