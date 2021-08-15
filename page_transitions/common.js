const transitions = {
    imgScaleIn: {
        animate: {
                scale: 1,
                transition: {
                    duration: 1.5
                }
            },
        initial: {
            scale: 1.15
        }
    }
}

export const onTap = {
    opacity: {
        tap: {
            opacity: .2,
            transition: {
                duration: 3
            }
        }
    }
}

export default transitions;