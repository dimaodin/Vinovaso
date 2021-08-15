import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './TypeSelection.module.scss';
import { motion } from 'framer-motion';

export default function TypeSelection({ viewport, setFormData, formData, setCurrentProgress }){
    const iconWidth = {
        width: viewport === 'mobile' ? '1.5rem' : '2rem'
    }

    return (
        <motion.ul className={styles.list}>
            <li className={styles.item}
                onClick={() => {
                    setFormData(formData => ({ ...formData, type: 'אירועים'}))
                    setCurrentProgress(2)
                }}
            >
                <FontAwesomeIcon icon={['fas', 'birthday-cake']} style={iconWidth}/>
                <p>אירועים</p>
            </li>
            <li className={styles.item}
                onClick={() => {
                    setFormData(formData => ({ ...formData, type: 'הכנת יין'}))
                    setCurrentProgress(2)
                }}
            >
                <FontAwesomeIcon icon={['fas', 'wine-glass-alt']} style={iconWidth}/>
                <p>הכנת יין</p>
            </li>
            <li className={styles.item}
                onClick={() => {
                    setFormData(formData => ({ ...formData, type: 'אחר'}))
                    setCurrentProgress(2)
                }}
            >
                <FontAwesomeIcon icon={['fas', 'question']} style={iconWidth}/>
                <p>אחר</p>
            </li>
        </motion.ul>
    )
}