import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SiteHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  // Handle hash navigation with smooth scroll
  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (isHomePage) {
      // Already on home page, just scroll
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to home page with hash
      navigate('/' + hash);
    }
  };

  // Scroll to hash on location change
  useEffect(() => {
    if (location.hash) {
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-muted/10 transition-all duration-300">
      <div className="container mx-auto px-6 lg:px-12 xl:px-16">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <NavLink
            to="/"
            className="font-heading text-xl font-medium text-foreground transition-colors hover:text-primary"
          >
            <div className="text-left">
              <div>Lizzy van Baaren</div>
              <div className="text-sm font-normal text-muted-foreground">Human Design Specialist</div>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#over-mij"
              onClick={(e) => handleHashClick(e, '#over-mij')}
              className="nav-link font-subtitle text-sm font-medium text-foreground transition-colors hover:text-primary cursor-pointer"
            >
              Over
            </a>
            <a
              href="#aanbod"
              onClick={(e) => handleHashClick(e, '#aanbod')}
              className="nav-link font-subtitle text-sm font-medium text-foreground transition-colors hover:text-primary cursor-pointer"
            >
              Aanbod
            </a>
            <a
              href="#reviews"
              onClick={(e) => handleHashClick(e, '#reviews')}
              className="nav-link font-subtitle text-sm font-medium text-foreground transition-colors hover:text-primary cursor-pointer"
            >
              Reviews
            </a>
            <a
              href="#contact"
              onClick={(e) => handleHashClick(e, '#contact')}
              className="nav-link font-subtitle text-sm font-medium text-foreground transition-colors hover:text-primary cursor-pointer"
            >
              Contact
            </a>
            <Button asChild size="sm" variant="default" className="ml-4">
              <NavLink to="/vraag-je-chart-aan">Jouw gratis Human Design Chart</NavLink>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-muted/10 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              <a
                href="#over-mij"
                onClick={(e) => handleHashClick(e, '#over-mij')}
                className="font-subtitle text-sm text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Over
              </a>
              <a
                href="#aanbod"
                onClick={(e) => handleHashClick(e, '#aanbod')}
                className="font-subtitle text-sm text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Aanbod
              </a>
              <a
                href="#reviews"
                onClick={(e) => handleHashClick(e, '#reviews')}
                className="font-subtitle text-sm text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Reviews
              </a>
              <a
                href="#contact"
                onClick={(e) => handleHashClick(e, '#contact')}
                className="font-subtitle text-sm text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Contact
              </a>
              <Button asChild size="sm" variant="default" className="mt-2 self-start">
                <NavLink to="/vraag-je-chart-aan" onClick={() => setMobileMenuOpen(false)}>
                  Jouw gratis Human Design Chart
                </NavLink>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default SiteHeader;
