import styles from './contact_form.module.scss';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

AdditionalInfo.propTypes = {
    dataProp: PropTypes.string.isRequired
}

export default function AdditionalInfo({ formData, dataProp, handleChange, validateForm, handleLoad }){
    const commonProps = {
        textArea: 'textArea'
    }

    const eventProps = {
        guestcount: 'guestcount',
        location: 'location',
        ...commonProps
    }

    const productProps = {
        ...commonProps
    }

    const otherProps = {
        ...commonProps
    }

    useEffect(() => handleLoad({ dataProp, eventProps, productProps, otherProps }), [])
    useEffect(() => validateForm(dataProp), [formData])

    return (
        <section id={styles.AdditionalInfo} className={styles.form}>
            <form>
                {formData.type === 'אירועים' && <>
                    <div>
                        <label htmlFor={eventProps.guestcount}>מספר אורחים</label>
                        <input 
                            type="number" 
                            id={eventProps.guestcount} 
                            name={eventProps.guestcount}
                            min='0'
                            max='10000'
                            value={formData[dataProp][eventProps.guestcount]}
                            onChange={evt => handleChange(evt, dataProp)}
                        />
                    </div>
                    <div>
                        <label htmlFor={eventProps.location}>מיקום האירוע</label>
                        <input 
                            type="text" 
                            id={eventProps.location} 
                            name={eventProps.location}
                            value={formData[dataProp][eventProps.location]}
                            onChange={evt => handleChange(evt, dataProp)}
                            placeholder='לדוגמה: תל אביב'
                        />
                    </div>
                </>}
                <div className={styles.textArea}>
                    <label htmlFor={commonProps.textArea}>פרטים נוספים, תוספות והצעות</label>
                    <textarea
                        placeholder='תשאירו פרטים נוספים ככל שעולה על רוחכם. יותר מידע יעזור לנו לעזור לכם!' 
                        type="text" 
                        id={commonProps.textArea} 
                        name={commonProps.textArea}
                        value={formData[dataProp][commonProps.textArea]}
                        onChange={evt => handleChange(evt, dataProp)}
                    />
                </div>
            </form>
        </section>
    )
}