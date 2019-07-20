import React from 'react'
import { Layout, SEO } from 'Common'
import { Header } from 'Theme'
import { Intro, Services, Projects } from 'Components/landing'
import { Wrapper } from './styles'

export default () => (
	<Layout>
		<SEO />
		<Wrapper>
			<Header />
			<Intro />
		</Wrapper>
		<Services />
		<Projects />
	</Layout>
)
