import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import HamburgerMenu from './HamburgerMenu';
import PopUp from './PopUp';
import styles from './Body.module.scss';
import { AnimatePresence } from 'framer-motion';
import navListData from '../../data/navList';
import useViewport from '../../custom_hooks/main_state/useViewport';
import useIsHamburgerMenuOpen from '../../custom_hooks/main_state/useIsHamburgerMenuOpen';
import useNavList from './../../custom_hooks/main_state/useNavList';
import PropTypes from 'prop-types';
import LoadingScreen from './LoadingScreen';

Body.propTypes = {
	children: PropTypes.element.isRequired,
};

export default function Body({ children }) {
	const router = useRouter();
	const viewport = useViewport();
	const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useIsHamburgerMenuOpen(viewport);
	const navList = useNavList(navListData, router);
	const [loadComplete, setLoadComplete] = useState(false); //set to false to enable loading screen
	const [navHeight, setNavHeight] = useState(120);
	const [isNavAniComplete, setIsNavAniComplete] = useState(false);
	const [popup, setPopup] = useState({ isOpen: false, content: {} });

	//Used in index/home page to dictact whether or not to send warning popup
	const [initialVisit, setInitialVisit] = useState(false);

	return (
		<>
			<AnimatePresence>
				{isHamburgerMenuOpen && viewport === 'mobile' && (
					<HamburgerMenu
						navList={navList}
						toggleHBM={() => setIsHamburgerMenuOpen((curr) => !curr)}
						navHeight={navHeight}
						viewport={viewport}
					/>
				)}
			</AnimatePresence>
			<main
				className={`${styles.Body} ${isHamburgerMenuOpen && styles.HBMopen}`}
				style={{ '--navHeight': `${navHeight}px` }}
			>
				<LoadingScreen turnOffLoading={() => setLoadComplete(true)} />
				<AnimatePresence>
					{popup.isOpen && <PopUp key='popup' setPopup={setPopup} popup={popup} />}
				</AnimatePresence>
				<Nav
					render={viewport !== null && loadComplete}
					navList={navList}
					viewport={viewport}
					navHeight={navHeight}
					navHeightCB={(height) => setNavHeight(height)}
					isHamburgerOpen={isHamburgerMenuOpen}
					hamburgerCB={() => setIsHamburgerMenuOpen((curr) => !curr)}
					router={router}
					navAniCompletionCB={() => setIsNavAniComplete(true)}
				/>
				<AnimatePresence exitBeforeEnter>
					{loadComplete &&
						React.cloneElement(children, {
							state: {
								loadComplete: loadComplete,
								viewport: viewport,
								isHamburgerMenuOpen: isHamburgerMenuOpen,
								navList: navList,
								navHeight: navHeight,
								isNavAniComplete: isNavAniComplete,
								setPopup: setPopup,
								setInitialVisit: setInitialVisit,
								initialVisit: initialVisit,
							},
							router: router,
							NAV_SPACER: <div id='NAV_SPACER' style={{ height: navHeight }} />,
						})}
				</AnimatePresence>
				{loadComplete && router.pathname !== '/' && (
					<Footer navList={navList} viewport={viewport} />
				)}
			</main>
		</>
	);
}
