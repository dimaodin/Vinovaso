import { useState, useEffect } from 'react';

export default function useGetSwipeDirection(options){
    const [swipeDirection, setSwipeDirection] = useState('');
    const [cursorDownCoord, setCursorDownCoord] = useState({});
    const [cursorUpCoord, setCursorUpCoord] = useState({});

    function downHandler(evt){
        evt.persist();
        if(options && options.breakOn) return;
        if(evt.type === 'mousedown'){
            setCursorDownCoord({ x: event.clientX, y: event.clientY})
        } else if(evt.type === 'touchstart'){
            setCursorDownCoord({ x: event.touches[0].clientX, y: event.touches[0].clientY})
        }
    }

    function upHandler(evt){
        evt.persist();
        if(options && options.breakOn) return;
        if(evt.type === 'mouseup'){
            setCursorUpCoord({ x: event.clientX, y: event.clientY})
        } else if(evt.type === 'touchend'){
            setCursorUpCoord({ x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY})
        }
    }

    useEffect(() => {
        if(cursorUpCoord.x < cursorDownCoord.x && cursorDownCoord.x - cursorUpCoord.x > 50){ //LEFT SWIPE
            setSwipeDirection({ dir: 'left', time: Date.now() });
        } else if (cursorUpCoord.x > cursorDownCoord.x && cursorUpCoord.x - cursorDownCoord.x > 50){ //RIGHT SWIPE
            setSwipeDirection({ dir: 'right', time: Date.now() });
        }
    }, [cursorUpCoord])

    return [downHandler, upHandler, swipeDirection]
}