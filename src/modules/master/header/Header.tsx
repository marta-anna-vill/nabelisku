import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import logoImg from '../../../assets/images/logo.png';
import { DATA_HEADER, DATA_LOGO_ALT } from '../../../data/master/header/data';
import { DispatchHelper, DispatchHelperAction } from '../../../helpers/dispatch-helper';
import { UiHelper } from '../../../helpers/ui-helper';
import { Icon, IconName } from '../../utilities/icon/Icon';
import { TContact } from '../contact/contact';
import styles from './header.module.scss';
import { HeaderMenu, IHeaderMenuLink } from './menu/Menu';

export interface IHeader {
    callContactText: string;
    callContactPhone: TContact;
    menu: IHeaderMenuLink[];
}

export const Header = (props: IHeader) => {
    const headerRef = useRef<HTMLElement>(null);
    const [isMenuOpen, setMenuOpen] = useState(false);

    DispatchHelper.listen(DispatchHelperAction.closeHeaderMenu, () => {
        setMenuOpen(false);
    });

    UiHelper.onMouseDownOutside(headerRef, () => {
        setMenuOpen(false);
    });

    return (
        <>
            <header ref={headerRef} className={`${styles.header} ${isMenuOpen ? styles.isOpen : ``}`}>
                <div className='BaseContainer'>
                    <div className={styles.inner}>
                        <div className={styles.logo}>
                            <Link onClick={() => setMenuOpen(false)} href={`/`}>
                                Marta Halámková
                            </Link>
                        </div>
                        <div className={styles.menu}>
                            <HeaderMenu links={props.menu} />
                        </div>
                        <div className={styles.hamburger} onClick={() => setMenuOpen((isOpen) => !isOpen)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </header>
            <div className={styles.spacing}></div>
        </>
    );
};
