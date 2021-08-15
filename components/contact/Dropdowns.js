import styles from './contact_form.module.scss';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

Dropdowns.propTypes = {
	dataProp: PropTypes.string.isRequired,
};

export default function Dropdowns({ formData, dataProp, handleChange, validateForm, handleLoad }) {
	const date = new Date();
	const eventProps = {
		date: 'date',
		eventType: 'eventType',
		serviceType: 'serviceType',
	};

	const productProps = {
		product: 'product',
		topic: 'topic',
	};

	const otherProps = {
		topic: 'topic',
	};

	useEffect(() => handleLoad({ dataProp, eventProps, productProps, otherProps }), []);
	useEffect(() => validateForm(dataProp), [formData]);

	return (
		<section id={styles.Dropdowns} className={styles.form}>
			{formData.type === 'אירועים' ? (
				<form>
					<div id={styles.date}>
						<label htmlFor={eventProps.date}>תאריך</label>

						<input
							type={eventProps.date}
							id={eventProps.date}
							name={eventProps.date}
							onChange={(evt) => handleChange(evt, dataProp)}
							min={`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}
							max={`${date.getDate() + 2}-${
								date.getMonth() + 1
							}-${date.getFullYear()}`}
						/>
					</div>
					<div>
						<label htmlFor={eventProps.eventType}>סוג האירוע</label>
						<select
							id={eventProps.eventType}
							name={eventProps.eventType}
							defaultValue=''
							onChange={(evt) => handleChange(evt, dataProp)}
						>
							<option disabled value=''>
								בחרו אפשרות אחת
							</option>
							<option value='חתונה'>
								חתונה
								</option>
							<option value='בר / בת מצווה'>
								בר / בת מצווה
								</option>
							<option value='יום הולדת'>
								יום הולדת
								</option>
							<option value='אירוע עסקי'>
								אירוע עסקי
								</option>
							<option value='אירוע חברתי'>
								אירוע חברתי
								</option>
						</select>
					</div>
					<div>
						<label htmlFor={eventProps.serviceType}>סוג השירות</label>
						<select
							id={eventProps.serviceType}
							name={eventProps.serviceType}
							defaultValue=''
							onChange={(evt) => handleChange(evt, dataProp)}
						>
							<option disabled value=''>
								בחרו אפשרות אחת
							</option>
							<option value='אפשרות #1'>
								אפשרות #1
							</option>
							<option value='אפשרות #2'>
								אפשרות #2
							</option>
							<option value='אפשרות #3'>
								אפשרות #3
							</option>
							<option value='אפשרות #4'>
								אפשרות #4
							</option>
						</select>
					</div>
				</form>
			) : formData.type === 'הכנת יין' ? (
				<form>
					<div>
						<label htmlFor={productProps.product}>סוג השירות</label>
						<select
							id={productProps.product}
							name={productProps.product}
							defaultValue=''
							onChange={(evt) => handleChange(evt, dataProp)}
						>
							<option disabled value=''>
								בחרו אפשרות אחת
							</option>
							<option value='קורס יינן מומחה'>
								קורס יינן מומחה
								</option>
							<option value='הכנת יינות בלעדיים'>
								הכנת יינות בלעדיים
								</option>
							<option value='יינות מוכנים'>
								יינות מוכנים
								</option>
						</select>
					</div>
					<div>
						<label htmlFor={productProps.topic}>קטגוריה</label>
						<select
							id={productProps.topic}
							name={productProps.topic}
							defaultValue=''
							onChange={(evt) => handleChange(evt, dataProp)}
						>
							<option disabled value=''>
								בחרו אפשרות אחת
							</option>
							<option value='שאלה כללית'>
								שאלה כללית
								</option>
							<option value='מחירים'>
								מחירים
								</option>
							<option value='תעודת סיום'>
								תעודת הקורס
								</option>
							<option value='משלוח יינות'>
								משלוח יינות
								</option>
							<option value='פרטים טכניים'>
								פרטים טכניים
								</option>
							<option value='אחר'>
								אחר
								</option>
						</select>
					</div>
				</form>
			) : (
				<form>
					<div>
						<label htmlFor={otherProps.topic}>נושא</label>
						<select
							className={styles.long}
							d={otherProps.topic}
							name={otherProps.topic}
							defaultValue=''
							onChange={(evt) => handleChange(evt, dataProp)}
						>
							<option disabled value=''>
								בחרו אפשרות אחת
							</option>
							<option value='משרות'>
								משרות
								</option>
							<option value='שיתוף פעולה'>
								שיתוף פעולה
								</option>
							<option value='תקשורת'>
								תקשורת
								</option>
							<option value='הזמנה קיימת'>
								הזמנה קיימת
								</option>
							<option value='שירותים מהעבר'>
								שירותים מהעבר
								</option>
							<option value='שיווק שותפים'>
								שיווק שותפים
								</option>
							<option value='שאלה כללית'>
								שאלה כללית
								</option>
								<option value='תגובה'>
								תגובה
								</option>
						</select>
					</div>
				</form>
			)}
		</section>
	);
}
