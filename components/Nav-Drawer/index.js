import React from "react";
import Link from "next/link";

const navitemStyles = {
    fontSize: "8vmin",
    textTransform: "uppercase",
    padding: "1.5rem",
    fontWeight: "bold",
    letterSpacing: "0.5rem",
    textDecoration: "none",
    transition: "color 0.80s linear",
    color: "var(--background)",
    cursor: "pointer",
    fontFamily: "var(--font-sans)",
};

const navDrawerStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#000",
    minHeight: "100vh",
    padding: "2rem",
    position: "absolute",
    top: "0",
    left: "0",
    transition: "transform 0.3s ease-in-out",
    zIndex: "2",
};

const links = [
    {
        slug: "/about#about-us",
        text: "About Us",
    },
    {
        slug: "/fence-types#gallery",
        text: "Fences",
    },
    {
        slug: "/#contact",
        text: "Contact",
    },
    {
        slug: "/#services",
        text: "Services",
    },
];

export default function NavDrawer({ isNavOpen, setNavOpen, isMobileScreen }) {
    return (
        <nav
            className="drawer"
            style={{
                transform: isNavOpen && isMobileScreen ? "translateX(0)" : "translateX(-1000%)",
                width: isMobileScreen && "100%",
                textAlign: isMobileScreen ? "center" : "left",
                ...navDrawerStyles,
            }}
        >
            {links.map((link, idx) => (
                <Link key={idx} onClick={() => setNavOpen(!isNavOpen)} style={navitemStyles} href={link.slug}>
                    {link.text}
                </Link>
            ))}
        </nav>
    );
}
