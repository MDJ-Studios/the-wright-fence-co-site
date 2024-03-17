import Layout from "@/components/Layout";
import Head from "next/head";

import FenceCarousel from "@/components/fence-carousel";
import SectionFenceTypes from "@/components/fence-types-page/content-fence-types";
import Carousel from "@/components/hero-carousel";

export default function FenceTypes() {
    const slides = [
        { image: "/images/board-on-board-with-top-cap-and-trim.png" },
        { image: "/images/board-on-board.png" },
        { image: "/images/chain-link.png" },
        { image: "/images/decks.png" },
        { image: "/images/pipe-fence.png" },
        { image: "/images/pre-stained-cedar.png" },
        { image: "/images/side-by-side.png" },
        { image: "/images/wrought-iron.png" }
    ];
    return (
        <>
            <Head>
                <title>Fence Types | The Wright Fence Co.</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://thewrightfenceco.com/fence-types" />
                <meta name="description" content="Explore the wide range of fence types we offer at The Wright Fence Co, including cedar, wrought iron, pre-stained, pipe, and chain-link fences. Find the perfect blend of beauty, durability, and security for your property." />
                <meta name="keywords" content="cedar fence, wrought iron fence, pre-stained cedar, pipe fence, chain-link fence, privacy fence, durable fencing, aesthetic appeal, The Wright Fence Co" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Fence Types Offered by The Wright Fence Co | Beauty & Durability" />
                <meta property="og:description" content="Discover our selection of high-quality fence types including cedar, wrought iron, and more. Ensure your property's security with style at The Wright Fence Co." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://thewrightfenceco.com/fence-types" />
                <meta property="og:image" content="https://thewrightfenceco.com/board-on-board.png" />

            </Head>
            <Layout>
                <main>
                    <Carousel 
                        slides={slides} 
                        simpleMode={0}  
                        heading="Elevate Your Space with Elegant Boundaries"
                        subheading="Discover the Perfect Blend of Privacy, Style, and Durability"
                        ctaText="See Available Fence Types"
                        ctaLink="gallery"
                    />
                    <SectionFenceTypes />
                </main>
            </Layout>
        </>
    );
}
