import { T } from "gt-next";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-gray-400 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <T>
              <h3 className="text-white font-bold mb-3">BuildRight Hardware</h3>
              <p className="text-sm leading-relaxed">
                Your neighborhood hardware store for tools, lumber, paint, and everything you need for your next project.
              </p>
            </T>
          </div>
          <div>
            <T>
              <h4 className="text-white font-semibold mb-3">Shop</h4>
            </T>
            <ul className="space-y-2 text-sm">
              <li><Link href="/shop?department=tools" className="hover:text-white transition-colors"><T>Tools</T></Link></li>
              <li><Link href="/shop?department=lumber" className="hover:text-white transition-colors"><T>Lumber</T></Link></li>
              <li><Link href="/shop?department=paint" className="hover:text-white transition-colors"><T>Paint</T></Link></li>
              <li><Link href="/shop?department=hardware" className="hover:text-white transition-colors"><T>Hardware</T></Link></li>
            </ul>
          </div>
          <div>
            <T>
              <h4 className="text-white font-semibold mb-3">Resources</h4>
            </T>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guides" className="hover:text-white transition-colors"><T>Project Guides</T></Link></li>
              <li><Link href="/rentals" className="hover:text-white transition-colors"><T>Tool Rental</T></Link></li>
              <li><a href="https://www.familyhandyman.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><T>Family Handyman</T></a></li>
              <li><a href="https://www.thisoldhouse.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><T>This Old House</T></a></li>
            </ul>
          </div>
          <div>
            <T>
              <h4 className="text-white font-semibold mb-3">Store Hours</h4>
              <div className="text-sm space-y-1">
                <p>Monday - Friday: 7:00 AM - 9:00 PM</p>
                <p>Saturday: 8:00 AM - 8:00 PM</p>
                <p>Sunday: 9:00 AM - 6:00 PM</p>
              </div>
              <p className="mt-3 text-sm">123 Builder Lane, Toolville, TX 75001</p>
            </T>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <T>
            <p className="text-sm text-center text-gray-500">
              This is an example application built with{" "}
              <a href="https://generaltranslation.com" target="_blank" rel="noopener noreferrer" className="text-[#E86C00] hover:underline">General Translation</a>
              {" "}to demonstrate internationalization. It is not a real store.
            </p>
          </T>
        </div>
      </div>
    </footer>
  );
}
