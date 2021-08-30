import { useRef } from 'react';
import styles from './SaveEarth.module.scss';
import { motion } from 'framer-motion';
import FadeInViewContainer from './../HOC/FadeInViewContainer';
import useInViewFromTop from './../../custom_hooks/useInViewFromTop';
import { saveEarthTransitions } from './../../page_transitions/about';
import PropTypes from 'prop-types';

SaveEarth.propTypes = {
    viewport: PropTypes.string
}

export default function SaveEarth({ viewport }){
    return(
        <section id={styles.SaveEarth}>
            <section id={styles.primary}>
                <SectionInfo 
                    viewport={viewport} 
                    img={{
                        src: '/imgs/stock/about_page/save-earth.jpg',
                        alt: 'Vinovaso'
                    }}
                    header='שומרים על איכות הסביבה ביחד.'
                    subheader='אנחנו בVinovaso שואפים להיות חברה בעלת 100% מיחזור חודשי של כלל המוצרים.'
                    textblocks={[{
                        header: '75%',
                        text: 'מכלל מוצרי הצריכה נזרקים במדינת ישראל, בזמן שיש לנו אפשרות למחזר 99% מאותם מוצרים.'
                    },
                    {
                        header: '85%',
                        text: 'מהפלסטיק שנעשה בו שימוש בתחום האירוח הוא לשימוש חד פעמי / לא בשימוש כלל.'
                    }]}
                />
            </section>
            <section id={styles.secondary}>
                <SectionInfo 
                    viewport={viewport} 
                    img={{
                        src: '/imgs/stock/about_page/wine-bottles.jpg',
                        alt: 'Vinovaso'
                    }}
                    header='כל סוג של יין, איכות ללא פשרות'
                    subheader='אנחנו מקדישים ימים כלילות כדי להוציא את הטעמים הכי נפלאים שיש.'
                    textblocks={[{
                        header: ['תהליך הכנת היין שלנו מכיל ', <span key={2} style={{ display: "inline-block"}}>פירות וירקות</span>],
                        text: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף.'
                    },
                    {
                        header: 'מוצרים שלא היה בהם שימוש',
                        text: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף.'
                    }]}
                />
            </section>
        </section>
    )
}

export const SectionInfo = ({ viewport, img, header, subheader, textblocks }) => {
    const headerRef = useRef();
    const headerInView = useInViewFromTop(headerRef)

    const textRef = useRef();
    const textInview = useInViewFromTop(textRef)
    return (
        <div className={styles.contentContainer}>
            <div className={styles.imgContainer}>
                <img src={img.src} alt={img.alt}/>
            </div>
            <div className={styles.info}>
                <header ref={headerRef}>
                    <FadeInViewContainer>
                        <motion.h3>{header}</motion.h3>
                    </FadeInViewContainer>
                    <motion.p 
                        variants={saveEarthTransitions.subHeader} 
                        animate={headerInView ? 'animate' : 'initial'}
                    >
                        {subheader}
                    </motion.p>
                </header>
                <motion.div ref={textRef} animate={textInview ? 'animate' : 'initial'} className={styles.text}>
                    {textblocks.map((block, idx) => (
                        <div key={block.header} className={styles.textContainer}>
                            <FadeInViewContainer delay={viewport !== 'mobile' && idx === 1 ? .2 : 0}>
                                <motion.h4>{block.header}</motion.h4>
                            </FadeInViewContainer>
                            <motion.p variants={saveEarthTransitions.text}>{block.text}</motion.p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}