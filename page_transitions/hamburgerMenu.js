const transitions = {
    navItemVariants: {
        initial: {
            x: -25,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                duration: .75
            }
        }
    },
    contactBtnVariant: {
        initial: {
            y: 25,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: .5
            }
        }
    },
    stagger: {
        animate: {
            transition: {
                staggerChildren: .05
            }
        }
    }
}

export default transitions;