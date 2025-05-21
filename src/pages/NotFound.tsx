
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <div className="text-water mb-6">
          <div className="inline-block p-6 rounded-full bg-water/10">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-flow">
              <path d="M12 22c4.97 0 9-4.03 9-9 0-3.13-3.76-7.91-9-13-5.24 5.09-9 9.87-9 13 0 4.97 4.03 9 9 9Z"></path>
            </svg>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900">404</h1>
        <p className="text-xl text-gray-600 mb-6">
          Oops! The page you're looking for couldn't be found.
        </p>
        <Button asChild>
          <Link to="/" className="inline-flex items-center">
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
