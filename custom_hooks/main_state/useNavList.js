import { useEffect, useState} from 'react';

export default function useNavList(navListData, router){
    const [navList, setNavList] = useState(navListData);

    useEffect(() => {
        const updatedNav = navList.map(nav => {
            if(nav.href === `/${router.pathname.split('/')[1]}`){
                nav.active = true;
            } else {
                nav.active = false;
            }
            return nav;
        })
        setNavList(updatedNav);
    }, [router])

    return navList;
}
