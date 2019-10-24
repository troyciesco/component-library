import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero, Heading, Button } from "../bruin"

const Services = () => (
	<Layout>
		<SEO title="Services" />
		<Hero headline={<Heading>Hello</Heading>} subline="hellooooo" cta={<Button>Word</Button>} />
		<h1>Hi from Services</h1>
		<p>Welcome to page 2</p>
	</Layout>
)

export default Services
