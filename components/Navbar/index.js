import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Burger from "../Burger-Menu-Button";
import NavDrawer from "../Nav-Drawer";
import styles from "./navbar.module.css";

function NavLink({ linkText, path, isScrollLink }) {
    const router = useRouter();

    const isActive = (pathname) => (router ? router.pathname === pathname : false);

    const linkStyles = {
        borderBottom: isActive(path) ? "2px solid #fff" : "none",
        cursor: "pointer",
    };

    const handleNavigation = (e, destination) => {
        e.preventDefault();

        if (router.pathname === "/" && destination.startsWith("#")) {
            history.pushState(null, null, destination);

            const id = destination.substring(1);
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            router.push("/").then(() => {
                window.location.hash = destination;
            });
        }
    };

    return isScrollLink ? (
        <li style={linkStyles} onClick={(e) => handleNavigation(e, path)}>
            {linkText}
        </li>
    ) : (
        <li style={linkStyles}>
            <Link href={path}>{linkText}</Link>
        </li>
    );
}

export default function Navbar({
    isSmallScreen,
    setIsSmallScreen,
    isSmallerScreen,
    setIsSmallerScreen,
    setNavOpen,
    navOpen,
}) {
    return (
        <nav className={styles.navbar}>
            {/* <h1>
                <Link href="/">The Wright Fence Co</Link>
            </h1> */}
            <Link href="/">
                <Image
                    src="/images/logo_white.svg"
                    alt="The Wright Fence Co Logo"
                    width={150}
                    height={150}
                    priority={true}
                />
            </Link>
            {isSmallScreen || isSmallerScreen ? (
                <Burger navOpen={navOpen} setNavOpen={setNavOpen} />
            ) : (
                <ul>
                    <NavLink linkText="About Us" path="/about#content" isScrollLink={false} />
                    <NavLink linkText="Fence Types" path="/fence-types#gallery" isScrollLink={false} />
                    <NavLink linkText="Contact" path="#contact" isScrollLink={true} />
                    <NavLink linkText="Services" path="#services" isScrollLink={true} />
                    <li><small>Call Us: <a href="tel:1-682-260-9080">(682)<br />260-9080</a></small></li>
                </ul>
            )}
            {navOpen && (
                <NavDrawer
                    isSmallScreen={isSmallScreen}
                    setIsSmallScreen={setIsSmallScreen}
                    setNavOpen={setNavOpen}
                    navOpen={navOpen}
                />
            )}
        </nav>
    );
}
