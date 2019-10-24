import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Auth } from "../bruin/composites"
import { Button, Box } from "../bruin"
import { Dashboard } from "../components/dashboard"

const Account = () => {
	const [loggedIn, setLoggedIn] = useState(false)

	return (
		<Layout>
			<div style={{ position: "relative" }}>
				<Box>
					<Button
						style={{
							display: "block",
							margin: "0 auto",
							position: "absolute",
							bottom: "0",
							right: "0"
						}}
						onClick={() => setLoggedIn(!loggedIn)}
					>
						switch
					</Button>
				</Box>
				<SEO title="Account" />
				{loggedIn ? <Dashboard /> : <Auth />}
			</div>
		</Layout>
	)
}

export default Account
