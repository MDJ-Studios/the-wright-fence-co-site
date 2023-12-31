import Layout from "@/components/Layout";
import Head from "next/head";

import Carousel from "@/components/hero-carousel";
import SectionFenceTypes from "@/components/fence-types-page/content-fence-types";

export default function FenceTypes() {
    const slides = [{ image: "/images/fence1.jpg" }];
    return (
        <>
            <Head>
                <title>Fence Types | The Wright Fence Co.</title>
                {/* TODO: Add meta tags and update website description */}
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <main>
                    <Carousel slides={slides} simpleMode={1} />
                    <SectionFenceTypes />
                </main>
            </Layout>
        </>
    );
}
