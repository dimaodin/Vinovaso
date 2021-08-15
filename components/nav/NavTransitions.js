const transitions = {};

transitions.mainFade = {
	hide: {
		opacity: 0,
	},
	showWithDelay: {
		opacity: 1,
		transition: {
			duration: 0.75,
			delay: 1,
		},
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.75,
		},
	},
	exit: {
		opacity: 0,
	},
};

export default transitions;
