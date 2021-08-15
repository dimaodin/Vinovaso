import { useState, useEffect } from 'react';

export default function useIsHamburgerMenuOpen(viewport){
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
    //HAMBURGER MENU TOGGLE HANDLER
    useEffect(() => {
        function handleHBM(evt){
            if(evt.type === 'resize' && isHamburgerMenuOpen && viewport === 'desktop'){
                setIsHamburgerMenuOpen(curr => !curr)
            } else if(evt.type === 'keyup' && isHamburgerMenuOpen && evt.which === 27){
                setIsHamburgerMenuOpen(curr => !curr)
            }
        }
    
        window.addEventListener('keyup', handleHBM);
        window.addEventListener('resize', handleHBM);
        return () => {
            window.removeEventListener('keyup', handleHBM);
            window.removeEventListener('resize', handleHBM);
        }
    }, [isHamburgerMenuOpen, viewport])
    
    //PREVENT SCROLL AND LOCK VIEWPORT ON HAMBURGER MENU OPEN
    useEffect(() => {
        if(isHamburgerMenuOpen){
            document.body.style.height = '100vh'
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style = '';
        }
    }, [isHamburgerMenuOpen])

    return [isHamburgerMenuOpen, setIsHamburgerMenuOpen];
}