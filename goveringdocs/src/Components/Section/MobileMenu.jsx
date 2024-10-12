import { navItems } from "../../lib/Database/Index";
import Logo from "../Common/Logo";

function MobileMenu({ toggleMenu }) {
    return (
        <div className="lg:hidden w-full h-screen bg-white z-50 absolute top-0 left-0 p-8 overflow-y-hidden">
            <div className="flex justify-between">
                <Logo className="text-lg">GoverningDocs</Logo>
                <button
                    onClick={toggleMenu}
                    className="text-black text-2xl self-end"
                    aria-label="Close Menu "
                >
                    &times;
                </button>
            </div>

            <div className="space-y-4 pt-5">
                {navItems.map(({ label, link }, i) => (
                    <li className="list-none" key={i}>
                        <a
                            className="hover:text-primary text-sm transition-colors duration-150"
                            href={link}
                        >
                            {label}
                        </a>
                        <div className="border border-blue-100"></div>
                    </li>
                ))}
            </div>
        </div>
    );
}

export default MobileMenu;
