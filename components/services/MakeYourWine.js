import styles from './MakeYourWine.module.scss';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { sectionTransitions } from '../../page_transitions/services';
import useInViewFromTop from '../../custom_hooks/useInViewFromTop';
import AdditionalInfo from './AdditionalInfo';
import PropTypes from 'prop-types';

const MakeYourWine = React.forwardRef(({ viewport }, ref) => {
    const headerRef = useRef();
    const headerInView = useInViewFromTop(headerRef, { threshold: .1 });

    return (
        <section id={styles.MakeYourWine} ref={ref}>
            <div ref={headerRef} className={styles.contentContainer}>
                <motion.header animate={headerInView ? 'animate' : 'initial'} initial='initial'>
                    <motion.h2 variants={sectionTransitions.stagger}>
                        <motion.span variants={sectionTransitions.headerVariant}>סדנת הכנת</motion.span>
                        &#160;
                        <motion.span variants={sectionTransitions.headerVariant}>יינות בוטיק</motion.span>
                        &#160;
                        <motion.span variants={sectionTransitions.headerVariant}>איכותיים 
                            <span className={styles.emph}>
                                למותג האישי שלכם.
                                <motion.div 
                                    className={styles.emphUnderline}
                                    variants={sectionTransitions.emphUnderline}
                                />
                            </span>
                        </motion.span>
                    </motion.h2>
                    <motion.p variants={sectionTransitions.headerVariant}>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. </motion.p>
                    <motion.p variants={sectionTransitions.headerVariant}>להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק. הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.</motion.p>
                </motion.header>
                <div className={styles.gallery}>
                    <div id={styles.center} className={styles.imgContainer}>
                        <motion.img 
                            variants={sectionTransitions.mainImgScale} 
                            animate={headerInView ? 'animate' : 'initial'} 
                            src="/imgs/stock/services_page/wine_making_main.jpg" 
                            alt="Vinovaso"
                        />
                    </div>
                    <div id={styles.top} className={styles.imgContainer}>
                        <img className={styles.galleryImg} src="/imgs/stock/services_page/wine_making_second.jpg" alt="Vinovaso"/>
                        <img className={styles.embellishment} src="/imgs/embellishments/wine-salute.png" alt="Wine Salute"/>
                        <p className={styles.desktopText}>היין שלנו זה הטעם והסגנון האישי שלך!</p>
                    </div>
                </div>
            </div>
            <AdditionalInfo 
                textBlocks={[{
                    header: 'כותרת ראשונה',
                    text: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח.'
                }, {
                    header: 'כותרת שנייה',
                    text: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח.'
                }]}
                cta={{
                    text: 'אני רוצה להתחיל!',
                    href: '/contact'
                }}
                viewport={viewport}
            />
        </section>
    )
})

MakeYourWine.propTypes = {
    viewport: PropTypes.string
}

export default MakeYourWine;