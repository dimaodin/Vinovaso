export const changeLogoColorVariant = {
    white: {
        animate: {
            opacity: 1,
            transition: {
                duration: .5,
                delay: window.scrollY === 0 ? 1 : 0
            }
        },
        initial: {
            opacity: 0,
            transition: {
                duration: .5,
                delay: 1
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: .5
            }
        }
    },
    black: {
        animate: {
            opacity: 1,
            transition: {
                duration: .5,
                delay: window.scrollY === 0 ? 1 : 0
            }
        },
        initial: {
            opacity: 0,
            transition: {
                duration: .5,
                delay: 1
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: .5
            }
        }
    }
}