import { IHeader } from '../../../modules/master/header/Header';
import { DATA_SERVICES } from '../../services/data';
import { DATA_PHONE } from '../contact/phone/data';

export const DATA_LOGO_ALT = `Na Bělisku logo`;

export const DATA_HEADER: IHeader = {
    callContactPhone: DATA_PHONE,
    callContactText: `Volejte po-pá 7:00-17:00`,
    menu: [
        {
            name: `Penzion`,
            url: `/#guest-house`,
        },
        {
            name: `Ubytování`,
            url: `/#acommodation`,
        },
        // {
        //     name: `Svatby`,
        //     url: `/#weddings`,
        // },
        // {
        //     name: `Rezervace`,
        //     url: `/#reservation`,
        // },
        // {
        //     name: `Naučná stezka`,
        //     url: `/#learn-path`,
        // },
        {
            name: `Kontakt`,
            url: `/#contact`,
        },
    ],
};
