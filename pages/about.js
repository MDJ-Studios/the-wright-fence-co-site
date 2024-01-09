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
                {/* TODO: Add meta tags and update website description */}
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <main>
                    <HeroBanner 
                        image="/images/family.jpg" 
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
