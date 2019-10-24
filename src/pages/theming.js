import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { Test } from "../components/Test"
import SEO from "../components/seo"
import { Heading, Text, Button, Box, Input } from "../bruin"

const StyledHeading = styled(Heading)`
	color: ${props => props.theme.colors.secondary.default};

	${props => props.theme.mqMin.lgMin} {
		color: ${props => props.theme.colors.primary.default};
	}
`
const StyledInput = styled(Input)`
	border-bottom: 1px solid red;
`

const ThemingPage = () => (
	<Layout>
		<SEO title="Home" />
		<StyledHeading>Theming</StyledHeading>
		<Text shade="t4">
			This page is for information about theming. This is what I'd need to consider for each
			project.
		</Text>
		<Heading>Colors and Palletes</Heading>
		<Test />
		<Heading>Spacing</Heading>
		<Heading>Fonts</Heading>
		<Heading>Border Radius</Heading>
		<Heading>Icon Set</Heading>
		<Button size="xs">extra small</Button>
		<Button level="other" size="sm">
			small
		</Button>
		<Button size="md">medium</Button>
		<Button size="lg" level="minor">
			large
		</Button>
		<Box bg="secondary" elevation="1" width="80%" mar="hu">
			<Text color="primaryContrast">Box Works</Text>
		</Box>
		<form style={{ margin: "50px" }}>
			<Input type="text" pad="sm" />
			<StyledInput type="text" pad="sm" />
		</form>
	</Layout>
)

export default ThemingPage
