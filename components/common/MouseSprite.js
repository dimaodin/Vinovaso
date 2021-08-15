import styles from './MouseSprite.module.scss';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

MouseSprite.propTypes = {
    clickCB: PropTypes.func.isRequired
}

export default function MouseSprite({ clickCB }){
    return (
        <motion.div onClick={clickCB} className={styles.mouseSprite} whileTap={{ scale: .9 }}>
            <div className={styles.mouseAnimation}/>
        </motion.div>
    )
}