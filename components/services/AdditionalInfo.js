import styles from './AdditionalInfo.module.scss';
import Link from 'next/link';
import FadeInViewContainer from './../HOC/FadeInViewContainer';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

AdditionalInfo.propTypes = {
    textBlocks: PropTypes.arrayOf(PropTypes.shape({
        header: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    })),
    cta: PropTypes.object.isRequired,
    viewport: PropTypes.string   
}

export default function AdditionalInfo({ textBlocks, cta, viewport }){
    return (
        <div className={styles.AdditionalInfo}>
            <div className={styles.textContainer}>
                {textBlocks.map(block => (
                    <div key={block.header} className={styles.textBlock}>
                        <FadeInViewContainer noFade duration={.75}>
                            <h4>{block.header}</h4>
                        </FadeInViewContainer>
                        <FadeInViewContainer noTranslate duration={1.5}>
                            <p>{block.text}</p>
                        </FadeInViewContainer>
                    </div>
                ))}
            </div>
            <div className={styles.CTA}>
                <Link scroll={false} href={cta.href}>
                    <motion.a className='STYLED_BTN' 
                        whileTap={{ scale: viewport !== 'desktop' ? .9 : 1 }}
                    >
                        {cta.text}
                    </motion.a>
                </Link>
            </div>
        </div>
    )
}