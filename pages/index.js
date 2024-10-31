import Head from "next/head";
import { Inter } from "next/font/google";

import ServiceOffering from "@/components/main-page/service-offering/";
import Carousel from "@/components/hero-carousel/";
import Contact from "@/components/main-page/contact-us";
import Layout from "@/components/Layout";
import Reviews from "@/components/main-page/review-section";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const slides = [
        { image: "/images/carousel_images/c1.png" },
        { image: "/images/carousel_images/c2.png" },
        { image: "/images/carousel_images/c3.png" },
    ];
    
    return (
        <>
            <Head>
                <title>The Wright Fence Co.</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="canonical" href="https://thewrightfenceco.com" />
                <meta name="description" content="Discover The Wright Fence Co: your partner in premium fencing, staining, decks, and patio covers. Experience craftsmanship with a personal touch for your peace of mind and outdoor beauty." />
                <meta name="keywords" content="fence company, quality fencing, staining services, custom decks, patio covers, outdoor living, secure fencing, family-centric business, craftsmanship, Cole Wright, The Wright Fence Co" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="The Wright Fence Co | Quality Fencing, Decks, and Patio Covers" />
                <meta property="og:description" content="Discover The Wright Fence Co: your partner in premium fencing, staining, decks, and patio covers." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://thewrightfenceco.com" />
                <meta property="og:image" content="https://thewrightfenceco.com/logo.png" />
            </Head>
            <Layout>
                <main className={`${inter.className}`}>
                    <Carousel 
                        slides={slides} 
                        simpleMode={0} 
                        heading={
                            <>
                                Crafting More Than Fences <br />
                                We Build Lasting Connections
                            </>
                        }                        
                        subheading="Secure Your Space with a Touch of Family Warmth and Craftsmanship"
                        ctaText="Learn More"
                        ctaLink="services"    
                    />
                    <ServiceOffering />
                    <Reviews />
                    <Contact />
                </main>
            </Layout>
        </>
    );
}
