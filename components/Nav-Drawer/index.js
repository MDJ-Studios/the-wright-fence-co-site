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
    backgroundColor: "var(--primary)",
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
        text: "Fence Types",
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

export default function NavDrawer({ navOpen, setNavOpen, isSmallScreen }) {
    return (
        <nav
            className="drawer"
            style={{
                transform: navOpen && isSmallScreen ? "translateX(0)" : "translateX(-1000%)",
                width: isSmallScreen && "100%",
                textAlign: isSmallScreen ? "center" : "left",
                ...navDrawerStyles,
            }}
        >
            {links.map((link, idx) => (
                <Link key={idx} onClick={() => setNavOpen(!navOpen)} style={navitemStyles} href={link.slug}>
                    {link.text}
                </Link>
            ))}
        </nav>
    );
}
