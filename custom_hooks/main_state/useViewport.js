import { useEffect, useState } from 'react';

export default function useViewport(){
    const [viewport, setViewport] = useState(null);
    function handleViewport() { //HANDLEVIEWPORT WILL ONLY CALL STATE SETTER IF BREAKPOINT OCCURS WHILE VIEWPORT BREAKPOINT IS NOT MATCHED
        if(viewport !== 'mobile' && window.innerWidth <= 749){
            setViewport('mobile')
        } else if(viewport !== 'tablet' && 749 < window.innerWidth && window.innerWidth <= 989){
            setViewport('tablet')
        } else if(viewport !== 'desktop' && window.innerWidth >= 990){
            setViewport('desktop')
        } 
    }

    useEffect(() => { //UPDATE VIEWPORT WHENEVER WINDOW IS RESIZED
        window.addEventListener('resize', handleViewport)
        return () => {
            window.removeEventListener('resize', handleViewport)
        }
    }, [viewport])
    
    useEffect(() => handleViewport(), []); //UPDATE VIEWPORT IMMEDIATELY ON LOAD
    return viewport;
}