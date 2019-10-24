/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { standard, GlobalStyle } from "../bruin/themes"
import Header from "./header"

const Layout = ({ children }) => {
	return (
		<ThemeProvider theme={standard}>
			<div>
				<GlobalStyle />
				<div style={{ minHeight: "100vh", position: "relative" }}>
					<Header />
					<main theme={standard} style={{ paddingTop: "50px" }}>
						{children}
					</main>
					<footer style={{ position: "absolute", bottom: "0", zIndex: "1000" }}>
						© {new Date().getFullYear()}, Built with
						{` `}
						<a href="https://www.gatsbyjs.org">Gatsby</a> by{" "}
						<a href="https://www.troycies.co">troycies.co</a>
					</footer>
				</div>
			</div>
		</ThemeProvider>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
}

export default Layout
