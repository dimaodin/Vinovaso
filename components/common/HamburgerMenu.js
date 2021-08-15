import React from 'react';
import Link from 'next/link';
import styles from './HamburgerMenu.module.scss';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import transitions from './../../page_transitions/hamburgerMenu';

HamburgerMenu.propTypes = {
	navList: PropTypes.array.isRequired,
	navHeight: PropTypes.number.isRequired,
	toggleHBM: PropTypes.func.isRequired,
	viewport: PropTypes.string,
};

export default function HamburgerMenu({ navList, toggleHBM, navHeight, viewport }) {
	const { contactBtnVariant, navItemVariants, stagger } = transitions;

	const navItems = navList.map((item, idx) => (
		<motion.li
			key={item.label}
			className={item.active && styles.active}
			data-label={item.label}
			variants={item.label === 'Contact' ? contactBtnVariant : navItemVariants}
			whileTap={{ scale: viewport !== 'desktop' ? 0.9 : 1 }}
		>
			<Link scroll={false} href={item.href}>
				<a onClick={toggleHBM}>{item.label}</a>
			</Link>
		</motion.li>
	));

	return (
		<motion.nav
			id={styles.HamburgerMenu}
			style={{ '--navHeight': `${navHeight}px` }}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.35 }}
		>
			<motion.ul animate='animate' initial='initial' variants={stagger}>
				{navItems}
			</motion.ul>
		</motion.nav>
	);
}
