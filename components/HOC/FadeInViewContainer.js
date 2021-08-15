import React, { useRef } from 'react';
import useInViewFromTop from '../../custom_hooks/useInViewFromTop';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

FadeInViewContainer.propTypes = {
    threshold: PropTypes.number,
    delay: PropTypes.number,
    duration: PropTypes.number,
    animateOnly: PropTypes.bool,
    noFade: PropTypes.bool,
    reverse: PropTypes.bool,
    followParent: PropTypes.bool,
    noTranslate: PropTypes.bool
}

export default function FadeInViewContainer({ threshold, noFade, noTranslate, reverse, animateOnly, delay, duration, children, followParent }) {
    const ref = useRef();
    const containerVariant = {
        animate: {
            overflowY: 'unset'
        },
        initial: {
            overflowY: 'hidden'
        }
    }
    const variants = {
        animate: {
            y: '0%',
            opacity: 1,
            transition: {
                delay: delay ? delay : 0,
                duration: duration ? duration : 1.15,
                ease: [.23, .02, .0, 1.01]
            }
        },
        initial: {
            y: noTranslate ? '0%' : reverse ? '-100%' : '100%',
            opacity: noFade ? 1 : 0,
            transition: {
                duration: .5,
            }
        }
    }

    let animateProp;
    let initialProp;

    if(!animateOnly){
        const inView = useInViewFromTop(ref, { threshold: threshold || .5 })
        animateProp = inView ? 'animate' : 'initial';
        initialProp = null;
    } else {
        animateProp = 'animate';
        initialProp = 'initial';
    }

    if(followParent){
        return (
            <motion.div
                style={{ overflow: 'hidden' }}
            >
                <motion.div style={{ display: 'inline-block'}} variants={variants}>
                    { React.cloneElement(children) } 
                </motion.div>
            </motion.div>
        )
    } else {
        return (
            <motion.div 
                style={{ overflow: 'hidden' }}
                animate={animateProp} 
                initial={initialProp} 
                ref={ref} 
                variant={containerVariant}
            >
                <motion.div style={{ display: 'inline-block' }} variants={variants}>
                    { React.cloneElement(children) } 
                </motion.div>
            </motion.div>
        )
    }

}