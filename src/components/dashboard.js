import React from "react"
import styled from "styled-components"
import { Sidebar, Alert, Button, Box, Modal, Text } from "../bruin"

const Test = styled.li`
	cursor: pointer;
	transition: all 0.2s ease-out;
	& :hover {
		background-color: ${props => props.theme.colors["primary"]["t3"]};
		border-right: 5px solid ${props => props.theme.colors["primary"]["s3"]};
	}

	& :active {
		background-color: red;
	}
`
const TestTwo = styled.ul``

const Dashboard = () => {
	return (
		<div>
			<Sidebar>
				<TestTwo>
					<Test>one</Test>
					<Test>two</Test>
					<Test>three</Test>
					<Test>four</Test>
				</TestTwo>
			</Sidebar>
			<div style={{ marginLeft: "400px" }}>
				<h1>Hello</h1>
				<Alert />
				<Alert kind="danger" />
				<Alert kind="warning" />
				<Alert kind="info" />
				<Box mar="lg">
					<Modal
						trigger={
							<Button mode="secondary" textMode="neutral" textShade="dark">
								Modal
							</Button>
						}
					>
						<Text>Hi</Text>
					</Modal>
				</Box>
			</div>
		</div>
	)
}

export { Dashboard }
