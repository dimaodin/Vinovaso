import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import styles from './Nav.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, AnimatePresence } from 'framer-motion';
import transitions from './NavTransitions';
import PropTypes from 'prop-types';
import FadeOnUnmount from '../HOC/FadeOnUnmount';
import SocialList from './SocialList';

Nav.propTypes = {
	render: PropTypes.bool.isRequired,
	isHamburgerOpen: PropTypes.bool.isRequired,
	navList: PropTypes.array.isRequired,
	viewport: PropTypes.oneOf(['mobile', 'tablet', 'desktop', null]),
	hamburgerCB: PropTypes.func.isRequired,
	router: PropTypes.object.isRequired,
	navHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	navHeightCB: PropTypes.func.isRequired,
	navAniCompletionCB: PropTypes.func.isRequired,
};

export default function Nav({
	render,
	navList,
	viewport,
	isHamburgerOpen,
	hamburgerCB,
	router,
	navHeight,
	navHeightCB,
	navAniCompletionCB,
}) {
	//RENDER PROP IS TRUE ONCE INITIAL RENDER IN THE MAIN BODY COMPONENT HAPPENS SO THAT THE WINDOW OBJECT IS ACCESSIBLE TO THIS NAV COMPONENT ON FIRST REAL RENDER
	if (!render) return null;
	const navRef = useRef();

	//DETERMINE WHETHER OR NOT TO HIDE NAV BASED ON SCROLL THRESHOLD VARIABLE
	const [minimizeNav, setMinimizeNav] = useState(false);
	const scrollThreshold = 50;
	useEffect(() => {
		function handleMinimizeNavOnScroll() {
			if (window.scrollY > scrollThreshold && !minimizeNav) {
				setMinimizeNav(true);
			} else if (window.scrollY < scrollThreshold && minimizeNav) {
				setMinimizeNav(false);
			}
		}

		window.addEventListener('scroll', handleMinimizeNavOnScroll);
		return () => window.removeEventListener('scroll', handleMinimizeNavOnScroll);
	}, [minimizeNav, router]);

	//DETERMINE HEIGHT OF FIXED NAV FOR SPACER USAGE
	useEffect(() => {
		setMinimizeNav(false);
		setTimeout(() => {
			navHeightCB(navRef.current.offsetHeight);
		}, 350);
	}, [router]);

	useEffect(() => {
		setTimeout(() => {
			if (!minimizeNav) {
				navHeightCB(navRef.current.offsetHeight);
			}
		}, 350); //SET TO 350MS TO ALLOW NAV TO COMPLETE ANIMATION (FRAMER MOTION DEFAULT OF 350MS) AND THEN CAPTURE NAVHEIGHT
	}, [viewport, minimizeNav]);

	//HIDE NAV UNTIL LOADER ANIMATION IS COMPLETE
	const [initialRenderComplete, setInitialRenderComplete] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setInitialRenderComplete(true);
		}, 3000);
	}, []);

	//These routes will feature white font/logo color
	const whiteList = ['/services'];
	const changeLogoColorVariant = {
		white: {
			animate: {
				opacity: 1,
				transition: {
					duration: 0.5,
					delay: window.scrollY === 0 ? 1 : 0,
				},
			},
			initial: {
				opacity: 0,
				transition: {
					duration: 0.5,
					delay: 1,
				},
			},
			exit: {
				opacity: 0,
				transition: {
					duration: 0.5,
				},
			},
		},
		black: {
			animate: {
				opacity: 1,
				transition: {
					duration: 0.5,
					delay: window.scrollY === 0 ? 1 : 0,
				},
			},
			initial: {
				opacity: 0,
				transition: {
					duration: 0.5,
					delay: 1,
				},
			},
			exit: {
				opacity: 0,
				transition: {
					duration: 0.5,
				},
			},
		},
	};

	return (
		<motion.nav
			id={styles.Nav}
			className={minimizeNav ? styles.min : null}
			data-path={viewport !== 'mobile' ? router.pathname : null}
			data-hbmopen={isHamburgerOpen ? true : false}
			ref={navRef}
			variants={transitions.mainFade}
			initial='hide'
			animate={initialRenderComplete ? 'show' : 'showWithDelay'}
			onAnimationComplete={() => navAniCompletionCB()}
		>
			<FadeOnUnmount unmountIf={viewport === 'mobile' && minimizeNav && !isHamburgerOpen}>
				<motion.div
					className={minimizeNav ? `${styles.brand} ${styles.min}` : styles.brand}
				>
					<Link scroll={false} href='/'>
						{minimizeNav ? (
							<a>
								<img
									id={styles.min}
									src='/imgs/stock/logos/vinovaso-logo-min.png'
									alt='Vinovaso Logo'
								/>
							</a>
						) : (
							<a>
								<AnimatePresence exitBeforeEnter>
									{whiteList.includes(router.pathname) &&
									viewport !== 'mobile' ? (
										<motion.img
											key='white'
											animate='animate'
											initial='initial'
											exit='exit'
											variants={changeLogoColorVariant.white}
											id={styles.full}
											src='/imgs/stock/logos/vinovaso-logo-min.png'
											alt='Vinovaso Logo'
										/>
									) : (
										<motion.img
											key='black'
											animate='animate'
											initial='initial'
											exit='exit'
											variants={changeLogoColorVariant.black}
											id={styles.full}
											src='/imgs/stock/logos/vinovaso-logo-min.png'
											alt='Vinovaso Logo'
										/>
									)}
								</AnimatePresence>
							</a>
						)}
					</Link>
				</motion.div>
			</FadeOnUnmount>
			<FadeOnUnmount unmountIf={viewport === 'mobile'} dontAnimate>
				<motion.ul className={minimizeNav ? `${styles.list} ${styles.min}` : styles.list}>
					{navList.map((item, idx) => (
						<li
							key={item.label}
							className={styles.item}
							data-label={item.label}
							style={{
								'--font-color':
									whiteList.includes(router.pathname) && !minimizeNav
										? 'white'
										: 'var(--main-color)',
								'--icon-color':
									whiteList.includes(router.pathname) && !minimizeNav
										? 'white'
										: 'var(--main-color)',
								'--contact-color':
									whiteList.includes(router.pathname) && !minimizeNav
										? 'white'
										: 'var(--highlight-color)',
							}}
						>
								<Link scroll={false} href={item.href}>
									<a className={item.active ? styles.active : null}>
										{item.label}
									</a>
								</Link>
						</li>
					))}
				</motion.ul>
			</FadeOnUnmount>
			<FadeOnUnmount unmountIf={minimizeNav && !isHamburgerOpen}>
				<motion.ul className={styles.socialList}>
					<SocialList animateOnHover viewport={viewport} />
				</motion.ul>
			</FadeOnUnmount>
			<FadeOnUnmount unmountIf={viewport !== 'mobile'}>
				<motion.button onClick={hamburgerCB} className={styles.hamburgerIcon}>
					<div />
					<div />
					<div />
					<p>תפריט</p>
				</motion.button>
			</FadeOnUnmount>
		</motion.nav>
	);
}
