import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Rellax from 'rellax';
import useInViewFromTop from '../../custom_hooks/useInViewFromTop';
import { promiseTransitions } from '../../page_transitions/services';
import styles from './Promise.module.scss';
import ArrowDivider from '../common/ArrowDivider';
import PropTypes from 'prop-types';

const Promise = React.forwardRef(({ viewport }, ref) => {
    const promiseLeftImgRellax = useRef();
    const promiseRightImgRellax = useRef();

    useEffect(() => {
        new Rellax(promiseLeftImgRellax.current, { speed: 1 })
        new Rellax(promiseRightImgRellax.current, { speed: 3 })
    }, [])

    const headerRef = useRef();
    const headerInView = useInViewFromTop(headerRef, { threshold: .1 })

    const promiseCenterImgRef = useRef();
    const inView = useInViewFromTop(promiseCenterImgRef, { threshold: .1 })
    return(
        <motion.section ref={ref} id={styles.Promise}>
            <ArrowDivider size={{value: 1.5, measurement: 'rem'}} border={{size: 1, color: 'var(--main-color-fade-more)'}} BGcolor='var(--highlight-color)'/>
            <motion.div
                ref={headerRef} 
                animate={headerInView ? 'animate' : 'initial'} 
                variants={promiseTransitions.headerContainer} 
                className={styles.headerSection}
            >
                <div style={{ overflow: 'hidden' }}>
                    <motion.h2 variants={promiseTransitions.headerText} className={styles.headerEmp}>ההבטחה שלנו</motion.h2>
                </div>                
                <div style={{ overflow: 'hidden' }}>
                    <motion.h2 variants={promiseTransitions.headerText}>לורם איפסום דולור סיט אמט, קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק.</motion.h2>
                </div>                
                <img src="/imgs/stock/logos/vinovaso-grape.png" alt="Vinovaso Grape"/>
            </motion.div>
            <div className={styles.gallery}>
                <div className={styles.parallaxContainer}>
                    <div ref={promiseLeftImgRellax} id={styles.galleryLeft} className={styles.imgContainer}>
                        <img src="/imgs/stock/services_page/services_promise_2.jpg" alt="Vinovaso Classes"/>
                    </div>
                    <div ref={promiseLeftImgRellax} id={styles.galleryLeftTop} className={styles.imgContainer}>
                        <img src="/imgs/stock/services_page/services_promise_4.jpg" alt="Vinovaso Classes"/>
                    </div>
                    <div 
                        ref={promiseCenterImgRef} 
                        id={styles.galleryCenter} 
                        className={styles.imgContainer}
                    >
                        <img 
                            className={inView ? styles.inView : null} 
                            src="/imgs/stock/services_page/services_promise_1.jpg" 
                            alt="Vinovaso Botanical Bar"
                        />
                        <img ref={promiseCenterImgRef} id={styles.dot_circle} className={styles.embellishment} src='/imgs/embellishments/wine-pour.png' alt="grey dots"/>
                        <img id={styles.dots} className={styles.embellishment} src='/imgs/embellishments/wine-bottle.png' alt="Wine Bottle"/>
                    </div>
                    <div ref={promiseRightImgRellax} id={styles.galleryRight} className={styles.imgContainer}>
                        <img src="/imgs/stock/services_page/services_promise_3.jpg" alt="Vinovaso"/>
                        <img id={styles.dots} className={styles.embellishment} src='/imgs/embellishments/wine-bottle.png' alt="Wine Bottle"/>
                    </div>
                </div>
            </div>
        </motion.section>
    )
})

Promise.propTypes = {
    viewport: PropTypes.string
}

export default Promise;
            