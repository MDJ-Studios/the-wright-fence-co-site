import Layout from "@/components/Layout";
import Head from "next/head";

import HeroBanner from "@/components/hero-banner";
import AboutUs from "@/components/about-page/about-us";

export default function About() {
    const slides = [{ image: "/images/fence1.jpg" }];
    return (
        <>
            <Head>
                <title>About | The Wright Fence Co.</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="canonical" href="https://thewrightfenceco.com/about" />
                <meta
                    name="description"
                    content="Meet Cole Wright, the heart of The Wright Fence Co. Discover our dedication to secure homes, lasting relationships, and quality craftsmanship in fencing and beyond."
                />
                <meta
                    name="keywords"
                    content="Cole Wright, secure homes, lasting relationships, quality craftsmanship, fencing, family-centric business, outdoor living, The Wright Fence Co"
                />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="About | The Wright Fence Co." />
                <meta
                    property="og:description"
                    content="Meet Cole Wright, the heart of The Wright Fence Co. Discover our dedication to secure homes, lasting relationships, and quality craftsmanship in fencing and beyond."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://thewrightfenceco.com/about" />
                <meta property="og:image" content="https://thewrightfenceco.com/images/logo.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:locale" content="en_US" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About | The Wright Fence Co." />
                <meta
                    name="twitter:description"
                    content="Meet Cole Wright, the heart of The Wright Fence Co. Discover our dedication to secure homes, lasting relationships, and quality craftsmanship in fencing and beyond."
                />
                <meta name="twitter:image" content="https://thewrightfenceco.com/images/logo.png" />
            </Head>
            <Layout>
                <main>
                    <HeroBanner
                        image="/images/cole-family.jpeg"
                        heading={
                            <>
                                Crafting More Than Fences <br />
                                We Build Trust
                            </>
                        }
                        subheading="Join Us in Creating Secure Homes and Enduring Bonds"
                        ctaText="Our Story"
                        ctaLink="about-us"
                    />
                    <AboutUs />
                </main>
            </Layout>
        </>
    );
}
