import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

MouseDirection.propTypes = {
    children: PropTypes.element.isRequired
}

export default function MouseDirection({ children }){
    const [direction, setDirection] = useState('right');
    const ref = useRef();

    useEffect(() => console.log(direction), [direction])

    useEffect(() => { 
        function handleHover(e){
            const mouseX = e.layerX;
            const eleWidth = e.target.offsetWidth;
            if(mouseX < eleWidth * .25){
                setDirection('right')
            } else if(mouseX > eleWidth * .75){
                setDirection('left')
            } else {
                setDirection('center')
            }
        }

        ref.current.addEventListener('mouseover', handleHover);
        return () => ref.current.removeEventListener('mouseover', handleHover)
    }, [])

    return (
        React.cloneElement(children, {style: { transformOrigin: direction}, ref: el => ref.current = el})
    )
}