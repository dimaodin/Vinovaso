import { useRef, useEffect } from 'react';
import styles from './Landing.module.scss';
import { motion } from 'framer-motion';
import smoothscroll from 'smoothscroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LandingMobileInfo from './LandingMobileInfo';
import LandingInfo from './LandingInfo';
import { landingTransitions } from './../../page_transitions/services';
import constructRellax from './../../helpers/constructRellax';
import FadeInViewContainer from './../HOC/FadeInViewContainer';
import PropTypes from 'prop-types';

Landing.propTypes = {
    viewport: PropTypes.string,
    navHeight: PropTypes.number.isRequired,
    NAV_SPACER: PropTypes.object,
    refs: PropTypes.objectOf(PropTypes.object).isRequired
}

export default function Landing({ viewport, navHeight, NAV_SPACER, refs }){
    const mobileInfoRef = useRef();
    const bgImgRef = useRef();

    useEffect(() => constructRellax(bgImgRef, { speed: -4 }), [])

    return (
        <motion.section 
            id={styles.Landing}
            style={{ 
                '--bg-color': 'var(--highlight-color-light-less)', 
                '--bg-texture': 'url("/imgs/textures/vintage-speckles.png")'
            }}
        >
            <div ref={bgImgRef} className={styles.imgContainer}/>
            <div className={styles.info}>
                {viewport !== 'mobile' && NAV_SPACER}
                <motion.div
                    className={styles.textContainer}
                    style={{ minHeight: viewport !== 'mobile' ? `calc(100vh - ${navHeight}px` : 'unset' }}
                    variants={landingTransitions.stagger} 
                >
                    {viewport === 'mobile' && <motion.h2 variants={landingTransitions.fadeIn}>תלמדו על</motion.h2>}
                    <motion.h2 variants={landingTransitions.title.boxAndFlower}>
                    <motion.span variants={landingTransitions.fadeIn}>שירותי הדלוקס שלנו.</motion.span>
                    </motion.h2>
                    {viewport !== 'mobile' && <LandingInfo refs={refs} navHeight={navHeight} viewport={viewport}/>}
                    {viewport !== 'mobile' && <motion.div variants={landingTransitions.fadeIn} className={styles.divider}>
                        <img src="/imgs/embellishments/grape-divider.png" alt=""/>
                    </motion.div>}
                </motion.div>
                <div className={styles.iconContainer}> {/* MOBILE ONLY */}
                    <FontAwesomeIcon size='lg' icon={['fas', 'glass-cheers']} style={{ width: '2rem'}} />
                </div>
            </div>
            {viewport === 'mobile' && 
                <LandingMobileInfo 
                    ref={mobileInfoRef} 
                    refs={refs} 
                    navHeight={navHeight} 
                    viewport={viewport}
            />}
        </motion.section>   
    )
}