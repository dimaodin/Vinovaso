import styles from './Vision.module.scss';
import ArrowDivider from '../common/ArrowDivider';
import FadeInViewContainer from '../HOC/FadeInViewContainer';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import useInViewFromTop from '../../custom_hooks/useInViewFromTop';
import { visionTransitions } from '../../page_transitions/about';

const Vision = React.forwardRef(({ viewport }, ref) => {
    const textRef = useRef();
    const textInView = useInViewFromTop(textRef, { threshold: 0 })

    return (
        <section id={styles.Vision} ref={ref}>
            <ArrowDivider 
                size={{ value: viewport === 'mobile' ? 1 : 2, measurement: 'rem'}} 
                BGcolor='var(--highlight-color)' 
                border={{size: 1, color: 'rgba(175 ,175, 175)'}}
                z-index={10}
            />  
            <header>
                <img src="/imgs/stock/logos/vinovaso-grape.png" alt="Vinovaso grape"/>
                <FadeInViewContainer threshold={.75}>
                    <h2>The Vision</h2>
                </FadeInViewContainer>
                <FadeInViewContainer>
                    <h3>"החזון שלנו קורה כל יום. הצטרפו אלינו!"</h3>
                </FadeInViewContainer>
                <div className={styles.divider}/>
            </header>
            <motion.div 
                animate={textInView? 'animate' : 'initial'} 
                variants={viewport === 'mobile' ? visionTransitions.blockContainer : null} 
                className={styles.contentContainer}
                ref={textRef}
            >
                <motion.div variants={visionTransitions.textContainer} className={styles.block}>
                    <motion.p variants={visionTransitions.text}>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.</motion.p>
                    <motion.p variants={visionTransitions.text}>הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.</motion.p>
                </motion.div>
                <motion.div variants={visionTransitions.textContainer} className={styles.block}>
                    <motion.p variants={visionTransitions.text}>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.</motion.p>
                    <motion.p variants={visionTransitions.text}>ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.</motion.p>
                </motion.div>
            </motion.div>
        </section>
    )
});

export default Vision;