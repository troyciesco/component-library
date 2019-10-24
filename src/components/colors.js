import React, { useContext } from "react"
import { ThemeContext } from "styled-components"

const Colors = () => {
	const themeContext = useContext(ThemeContext)
	const titles = [
		"primary",
		"secondary",
		"tertiary",
		"success",
		"warning",
		"danger",
		"info",
		"neutral"
	]
	const palletes = [
		themeContext.colors.primary,
		themeContext.colors.secondary,
		themeContext.colors.tertiary,
		themeContext.colors.success,
		themeContext.colors.warning,
		themeContext.colors.danger,
		themeContext.colors.info,
		themeContext.colors.neutral
	]
	return (
		<div>
			<h1>Test</h1>
			{palletes.map((pallete, index) => {
				return (
					<div key={index}>
						<h2>{titles[index]}</h2>
						<div>
							{Object.keys(pallete).map(function(name, index) {
								return (
									<div key={index} style={{ backgroundColor: `${pallete[name]}` }}>
										<p>
											{name} is {pallete[name]}
										</p>
									</div>
								)
							})}
						</div>
					</div>
				)
			})}
		</div>
	)
}

export { Colors }
