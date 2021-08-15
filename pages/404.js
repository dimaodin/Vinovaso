import styles from './404.module.scss';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';
import useOnAniStartOnlyEntry from './../custom_hooks/useOnAniStartOnlyEntry';
import PropTypes from 'prop-types';

FourOhFour.propTypes = {
    NAV_SPACER: PropTypes.element
}

export default function FourOhFour({ NAV_SPACER }){
    const onAniStart = useOnAniStartOnlyEntry();

    return (
        <>
        <Head>
            <title>Vinovaso | 404</title>
        </Head>
        <motion.section 
            exit={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            initial={{ opacity: 0 }} 
            transition={{ duration: .5 }}
            id={styles['_404']}
            onAnimationStart={onAniStart}
        >
            {NAV_SPACER}
            <header>
                <h1><span>אנחנו שונאים זכוכית שבורה.</span><span>זה מבאס כמו לינקים שבורים, <span style={{ display: 'inline-block'}}>אותו הדבר.</span></span></h1>
                <h2>אם אתם בטוחים שהלינק תקין, כנראה שמשהו לא בסדר אצלנו. בבקשה תיצרו קשר במייל הבא <a href='mailto:help@vinovaso.com'>help@vinovaso.com</a> אם זה דחוף, או שתבדקו את הלינק שוב עוד מעט. בינתיים, תשתו כוס יין טובה ותירגעו 😉🤞</h2>
            </header>
            <div className={styles.imgContainer}>
                <img src="/imgs/stock/404/broken_glass.png" alt="broken red wine glass"/>
            </div>
            <div className={styles.buttonContainer}>
                <button className='STYLED_BTN'>
                    <Link scroll={false} href='/'><a>חזרה הביתה</a></Link>
                </button>
                <button className='STYLED_BTN'>
                    <Link scroll={false} href='/contact'><a>צרו קשר</a></Link>
                </button>
            </div>
        </motion.section>
        </>
    )
}