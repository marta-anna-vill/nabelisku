import galleryImage from '../../../assets/images/05.jpg';
import rodinnyPokoj from '../../../assets/images/15.jpg';
import svatebniPokoj from '../../../assets/images/131.jpg';
import kytickovyPokoj from '../../../assets/images/142.jpg';
import apartman1 from '../../../assets/images/145.jpg';
import apartman2 from '../../../assets/images/146.jpg';
import slunecniPokoj from '../../../assets/images/147.png';
import terasa from '../../../assets/images/150.jpeg';
import sal from '../../../assets/images/velky-sal.jpg';
import { IPage } from '../../../modules/master/page/page';
import { ButtonType } from '../../../modules/utilities/button/Button';
import { WidgetType } from '../../../modules/widgets/shared/widget-builder/WidgetBuilder';
import { DATA_EMAIL } from '../../master/contact/email/data';
import { DATA_PHONE, DATA_PHONE2 } from '../../master/contact/phone/data';
import { DATA_SOCIAL } from '../../master/social/data';

export const DATA_GALLERY_PAGE: IPage = {
    metadata: {
        description: `Penzion Na Bělisku, nachází se na Vysočině. Je možné zde uspořádat svatbu.`,
        image: galleryImage.src,
    },
    widgetBuilder: {
        id: ``,
        sections: [
            {
                containerType: `none`,
                backgroundColor: `Section--backgroundSoftSecondary`,
                widgets: [
                    {
                        type: WidgetType.TopImage,
                        item: {
                            title: `Penzion Na Bělisku`,
                            perex: `Prohlédněte si nabízené pokoje v našem penzionu.`,
                            image: {
                                staticImageData: galleryImage,
                            },
                            cta: {
                                name: `Kontaktujte nás`,
                                href: `/#reservation`,
                                styles: ButtonType.primary,
                            },
                            // secondaryCta: {
                            //     name: ``,
                            //     href: ``,
                            //     styles: ButtonType.default,
                            // },
                        },
                    },
                ],
            },
            {
                backgroundColor: `Section--backgroundSoftSecondary`,
                containerType: `BaseContainer`,
                anchor: `guest-house`,
                widgets: [
                    // {
                    //     type: WidgetType.Numbers,
                    //     title: ``,
                    //     items: [
                    //         {
                    //             name: `Náš rodinný penzion nabízí dokonalý odpočinek s úsměvem vlastníků, kteří se postarají o každý detail.`,
                    //             number: 3,
                    //             unit: `Penzion`,
                    //         },
                    //         {
                    //             name: `Kouzelné místo s nezapomenutelnou atmosférou pro vaši svatbu snů`,
                    //             number: 500,
                    //             unit: `Svatby`,
                    //         },
                    //         {
                    //             name: `Naučná stezka Březiny: Literárně naučná stezka (2,1 km) a Kukyho les (0,5 km) s interaktivními zastaveními a úkoly pro děti.`,
                    //             number: 8,
                    //             unit: `Kukyho les`,
                    //         },
                    //     ],
                    // },
                ],
            },
            {
                backgroundColor: `Section--backgroundSoftSecondary`,
                containerType: `BaseContainer`,
                anchor: `acommodation`,
                widgets: [
                    {
                        type: WidgetType.ImageContent,
                        items: [
                            {
                                title: `Apartmán 1`,
                                perex: `Nachází se ve třetím podlaží penzionu a je pro 5 osob. Na apartmán je možné umístit dětskou postýlku nebo přistýlku. Kuchyňka s dětským koutkem je průchozí částí apartmánu a je plně vybavena, včetně malé ledničky, nádobí a dvou plotýnkového vařiče. Kuchyňka i dětský koutek lze využít pro přistýlky.`,
                                image: {
                                    staticImageData: apartman1,
                                },
                                isReversed: false,
                                cta: {
                                    name: `3D prohlídka`,
                                    href: `https://www.fotografiefirem.cz/iframe.php?id=2332&tour=2373&height=900&l=`,
                                    styles: ButtonType.primary,
                                    target: `_blank`,
                                },
                            },
                            {
                                title: `Apartmán 2`,
                                perex: `Apartmán se nachází ve třetím podlaží penzionu v zadní části budovy a je určen pro ubytování čtyř osob. Je možné sem umístit dětskou postýlku nebo přistýlku. Kuchyňka s dětským koutkem tvoří průchozí část do apartmánu a je plně vybavena, včetně malé ledničky, nádobí a dvouplotýnkového vařiče. Kuchyňku i dětský koutek lze také využít pro umístění přistýlek. V ceně ubytování je zahrnuto základní vybavení, jako je televize, stolek, čtyři židle, sociální zařízení a Wi-Fi připojení. Parkování je rovněž zajištěno pro hosty apartmánu.`,
                                image: {
                                    staticImageData: apartman2,
                                },
                                isReversed: true,
                                cta: {
                                    name: `3D prohlídka`,
                                    href: `https://www.fotografiefirem.cz/iframe.php?id=2332&tour=2373&height=900&l=`,
                                    styles: ButtonType.primary,
                                    target: `_blank`,
                                },
                            },
                            {
                                title: `Sluneční pokoj`,
                                perex: `Sluneční pokoj je určen pro dvě osoby a je vybaven manželskou postelí. V pokoji je vlastní sociální zařízení, a za poplatek je možné využít dětskou postýlku. V ceně ubytování je zahrnuto základní vybavení, které zahrnuje televizi, stůl a dvě židle. Hosté mají k dispozici Wi-Fi připojení a parkování.`,
                                image: {
                                    staticImageData: slunecniPokoj,
                                },
                                isReversed: false,
                                cta: {
                                    name: `3D prohlídka`,
                                    href: `https://www.fotografiefirem.cz/iframe.php?id=2332&tour=2370&height=900&l=`,
                                    styles: ButtonType.primary,
                                    target: `_blank`,
                                },
                            },
                            // {
                            //     title: `Kytičkový pokoj`,
                            //     perex: `Tento pokoj je určen pro čtyři osoby, nabízí jedno manželské lůžko a jedno dvojlůžko. Sociální zařízení se nachází naproti pokoji. Hosté mohou za poplatek využít dětskou postýlku a přistýlku. V ceně ubytování je zahrnuto základní vybavení, které zahrnuje jednu televizi, stůl, čtyři židle, a Wi-Fi připojení. Parkování je k dispozici pro hosty pokoje.`,
                            //     image: {
                            //         staticImageData: kytickovyPokoj,
                            //     },
                            //     isReversed: false,
                            // },
                            {
                                title: `Rodinný pokoj`,
                                perex: `Dvoupokoj se nachází ve druhém podlaží penzionu. První pokoj je vybaven dvojlůžkem a nabízí velký balkón s výhledem. Ve druhém pokoji je jedno samostatné lůžko a dřevěné spací patro pro dvě osoby. Hosté mohou za poplatek využít dětskou postýlku a přistýlku. Sociální zařízení je umístěno naproti pokoji. V ceně ubytování je zahrnuto základní vybavení, včetně televize, stolku a čtyř židlí. Hosté mají k dispozici Wi-Fi připojení a parkování.`,
                                image: {
                                    staticImageData: rodinnyPokoj,
                                },
                                isReversed: true,
                                cta: {
                                    name: `3D prohlídka`,
                                    href: `https://www.fotografiefirem.cz/iframe.php?id=2332&tour=2372&height=900&l=`,
                                    styles: ButtonType.primary,
                                    target: `_blank`,
                                },
                            },
                            {
                                title: `Svatební pokoj`,
                                perex: `Nachází se ve druhém podlaží penzionu a je určen pro dvě osoby. K jeho vybavení patří volně stojící stylová vana na litinových nožkách. Hosté mohou za poplatek využít dětskou postýlku. V ceně ubytování je zahrnuto základní vybavení, které zahrnuje televizi, stolek, dvě židle, sofa a šatní skříň. Pokoj má také balkón se zahradním nábytkem, který umožňuje krásný výhled do údolí. Hosté mají k dispozici Wi-Fi připojení a parkování.`,
                                image: {
                                    staticImageData: svatebniPokoj,
                                },
                                isReversed: false,
                                cta: {
                                    name: `3D prohlídka`,
                                    href: `https://www.fotografiefirem.cz/iframe.php?id=2332&tour=2375&height=900&l=`,
                                    styles: ButtonType.primary,
                                    target: `_blank`,
                                },
                            },
                            {
                                title: `Velký svatební sál`,
                                perex: `Trámová stodola, nebo také velký svatební sál, nabízí úžasnou atmosféru otevřeného prostoru s vůní původního dřeva. V závislosti na uspořádání poskytuje sezení až pro 90 hostů pro vaši svatbu nebo firemní akci. Sál je vybaven vlastním barem, projektorem s ozvučením a prostorem pro taneční parket a doprovodný program. Přístup po schodech umožňuje sestup do spodního baru a na terasu; sál bohužel nemá bezbariérový přístup, ale s pomocí několika lidí lze překonat sedm schodů. Sociální zařízení je k dispozici jak v patře, tak u spodního baru. Cena pronájmu je individuální podle obsazení penzionu a podoba sálu může být přizpůsobena vašim přáním.`,
                                image: {
                                    staticImageData: sal,
                                },
                                isReversed: true,
                                cta: {
                                    name: `3D prohlídka`,
                                    href: `https://www.fotografiefirem.cz/iframe.php?id=2332&tour=2371&height=900&l=`,
                                    styles: ButtonType.primary,
                                    target: `_blank`,
                                },
                            },
                            {
                                title: `Restaurace a terasa `,
                                perex: `Nachystán je velký svatební sál ve stylu trámové stodoly, romantický svatební pokoj, pódium na soukromé louce určené pro obřad a slunná terasa. Dvojice barů a také prostor pro taneční parket. Svatby na Bělisku mají mnohaletou tradici, proto si rezervujte svůj termín včas.`,
                                image: {
                                    staticImageData: terasa,
                                },
                                isReversed: false,
                                cta: {
                                    name: `3D prohlídka`,
                                    href: `https://www.fotografiefirem.cz/iframe.php?id=2332&tour=2368&height=900&l=`,
                                    styles: ButtonType.primary,
                                    target: `_blank`,
                                },
                            },
                        ],
                    },
                ],
            },
            {
                backgroundColor: `Section--backgroundSoftSecondary`,
                containerType: `BaseContainer`,
                anchor: `reservation`,
                widgets: [
                    {
                        type: WidgetType.Banner,
                        item: {
                            title: `Rezervujte si apartmán nebo termín svatby`,
                            perex: `Pro rezervaci termínu nebo apartmánu volejte <a href="${DATA_PHONE.href}">${DATA_PHONE.name}</a> nebo pište <br> na e-mail <a href="${DATA_EMAIL.href}">${DATA_EMAIL.name}</a>.`,
                            contactItems: DATA_SOCIAL.records.map((social) => ({
                                href: social.url,
                                iconName: social.icon,
                                target: true,
                            })),
                        },
                    },
                ],
            },
        ],
    },
};
