import ArrowDivider from './../common/ArrowDivider';
import { infoTransitions } from './../../page_transitions/about';
import { motion } from 'framer-motion';
import useInViewFromTop from './../../custom_hooks/useInViewFromTop';
import styles from './Quality.module.scss';
import { useRef, useEffect } from 'react';
import FadeInViewContainer from './../HOC/FadeInViewContainer';
import Link from 'next/link';
import PropTypes from 'prop-types';

Quality.propTypes = {
    viewport: PropTypes.string
}

export default function Quality({ viewport }){
    const infoRef = useRef();
    const infoInView = useInViewFromTop(infoRef, { threshold: .25 })

    const imgRef = useRef();
    const imgInView = useInViewFromTop(imgRef, { threshold: -.1 })

    return (
        <section className={styles.Quality}>
            <ArrowDivider 
                size={{ value: viewport === 'mobile' ? 1 : 2, measurement: 'rem'}} 
                BGcolor='#e2dade' 
                border={{size: 1, color: 'rgba(175 ,175, 175)'}} 
            />    
            <div className={styles.contentContainer}>
                <div ref={infoRef} className={styles.text}>
                    <FadeInViewContainer>
                        <h3>זמן זה שם המשחק</h3>
                    </FadeInViewContainer>
                    <motion.p 
                        animate={infoInView ? 'animate' : 'initial'} 
                        variants={infoTransitions.contentContainer.text}
                    >
                        לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט.
                    </motion.p>
                    <Link scroll={false} href='/contact'>
                        <a>
                            <p>צרו איתנו קשר ☚</p>
                            <motion.div 
                                animate={infoInView ? 'animate' : 'initial'}
                                variants={infoTransitions.contentContainer.link} 
                                className={styles.underline}
                            />
                        </a>
                    </Link>
                </div>
                <motion.img
                    ref={imgRef}
                    animate={imgInView ? 'animate' : 'initial'}    
                    variants={infoTransitions.contentContainer.img} 
                    src={`/imgs/stock/about_page/wine-barrel.jpg`} 
                    alt='Vinovaso'
                />
            </div>
            <div className={styles.divider}>
                <img src="/imgs/embellishments/divider.png" alt="line divider"/>
            </div>
        </section>
    )
}