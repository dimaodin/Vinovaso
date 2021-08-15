import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

SocialList.propTypes = {
    animateOnHover: PropTypes.bool,
    viewport: PropTypes.string
}

export default function SocialList({ animateOnHover, viewport }){
    const variants = {
        hover: {
            y: [2, -4, 2, -4],
            transition: {
                yoyo: Infinity,
                duration: 1.25
            }
        },
        tap: {
            scale: viewport !== 'desktop' ? .95 : 1
        },
        initial: {
            y: 0
        }
    }
    return (
        <>  
            <motion.li
                variants={animateOnHover && variants}
                whileHover='hover'
                whileTap='tap'
                initial='initial'
            >
                <a href='https://www.facebook.com/Vinovaso' target='_blank'>
                    <FontAwesomeIcon icon={['fab', 'facebook']}/>
                </a>
            </motion.li>
            <motion.li
                variants={animateOnHover && variants}
                whileHover='hover'
                whileTap='tap'
                initial='initial'
            >
                <a href='https://www.instagram.com/Vinovaso' target='_blank'>
                    <FontAwesomeIcon icon={['fab', 'instagram']}/>
                </a>
            </motion.li>
            <motion.li
                variants={animateOnHover && variants}
                whileHover='hover'
                whileTap='tap'
                initial='initial'
            >
                <a href='https://twitter.com/Vinovaso' target='_blank'>
                    <FontAwesomeIcon icon={['fab', 'twitter']}/>
                </a>
            </motion.li>
        </>
    )
}