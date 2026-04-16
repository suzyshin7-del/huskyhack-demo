import Link from 'next/link';

export default function Home() {
  return (
    <main className="pt-20">
      <nav className="fixed top-0 w-full z-50 bg-[#001e40] shadow-[0_20px_40px_rgba(0,30,64,0.08)] flex justify-between items-center px-8 h-20 max-w-full">
        <div className="flex items-center gap-8">
          <span className="text-2xl font-bold tracking-tighter text-[#f8be1c] font-['Space_Grotesk'] uppercase">Husky Hack</span>
          <div className="hidden md:flex items-center gap-6">
            <a className="text-[#f8be1c] border-b-2 border-[#f8be1c] pb-1 font-['Space_Grotesk'] tracking-tighter uppercase font-bold transition-all duration-300" href="#">Intro</a>
            <a className="text-white/80 hover:text-white font-['Space_Grotesk'] tracking-tighter uppercase font-bold hover:bg-white/10 transition-all duration-300" href="#">Gallery</a>
            <a className="text-white/80 hover:text-white font-['Space_Grotesk'] tracking-tighter uppercase font-bold hover:bg-white/10 transition-all duration-300" href="#">Contact</a>
          </div>
        </div>
        <Link
          href="/join-us"
          className="bg-secondary-container text-on-secondary-container px-6 py-2 rounded-lg font-['Space_Grotesk'] uppercase font-bold tracking-tighter scale-95 active:scale-90 transition-all hover:bg-white/10"
        >
          Join Us
        </Link>
      </nav>

      <section className="relative min-h-[921px] flex items-center overflow-hidden bg-surface">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-primary-container skew-x-12 translate-x-24 origin-top shadow-2xl" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-secondary-fixed-dim/20 -skew-x-12 -translate-x-12" />
        </div>
        <div className="container mx-auto px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <span className="inline-block bg-secondary-container text-on-secondary-container text-xs font-bold px-4 py-1 rounded-full mb-6 tracking-widest uppercase">October 24-26, 2024</span>
            <h1 className="font-headline text-6xl md:text-8xl font-bold text-primary tracking-tighter leading-tight mb-6">
              BUILD THE <br />
              <span className="text-secondary italic">FUTURE.</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-lg mb-8 leading-relaxed">
              Join 500+ innovators at George Brown College for 48 hours of high-stakes creation. This isn't just a hackathon—it's the Academic Vanguard.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold text-lg hover:underline decoration-secondary decoration-2 underline-offset-4 transition-all">
                Apply to Hack
              </button>
              <button className="text-primary font-bold px-8 py-4 rounded-lg hover:bg-surface-container-high transition-all">
                View Tracks
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl transform rotate-2">
              <img
                alt="Student coding"
                className="w-full h-[500px] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHWjyR2QKTweppZrkm9EhZ7MTggFhd_vjGUQ50QISkydTQWzBumQjHj2DZpbLBLgtJbiRw1GFY-RYiLC2PJZe12bY3DjjoEmCwtDcLjc6poHVDUdZxgBp_8EaMXW3WHSmdZBJ0L-YJOWGPljrhfLXlQw2XVIKAMsraKv4TFVevDWvdzUBNZNmispbyDNT9dJjjZefY8PaM4QG3s61L2TRHDBDfNh6yvCjcquoxUtNv-H8DpM6e3vwOmWTFSKUtRbsr4T1DzDkIEFk"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 z-20 glass-card p-6 rounded-xl shadow-lg border-l-4 border-secondary max-w-[200px]">
              <p className="font-headline font-bold text-primary text-3xl">$10k</p>
              <p className="text-xs uppercase font-bold tracking-widest text-on-surface-variant">In Cash Prizes</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-headline text-4xl font-bold text-primary tracking-tighter uppercase">Innovation Tracks</h2>
              <div className="h-1 w-24 bg-secondary mt-2" />
            </div>
            <p className="text-on-surface-variant max-w-xs text-sm">Choose your domain and compete for track-specific excellence awards.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">
            <div className="md:col-span-2 md:row-span-2 bg-primary p-12 flex flex-col justify-end relative overflow-hidden group">
              <img
                alt="Cybersecurity"
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdtZ7QkXr-pkZd7ovhJ6CV22FkyzaoUwV8OFJsvtpKAS2aaAEGWn-j7SeB1XqpvGAwlrVYRSlMCJgNbWqov3GYK8nLI5jpkPKstdPm7VTqxho7BLmo4Em5jqjuxS5LwjPuQW6wnm-Xp-cU5S2nxB1ujopI9tvoQZzNVxD5e4vSXfNaKcjdsnJbf5CZ1kqZRKB8vMwg9E0yG11m4SYEktQrsLScVX13B_P1zTvwdDbVRC8gHD1lLJSoeJsrpI5-z1yaBeyN7xqlyDU"
              />
              <div className="relative z-10">
                <span className="material-symbols-outlined text-secondary-fixed-dim text-4xl mb-4">security</span>
                <h3 className="font-headline text-3xl font-bold text-white mb-2">Cyber Vanguard</h3>
                <p className="text-white/70 max-w-sm">Secure the future of academic infrastructure and defense systems.</p>
              </div>
            </div>
            <div className="md:col-span-2 bg-surface-container-lowest p-8 flex flex-col justify-center border-l-4 border-secondary transition-all hover:bg-surface-container-highest">
              <div className="flex items-center gap-4 mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">smart_toy</span>
                <h3 className="font-headline text-2xl font-bold text-primary">AI Lab</h3>
              </div>
              <p className="text-on-surface-variant">Leveraging LLMs and machine learning to optimize the student experience.</p>
            </div>
            <div className="md:col-span-1 bg-secondary-container p-8 flex flex-col justify-between group cursor-pointer">
              <span className="material-symbols-outlined text-on-secondary-container text-4xl">payments</span>
              <h3 className="font-headline text-xl font-bold text-on-secondary-container">FinTech</h3>
            </div>
            <div className="md:col-span-1 bg-surface-container-high p-8 flex flex-col justify-between group">
              <span className="material-symbols-outlined text-primary text-4xl">eco</span>
              <h3 className="font-headline text-xl font-bold text-primary">Sustain</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="font-headline text-5xl font-bold text-primary tracking-tighter">500+</p>
              <p className="font-label text-xs uppercase tracking-widest text-secondary font-bold mt-2">Participants</p>
            </div>
            <div className="text-center">
              <p className="font-headline text-5xl font-bold text-primary tracking-tighter">48h</p>
              <p className="font-label text-xs uppercase tracking-widest text-secondary font-bold mt-2">Of Hacking</p>
            </div>
            <div className="text-center">
              <p className="font-headline text-5xl font-bold text-primary tracking-tighter">20+</p>
              <p className="font-label text-xs uppercase tracking-widest text-secondary font-bold mt-2">Mentors</p>
            </div>
            <div className="text-center">
              <p className="font-headline text-5xl font-bold text-primary tracking-tighter">30+</p>
              <p className="font-label text-xs uppercase tracking-widest text-secondary font-bold mt-2">Partners</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-8 flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/3">
            <h2 className="font-headline text-5xl font-bold text-primary tracking-tighter mb-8 leading-none">THE <br />CADENCE.</h2>
            <p className="text-on-surface-variant mb-8">Detailed workshops, keynotes from industry titans, and midnight snack runs. The energy never stops.</p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="text-secondary font-bold font-headline">01</span>
                <div>
                  <p className="font-bold text-primary">Ideation Workshop</p>
                  <p className="text-sm text-on-surface-variant">Friday, 6:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-secondary font-bold font-headline">02</span>
                <div>
                  <p className="font-bold text-primary">Midnight Mocktails</p>
                  <p className="text-sm text-on-surface-variant">Saturday, 12:00 AM</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-secondary font-bold font-headline">03</span>
                <div>
                  <p className="font-bold text-primary">Demo Day Finals</p>
                  <p className="text-sm text-on-surface-variant">Sunday, 2:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-2/3 relative h-[500px]">
            <div className="absolute inset-0 bg-primary rounded-3xl -rotate-2 transform" />
            <div className="absolute inset-4 bg-surface-container-lowest rounded-2xl overflow-hidden shadow-xl">
              <img
                alt="Workshop"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOkG3_KGLg7qfqfADdLexQ52mNqIG9pSlzs2Mbz4sAbnJIgDhZ747oiBo6DuUxRGhg0mWXcWom8HWyLWwdQjYtFJxEOjdf5XuGH7UBO47DKVu3ICvummjRtVWdYM-zTMPxdb6t6J2ULmoJc7ywyNXjJ0wy5Vf-xASeA2NG2F1pp8lA6gaZsENzHUId5dUDE0NM26jD_TBWkWhW5BvJ10dUSGvKET3q22VTZSgn-VpY2V86GRwoiKEP40cM8Dq4RwSSPLQP3TeZWkc"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-8">
          <div className="bg-[#001e40] p-12 md:p-24 rounded-3xl relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-secondary" />
            <h2 className="font-headline text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">READY FOR THE <span className="text-secondary">VANGUARD?</span></h2>
            <p className="text-white/70 text-xl max-w-2xl mx-auto mb-12">Applications close September 30th. Don't miss your chance to redefine the possible.</p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link
                href="/join-us"
                className="bg-secondary-container text-on-secondary-container px-12 py-5 rounded-lg font-headline font-bold text-xl hover:scale-105 transition-transform"
              >
                Join Us Now
              </Link>
              <button className="border-2 border-white/20 text-white px-12 py-5 rounded-lg font-headline font-bold text-xl hover:bg-white/10 transition-all">
                Sponsor Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#fbf8fe] flex flex-col md:flex-row justify-between items-center py-12 px-8 w-full border-t-0">
        <div className="mb-8 md:mb-0">
          <span className="font-['Space_Grotesk'] font-bold text-[#001e40] text-2xl uppercase tracking-tighter">Husky Hack</span>
          <p className="text-[#1b1b1f]/60 font-['Manrope'] text-sm tracking-wide mt-2">© 2024 Husky Hack x George Brown College. Built for the Vanguard.</p>
        </div>
        <div className="flex gap-8">
          <a className="text-[#1b1b1f]/60 hover:text-[#785a00] transition-colors font-['Manrope'] text-sm tracking-wide opacity-80 hover:opacity-100" href="#">Twitter</a>
          <a className="text-[#1b1b1f]/60 hover:text-[#785a00] transition-colors font-['Manrope'] text-sm tracking-wide opacity-80 hover:opacity-100" href="#">LinkedIn</a>
          <a className="text-[#1b1b1f]/60 hover:text-[#785a00] transition-colors font-['Manrope'] text-sm tracking-wide opacity-80 hover:opacity-100" href="#">GitHub</a>
        </div>
      </footer>
    </main>
  );
}
