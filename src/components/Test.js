import React, { useContext } from "react"
import { ThemeContext } from "styled-components"

const Test = () => {
	const themeContext = useContext(ThemeContext)
	return <h1>{themeContext.colors.primary.default}</h1>
}

export { Test }
