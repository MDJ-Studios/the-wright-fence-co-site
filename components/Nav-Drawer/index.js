import React from "react";
import Link from "next/link";

const navitemStyles = {
    fontSize: "1.7rem",
    textTransform: "uppercase",
    padding: "1.5rem",
    fontWeight: "bold",
    letterSpacing: "0.5rem",
    textDecoration: "none",
    transition: "color 0.80s linear",
    color: "#ffffff",
    cursor: "pointer",
    fontFamily: "Bernier, Helvetica, cursive",
};

const navDrawerStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#000000",
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
        slug: "/about",
        text: "About Us",
    },
    {
        slug: "/fence-types",
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
