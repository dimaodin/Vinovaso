import styles from './LandingInfo.module.scss';
import smoothscroll from 'smoothscroll';
import { motion } from 'framer-motion';
import { landingTransitions } from './../../page_transitions/services';
import PropTypes from 'prop-types';

LandingInfo.propTypes = {
    refs: PropTypes.objectOf(PropTypes.object).isRequired,
    navHeight: PropTypes.number.isRequired,
    viewport: PropTypes.string
}

export default function LandingInfo({refs, navHeight, viewport}){
    const scrollAnchorDesktopAdjustment = viewport === 'mobile' ? 0 : navHeight / 2;
    const scrollAnchorDuration = 2000;

    return (
        <motion.div className={styles.infoBlock}
            variants={landingTransitions.info}
        >
            <motion.div variants={landingTransitions.info.children} className={styles.smallHr}/>
            <motion.h3 variants={landingTransitions.info.children}>אנחנו מציעים מגוון של שירותים כדי לשתף את האהבה והתשוקה שלנו ליין 🍷</motion.h3>
            <motion.h4 variants={landingTransitions.info.children}>עם הניסיון שלנו העשיר שלנו, השירותים שאנו מציעים כוללים למידה טכנית, אימונים, ניסויים והפקה מהסרטים. נכין ביחד יין בטעם חדש ובלעדי, או שנעשה לכם אירוע חגיגי באולם יינות הבוטיק שלנו!</motion.h4>
            <motion.p variants={landingTransitions.info.children}><em>אז מה אנחנו מציעים?</em></motion.p>
            <motion.ul variants={landingTransitions.info.children}>
                <li>
                    הכנת יין בוטיק מרהיב <strong>שבלעדי רק לכם</strong>. 
                    <span
                        onClick={() => smoothscroll(refs.yourWine.current.offsetTop - scrollAnchorDesktopAdjustment, scrollAnchorDuration)} 
                        className={styles.scrollAnchor}
                    >קחו אותי 🍸
                    </span>
                </li>
                <li>
                    הפקת בוטיק <strong>לאירוע החגיגי שלכם</strong>. 
                    <span 
                        onClick={() => smoothscroll(refs.event.current.offsetTop - scrollAnchorDesktopAdjustment, scrollAnchorDuration)}
                        className={styles.scrollAnchor}
                    >קחו אותי 🍹
                    </span>
                </li>
                <li>
                    שיעורי יינות <strong>פרטיים עם תעודת סיום</strong>. 
                    <span
                        onClick={() => smoothscroll(refs.vintnerCourse.current.offsetTop - scrollAnchorDesktopAdjustment, scrollAnchorDuration)} 
                        className={styles.scrollAnchor}
                    >קחו אותי 🍾
                    </span>
                </li>
                <li>ועוד המון שירותים בלעדיים!</li>
            </motion.ul>
        </motion.div>
    )
}