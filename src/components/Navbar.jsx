import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full p-4 transition-all backdrop-blur-lg z-100",
        scrolled ? "bg-white/70 shadow-md" : "animated-gradient bg-gradient-to-br from-blue-500 to-[#9F9ABE] "
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center">
        {scrolled ? <img src="/assets/images/bei_logo.png" alt="Logo" className="h-10" /> : <img src="/assets/images/logo_white.png" alt="Logo" className="h-10" />}
          
        </a>
        
      </div>
    </nav>
  );
}