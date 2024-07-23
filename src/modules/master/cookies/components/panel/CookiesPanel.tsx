import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { ButtonType } from '../../../../utilities/button/Button';
import cssButton from '../../../../utilities/button/button.module.scss';
import { UseCookies } from '../../hooks/UseCookies';
import { useCookiesStore } from '../../store/cookies-store';
import { CookiesModal } from '../modal/CookiesModal';
import styles from './cookies-panel.module.scss';

const COOKIE_ORNAMENT_HTML = (
    <svg width='650' height='656' viewBox='0 0 650 656' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M338.001 16C450.001 11.6 545.001 96.1666 578.501 139C519.301 154.6 518.834 216.167 526 245C468.4 278.2 483.667 337.833 498.5 363.5C468.9 412.7 499.5 456.667 518.5 472.5C509.3 508.1 530.333 538.333 542 549C498.333 596 374.2 676.4 227 622C79.8 567.6 28.0005 433 20.5008 372.5C10.5008 337.667 8.00076 242.2 78.0008 139C148.001 35.7999 280.501 13.9999 338.001 16Z'
            stroke='black'
            stroke-width='30'
        />
        <circle cx='204.5' cy='177.5' r='43.5' fill='black' />
        <circle cx='374.5' cy='143.5' r='43.5' fill='black' />
        <circle cx='326.5' cy='334.5' r='43.5' fill='black' />
        <circle cx='601' cy='309' r='40' fill='black' />
        <circle cx='126.5' cy='338.5' r='43.5' fill='black' />
        <circle cx='190.5' cy='495.5' r='43.5' fill='black' />
        <circle cx='417.5' cy='505.5' r='43.5' fill='black' />
        <circle cx='310' cy='479' r='15' fill='black' />
        <circle cx='567.5' cy='417.5' r='17.5' fill='black' />
        <circle cx='632.5' cy='403.5' r='17.5' fill='black' />
        <circle cx='610' cy='225' r='15' fill='black' />
        <circle cx='598' cy='485' r='10' fill='black' />
        <circle cx='303.5' cy='223.5' r='12.5' fill='black' />
        <circle cx='233.5' cy='381.5' r='12.5' fill='black' />
    </svg>
);

export const CookiesPanel = () => {
    const router = useRouter();
    const store = useCookiesStore();
    const { enableNecessaryCookies, enableAllCookies } = UseCookies();

    return !router.pathname.includes(`/cookies`) ? (
        <React.Fragment>
            <div className={`${styles.container} ${store.isPanelDisplayed ? styles.isVisible : ``}`}>
                <div className='BaseContainer'>
                    {COOKIE_ORNAMENT_HTML}
                    <div className={styles.inner}>
                        <div className={styles.content}>
                            <h4 className={styles.title}>Bez cookies to není ono</h4>
                            Děláme internet lepší a k tomu nám pomáhají cookies. Rádi bychom měřili,
                            vyhodnocovali a poskytli tu nejvhodnější nabídku našich služeb na internetu přímo
                            pro vás. <Link href='/cookies'>Více informací.</Link>
                        </div>
                        <div className={styles.controls}>
                            <span
                                onClick={() => enableNecessaryCookies()}
                                className={`${cssButton[`Button`]} ${cssButton[ButtonType.default]}`}
                            >
                                Pouze nutné
                            </span>
                            <span
                                onClick={() => store.setModalDisplay(true)}
                                className={`${cssButton[`Button`]} ${cssButton[ButtonType.default]}`}
                            >
                                Upravit
                            </span>
                            <span
                                onClick={() => enableAllCookies()}
                                className={`${cssButton[`Button`]} ${cssButton[ButtonType.primary]}`}
                            >
                                Akceptovat vše
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <CookiesModal />
        </React.Fragment>
    ) : null;
};
