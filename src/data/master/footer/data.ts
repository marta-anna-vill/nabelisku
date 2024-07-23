import { IFooter } from '../../../modules/master/footer/Footer';
import { IconName } from '../../../modules/utilities/icon/Icon';
import { DATA_EMAIL } from '../contact/email/data';
import { DATA_PHONE } from '../contact/phone/data';

export const DATA_FOOTER: IFooter = {
    mapTitle: `Zde sídlíme`,
    iframeButton: `Zobrazit mapu`,
    contactTitle: `Zavolejte nám`,
    writeUsTitle: `Napište nám`,
    followUsTitle: `Sledujte nás`,
    place: `<strong>Sídlo:</strong> Příkop 843/4, Zábrdovice, 602 00 Brno`,
    ico: `<strong>IČO:</strong> 19689489`,
    contactPhone: {
        contact: DATA_PHONE,
    },
    contactEmail: {
        contact: DATA_EMAIL,
    },
};
