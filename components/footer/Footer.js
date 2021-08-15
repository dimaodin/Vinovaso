import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';
import PropTypes from 'prop-types';
import SocialList from './../nav/SocialList';
import { motion } from 'framer-motion';

Footer.propTypes = {
	navList: PropTypes.array.isRequired,
	viewport: PropTypes.string,
};

export default function Footer({ navList, viewport }) {
	const footerNav = navList.map((link) => (
		<li key={link.label}>
			<Link scroll={false} href={link.href}>
				<a className={link.active ? styles.active : null}>{link.label}</a>
			</Link>
		</li>
	));

	return (
		<footer id={styles.Footer}>
			<div className={styles.CTA_nav_container}>
				<section className={styles.CTA}>
					<h2>
						הכינו את החוויה שלכם{' '}
						<span style={{ display: 'inline-block' }}>היום.</span>
					</h2>
					<p>תמיד חלמתם להוציא יין משלכם? 🍇</p>
					<p>או שאולי רציתם אירוע באולם יינות בוטיק בניחוח אירופאי? 🥐</p>
					<p>תצטרפו למאות לקוחות מרוצים אשר הפיקו אירוע שלא ישכחו 🎉</p>
					<p>והכינו יין שלא טעמו וראו כמותו בארץ! 🚀</p>
					<Link scroll={false} href='/contact'>
						<motion.button
							className='STYLED_BTN'
							whileTap={{ scale: viewport !== 'desktop' ? 0.9 : 1 }}
						>
							<a>בואו נדבר</a>
						</motion.button>
					</Link>
				</section>
				<section className={styles.nav}>
					<ul id={styles.contact} className={styles.nav__section}>
						<li>
							<h3 className={styles.header}>צריכים עזרה?</h3>
						</li>
						<li>
							<p>מיקי כהן</p>
						</li>
						<li>
							<p>מנהל לקוחות</p>
						</li>
						<li>
							<a className={styles.tel} href='tel:054 498 5353'>
							5353 - 498 - 054
							</a>
						</li>
						<li>
							<a className={styles.tel} href='mailto:help@vinovaso.com'>
								help@vinovaso.com
							</a>
						</li>
						<li className={styles.blank}>
							<p>""</p>
						</li>
						<li>
							<p>ליאור בראון</p>
						</li>
						<li>
							<p>מנהל הפקה</p>
						</li>
						<li>
							<a className={styles.tel} href='tel:054 899 2191'>
								2191 - 899 - 054
							</a>
						</li>
						<li>
							<a className={styles.tel} href='mailto:help@vinovaso.com'>
								help@vinovaso.com
							</a>
						</li>
					</ul>
					<ul id={styles.nav} className={styles.nav__section}>
						<li>
							<h3 className={styles.header}>תפריט</h3>
						</li>
						{footerNav}
					</ul>
				</section>
			</div>
			<section className={styles.socialCopyright}>
				<ul className={styles.socialList}>
					<SocialList viewport={viewport} />
				</ul>
				<p>© 2021 Vinovaso, כל הזכויות שמורות.</p>
				<p><a href='https://github.com/dimaodin'>האתר פותח ע"י דימה אודינצוב.</a></p>
			</section>
		</footer>
	);
}
