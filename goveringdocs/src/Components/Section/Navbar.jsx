import { useState } from "react";
import { navItems } from "../../lib/Database/Index";
import Button from "../Common/Button";
import Container from "../Common/Container";
import Logo from "../Common/Logo";
import MobileMenu from "./MobileMenu";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () =>
        setIsMenuOpen((prev) => {
            return !prev;
        });
    return (
        <nav className="py-5 w-full">
            <Container className="lg:w-[1248px] mt-[20px] flex justify-between items-center px-2 sm:px-5 xl:px-[30px] py-2 sm:py-3 xl:py-5 rounded-full bg-white">
                <div>
                    <Logo className="text-[24px] ps-4">GoverningDocs</Logo>
                </div>
                <div className="hidden lg:flex gap-4">
                    {navItems.map(({ label, link }, i) => (
                        <li className="list-none" key={i}>
                            <a
                                className="hover:text-primary text-sm xl:text-base transition-colors duration-150"
                                href={link}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={toggleMenu}
                        className="block lg:hidden text-accent space-y-1"
                    >
                        <span className="block w-6 md:w-8 h-1 rounded-full bg-black"></span>
                        <span className="block w-6 md:w-8 h-1 rounded-full bg-black"></span>
                        <span className="block w-6 md:w-8 h-1 rounded-full bg-black"></span>
                        <span className="xs:hidden md:block w-6 md:w-8 h-1 rounded-full bg-black"></span>
                    </button>
                    <Button className="text-white text-sm md:text-base font-medium">
                        Get Started Today
                    </Button>
                </div>
                {isMenuOpen && <MobileMenu toggleMenu={toggleMenu} />}
            </Container>
        </nav>
    );
}

export default Navbar;
