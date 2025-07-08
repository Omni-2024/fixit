
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Wrench } from "lucide-react";


const navLinks = [
  { to: "/", label: "Home" },
  { to: "/#services", label: "Services" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
];

const Header = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderNavLinks = (isMobile = false) =>
    navLinks.map(({ to, label }) => {
      if (to.startsWith("/#")) {
        const targetId = to.substring(2);
        return (
          <a
            key={label}
            href={to}
            onClick={(e) => handleScroll(e, targetId)}
            className={`transition-colors hover:text-brand-yellow-100 ${
              isMobile ? "block py-2 text-lg" : ""
            }`}
          >
            {label}
          </a>
        );
      }
      return (
        <NavLink
          key={label}
          to={to}
          className={({ isActive }) =>
            `transition-colors hover:text-brand-yellow-100 ${
              isActive ? "text-brand-yellow-100" : ""
            } ${isMobile ? "block py-2 text-lg" : ""}`
          }
        >
          {label}
        </NavLink>
      );
    });

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 font-bold text-xl">
          {/*<Wrench className="h-6 w-6 text-brand-blue-700" />*/}
          <img className="w-1/5" src="/logo.png" alt="Example" />
          {/*<span className="font-heading">WEFIX LTD</span>*/}
        </NavLink>
        <nav className="hidden items-center gap-6 md:flex">
          {renderNavLinks()}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex bg-brand-yellow-100 hover:bg-brand-yellow-100 text-brand-primary-100">
            <a href="tel:+1234567890">Call for Help</a>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 py-6">
                {renderNavLinks(true)}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
