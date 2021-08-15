import React from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import '../styles/variables.css';
import '../styles/common_styles.scss';
import Body from '../components/common/Body';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fixTimeoutTransition } from './../utils/fixTimeoutTransitions.ts';
library.add(fas, fab);

fixTimeoutTransition(600);

function MyApp({ Component, pageProps, router }) {
	return (
		<>
			<Head>
				<link rel='shortcut icon' href='/favicons/favicon-32x32.png' type='image/png' />
			</Head>
			<Body router={router}>
				<Component {...pageProps} key={router.route} router={router} />
			</Body>
		</>
	);
}

export default MyApp;
