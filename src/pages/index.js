import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { Heading, Text } from "../bruin"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Link to="/account">
			<Text>Account Page</Text>
		</Link>
		<Link to="/colors">
			<Text>Colors Page</Text>
		</Link>
		<Heading>Heading</Heading>
		<Text>Information about Heading.</Text>
		<Heading>Text</Heading>
		<Text>Information about Text.</Text>
		<Heading>Button</Heading>
		<Text>Information about Button.</Text>
		<Heading>Inputs</Heading>
		<Text>Information about Inputs.</Text>
		<Heading>Input Groups</Heading>
		<Text>Information about Input Groups.</Text>
		<Heading>Error Validations</Heading>
		<Text>Information about Error Validations.</Text>
		<Heading>Badges</Heading>
		<Text>Information about Badges.</Text>
		<Heading>Breadcrumbs</Heading>
		<Text>Information about Breadcrumbs.</Text>
		<Heading>Pagination</Heading>
		<Text>Information about Pagination.</Text>
		<Heading>Horizontal Navigation (Tabs)</Heading>
		<Text>Information about Horizontal Navigation (Tabs).</Text>
		<Heading>Vertical Navigation (Sidebars)</Heading>
		<Text>Information about Vertical Navigation (Sidebars).</Text>
		<Heading>Tables</Heading>
		<Text>Information about Tables.</Text>
		<Heading>Sign in Forms</Heading>
		<Text>Information about Sign in Forms.</Text>
		<Heading>Alerts</Heading>
		<Text>Information about Alerts.</Text>
		<Heading>Pricing Pages and Cards</Heading>
		<Text>Information about Pricing Pages and Cards.</Text>
		<Heading>Heros</Heading>
		<Text>Information about Heros.</Text>
		<Heading>Modals</Heading>
		<Text>Information about Modals.</Text>
		<Heading>Navbars</Heading>
		<Text>Information about Navbars.</Text>
		<Heading>Icons</Heading>
		<Text>Information about Icons.</Text>
	</Layout>
)

export default IndexPage
