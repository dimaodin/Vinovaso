import styles from './Summary.module.scss';
import { useRouter } from 'next/router';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Summary({ formData }) {
	const formSections = Object.keys(formData).map((key) => formData[key]);
	const [subject, ...sections] = formSections;
	const router = useRouter();

	return (
		<section id={styles.Summary}>
			<header>
				{subject === 'other' ? (
					<p>ההודעה שלך:</p>
				) : (
					<p>ההודעה שלך בנושא "{subject}" -</p>
				)}
			</header>
			<div className={styles.contentContainer}>
				{sections.map((section, idx) => (
					<React.Fragment key={idx}>
						{Object.keys(section).map((input) => {
							let label;
							switch (input) {
								case 'date':
									label = 'תאריך';
									break;
								case 'eventType':
									label = 'סוג האירוע';
									break;
								case 'serviceType':
									label = 'סוג השירות';
									break;
								case 'guestcount':
									label = 'מספר אורחים';
									break;
								case 'location':
									label = 'מיקום האירוע';
									break;
								case 'textArea':
									label = 'ההודעה';
									break;
								case 'firstName':
									label = 'שם פרטי';
									break;
								case 'lastName':
									label = 'שם משפחה';
									break;
								case 'email':
									label = 'כתובת דוא"ל';
									break;
								case 'phone':
									label = 'טלפון נייד';
									break;
								case 'company':
									label = 'שם החברה';
									break;
								case 'hearAbout':
									label = 'איך שמעתם עלינו';
									break;
								case 'product':
									label = 'השירות';
									break;
								case 'topic':
									label = 'הנושא';
									break;
							}

							return section[input] ? (
								<p
									key={label}
									id={styles[input]}
									className={
										idx === 0
											? styles.basic
											: idx === 1
											? styles.details
											: styles.personal
									}
								>
									<span className={styles.label}>{`${
										label ? label : input
									}:`}</span>
									<span className={styles.value}>{`${section[input]}`}</span>
								</p>
							) : null;
						})}
					</React.Fragment>
				))}
			</div>
			<button className='STYLED_BTN' onClick={() => router.back()}>
				חזרה
			</button>
		</section>
	);
}
