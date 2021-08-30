import { motion } from 'framer-motion';
import { landingTransitions } from './../../page_transitions/about';
import constructRellax from './../../helpers/constructRellax';
import { useRef, useEffect } from 'react';
import styles from './Landing.module.scss';
import smoothscroll from 'smoothscroll';
import Carousel from './Carousel';
import PropTypes from 'prop-types';

Landing.propTypes = {
	isNavAniComplete: PropTypes.bool.isRequired,
	NAV_SPACER: PropTypes.object.isRequired,
	navHeight: PropTypes.number.isRequired,
	viewport: PropTypes.string,
	storyRef: PropTypes.object.isRequired,
};

//FOR NOW, ALL IMGS MUST BE EXACTLY IDENTICAL IN SIZE TO THE PIXEL
const imgArr = ['bar-img.jpg', 'woman-drinking.jpg', 'restaurant-table.jpg'].map(
	(filename) => `/imgs/stock/about_page/landing_carousel/${filename}`
);

export default function Landing({ isNavAniComplete, NAV_SPACER, navHeight, viewport, storyRef }) {
	const headerRef = useRef();
	useEffect(() => constructRellax(headerRef, { speed: -2 }), []);

	return (
		<motion.section
			style={{ '--navHeight': `${navHeight}px` }}
			animate='animate'
			initial='initial'
			className={styles.Landing}
		>
			{NAV_SPACER}
			<img className={styles.logoBG} src='/imgs/stock/logos/vinovaso-grape.png' alt='Vinovaso Grape' />
			<motion.div className={styles.content} variants={landingTransitions.landingContainer}>
				<motion.header variants={landingTransitions.header} ref={headerRef}>
					<motion.h1 variants={landingTransitions.header.children}>אנחנו</motion.h1>
					<motion.h1 variants={landingTransitions.header.children}>
						Vinovaso.
					</motion.h1>
					<motion.p variants={landingTransitions.header.children}>
						תלמדו על החזון שלנו
					</motion.p>
					<motion.div
						variants={landingTransitions.header.children}
						className={styles.underline}
					/>
					{viewport === 'desktop' && isNavAniComplete && (
						<CTA_BUTTON storyRef={storyRef} navHeight={navHeight} />
					)}
				</motion.header>
				<Carousel imgs={imgArr} viewport={viewport} />
				{viewport !== 'desktop' && isNavAniComplete && (
					<CTA_BUTTON storyRef={storyRef} navHeight={navHeight} viewport={viewport} />
				)}
			</motion.div>
		</motion.section>
	);
}

CTA_BUTTON.propTypes = {
	storyRef: PropTypes.object.isRequired,
	navHeight: PropTypes.number.isRequired,
	viewport: PropTypes.string,
};

export function CTA_BUTTON({ storyRef, navHeight, viewport }) {
	return (
		<motion.div
			animate='animate'
			initial='initial'
			variants={landingTransitions.header.children}
			className={styles.cta}
		>
			<motion.button
				className='STYLED_BTN'
				whileTap={{ scale: viewport !== 'desktop' ? 0.9 : 1 }}
				onClick={() => {
					smoothscroll(storyRef.current.offsetTop - navHeight, 1000);
				}}
			>
				נתחיל במסע
			</motion.button>
		</motion.div>
	);
}
