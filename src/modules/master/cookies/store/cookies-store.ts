import { create } from 'zustand';

import { CookiesSlice, createCookiesSlice } from './slices/cookies-slice';

export type CookiesStore = CookiesSlice;

export const useCookiesStore = create<CookiesStore>()((...a) => ({
    ...createCookiesSlice(...a),
}));
