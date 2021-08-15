import Link from 'next/link';
import styles from './Home.module.scss';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { landingTransitions, headerTransitions } from './../page_transitions/home';
import useOnAniStartOnlyEntry from './../custom_hooks/useOnAniStartOnlyEntry';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

Home.propTypes = {
	state: PropTypes.shape({
		isNavAniComplete: PropTypes.bool.isRequired,
		viewport: PropTypes.string.isRequired,
		setPopup: PropTypes.func.isRequired,
		initialVisit: PropTypes.bool.isRequired,
		setInitialVisit: PropTypes.func.isRequired,
	}),
};

export default function Home({
	state: { isNavAniComplete, viewport, setPopup, initialVisit, setInitialVisit },
}) {
	const headerVariant = headerTransitions.fadeIn;
	const [animationComplete, setAnimationComplete] = useState(false);
	const router = useRouter();
	const onAniStart = useOnAniStartOnlyEntry();

	useEffect(() => {
		if (animationComplete && !initialVisit) {
			if (router.pathname === '/') {
				setPopup({
					isOpen: true,
					content: {
						heading: 'שלום לכם!',
						text: [
							'תמיד חלמתם להוציא יין משלכם? 🍇 ',
							'או שאולי רציתם אירוע באולם יינות בוטיק בניחוח אירופאי? 🥐 ',
							'תצטרפו למאות לקוחות מרוצים אשר הפיקו אירוע שלא ישכחו והכינו יין שלא טעמו וראו כמותו בארץ! 🎉🚀',
						],
						img: '/imgs/stock/popup/popup_img.jpg',
						ctaText: 'אני רוצה לדעת עוד!',
						ctaFunc: () => router.push('/about'),
					},
				});
			}
			setInitialVisit(true);
		}
	}, [animationComplete]);

	return (
		<>
			<Head>
				<title>Vinovaso - יין בוטיק זה כאן</title>
			</Head>
			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
				id={styles.Home}
				onAnimationStart={onAniStart}
			>
				<section className={styles.landing}>
					<motion.section
						animate={isNavAniComplete ? 'animate' : 'initial'}
						initial='initial'
						variants={landingTransitions.staggerContent}
						id={styles.one}
						onAnimationComplete={() => setAnimationComplete(true)}
					>
						<div className={styles.bg} />
						<motion.div variants={landingTransitions.line} className={styles.line} />
						<motion.img
							src='/imgs/stock/logos/vinovaso-grape.png'
							alt='Vinovaso Grape'
							variants={landingTransitions.logo}
							className={styles.logo}
						/>
						<motion.header variants={headerTransitions.staggerHeader}>
							<div style={{ overflow: 'hidden' }}>
								<motion.p variants={headerVariant}>שלום וברוכים הבאים 🥂</motion.p>
							</div>
							<div style={{ overflow: 'hidden' }}>
								<motion.h1 variants={headerVariant}>בוטיק יינות <span>בחוויה אחרת</span>.</motion.h1>
							</div>
							<div style={{ overflow: 'hidden', display: 'inline-block' }}>
								<motion.h2 variants={headerVariant}> אל תחכו,</motion.h2>
							</div>
							<div style={{ overflow: 'hidden', display: 'inline-block' }}>
								<motion.h2 variants={headerVariant} style={{ marginRight: '.5vw' }}>
									{' '} תיכנסו ותתחילו לחוות איתנו 💜
								</motion.h2>
							</div>
							<motion.div
								variants={headerTransitions.staggerHeader}
								className={styles.cta}
							>
								<motion.button
									variants={headerTransitions.fadeIn}
									whileTap={{ scale: viewport !== 'desktop' ? 0.9 : 1 }}
								>
									<Link scroll={false} href='/about'>
										<a className='STYLED_BTN'>מי אנחנו? </a>
									</Link>
								</motion.button>
								<motion.button
									variants={headerTransitions.fadeIn}
									whileTap={{ scale: viewport !== 'desktop' ? 0.9 : 1 }}
								>
									<Link scroll={false} href='/services'>
									<a className='STYLED_BTN'><span>השירותים שלנו!</span></a>
									</Link>

								</motion.button>
							</motion.div>
						</motion.header>
					</motion.section>
				</section>
			</motion.section>
		</>
	);
}
