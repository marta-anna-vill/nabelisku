import { StateCreator } from 'zustand';

import { ICookiesSettings } from '../../hooks/UseCookies';
import { CookiesStore } from '../cookies-store';

export type CookiesSlice = {
    isModalDisplayed: boolean;
    isPanelDisplayed: boolean;
    settings: ICookiesSettings;
    setModalDisplay: (display: boolean) => void;
    setPanelDisplay: (display: boolean) => void;
    setSettings: (settings: ICookiesSettings) => void;
};

export const createCookiesSlice: StateCreator<CookiesStore, [], [], CookiesSlice> = (set) => ({
    isModalDisplayed: false,
    isPanelDisplayed: false,
    settings: {
        analytics: false,
        conversion: false,
        marketing: false,
    },
    setModalDisplay: (display: boolean) => set({ isModalDisplayed: display }),
    setPanelDisplay: (display: boolean) => set({ isPanelDisplayed: display }),
    setSettings: (settings: ICookiesSettings) => set({ settings: settings }),
});
