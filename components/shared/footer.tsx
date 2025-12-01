import Link from "next/link"
import { Mail, ArrowRight } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0C1518] text-[#8F9FA3] py-16">
      <div className="brand-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
          {/* Left Section - Brand & Description */}
          <div className="md:col-span-3 space-y-6">
            <h2 className="text-2xl font-bold text-white">PWA</h2>
            <p className="text-sm leading-relaxed text-slate-400">
              Lacus rutrum tristique nullam nisl ac tristique. Orci sagittis egestas mi lorem. Quisque lacus consequat
              mauris integer sit ut mattis tempus. Nisi aliquam amet arcu aliquam enim. Eget habitasse mauris netus nibh
              vestibulum egestas dui nisl. Amet sit enim a nisl. Nulla id at nec magna.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-slate-300 transition-colors"
            >
              More about us
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Social Media Icons */}
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white text-slate-950 flex items-center justify-center hover:bg-slate-100 transition-colors font-bold"
                aria-label="X (Twitter)"
              >
                X
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white text-slate-950 flex items-center justify-center hover:bg-slate-100 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white text-slate-950 flex items-center justify-center hover:bg-slate-100 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.84v8.37h2.84v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.84M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Center Section - Navigation Links */}
          <div className="md:col-span-4">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <Link href="#" className="block text-sm hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="#" className="block text-sm hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="block text-sm hover:text-white transition-colors">
                  Terms of Use
                </Link>
              </div>
              <div className="space-y-4">
                <Link href="#" className="block text-sm hover:text-white transition-colors">
                  Smart Budgeting
                </Link>
                <Link href="#" className="block text-sm hover:text-white transition-colors">
                  Voters Education
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section - Contact & Languages */}
          <div className="md:col-span-5 space-y-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Us</h3>
              <a
                href="mailto:hello@logolpsum.com"
                className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                hello@logolpsum.com
              </a>
            </div>

            <div className="text-right">
              <p className="text-xs text-slate-500 mb-2">Languages</p>
              <div className="flex justify-end gap-4">
                <button className="text-sm font-medium text-white hover:text-slate-300 transition-colors">En</button>
                <button className="text-sm text-slate-400 hover:text-white transition-colors">Hs</button>
                <button className="text-sm text-slate-400 hover:text-white transition-colors">Ig</button>
                <button className="text-sm text-slate-400 hover:text-white transition-colors">Yr</button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-slate-800 pt-8">
          <p className="text-center text-xs text-slate-500">
            © {currentYear} — Copyright
            <br />
            All Rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
