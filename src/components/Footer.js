import React from 'react'

const Footer = () => {
	const year = new Date().getFullYear()
	return (
		<div className="footer">
			<p>Designed by <a href="https://www.twitter.com/cur10sDEV" target="_blank" rel="noreferrer">cur10sDEV</a></p>
			<p>Copyright &copy; {year}</p>
		</div>
	)
}

export default Footer