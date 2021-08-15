import styles from './contact_form.module.scss';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

Personal.propTypes = {
    dataProp: PropTypes.string.isRequired
}

export default function Personal({ formData, dataProp, handleChange, validateForm, handleLoad }){
    const commonProps = {
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'email',
        phone: 'phone',
        company: 'company',
        hearAbout: 'hearAbout'
    }

    useEffect(() => validateForm(dataProp), [formData])
    useEffect(() => handleLoad({ dataProp, onlyCommonProps: commonProps}), [])

    return(
        <section id={styles.Personal} className={styles.form}>
            <form>
                <div id={styles.firstname}>
                    <label htmlFor="firstName">שם פרטי</label>
                    <input
                        type='text' 
                        placeholder='לדוגמה: יוסי'
                        name={commonProps.firstName} 
                        id={commonProps.firstName}
                        value={formData[dataProp][commonProps.firstName]}
                        onChange={evt => handleChange(evt, dataProp)}
                    />
                </div>
                <div id={styles.lastname}>
                    <label htmlFor="lastName">שם משפחה</label>
                    <input
                        type='text'
                        placeholder='לדוגמה: כהן' 
                        name={commonProps.lastName} 
                        id={commonProps.lastName}
                        value={formData[dataProp][commonProps.lastName]}
                        onChange={evt => handleChange(evt, dataProp)}
                    />
                </div>
                <div id={styles.email}>
                    <label htmlFor="email">כתובת דוא"ל</label>
                    <input
                        type='text'
                        placeholder='לדוגמה: YossiCohen@gmail.com' 
                        name={commonProps.email} 
                        id={commonProps.email}
                        value={formData[dataProp][commonProps.email]}
                        onChange={evt => handleChange(evt, dataProp)}
                    />
                </div>
                <div id={styles.phone}>
                    <label htmlFor="phone">טלפון נייד</label>
                    <input
                        type='text'
                        placeholder='לדוגמה: 1251 - 899 - 054' 
                        name={commonProps.phone} 
                        id={commonProps.phone}
                        value={formData[dataProp][commonProps.phone]}
                        onChange={evt => handleChange(evt, dataProp)}
                    />
                </div>
                <div id={styles.company}>
                    <label htmlFor="company">שם החברה</label>
                    <input
                        type='text'
                        placeholder='לדוגמה: יוסי כהן בע"מ (אם אתם פונים בשם חברה)' 
                        name={commonProps.company} 
                        id={commonProps.company}
                        value={formData[dataProp][commonProps.company]}
                        onChange={evt => handleChange(evt, dataProp)}
                    />
                </div>
                <div id={styles.hearAbout}>
                    <label htmlFor={commonProps.hearAbout} className={styles.noColon}>איך שמעתם עלינו?</label>
                    <select 
                        name={commonProps.hearAbout} 
                        id={commonProps.hearAbout} 
                        value={formData[dataProp][commonProps.hearAbout]}
                        onChange={evt => handleChange(evt, dataProp)}
                    >
                        <option disabled value="">
                            בחרו אפשרות אחת
                            </option>
                        <option value="אינטרנט">
                            אינטרנט
                            </option>
                        <option value="חדשות">
                            חדשות
                            </option>
                        <option value="רשתות חברתיות">
                            רשתות חברתיות
                            </option>
                        <option value="חברים / משפחה">
                            חברים / משפחה
                            </option>
                        <option value="אחר">
                            אחר
                            </option>
                    </select>
                </div>
            </form>
        </section>
    )
}