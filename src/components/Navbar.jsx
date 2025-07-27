import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/meta.jpg";
import { navItems } from "../constants";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const sectionIds = navItems.map((item) => item.href);
  const active = useActiveSection(sectionIds);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const activeNav = "font-bold bg-white/30 backdrop-blur-lg shadow-lg !p-3 rounded-full after:hidden";

  return (
    <nav className="sticky top-0 z-50 py-3 bg-white/30 backdrop-blur-md shadow-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-fit mr-2" src={logo} alt="Logo" />
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index} className="group">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById(item.href);
                    target?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`relative pb-1 text-black transition-all duration-300 ease-in-out after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-black after:left-0 after:bottom-0 after:transition-all after:duration-300 group-hover:after:w-full cursor-pointer ${active === item.href ? activeNav : ""}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-4 items-center">
            <a
              href="#"
              className="bg-white text-black py-2 px-3 rounded-md hover:bg-black hover:text-white transition-colors duration-300"
            >
              Register
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <li key={index} className="group">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.getElementById(item.href);
                      target?.scrollIntoView({ behavior: "smooth" });
                      toggleNavbar();
                    }}
                    className="relative pb-1 text-white transition-all duration-300 ease-in-out after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-300 group-hover:after:w-full cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 mt-4">
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-indigo-500 to-indigo-800"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

export const useActiveSection = (sectionIds) => {
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
};
