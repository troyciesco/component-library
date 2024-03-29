import React from "react"
import styled from "styled-components"
import { Box } from "../Box/Box"

export const ComposedInput = ({ children, ...props }) => {
	return (
		<Box as="input" {...props}>
			{children}
		</Box>
	)
}

ComposedInput.defaultProps = {
	bg: "neutral",
	shade: "none",
	border: "none",
	pad: "xs",
	width: "100%"
}

export const Input = styled(ComposedInput)`
	font-size: 1.6rem;
	font-family: ${props => props.theme.textFontFamily.default};
	border-radius: ${props => props.theme.borderRadius["default"]};
`
