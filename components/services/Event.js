import React, { useRef, useEffect } from 'react';
import styles from './Event.module.scss';
import { sectionTransitions } from '../../page_transitions/services';
import useInViewFromTop from '../../custom_hooks/useInViewFromTop';
import AdditionalInfo from './AdditionalInfo';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Event = React.forwardRef(({ viewport }, ref) => {
	const headerRef = useRef();
	const headerInView = useInViewFromTop(headerRef);

	const imgRef = useRef();
	const imgInView = useInViewFromTop(imgRef, { threshold: 0.1 });

	return (
		<section ref={ref} id={styles.Event}>
			<div className={styles.bottomBorder} />
			<div className={styles.topBorder} />
			<div className={styles.contentContainer}>
				<motion.header ref={headerRef} animate={headerInView ? 'animate' : 'initial'}>
					<motion.h2 variants={sectionTransitions.stagger}>
						<motion.span variants={sectionTransitions.headerVariant}>תוציאו את המיטב</motion.span>
						&#160;
						<motion.span variants={sectionTransitions.headerVariant}>מהאירוע שלכם: </motion.span>

						<motion.span variants={sectionTransitions.headerVariant}>הפקת דלוקס
							<span className={styles.emph}>
								באולם הבוטיק שלנו.
								<motion.div
									className={styles.emphUnderline}
									variants={sectionTransitions.emphUnderline}
								/>
							</span>
						</motion.span>

					</motion.h2>
					<motion.p variants={sectionTransitions.headerVariant}>
					האירועים בצפון מביאים עמם אווירה מיוחדת וקסומה שלא תשכח זמן רב, באולמי יינות הבוטיק Vinovaso האירוע שלכם יהיה נפלא אפילו יותר, הנכם מוזמנים לגלות מתחם אירועים קלאסי יוצא דופן. בואו לגלות אולם אירועים עם ניהול מקצועי, עיצוב מדהים, וחוויה קולינרית מדהימה.
					</motion.p>
				</motion.header>
				<div className={styles.imgContainer} id={styles.first}>
					<motion.img
						ref={imgRef}
						animate={imgInView ? 'animate' : 'initial'}
						variants={sectionTransitions.mainImgScale}
						src='/imgs/stock/services_page/boutique_event.jpg'
						alt='Vinovaso'
					/>
				</div>
				<div className={styles.imgContainer} id={styles.second}>
					<img
						src='/imgs/stock/services_page/boutique_event_2.jpg'
						alt='Vinovaso'
					/>
					<img className={styles.emb} src='/imgs/embellishments/wine-bottle.png' alt='' />
				</div>
				<div className={styles.desktopText}>
					<h3>
					המקום שלנו התברך בקסם מיוחד. תארו לעצמכם שתוכלו להתחתן במקום הכי פסטורלי בצפון,{' '}
						<span className={styles.emph}>חופה וקבלת פנים </span>
						תחת כיפת השמיים באחד האזורים היפים ביותר בארץ.
					</h3>
				</div>
			</div>
			<AdditionalInfo
				textBlocks={[
					{
						header: 'כותרת ראשונה',
						text:
							'לורם איפסום דולור סיט אמט, קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק.',
					},
					{
						header: 'כותרת ראשונה',
						text:
							'לורם איפסום דולור סיט אמט, קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק.',
					},
				]}
				cta={{
					text: 'האירוע שלי יוצא לדרך',
					href: '/contact',
				}}
				viewport={viewport}
			/>
		</section>
	);
});

Event.propTypes = {
	viewport: PropTypes.string,
};

export default Event;
