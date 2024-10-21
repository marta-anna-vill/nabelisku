import { useEffect, useState } from 'react';

import { CookiesHelper } from '../../../../helpers/cookies-helper';
import { CookieHelper } from '../helpers/cookie-helper';
import { useCookiesStore } from '../store/cookies-store';

const COOKIES_SUBMIT_EVENT_NAME = `nabelisku-cookies`;
export const COOKIES_SITE = `nabelisku-cookies`;
export const COOKIES_TECHNICAL = `cookies-technical`;
export const COOKIES_ANALYTICS = `cookies-analytics`;
export const COOKIES_CONVERSION = `cookies-conversion`;
export const COOKIES_MARKETING = `cookies-marketing`;

export enum CookiesKeys {
    technical = `technical`,
    analytics = `analytics`,
    conversion = `conversion`,
    marketing = `marketing`,
}

export interface ICookiesSettings {
    analytics: boolean;
    conversion: boolean;
    marketing: boolean;
}

export const UseCookies = () => {
    const store = useCookiesStore();

    const sendToGtm = (settings: ICookiesSettings) => {
        // eslint-disable-next-line
        function gtag(...args: any) {
            // eslint-disable-next-line
            window.dataLayer.push(args);
        }
        if (window.dataLayer) {
            window.dataLayer.push({
                event: COOKIES_SUBMIT_EVENT_NAME,
            });
            console.log(settings);
            gtag(`consent`, `default`, {
                ad_storage: settings.marketing ? `granted` : `denied`,
                analytics_storage: settings.analytics ? `granted` : `denied`,
                personalization_storage: settings.conversion ? `granted` : `denied`,
                wait_for_update: 1000,
            });
        }
    };

    const saveSettings = (settings: ICookiesSettings) => {
        store.setPanelDisplay(false);
        store.setModalDisplay(false);

        CookiesHelper.createCookie(COOKIES_SITE, ``, 365);
        CookiesHelper.createCookie(COOKIES_TECHNICAL, ``, 365);

        CookieHelper.updateCookieStorage(COOKIES_ANALYTICS, settings.analytics);
        CookieHelper.updateCookieStorage(COOKIES_CONVERSION, settings.conversion);
        CookieHelper.updateCookieStorage(COOKIES_MARKETING, settings.marketing);

        sendToGtm(settings);
    };

    const handleUpdateSettings = (settings: ICookiesSettings) => {
        saveSettings(settings);

        location.reload();
    };

    const enableNecessaryCookies = () => {
        const settings: ICookiesSettings = {
            analytics: false,
            conversion: false,
            marketing: false,
        };

        store.setSettings(settings);

        saveSettings(settings);
    };

    const enableAllCookies = () => {
        const settings: ICookiesSettings = {
            analytics: true,
            conversion: true,
            marketing: true,
        };

        store.setSettings(settings);

        saveSettings(settings);
    };

    useEffect(() => {
        const isSubmitted = CookieHelper.isSubmitted();
        const settings = CookieHelper.getSettings();

        store.setPanelDisplay(isSubmitted ? false : true);
        store.setSettings(settings);
    }, []);

    return {
        enableNecessaryCookies: enableNecessaryCookies,
        enableAllCookies: enableAllCookies,
        saveSettings: saveSettings,
        handleUpdateSettings: handleUpdateSettings,
    };
};
