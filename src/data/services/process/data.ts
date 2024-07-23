import { IServiceProcessStep } from '../../../modules/services/detail/process/ServiceProcess';
import { TContentItem } from '../../manager/manager';

export const DATA_PROCESS: TContentItem<IServiceProcessStep> = {
    title: `Postup realizace aneb jak to u nás probíhá?`,
    records: [
        {
            name: `Kontakt`,
            text: `Zanechte nám stručnou poptávku přes náš kontaktní formulář. Spojíme se s vámi hned, jakmile to bude možné.`,
        },
        {
            name: `Návrh řešení`,
            text: `Přijedeme za vámi na konzultaci a navrhneme vám nejlepší možnost řešení.`,
        },
        {
            name: `Kalkulace`,
            text: `Připravíme vám individuální cenovou nabídku.`,
        },
        {
            name: `Realizace`,
            text: `Podepíšeme spolu smlouvu o dílo a ihned se pustíme do realizace zadané zakázky.`,
        },
    ],
};
