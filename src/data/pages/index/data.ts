import contentImage1 from '../../../assets/images/131.jpg';
import introImage from '../../../assets/images/intro.jpg';
import contentImage3 from '../../../assets/images/Kukyho.les_.jpg';
import contentImage2 from '../../../assets/images/svatby-hp-3.jpeg';
import mentoringImage from '../../../assets/images/vineyard.jpg';
import { IPage } from '../../../modules/master/page/page';
import { ButtonType } from '../../../modules/utilities/button/Button';
import { WidgetType } from '../../../modules/widgets/shared/widget-builder/WidgetBuilder';
import { DATA_EMAIL } from '../../master/contact/email/data';
import { DATA_PHONE } from '../../master/contact/phone/data';
import { DATA_SOCIAL } from '../../master/social/data';

export const DATA_INDEX_PAGE: IPage = {
    metadata: {
        description: `Penzion Na Bělisku, nachází se na Vysočině. Je možné zde uspořádat svatbu.`,
        image: introImage.src,
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
                            perex: `Přijeďte si odpočinout do rodinného penzionu Na Bělisku v Březinách, kde se o váš komfort postarají sami majitelé. Rezervujte si svůj termín a využijte kouzelné prostředí pro vaši vysněnou svatbu. Pro rodiny s dětmi nabízíme naučnou interaktivní stezku Kukyho les.`,
                            image: {
                                staticImageData: introImage,
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
                    {
                        type: WidgetType.Numbers,
                        title: ``,
                        items: [
                            {
                                name: `Náš rodinný penzion nabízí dokonalý odpočinek s úsměvem vlastníků, kteří se postarají o každý detail.`,
                                number: 3,
                                unit: `Penzion`,
                            },
                            {
                                name: `Kouzelné místo s nezapomenutelnou atmosférou pro vaši svatbu snů`,
                                number: 500,
                                unit: `Svatby`,
                            },
                            {
                                name: `Naučná stezka Březiny: Literárně naučná stezka (2,1 km) a Kukyho les (0,5 km) s interaktivními zastaveními a úkoly pro děti.`,
                                number: 8,
                                unit: `Kukyho les`,
                            },
                        ],
                    },
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
                                title: `Ubytování`,
                                perex: `Zrekonstruovaný penzion Na Bělisku nabízí ubytování pro celkem 26 hostů. Kapacitu lze rozšířit pomocí přistýlek. K dispozici jsou 5 pokojů a 2 apartmány se sdílenou kuchyňkou a dětským koutkem.
Pro všechny hosty jsou k dispozici společné prostory spodního baru a salónku, jehož součástí je biliard, terč na šipky a TV obrazovka.`,
                                image: {
                                    staticImageData: contentImage1,
                                },
                                isReversed: false,
                            },
                            {
                                title: `Svatby`,
                                perex: `U nás jsou svatby oblíbené a organizujeme je po celý rok, což znamená, že termíny se rychle plní. Abychom mohli zajistit, že váš velký den proběhne přesně podle vašich představ, je důležité si svůj termín rezervovat s dostatečným předstihem. Naše široká nabídka služeb a možností vám umožní vytvořit nezapomenutelný zážitek, ať už plánujete svatbu na jaře, v létě, na podzim nebo v zimě. Abychom mohli plně vyhovět vašim požadavkům a zajistit, že vše proběhne hladce, doporučujeme vám kontaktovat nás co nejdříve a zarezervovat si své ideální datum. Těšíme se, že vám pomůžeme zrealizovat vaše sny o dokonalé svatbě.`,
                                image: {
                                    staticImageData: contentImage2,
                                },
                                isReversed: true,
                            },
                            {
                                title: `Aktivity`,
                                perex: `V létě můžou děti řádit a objevovat naučnou stezku s kamarádem Kukym, pouštět vodní mlýnek nebo bagrovat písek. Je tu také možnost využít sportovní víceúčelové hřiště, půjčit si na penzionu elektrokola či elektrokoloběžky a projet se po okolní krásné krajině. V zimě k sáňkám přidat také lyže na devět kilometrů vzdáleném svahu. Okolí je ráj na turistiku, cyklistiku, skalní lezení a běžky.`,
                                image: {
                                    staticImageData: contentImage3,
                                },
                                isReversed: false,
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
                            perex: `Penzion lorem ipsum dolor sit amet lorem ipsum dolor sit amet <a href="${DATA_PHONE.href}">${DATA_PHONE.name}</a> nebo e-mailem <a href="${DATA_EMAIL.href}">${DATA_EMAIL.name}</a>.`,
                            contactItems: [
                                {
                                    href: DATA_PHONE.href,
                                    iconName: DATA_PHONE.icon,
                                    target: false,
                                },
                            ].concat(
                                DATA_SOCIAL.records.map((social) => ({
                                    href: social.url,
                                    iconName: social.icon,
                                    target: true,
                                }))
                            ),
                        },
                    },
                    // {
                    //     type: WidgetType.Banner,
                    //     item: {
                    //         title: `Rezervujte si termín svatby`,
                    //         perex: `Penzion lorem ipsum dolor sit amet lorem ipsum dolor sit amet <a href="${DATA_PHONE.href}">${DATA_PHONE.name}</a> nebo e-mailem <a href="${DATA_EMAIL.href}">${DATA_EMAIL.name}</a>.`,
                    //         contactItems: [
                    //             {
                    //                 href: DATA_PHONE.href,
                    //                 iconName: DATA_PHONE.icon,
                    //                 target: false,
                    //             },
                    //         ].concat(
                    //             DATA_SOCIAL.records.map((social) => ({
                    //                 href: social.url,
                    //                 iconName: social.icon,
                    //                 target: true,
                    //             }))
                    //         ),
                    //     },
                    // },
                ],
            },
            {
                backgroundColor: `Section--backgroundSoftSecondary`,
                containerType: `BaseContainer`,
                anchor: `skills`,
                widgets: [
                    // {
                    //     type: WidgetType.Skills,
                    //     title: `Skills / what I can offer`,
                    //     items: [
                    //         {
                    //             name: `Schedule Management`,
                    //             text: `Creating project roadmaps with designated time frame`,
                    //         },
                    //         {
                    //             name: `Strategic Planning`,
                    //             text: `If the client wants to proceed in a certain way`,
                    //         },
                    //     ],
                    // },
                    // {
                    //     type: WidgetType.ImageContent,
                    //     items: [
                    //         {
                    //             title: `Mentoring`,
                    //             perex: `Personally, I see a goal in the future for myself in mentoring. I mean that I like the way I can explain something to other people. Especially when it is a talent I excel in. For example dancing - it is a passion of mine and people seem to enjoy watching me dance. Among our folk dance group, I am the go-to person for learning how to dance. Equally, I enjoyed being a buddy for newbies in the company.`,
                    //             image: {
                    //                 staticImageData: mentoringImage,
                    //             },
                    //         },
                    //     ],
                    // },
                ],
            },
            // {
            //     backgroundColor: `Section--backgroundSoftSecondary`,
            //     containerType: `SmallContainer`,
            //     anchor: `work-experience`,
            //     widgets: [
            //         // {
            //         //     type: WidgetType.Jobs,
            //         //     title: `Jobs`,
            //         //     items: [
            //         //         {
            //         //             companyName: `PUXdesign`,
            //         //             position: `Project manager and Junior frontend coder`,
            //         //             description: `Agile project management, creation of roadmaps/schedules, offers, SoW,
            //         //             communication with clients and with the team, reporting to management and the client, mentoring`,
            //         //             duration: `2021 - untill now`,
            //         //             websiteLink: `https://www.puxdesign.cz`,
            //         //         },
            //         //         {
            //         //             companyName: `FaceUp`,
            //         //             position: `SW Tester`,
            //         //             description: `Website and application testing, bug reporting, communication with the experts`,
            //         //             duration: `2021 - 2022`,
            //         //             websiteLink: `https://www.faceup.com/en`,
            //         //         },
            //         //         {
            //         //             companyName: `Gymnasium of Jan Blahoslav`,
            //         //             position: ``,
            //         //             description: `High School Diploma`,
            //         //             duration: `2012 - 2020`,
            //         //             websiteLink: `https://www.gjbi.cz/`,
            //         //         },
            //         //     ],
            //         // },
            //     ],
            // },
        ],
    },
};
