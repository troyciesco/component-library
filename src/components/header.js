import React from "react"
import { Link } from "gatsby"
import { BruinHeader } from "../bruin"

const Header = () => (
	<BruinHeader
		logo={
			<h1>
				<Link to="/">Grayhaber</Link>
			</h1>
		}
	>
		<Link to="/">home</Link>
		<Link to="/theming/">theming</Link>
		<Link to="/colors/">colors</Link>
		<Link to="/account/">account</Link>
	</BruinHeader>
)

export default Header

// const Header = ({ siteTitle }) => (
// 	<header
// 		style={{
// 			background: `rebeccapurple`,
// 			marginBottom: `1.45rem`
// 		}}
// 	>
// 		<div
// 			style={{
// 				margin: `0 auto`,
// 				maxWidth: 960,
// 				padding: `1.45rem 1.0875rem`
// 			}}
// 		>
// 			<h1 style={{ margin: 0 }}>
// 				<Link
// 					to="/"
// 					style={{
// 						color: `white`,
// 						textDecoration: `none`
// 					}}
// 				>
// 					{siteTitle}
// 				</Link>
// 			</h1>
// 			<div>
// 				<Link to="/" style={{ marginRight: "10px", color: "white" }}>
// 					Home
// 				</Link>
// 				<Link to="/about/" style={{ marginRight: "10px", color: "white" }}>
// 					About
// 				</Link>
// 				<Link to="/services/" style={{ marginRight: "10px", color: "white" }}>
// 					Services
// 				</Link>
// 				<Link to="/contact/" style={{ marginRight: "10px", color: "white" }}>
// 					Contact
// 				</Link>
// 			</div>
// 		</div>
// 	</header>
// )

// Header.propTypes = {
// 	siteTitle: PropTypes.string
// }

// Header.defaultProps = {
// 	siteTitle: ``
// }

// export default Header
