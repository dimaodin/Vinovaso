import { useRef } from 'react';
import styles from './MoreInfo.module.scss';
import { motion } from 'framer-motion';
import transitions from '../../page_transitions/common';
import useInViewFromTop from './../../custom_hooks/useInViewFromTop';
import { moreInfoTransitions } from './../../page_transitions/about';
import PropTypes from 'prop-types';

MoreInfo.propTypes = {
	name: PropTypes.object.isRequired,
	img: PropTypes.object.isRequired,
	text: PropTypes.arrayOf(PropTypes.string).isRequired,
	quote: PropTypes.string.isRequired,
	reverse: PropTypes.bool,
	quoteColor: PropTypes.string,
};

export default function MoreInfo({ name, img, text, quote, reverse, quoteColor }) {
	const imgRef = useRef();
	const imgInView = useInViewFromTop(imgRef, { threshold: -0.05 });

	const nameContainerRef = useRef();
	const nameInView = useInViewFromTop(nameContainerRef, { threshold: 0.1 });

	return (
		<div id={styles.MoreInfo} className={reverse && styles.reverse}>
			<motion.div
				ref={nameContainerRef}
				className={styles.nameContainer}
				animate={nameInView ? 'animate' : 'initial'}
				variants={moreInfoTransitions.nameContainer}
			>
				<motion.h3 variants={moreInfoTransitions.name}>{name.first}</motion.h3>
				<motion.h3 variants={moreInfoTransitions.name}>{name.last}</motion.h3>
			</motion.div>
			<div ref={imgRef} className={styles.imgContainer} style={{ overflow: 'hidden' }}>
				<motion.img
					variants={transitions.imgScaleIn}
					animate={imgInView ? 'animate' : 'initial'}
					src={img.src}
					alt={img.alt}
				/>
			</div>
			<div className={styles.text}>
				{text.map((textsection) => (
					<p key={textsection}>{textsection}</p>
				))}
				<blockquote style={{ color: quoteColor ? quoteColor : 'var(--secondary-color)' }}>
					{quote}
				</blockquote>
			</div>
		</div>
	);
}
