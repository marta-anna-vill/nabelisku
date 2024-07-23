import React from 'react';

import { useCookiesStore } from '../../store/cookies-store';
import { CookieType } from '../cookie-type/CookieType';

export const CookiesSettings = () => {
    const store = useCookiesStore();

    return (
        <div>
            <CookieType
                name='Technické (povinné)'
                description='Tyto soubory cookies jsou nutné pro správné zobrazení webových stránek a zajišťují jejich řádné fungování.'
                type='technical'
                isDisabled={true}
                isChecked={true}
            />

            <CookieType
                name='Analytické'
                description='Účelem analytických cookies je zjistit, jak uživatelé webové stránky používají a sledovat jejich návštěvnost. Tyto funkce nám umožňují zlepšit kvalitu a obsah webových stránek.'
                type='analytics'
                isDisabled={false}
                isChecked={store.settings?.analytics ?? false}
            />

            <CookieType
                name='Konverzní a trackingové'
                description='Tyto soubory cookies umožňují společnosti analyzovat výkon různých prodejních kanálů.'
                type='conversion'
                isDisabled={false}
                isChecked={store.settings?.conversion ?? false}
            />

            <CookieType
                name='Marketingové'
                description='Tyto soubory cookies slouží k marketingovým účelům, přičemž shromažďují informace pro lepší přizpůsobení reklamních sdělení zájmům uživatelů webových stránek.'
                type='marketing'
                isDisabled={false}
                isChecked={store.settings?.marketing ?? false}
            />
        </div>
    );
};
