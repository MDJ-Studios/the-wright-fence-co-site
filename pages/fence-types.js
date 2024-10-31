import Layout from "@/components/Layout";
import Head from "next/head";

import FenceCarousel from "@/components/fence-carousel";
import SectionFenceTypes from "@/components/fence-types-page/content-fence-types";

export default function FenceTypes() {
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
                    <FenceCarousel />
                    <SectionFenceTypes />
                </main>
            </Layout>
        </>
    );
}
