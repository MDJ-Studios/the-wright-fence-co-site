import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function NavLink({ linkText, path, isScrollLink }) {

    const [router, setRouter] = useState(null);

    useEffect(() => {
        setRouter(useRouter());
    }, []);
    
    const isActive = pathname => router ? router.pathname === pathname : false;

    const linkStyles = {
        borderBottom: isActive(path) ? "2px solid #000" : "none",
        cursor: "pointer",
    };

    return isScrollLink ? (
        <li style={linkStyles}>{linkText}</li>
     ) : ( 
        <li style={linkStyles}>
            <Link href={path}>{linkText}</Link>
        </li>
    );
    
}

export default function Navbar() {
    return (
        <nav>
            <h1>
                <Link href="/">
                    The Wright Fence Co
                </Link>
            </h1>
            <ul>
                <NavLink 
                    linkText="About Us" 
                    path="/about" 
                    isScrollLink={false} 
                />
                <NavLink 
                    linkText="Fence Types" 
                    path="/fence-types" 
                    isScrollLink={false} 
                />
                <NavLink 
                    linkText="Contact"
                    path="#contact" 
                    isScrollLink={true} 
                />
                <NavLink 
                    linkText="Services"
                    path="#services" 
                    isScrollLink={true} 
                />
            </ul>
        </nav>
     );
}  