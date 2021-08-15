import { useRef } from 'react';
import styles from './VintnerCourse.module.scss';
import { motion } from 'framer-motion';
import { sectionTransitions } from '../../page_transitions/services';
import useInViewFromTop from '../../custom_hooks/useInViewFromTop';
import AdditionalInfo from './AdditionalInfo';

const VintnerCourse = React.forwardRef(({ viewport }, ref) => {
    const inView = useInViewFromTop(ref, { threshold: .1 });
    const mainImgRef = useRef();
    const mainImgInView = useInViewFromTop(mainImgRef, { threshold: .1 })

    return(
        <section ref={ref} id={styles.VintnerCourse}>
            <div className={styles.contentContainer}>
                <motion.header
                    variants={sectionTransitions.stagger} 
                    animate={inView ? 'animate' : 'initial'} 
                    className={styles.headerContainer}
                >
                    <motion.h2 variants={sectionTransitions.stagger}>
                        <motion.span variants={sectionTransitions.headerVariant}>קורס יינן עם</motion.span>
                        &#160;
                        <motion.span variants={sectionTransitions.headerVariant}>הסמכה מקצועית - </motion.span>
                        <motion.span variants={sectionTransitions.headerVariant}>
                            <span className={styles.emph}>
                                תהפכו את התחביב למקצוע
                                <motion.div 
                                    className={styles.emphUnderline}
                                    variants={sectionTransitions.emphUnderline}
                                />
                            </span>
                        </motion.span>
                    </motion.h2>
                    <motion.p variants={sectionTransitions.headerVariant}>
                    לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם.
                    </motion.p>
                    <motion.p variants={sectionTransitions.headerVariant}>
                    לורם איפסום דולור סיט אמט, קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.
                    </motion.p>
                    <motion.div variants={sectionTransitions.opacity} className={styles.CTA}>
                        <a href='/contact' target='_blank' rel='noopener noreferrer'>
                            <button className='STYLED_BTN'>עוד פרטים!</button>
                        </a>
                    </motion.div>
                </motion.header>
                <div className={styles.gallery}>
                    <motion.div ref={mainImgRef} animate={mainImgInView ? 'animate' : 'initial'} id={styles.main} className={styles.imgContainer}>
                        <motion.img variants={sectionTransitions.mainImgScale} src="/imgs/stock/services_page/winery_course_main.jpg" alt="Vinovaso"/>
                    </motion.div>
                    <div id={styles.secondary} className={styles.imgContainer}>
                        <img src="/imgs/stock/services_page/winery_course_second.jpg" alt="Vinovaso"/>
                    </div>
                </div>
            </div>
            <AdditionalInfo
				textBlocks={[
					{
						text:
							'לורם איפסום דולור סיט אמט, קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק.',
					},
					{
						text:
							'לורם איפסום דולור סיט אמט, קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק.',
					},
				]}
				cta={{
					text: 'יש לי מספר שאלות',
					href: '/contact',
				}}
				viewport={viewport}
			/>
        </section>
    )
});

export default VintnerCourse;