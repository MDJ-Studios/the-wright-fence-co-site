import Layout from "@/components/Layout";
import Head from "next/head";

import FenceCarousel from "@/components/fence-carousel";
import SectionFenceTypes from "@/components/fence-types-page/content-fence-types";
import Carousel from "@/components/hero-carousel";

export default function FenceTypes() {
    const slides = [
        { image: "/images/board-on-board-with-top-cap-and-trim.jpg" },
        { image: "/images/board-on-board.jpg" },
        { image: "/images/chain-link.jpg" },
        { image: "/images/decks.jpg" },
        { image: "/images/pipe-fence.jpg" },
        { image: "/images/pre-stained-cedar.jpg" },
        { image: "/images/side-by-side.jpg" },
        { image: "/images/wrought-iron.jpg" },
    ];
    return (
        <>
            <Head>
                <title>Fence Types | The Wright Fence Co.</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://thewrightfenceco.com/fence-types" />
                <meta
                    name="description"
                    content="Explore the wide range of fence types we offer at The Wright Fence Co, including cedar, wrought iron, pre-stained, pipe, and chain-link fences. Find the perfect blend of beauty, durability, and security for your property."
                />
                <meta
                    name="keywords"
                    content="cedar fence, wrought iron fence, pre-stained cedar, pipe fence, chain-link fence, privacy fence, durable fencing, aesthetic appeal, The Wright Fence Co"
                />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Fence Types | The Wright Fence Co." />
                <meta
                    property="og:description"
                    content="Explore the wide range of fence types we offer at The Wright Fence Co, including cedar, wrought iron, pre-stained, pipe, and chain-link fences. Find the perfect blend of beauty, durability, and security for your property."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://thewrightfenceco.com/fence-types" />
                <meta property="og:image" content="https://thewrightfenceco.com/images/logo.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:locale" content="en_US" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Fence Types | The Wright Fence Co." />
                <meta
                    name="twitter:description"
                    content="Explore the wide range of fence types we offer at The Wright Fence Co, including cedar, wrought iron, pre-stained, pipe, and chain-link fences. Find the perfect blend of beauty, durability, and security for your property."
                />
                <meta name="twitter:image" content="https://thewrightfenceco.com/images/logo.png" />
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
