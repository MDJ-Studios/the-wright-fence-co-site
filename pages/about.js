import Layout from "@/components/Layout";
import Head from "next/head";

export default function About() {
	return (
		<>
			<Head>
				<title>About | The Wright Fence Co.</title>
			</Head>
			<Layout>
				<main>
					<div>
						<p>
							This is the about page
						</p>
					</div>
				</main>
			</Layout>
		</>
	);
}