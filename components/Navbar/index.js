import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Burger from "../Burger-Menu-Button";
import NavDrawer from "../Nav-Drawer";
import styles from "./navbar.module.css";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    isMobileScreen,
    setNavOpen,
    isNavOpen,
}) {
    return (
        <>
            <nav className={styles.navbar}>
                {isMobileScreen ? (
                    <>
                        <Link className={styles.logoLink} href="/">
                            <Image
                                src="/images/logo.svg"
                                alt="The Wright Fence Co Logo"
                                width={isMobileScreen ? 135 : 150}
                                height={isMobileScreen ? 135 : 150}
                                priority={true}
                            />
                        </Link>
                        <Burger isNavOpen={isNavOpen} setNavOpen={setNavOpen} />
                    </>
                ) : (
                    <>
                        <ul>
                            <NavLink linkText="About Us" path="/about#content" isScrollLink={false} />
                            <NavLink linkText="Fence Types" path="/fence-types#gallery" isScrollLink={false} />
                        </ul>
                        <Link href="/">
                            <Image
                                src="/images/logo.svg"
                                alt="The Wright Fence Co Logo"
                                width={isMobileScreen ? 90 : 150}
                                height={isMobileScreen ? 90 : 150}
                                priority={true}
                            />
                        </Link>
                        <ul>
                            <NavLink linkText="Contact" path="#contact" isScrollLink={true} />
                            <NavLink linkText="Services" path="#services" isScrollLink={true} />
                            <li className="phone"><small><a href="tel:1-682-260-9080"><FontAwesomeIcon icon={faPhone} /> (682)<br />260-9080</a></small></li>
                        </ul>
                    </>
                )}
                {isNavOpen && (
                    <NavDrawer
                        isMobileScreen={isMobileScreen}
                        setNavOpen={setNavOpen}
                        isNavOpen={isNavOpen}
                    />
                )}
            </nav>
            {isMobileScreen && (
                <div className={styles.mobileCallButtonContainer}>
                    <a className={styles.mobileCallButton} href="tel:1-682-260-9080"><FontAwesomeIcon icon={faPhone} /> (682) 260-9080</a>
                </div>
            )}
        </>
    );
}
