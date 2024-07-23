import automotiveImage from '../../../src/assets/images/services/automotive/automatizace.webp';
import automotiveSample01Image01 from '../../../src/assets/images/services/automotive/samples/01/automatizace-potravinarskeho-vyrobniku-01.webp';
import automotiveSample01Image02 from '../../../src/assets/images/services/automotive/samples/01/automatizace-potravinarskeho-vyrobniku-02.webp';
import automotiveSample01Image03 from '../../../src/assets/images/services/automotive/samples/01/automatizace-potravinarskeho-vyrobniku-03.webp';
import automotiveSample01Image04 from '../../../src/assets/images/services/automotive/samples/01/automatizace-potravinarskeho-vyrobniku-04.webp';
import automotiveSample01Image05 from '../../../src/assets/images/services/automotive/samples/01/automatizace-potravinarskeho-vyrobniku-05.webp';
import electroInstalationImage from '../../../src/assets/images/services/electroinstalation/elektroinstalace.webp';
import electroInstalationSample01Image01 from '../../../src/assets/images/services/electroinstalation/samples/01/rekonstrukce-hromosvodu-na-hotelu-v-brne-01.webp';
import electroInstalationSample01Image02 from '../../../src/assets/images/services/electroinstalation/samples/01/rekonstrukce-hromosvodu-na-hotelu-v-brne-02.webp';
import electroInstalationSample01Image03 from '../../../src/assets/images/services/electroinstalation/samples/01/rekonstrukce-hromosvodu-na-hotelu-v-brne-03.webp';
import electroInstalationSample01Image04 from '../../../src/assets/images/services/electroinstalation/samples/01/rekonstrukce-hromosvodu-na-hotelu-v-brne-04.webp';
import electroInstalationSample02Image01 from '../../../src/assets/images/services/electroinstalation/samples/02/instalace-elektromerovych-piliru-01.webp';
import electroInstalationSample02Image02 from '../../../src/assets/images/services/electroinstalation/samples/02/instalace-elektromerovych-piliru-02.webp';
import electroInstalationSample02Image03 from '../../../src/assets/images/services/electroinstalation/samples/02/instalace-elektromerovych-piliru-03.webp';
import electroInstalationSample02Image04 from '../../../src/assets/images/services/electroinstalation/samples/02/instalace-elektromerovych-piliru-04.webp';
import fveImage from '../../../src/assets/images/services/fve/fotovoltaika.webp';
import fveSample01Image01 from '../../../src/assets/images/services/fve/samples/01/fve-rakvice-01.webp';
import fveSample01Image02 from '../../../src/assets/images/services/fve/samples/01/fve-rakvice-02.webp';
import fveSample02Image01 from '../../../src/assets/images/services/fve/samples/02/solax-bratcice-01.webp';
import fveSample02Image02 from '../../../src/assets/images/services/fve/samples/02/solax-bratcice-02.webp';
import fveSample02Image03 from '../../../src/assets/images/services/fve/samples/02/solax-bratcice-03.webp';
import marImage from '../../../src/assets/images/services/mar/mereni-a-regulace.webp';
import marSample01Image01 from '../../../src/assets/images/services/mar/samples/01/rekonstrukce-vymenikove-stanice-brno-stred-01.webp';
import marSample01Image02 from '../../../src/assets/images/services/mar/samples/01/rekonstrukce-vymenikove-stanice-brno-stred-02.webp';
import marSample01Image03 from '../../../src/assets/images/services/mar/samples/01/rekonstrukce-vymenikove-stanice-brno-stred-03.webp';
import marSample01Image04 from '../../../src/assets/images/services/mar/samples/01/rekonstrukce-vymenikove-stanice-brno-stred-04.webp';
import marSample01Image05 from '../../../src/assets/images/services/mar/samples/01/rekonstrukce-vymenikove-stanice-brno-stred-05.webp';
import marSample01Image06 from '../../../src/assets/images/services/mar/samples/01/rekonstrukce-vymenikove-stanice-brno-stred-06.webp';
import marSample02Image01 from '../../../src/assets/images/services/mar/samples/02/rekonstrukce-vymenikove-stanice-brno-stred-01.webp';
import marSample02Image02 from '../../../src/assets/images/services/mar/samples/02/rekonstrukce-vymenikove-stanice-brno-stred-02.webp';
import marSample02Image03 from '../../../src/assets/images/services/mar/samples/02/rekonstrukce-vymenikove-stanice-brno-stred-03.webp';
import marSample02Image04 from '../../../src/assets/images/services/mar/samples/02/rekonstrukce-vymenikove-stanice-brno-stred-04.webp';
import marSample02Image05 from '../../../src/assets/images/services/mar/samples/02/rekonstrukce-vymenikove-stanice-brno-stred-05.webp';
import marSample02Image06 from '../../../src/assets/images/services/mar/samples/02/rekonstrukce-vymenikove-stanice-brno-stred-06.webp';
import { TService } from '../../modules/services/detail/ServiceDetail';
import { TContentItem } from '../manager/manager';
import { DATA_EMAIL } from '../master/contact/email/data';
import { DATA_PHONE } from '../master/contact/phone/data';
import { DATA_SOCIAL } from '../master/social/data';
import { DATA_PROCESS } from './process/data';

export const DATA_SERVICES: TContentItem<TService> = {
    records: [
        {
            id: `mereni-a-regulace`,
            title: `Měření a regulace`,
            image: {
                staticImageData: marImage,
            },
            perex: `Chtěli byste snížit energetickou náročnost vašeho objektu a zároveň zvýšit jeho efektivitu? Pokud chcete ve vašem objektu dosáhnout co nejvyšších úspor, bude pro vás naše služba měření a regulace tou nejlepší volbou.`,
            description: `
			<h2>Popis měření a regulace</h2>
			Námi navržené systémy zajišťují především automatický a ekonomický provoz jednotlivých technologií, při kterém postupujeme na základě našich <strong>dlouholetých zkušeností</strong> v této oblasti. Tým našich odborníků začne <strong>profesionální analýzou naměřených hodnot</strong>, na základě které následně provede <strong>regulaci připojených technologií technických zařízení budov</strong>. Poskytujeme komplexní dodávku celého systému měření a regulace, v rámci kterého zařídíme:
			<ul>
				<li>Realizaci dle vlastní nebo dodané dokumentace</li>
				<li>Řízení a koordinaci prací</li>
				<li>Instalaci měřících a řídících prvků</li>
				<li>Elektromontáže</li>
				<li>Výrobu a dodávku rozvaděčů</li>
				<li>Revizní zprávu</li>
				<li>Konečné uvedení celé technologie do provozu</li>
				<li>Následný servis</li>
			</ul>
			<h3>Rozsah našich realizací MaR:</h3>
			<ul>
				<li>Zdroje tepla a energie (kotelny a kogenerace)</li>
				<li>Rozvody tepla a chladu (výměníkové stanice a předávací stanice)</li>
				<li>Řízení vzduchotechniky a rekuperace</li>
			</ul>
			<h3>Realizace MaR provádíme pro:</h3>
			<ul>
				<li>Obytné objekty (bytové domy)</li>
				<li>Komerční objekty (hotely, restaurace, obchodní a zábavní centra)</li>
				<li>Veřejně prospěšné objekty (školy, stadiony, sportoviště)</li>
				<li>Průmyslové objekty (výrobní haly, logistická centra)</li>
			</ul>
			`,
            samples: {
                items: [
                    {
                        text: `Rekonstrukce výměníkové stanice Brno-Střed.`,
                        images: [
                            marSample01Image01,
                            marSample01Image02,
                            marSample01Image03,
                            marSample01Image04,
                            marSample01Image05,
                            marSample01Image06,
                        ],
                    },
                    {
                        text: `Rekonstrukce výměníkové stanice Brno-Střed.`,
                        images: [
                            marSample02Image01,
                            marSample02Image02,
                            marSample02Image03,
                            marSample02Image04,
                            marSample02Image05,
                            marSample02Image06,
                        ],
                    },
                ],
            },
            process: {
                title: DATA_PROCESS.title,
                steps: DATA_PROCESS.records,
            },
            banner: {
                title: `Zaujaly vás naše služby v oblasti meření a regulace?`,
                perex: `Ozvěte se nám telefonicky na čísle <a href='${DATA_PHONE.href}'>${DATA_PHONE.name}</a> nebo napište na <a href='${DATA_EMAIL.href}'>${DATA_EMAIL.name}</a>.`,
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
        {
            id: `automatizace-a-robotizace-průmyslu`,
            title: `Automatizace a robotizace průmyslu`,
            image: {
                staticImageData: automotiveImage,
            },
            perex: `Automatizace a robotizace průmyslu se týká každé firmy, která má zájem o zvýšení efektivity, snížení nároků na množství pracovníků a celkovou úsporu finančních prostředků. Podívejte se, jak tento proces u nás běžně probíhá.`,
            description: `
			<h2>Náš proces</h2>
			<ul>
				<li>Začneme technickou a ekonomickou analýzou proveditelnosti a na základě ní vám připravíme nabídku.</li>
				<li>Vypracujeme projekt vývoje nového pracoviště, který upravíme k vaší maximální spokojenosti.</li>
				<li>Sestavíme kompletní novou technologii a provedeme elektromontáže dle dodané dokumentace.</li>
				<li>Uvedeme veškeré technologie do provozu a provedeme testování.</li>
				<li>Na závěr poskytneme školení o provozu, údržbě a také následný servis.</li>
			</ul>
			<h3>Rozsah našich realizací automatizací a robotizací průmyslu:</h3>
			<ul>
				<li>Výrobní linky a stroje</li>
				<li>Automotive</li>
				<li>Skladové haly</li>
				<li>Svařovací linky</li>
				<li>Lakovny</li>
				<li>Dopravníková technika</li>
			</ul>
			`,
            samples: {
                items: [
                    {
                        text: `Automatizace potravinářského výrobníku - Ostrava.`,
                        images: [
                            automotiveSample01Image01,
                            automotiveSample01Image02,
                            automotiveSample01Image03,
                            automotiveSample01Image04,
                            automotiveSample01Image05,
                        ],
                    },
                ],
            },
            process: {
                title: DATA_PROCESS.title,
                steps: DATA_PROCESS.records,
            },
            banner: {
                title: `Zaujaly vás naše služby v oblasti automatizace a robotizace průmyslu?`,
                perex: `Ozvěte se nám telefonicky na čísle <a href='${DATA_PHONE.href}'>${DATA_PHONE.name}</a> nebo napište na <a href='${DATA_EMAIL.href}'>${DATA_EMAIL.name}</a>.`,
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
        {
            id: `elektroinstalace`,
            title: `Elektroinstalace`,
            image: {
                staticImageData: electroInstalationImage,
            },
            perex: `Poskytujeme komplexní odborné elektroinstalační práce od vypracování projektu, následnou elektromontáž od A do Z na sjednaném místě až po finální revizi elektrických zařízení.`,
            description: `<div class="perex">Realizujeme <strong>slaboproudé a silnoproudé elektroinstalace</strong> do 1 000 V. Provádíme jak zcela nové elektroinstalace, tak i celkové rekonstrukce původních elektroinstalací. Samozřejmostí je také uvedení celého objektu do provozu včetně <strong>výroby rozvaděčů, kompletace zásuvek, vypínačů až do finální revizi.</strong></div>
			</br>
			U všech projektů v oblasti elektroinstalací klademe důraz na důslednost, kvalitu materiálů a <strong>dodržování všech předpisů a norem</strong>. Pokud se nám svěříte do rukou, zajistíme vám maximální spokojenost a precizní zhotovení v domluveném termínu.
					<ul>
						<li>Byty</li>
						<li>Domy</li>
						<li>Komerční objekty</li>
						<li>Průmysl</li>
					</ul>
			`,
            process: {
                title: DATA_PROCESS.title,
                steps: DATA_PROCESS.records,
            },
            samples: {
                items: [
                    {
                        text: `Rekonstrukce hromosvodů na hotelu v Brně.`,
                        images: [
                            electroInstalationSample01Image01,
                            electroInstalationSample01Image02,
                            electroInstalationSample01Image03,
                            electroInstalationSample01Image04,
                        ],
                    },
                    {
                        text: `Instalace elektroměrových pilířů.`,
                        images: [
                            electroInstalationSample02Image01,
                            electroInstalationSample02Image02,
                            electroInstalationSample02Image03,
                            electroInstalationSample02Image04,
                        ],
                    },
                ],
            },
            banner: {
                title: `Zaujaly vás naše služby v oblasti elektroinstalací?`,
                perex: `Ozvěte se nám telefonicky na čísle <a href='${DATA_PHONE.href}'>${DATA_PHONE.name}</a> nebo napište na <a href='${DATA_EMAIL.href}'>${DATA_EMAIL.name}</a>.`,
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
        {
            id: `fotovoltaika`,
            title: `Fotovoltaika`,
            image: {
                staticImageData: fveImage,
            },
            perex: `Přejděte s námi na sluneční sílu a pořiďte si od nás kompletní fotovoltaiku na klíč. Fotovoltaická elektrárna vám dokáže značně snížit účty za energie a s její pořizovací cenou pomůže dotace, kterou za vás rádi vyřídíme. Realizaci fotovoltaiky vám poskytneme na klíč od výpočtu úspory přes vyřízení dotace až po konečné uvedení elektrárny do provozu.`,
            description: `
			<div class="perex">Garance vyřízení <strong>dotace až 220 000 Kč</strong> při splnění podmínek programu NZÚ. Veškerou administrativu zařídíme za vás. Fotovoltaické panely té <strong>nejvyšší kvality</strong>.</div>
			<h3>Rozsah realizací FVE:</h3>
			<ul>
				<li>Domy</li>
				<li>Bytové domy</li>
				<li>Komerční objekty</li>
				<li>Výrobní haly</li>
				<li>Logistická centra</li>
			</ul>
			<h3>Dotace na fotovoltaiku</h3>
			Díky naší 100% úspěšnosti ve vyřizování dotací z programu Nová zelená úsporám pro vás získáme tu nejvyšší možnou dotační podporu pro domácí elektrárnu, která dosahuje až do výše 220 000 Kč. Průměrná výše námi sjednané dotace se pohybuje okolo 200 000 Kč a běžně dosahuje až 50 % celkové ceny vámi zvoleného fotovoltaického systému.
			`,
            samples: {
                items: [
                    {
                        text: `FVE Rakvice - Goodwe + Pylontech.`,
                        images: [fveSample01Image01, fveSample01Image02],
                    },
                    {
                        text: `FVE Bratčice - Solax`,
                        images: [fveSample02Image01, fveSample02Image02, fveSample02Image03],
                    },
                ],
            },
            process: {
                title: DATA_PROCESS.title,
                steps: DATA_PROCESS.records,
            },
            banner: {
                title: `Zaujaly vás naše služby v oblasti fotovoltaiky?`,
                perex: `Ozvěte se nám telefonicky na čísle <a href='${DATA_PHONE.href}'>${DATA_PHONE.name}</a> nebo napište na <a href='${DATA_EMAIL.href}'>${DATA_EMAIL.name}</a>.`,
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
    ],
};
