import { navItems } from "../../lib/Database/Index";
import Container from "../Common/Container";
import Logo from "../Common/Logo";

function Footer() {
    return (
        <>
            <div className="py-24">
                <Container className="w-[1182px] flex justify-between items-center">
                    <Logo className="text">Ai GoverningDocs</Logo>
                    <div className="flex gap-4">
                        {navItems.map(({ label, link }, i) => (
                            <li className="list-none" key={i}>
                                <a
                                    className="hover:text-primary text-sm  transition-colors duration-150"
                                    href={link}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        {socialIcon.map(({ img, url }) => (
                            <a href={url}>
                                <img src={img} />
                            </a>
                        ))}
                    </div>
                </Container>
            </div>
            <div>
                <Container className="w-[1180px]">
                    <hr className="border border-blue-200" />
                    <p className="text-center py-6"> &copy; Ai GoverningDocs 2024. All Rights Reserved.</p>
                </Container>
            </div>
        </>
    );
}

export default Footer;

const socialIcon = [
    {
        img: "Img/Facebook.png",
        url: "https://www.facebook.com",
    },
    {
        img: "Img/twitter.png",
        url: "https://www.facebook.com",
    },
    {
        img: "Img/Linkdin.png",
        url: "https://www.facebook.com",
    },
    {
        img: "Img/Instagram.png",
        url: "https://www.facebook.com",
    },
];
