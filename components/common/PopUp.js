import styles from './PopUp.module.scss';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

PopUp.propTypes = {
	setPopup: PropTypes.func.isRequired,
	popup: PropTypes.object.isRequired,
};

export default function PopUp({ setPopup, popup }) {
	useEffect(() => {
		document.body.style.overflowY = 'scroll';
		return () => {
			document.body.style.position = '';
		};
	}, []);

	const [content, setContent] = useState({});
	useEffect(() => {
		const errorContent = {
			heading: "We're sorry.",
			text:
				'The website function you are attempting is currently unavailable. This is an issue on our end and will be fixed as soon as possible.',
			img: '/imgs/stock/popup/popup_img.jpg',
			ctaText: 'Close',
			ctaFunc: () => setPopup({ isOpen: false }),
		};
		if (popup.content === 'error' || !popup.content) {
			setContent(errorContent);
		} else {
			setContent(popup.content);
		}
	}, []);

	return (
		<motion.div
			id={styles.PopUp}
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
		>
			<motion.div
				className={styles.container}
				animate={{ y: '-50%', x: '-50%' }}
				initial={{ y: 'calc(-50% + 20px)', x: '-50%' }}
			>
				<div className={styles.popupImg}>
					<img src={content.img} />
				</div>
				<div className={styles.window}>
					<img className={styles.logo} src='/imgs/stock/logos/vinovaso-logo-min.png' />
					<div onClick={() => setPopup({ isOpen: false })} className={styles.closeIcon}>
						<div />
						<div />
					</div>
					<div className={styles.content}>
						<p className={styles.heading}>{content.heading}</p>
						<p className={styles.text}>{content.text}</p>
						<button className='STYLED_BTN' onClick={content.ctaFunc}>
							{content.ctaText}
						</button>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}
