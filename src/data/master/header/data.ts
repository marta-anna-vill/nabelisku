import { IHeader } from '../../../modules/master/header/Header';
import { DATA_SERVICES } from '../../services/data';
import { DATA_PHONE } from '../contact/phone/data';

export const DATA_LOGO_ALT = `Vinařství Toporcer logo`;

export const DATA_HEADER: IHeader = {
    callContactPhone: DATA_PHONE,
    callContactText: `Volejte po-pá 7:00-17:00`,
    menu: [
        {
            name: `About me`,
            url: `/#about-me`,
        },
        {
            name: `Skills`,
            url: `/#skills`,
        },
        {
            name: `Work experience`,
            url: `/#work-experience`,
        },
        {
            name: `Contact`,
            url: `/#contact`,
        },
    ],
};
