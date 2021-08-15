export const landingTransitions = {
    staggerContent: {
        animate: {
            transition: {
                staggerChildren: .15
            }
        }
    },
    line: {
        animate: {
            scale: 1,
            rotate: '25deg',
            y: '-50%',
            transition: {
                duration: .15
            }
        },
        initial: {
            scale: 0,
            rotate: '25deg',
            y: '-50%'
        },
        exit: {
            scale: 0,
            rotate: '25deg',
            y: '-50%'
        }
    },
    logo: {
        initial: {
            y: '35%',
            rotate: '-5deg',
            opacity: 0
        },
        animate: {
            opacity: .65
        }
    }
}

export const headerTransitions = {
    staggerHeader: {
        animate: {
            transition: {
                staggerChildren: .15
            }
        }
    },
    fadeUp: {
        animate: {
            y: 0,
            transition: {
                duration: 1
            }
        },
        initial: {
            y: '100%'
        }
    },
    fadeIn: {
        animate: {
            opacity: 1,
            transition: {
                duration: 1
            }
        },
        initial: {
            opacity: 0
        }
    }
}