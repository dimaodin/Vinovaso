import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './LoadingScreen.module.scss';
import Head from 'next/head';
import PropTypes from 'prop-types';

LoadingScreen.propTypes = {
	turnOffLoading: PropTypes.func.isRequired,
};

export default function LoadingScreen({ turnOffLoading }) {
	const textAnimationDuration = 2.25;
	const loadingScreenExitAnimationDuration = 0.5;

	const textVariants = {
		initial: {
			x: '-50%',
			y: '100%',
		},
		animate: {
			y: ['100%', '-50%', '-50%', '-150%'],
			transition: {
				duration: textAnimationDuration,
				times: [0, 0.45, 0.75, 1],
			},
		},
	};

	const container = {
		animate: {
			transition: {
				staggerChildren: textAnimationDuration * 0.7,
			},
		},
		exit: {
			// scaleY: 0,
			// originY: 'bottom',
			opacity: 0,
			transition: {
				duration: loadingScreenExitAnimationDuration,
			},
		},
	};

	const [isAnimationComplete, setIsAnimationComplete] = useState(false);

	return (
		<>
			<Head>
				<title>ברוכים הבאים לVinovaso.</title>
			</Head>
			<AnimatePresence>
				{!isAnimationComplete && (
					<motion.div
						className={styles.Loadingscreen}
						animate='animate'
						initial='initial'
						exit='exit'
						variants={container}
						onAnimationComplete={() => {
							setIsAnimationComplete(true);
							setTimeout(() => {
								turnOffLoading();
							}, loadingScreenExitAnimationDuration * 1000);
						}}
					>
						<div className={styles.textContainer}>
							<motion.h2 variants={textVariants}>ברוכים הבאים</motion.h2>
							<motion.h2 variants={textVariants}>לVinovaso.</motion.h2>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
