module.exports = {
	siteMetadata: {
		title: 'Dalton Carr',
		author: 'Dalton Carr',
		description: 'Portfolio'
	},
	plugins: [
		{
			resolve: `gatsby-plugin-postcss`,
			options: {
				postCssPlugins: [ require('tailwindcss') ]
			}
		},
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'gatsby-starter-default',
				short_name: 'starter',
				start_url: '/',
				background_color: '#663399',
				theme_color: '#663399',
				display: 'minimal-ui',
				icon: 'src/images/dlc-icon.png' // This path is relative to the root of the site.
			}
		},
		'gatsby-plugin-sass',
		'gatsby-plugin-offline'
	]
};
