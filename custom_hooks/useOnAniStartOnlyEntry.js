import { useEffect, useState } from 'react';

export default function useOnAniStartOnlyEntry(){
    const [onAniStart, setOnAniStart] = useState();
    useEffect(() => {
        setOnAniStart(() => window.scrollTo({top: 0}))
    }, [])

    return onAniStart;
}
