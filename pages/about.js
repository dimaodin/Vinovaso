import Head from 'next/head';
import styles from './about.module.scss';
import MoreInfo from '../components/about/MoreInfo';
import Vision from '../components/about/Vision';
import MoreInfoContent from '../components/about/MoreInfoContent';
import SaveEarth from '../components/about/SaveEarth';
import Landing from './../components/about/Landing';
import Quality from './../components/about/Quality';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import useOnAniStartOnlyEntry from './../custom_hooks/useOnAniStartOnlyEntry';
import PropTypes from 'prop-types';

About.propTypes = {
	state: PropTypes.shape({
		viewport: PropTypes.string,
		isNavAniComplete: PropTypes.bool.isRequired,
		navHeight: PropTypes.number.isRequired,
	}),
	NAV_SPACER: PropTypes.object,
};

export default function About({ state: { viewport, isNavAniComplete, navHeight }, NAV_SPACER }) {
	const pageVariant = {
		load_initial: { opacity: 0 },
		load_exit: {
			opacity: 0,
			transition: {
				duration: 0.35,
			},
		},
		load_animate: {
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	};

	const visionRef = useRef();
	const onAniStart = useOnAniStartOnlyEntry();
	return (
		<>
			<Head>
				<title>Vinovaso | עלינו</title>
			</Head>
			<motion.main
				id={styles.About}
				initial='load_initial'
				animate='load_animate'
				exit='load_exit'
				variants={pageVariant}
				onAnimationStart={onAniStart}
			>
				<Landing
					isNavAniComplete={isNavAniComplete}
					NAV_SPACER={NAV_SPACER}
					navHeight={navHeight}
					viewport={viewport}
					visionRef={visionRef}
				/>
				<Vision ref={visionRef} viewport={viewport} />
				<Quality viewport={viewport} />
				<MoreInfoContent />
				<SaveEarth viewport={viewport} />
			</motion.main>
		</>
	);
}
