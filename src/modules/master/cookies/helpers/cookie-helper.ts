import { CookiesHelper } from '../../../../helpers/cookies-helper';
import {
    COOKIES_ANALYTICS,
    COOKIES_CONVERSION,
    COOKIES_MARKETING,
    COOKIES_SITE,
    ICookiesSettings,
} from '../hooks/UseCookies';

export class CookieHelper {
    public static isSubmitted(): boolean {
        return CookiesHelper.readCookie(COOKIES_SITE) !== null;
    }

    public static getSettings(): ICookiesSettings {
        const isAnalytics = CookiesHelper.readCookie(COOKIES_ANALYTICS) !== null;
        const isConversion = CookiesHelper.readCookie(COOKIES_CONVERSION) !== null;
        const isMarketing = CookiesHelper.readCookie(COOKIES_MARKETING) !== null;

        return {
            analytics: isAnalytics,
            conversion: isConversion,
            marketing: isMarketing,
        };
    }

    public static updateCookieStorage(name: string, isActive: boolean) {
        if (isActive) {
            CookiesHelper.createCookie(name, ``, 365);
        } else {
            CookiesHelper.deleteCookie(name);
        }
    }
}
