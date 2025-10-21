import { Link } from "react-router-dom";

const SiteFooter = () => {
  return (
    <footer className="border-t">
      <div className="container py-6 md:py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Copyright and branding section */}
          <div className="flex flex-col items-center lg:items-start gap-4 order-2 lg:order-1">
            <p className="text-sm text-muted-foreground text-center lg:text-left">
              &copy; {new Date().getFullYear()} Lizzy van Baaren. Alle rechten voorbehouden.
            </p>
            <a 
              href="https://humblestudio.ai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Made by Humble Studio"
            >
              <img 
                src="/lovable-uploads/humblestudio-logo.png" 
                alt="Made by Humble Studio" 
                className="h-14 sm:h-16 md:h-18 w-auto"
              />
            </a>
          </div>
          
          {/* Navigation links */}
          <nav className="flex items-center gap-6 sm:gap-8 order-1 lg:order-2">
            <Link 
              to="/privacy" 
              className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link 
              to="/terms" 
              className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              Voorwaarden
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
