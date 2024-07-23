import { ICookieRecord } from '../../../modules/master/cookies/components/record/CookieRecord';
import { DATA_EMAIL } from '../contact/email/data';

export const DATA_COOKIES: {
    title: string;
    description: string;
    subtitle: string;
    nextDescription: string;
    technical: {
        title: string;
        description: string;
        records: ICookieRecord[];
    };
    analytics: {
        title: string;
        description: string;
        records: ICookieRecord[];
    };
    marketing: {
        title: string;
        description: string;
        records: ICookieRecord[];
    };
    learnTitle: string;
    learnText: string;
    termsConditionsTitle: string;
    termsConditionsText: string;
} = {
    title: `Podmínky práce s cookies na webu <small>martahalamkova.cz</small>`,
    description: `
    Fyzická osoba Marta Halámková, (dále jen „Marta Halámková) používá cookies v souvislosti s provozem jejích webových stránek martahalamkova.cz (dále jen „web“). Účelem tohoto dokumentu Podmínky práce s cookies (dále jen „podmínky“) je seznámit Vás se způsobem nakládání s cookies, s tím souvisejícím zpracováním osobních údajů a dále poskytnout Vám přehled všech Vašich práv ve smyslu zákona č. 127/2005 Sb., o elektronických komunikacích (dále jen „ZEK“) a ve smyslu nařízení č. 2016/679, obecné nařízení o ochraně osobních údajů (dále jen „GDPR“). Jako návštěvník webu jste povinen si tyto podmínky přečíst a v případě, že nerozumíte některé informaci či pokud budete cokoli potřebovat, můžete se na Martu Halámkovou obrátit na email: <a href="${DATA_EMAIL.href}">${DATA_EMAIL.name}</a>
	`,
    subtitle: `Co jsou cookies?`,
    nextDescription: `Soubory cookie používáme k analýze údajů o našich návštěvnících, ke zlepšení našich webových stránek, zobrazení personalizovaného obsahu a k tomu, abychom vám poskytli skvělý zážitek z webu.`,
    technical: {
        title: `Technické (povinné) cookies`,
        description: `Tyto soubory cookie jsou nezbytné pro fungování webových stránek, není tedy možné je zakázat. Obvykle se nastavují v reakci na akci, kterou na webu sami provedete, jako je nastavení zabezpečení, přihlášení a vyplňování formulářů. Svůj prohlížeč můžete nastavit tak, aby blokoval soubory cookie nebo o nich zasílal upozornění. Mějte na paměti, že některé stránky nebudou bez těchto souborů fungovat. Tyto soubory cookie neukládají žádné informace, které lze přiřadit konkrétní osobě. Tyto soubory cookie můžeme nastavit my nebo poskytovatelé třetích stran, jejichž služby na webu využíváme. Tyto soubory cookie neukládají žádné informace, které lze přiřadit konkrétní osobě.`,
        records: [],
    },
    analytics: {
        title: `Analytické cookies`,
        description: `Tyto soubory cookie se používají ke zlepšení fungování webových stránek. Umožňují nám rozpoznat a sledovat počet návštěvníků a také sledovat, jak návštěvníci web používají. Pomáhají nám zlepšovat způsob, jakým webové stránky fungují, například tím, že uživatelům umožňují snadno najít to, co hledají. Tyto soubory cookie neshromažďují informace, které by vás mohly identifikovat. Pomocí těchto nástrojů analyzujeme a pravidelně zlepšujeme funkčnost našich webových stránek. Získané statistiky můžeme využít ke zlepšení uživatelského komfortu a k tomu, aby byla návštěva webu pro vás jako uživatele zajímavější. Tyto analytické soubory cookie budou použity pouze s vaším souhlasem.`,
        records: [],
    },
    marketing: {
        title: `Marketingové cookies`,
        description: `Používají se ke sledování preferencí webu uživatele za účelem cílení reklamy, tj. zobrazování marketingových a reklamních sdělení (i na stránkách třetích stran), které mohou návštěvníka webu zajímat v souladu s těmito preferencemi. Marketingové cookies využívají nástroje externích společností. Tyto marketingové soubory cookie budou použity pouze s vaším souhlasem.`,
        records: [],
    },
    learnTitle: `Poučení o Vašich právech a možnosti je uplatnit`,
    learnText: `Proti provádění přímého marketingu můžete kdykoliv podat námitky. Nastavení je možné změnit po kliknutí na tlačítko „Cookies“ v pravém dolním rohu obrazovky. Většina internetových prohlížečů také umožňuje prostřednictvím svého nastavení kontrolovat většinu druhů cookies. Můžete si tedy prohlížeč nastavit tak, aby Vás informoval o přijetí cookies a můžete se rozhodnout, zda použití cookies potvrdíte nebo nikoliv. Můžete také cookies zcela vypnout nebo zakázat. Více informací naleznete v nápovědě ke svému prohlížeči. Cookies, které jsou již uložené, můžete průběžně mazat ze svého počítače. Nastavením v rámci cookies lišty je udělen souhlas a může jím být také odvolán. Souhlas, který jste Martě Halámkové, jakožto správci, tímto dobrovolně udělil, je možné kdykoliv bezplatně odvolat.`,
    termsConditionsTitle: `K těmto podmínkám`,
    termsConditionsText: `Tento dokument nabývá účinnosti dne 1. 1. 2024.  Marta Halámková je oprávněna v případě potřeby tyto podmínky aktualizovat. Při prohlížení našich internetových stránek se vždy informujte o aktuálním znění těchto podmínek. Nové znění je účinné zveřejněním. To je vždy zobrazeno na našich internetových stránkách a je tak umožněna jeho archivace a reprodukce.`,
};
