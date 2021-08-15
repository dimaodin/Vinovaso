import styles from './Carousel.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { landingTransitions } from './../../page_transitions/about';
import useGetSwipeDirection from './../../custom_hooks/useGetSwipeDirection';
import PropTypes from 'prop-types';

Carousel.propTypes = {
    imgs: PropTypes.array.isRequired,
    viewport: PropTypes.string
}

export default function Carousel({ imgs, viewport }){
    const { mobile: mobileTransitions, desktop: desktopTransitions } = landingTransitions.carousel;

    const [currImg, setCurrImg] = useState({ idx: 1 })
    const [variants, setVariants] = useState(viewport === 'mobile' ? mobileTransitions.inc : desktopTransitions.inc);
    function changeImg(operator){
        if(!['inc', 'dec'].includes(operator)){
            throw ':Required arguement (String) must be either "inc" for addition or "dec" for subtraction. Argument is currently ' + operator + '.';
        }

        viewport !== 'desktop'
            ? setVariants({ ...mobileTransitions[operator], operator: operator })
            : setVariants({ ...desktopTransitions[operator], operator: operator })
        
    }

    //On viewport change, change the img to force layout change
    useEffect(() => changeImg('inc'), [viewport])

    useEffect(() => {
        if(variants.operator === 'dec'){
            if(currImg.idx === 0){
                setCurrImg({ idx: imgs.length - 1 });
            } else {
                setCurrImg(current => ({ idx: current.idx - 1 }));
            }
        } else if (variants.operator === 'inc'){
            if(currImg.idx === imgs.length - 1 ){
                setCurrImg({ idx: 0 });
            } else {
                setCurrImg(current => ({ idx: current.idx + 1 }));
            }
        } else {
            setCurrImg({ idx: 0 })
        }
    }, [variants])

    const [handleDown, handleUp, swipeDirection] = useGetSwipeDirection({ breakOn: viewport === 'desktop' });
    useEffect(() => {
        if(swipeDirection.dir === 'left'){
            changeImg('dec');
        } else if(swipeDirection.dir === 'right'){
            changeImg('inc');
        }
    }, [swipeDirection])

    return (
        <motion.div variants={landingTransitions.carousel} className={styles.carousel}>
            <div className={styles.imgContainer}>
                <AnimatePresence>
                    <motion.img
                        draggable="false"
                        key={imgs[currImg.idx]}
                        id={styles.right} 
                        src={imgs[currImg.idx === 0 ? imgs.length - 1 : currImg.idx - 1]} alt=""
                        initial='initial'
                        animate='animate'
                        exit='exit'
                        variants={variants.rightImg}
                        onMouseDown={handleDown}
                        onTouchStart={handleDown}
                        onMouseUp={handleUp}
                        onTouchEnd={handleUp}
                    />
                </AnimatePresence>
                <AnimatePresence>
                    <motion.img
                        draggable="false"
                        key={imgs[currImg.idx]} 
                        id={styles.shown} 
                        src={imgs[currImg.idx]} alt=""
                        onMouseDown={handleDown}
                        onTouchStart={handleDown}
                        onMouseUp={handleUp}
                        onTouchEnd={handleUp}
                        animate='animate'
                        initial='initial'
                        exit='exit'
                        variants={variants.mainImg}
                    />
                </AnimatePresence>
                <AnimatePresence>
                    <motion.img
                        draggable="false"
                        key={imgs[currImg.idx]} 
                        id={styles.left} 
                        src={imgs[currImg.idx === imgs.length - 1 ? 0 : currImg.idx + 1]} alt=""
                        animate='animate'
                        initial='initial'
                        exit='exit'
                        variants={variants.leftImg}
                        onMouseDown={handleDown}
                        onTouchStart={handleDown}
                        onMouseUp={handleUp}
                        onTouchEnd={handleUp}
                    />
                </AnimatePresence>
            </div>
            <div className={styles.counters}>
                <motion.button 
                    id={styles.UP_LEFT} 
                    className={styles.chevron}
                    onClick={() => changeImg(viewport !== 'desktop' ? 'inc' : 'dec')}
                    whileTap={{ scale: viewport !== 'desktop' ? [1, 4, 1] : 1 }}
                >
                    <FontAwesomeIcon icon={['fa', 'chevron-right']}/>
                </motion.button>
                {imgs.map((img, idx) => (
                    <div 
                        key={img} 
                        style={{ backgroundColor: idx === currImg.idx ? 'var(--highlight-color)' : 'var(--main-color)' }}
                    />
                ))}
                <motion.button 
                    id={styles.DOWN_RIGHT} 
                    className={styles.chevron}
                    onClick={() => changeImg(viewport !== 'desktop' ? 'dec' : 'inc')} 
                    whileTap={{ scale: viewport !== 'desktop' ? [1, 4, 1] : 1 }}   
                >
                    <FontAwesomeIcon icon={['fa', 'chevron-left']}/>
                </motion.button>
            </div>
        </motion.div>
    )
}