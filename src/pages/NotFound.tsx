import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-3">
        <h1 className="font-display text-5xl">404</h1>
        <p className="text-lg text-muted-foreground">Pagina niet gevonden</p>
        <a href="/" className="story-link inline-block">Terug naar Home</a>
      </div>
    </div>
  );
};

export default NotFound;
