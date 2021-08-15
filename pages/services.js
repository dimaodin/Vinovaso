import Head from 'next/head';
import { useRef } from 'react';
import Landing from '../components/services/Landing';
import Promise from '../components/services/Promise';
import Event from '../components/services/Event';
import MakeYourWine from '../components/services/MakeYourWine';
import VintnerCourse from '../components/services/VintnerCourse';
import { motion } from 'framer-motion';
import styles from './services.module.scss';
import useOnAniStartOnlyEntry from './../custom_hooks/useOnAniStartOnlyEntry';
import PropTypes from 'prop-types';

Services.propTypes = {
	state: PropTypes.shape({
		viewport: PropTypes.string,
		navHeight: PropTypes.number.isRequired,
	}),
	NAV_SPACER: PropTypes.object,
};

export default function Services({ state: { viewport, navHeight }, NAV_SPACER }) {
	const promiseRef = useRef();
	const eventRef = useRef();
	const yourWineRef = useRef();
	const vintnerCourseRef = useRef();

	const pageVariant = {
		load_initial: { opacity: 0 },
		load_exit: {
			opacity: 0,
			transition: {
				duration: 0.35,
			},
		},
		load_animate: {
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	};

	const onAniStart = useOnAniStartOnlyEntry();
	return (
		<>
			<Head>
				<title>Vinovaso | השירותים שלנו</title>
			</Head>
			<motion.main
				id={styles.services}
				initial='load_initial'
				animate='load_animate'
				exit='load_exit'
				variants={pageVariant}
				onAnimationStart={onAniStart}
			>
				<Landing
					viewport={viewport}
					navHeight={navHeight}
					NAV_SPACER={NAV_SPACER}
					refs={{
						promise: promiseRef,
						event: eventRef,
						yourWine: yourWineRef,
						vintnerCourse: vintnerCourseRef,
					}}
				/>
				<Promise ref={promiseRef} viewport={viewport} />
				<MakeYourWine ref={yourWineRef} viewport={viewport} />
				<Event ref={eventRef} viewport={viewport} />
				<VintnerCourse ref={vintnerCourseRef} />
			</motion.main>
		</>
	);
}
