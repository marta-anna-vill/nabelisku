import ckdetail from '../../assets/images/products/ck-detail.webp';
import cklisting from '../../assets/images/products/ck-listing.webp';
import drdetail from '../../assets/images/products/dr-detail.webp';
import drlisting from '../../assets/images/products/dr-listing.webp';
import hidetail from '../../assets/images/products/hi-detail.webp';
import hilisting from '../../assets/images/products/hi-listing.webp';
import padetail from '../../assets/images/products/pa-detail.webp';
import palisting from '../../assets/images/products/pa-listing.webp';
import rvdetail from '../../assets/images/products/rv-detail.webp';
import rvlisting from '../../assets/images/products/rv-listing.webp';
import sedetail from '../../assets/images/products/se-detail.webp';
import selisting from '../../assets/images/products/se-listing.webp';
import svdetail from '../../assets/images/products/sv-detail.webp';
import svlisting from '../../assets/images/products/sv-listing.webp';
import zwrosedetail from '../../assets/images/products/zw-rose-detail.webp';
import zwroselisting from '../../assets/images/products/zw-rose-listing.webp';
import { IProduct } from '../../modules/product/detail/ProductDetail';

export const DATA_PRODUCTS: IProduct[] = [
    {
        id: `palava`,
        name: `Pálava`,
        type: `polosladké`,
        image: {
            staticImageData: palisting,
        },
        detailImage: {
            staticImageData: padetail,
        },
        qualityLevel: `moravské zemské víno`,
        volume: `0.75l`,
        perex: `Pálava vznikla křížením odrůd Tramín červený a Müller Thurgau, v našem víně je velmi výrazná vůně i chuť po Tramínu. Víno se vyznačuje atraktivní vůní po exotickém ovoci, květinách a medu. V ústech oceníte bohatý, čistý a harmonický chuťový projev s tóny po tropickém ovoci, broskvích a liči.`,
        locationText: `Hrozny pochází z Velkopavlovické podoblasti, obec Zaječí, vin.trať Zelnice.`,
        additionalInfoText: `Při sběru měly cukernatost 24 g/nMol, při zatřídění by to bylo považováno za výběr z hroznů.`,
        year: `2023`,
        parameters: {
            alcohol: `11.5`,
            sugar: `40.3`,
            acid: `5.8`,
        },
        batchNumber: `1002-2023`,
    },
    {
        id: `hibernal`,
        name: `Hibernal`,
        type: `suché`,
        image: {
            staticImageData: hilisting,
        },
        detailImage: {
            staticImageData: hidetail,
        },
        qualityLevel: `moravské zemské víno`,
        volume: `0.75l`,
        perex: `Ve vůni můžeme hledat tóny čerstvě posečené trávy a jemné květinové tóny, v chuti pak angrešt, černý bez a příjemnou kyselinku.`,
        aboutVarietyText: `Odrůda vznikla křížením Seibel 7053 × Ryzlink rýnský. `,
        locationText: `Hrozny pochází z Velkopavlovické podoblasti, obec Zaječí, vin.trať Zelnice.`,
        year: `2023`,
        parameters: {
            alcohol: `12.7`,
            sugar: `1.3`,
            acid: `6`,
        },
        batchNumber: `1002-2023`,
    },
    {
        id: `veltlinske-cervene-rane`,
        name: `Veltlínské červené rané`,
        type: `suché`,
        qualityLevel: `moravské zemské víno`,
        volume: `0.75l`,
        perex: `Vůně je harmonická, lze cítit peckové ovoce, rozinky. Chuť je dlouhá, kořenitá a na konci cítíme mírnou slanost nebo-li minerálnost, kterou do vína předává stará vinice na Karlově s minerálním podložím.`,
        locationText: `Všechny hrozny pochází z Karlova.`,
        year: `2023`,
        parameters: {
            alcohol: `12`,
            sugar: `3.4`,
            acid: `5.8`,
        },
        batchNumber: `1002-2023`,
    },
    {
        id: `muller-thurgau`,
        name: `Müller Thurgau`,
        type: `polosladké`,
        qualityLevel: `moravské zemské víno`,
        volume: `0.75l`,
        perex: `Chuť i vůně jsou intenzivní, dominantně ovocné s tóny zralého bílého ovoce s dotekem kořenitosti, kterou právě propůjčuje trať Karlov a její minerální podloží.`,
        locationText: `Všechny hrozny pochází z Karlova.`,
        year: `2023`,
        parameters: {
            alcohol: `11.9`,
            sugar: `23.8`,
            acid: `6.2`,
        },
        batchNumber: `1002-2023`,
    },
    {
        id: `donauriesling`,
        name: `Donauriesling`,
        type: `polosuché`,
        image: {
            staticImageData: drlisting,
        },
        detailImage: {
            staticImageData: drdetail,
        },
        qualityLevel: `moravské zemské víno`,
        volume: `0.75l`,
        perex: `Ve vůni rozpoznáte lípu, meloun, zralé broskve a meruňky, v chuti broskev, jablko a chlebovinku. Výsledkem je komplexní a harmonické víno s dlouhou dochutí.`,
        locationText: `Hrozny pochází z Velkopavlovické podoblasti, obec Zaječí, vin.trať Zelnice.`,
        year: `2023`,
        parameters: {
            alcohol: `11.6`,
            sugar: `11.1`,
            acid: `6.3`,
        },
        batchNumber: `1002-2023`,
    },
    {
        id: `ryzlink-vlassky`,
        name: `Ryzlink vlašský`,
        type: `polosladké`,
        image: {
            staticImageData: rvlisting,
        },
        detailImage: {
            staticImageData: rvdetail,
        },
        qualityLevel: `moravské zemské víno`,
        volume: `0.75l`,
        perex: `Ve víně je líbivé aroma ořechové slupky a nasládlý medový tón. V ústech vynikne výrazně ocelovou, avšak šťavnatou kyselinkou, která elegantně souzní se zbytkovým cukrem a s chutí vlašských ořechů, s jemným bylinkovým nádechem a minerálním závěrem.`,
        locationText: `Hrozny pochází z Velkopavlovické podoblasti, obec Zaječí, vin.trať Zelnice.`,
        year: `2023`,
        parameters: {
            alcohol: `11.2`,
            sugar: `26.4`,
            acid: `6.1`,
        },
        batchNumber: `1002-2023`,
    },
    {
        id: `cuvee-karlov`,
        name: `Cuvée Karlov`,
        type: `polosladké`,
        image: {
            staticImageData: cklisting,
        },
        detailImage: {
            staticImageData: ckdetail,
        },
        qualityLevel: `moravské zemské víno`,
        volume: `0.75l`,
        perex: `V tomto víně ucítíte vůni tropického ovoce – nejvíce ananas a banány. „Ovocnou bombu“ pak v chuti doplňují zvláště mangové a pomelové tóny.`,
        aboutWineText: `Toto víno je směs odrůd Solaris, Hibernal, Pálava, Rulandské šedé, Müller Thurgau.`,
        locationText: `Všechny hrozny pochází z Karlova.`,
        year: `2023`,
        parameters: {
            alcohol: `12`,
            sugar: `28.2`,
            acid: `6.5`,
        },
        batchNumber: `1002-2023`,
    },
    {
        id: `zweigeltrebe-rose`,
        name: `Zweigeltrebe Rosé`,
        type: `polosladké`,
        image: {
            staticImageData: zwroselisting,
        },
        detailImage: {
            staticImageData: zwrosedetail,
        },
        qualityLevel: `moravské zemské víno`,
        volume: `0.75l`,
        perex: `Víno má vyšší zbytkový cukr, jemnou kyselinku a ovocitou svěžest. Je postavené na chuti a vůni lesních jahod, smetany a bílého jogurtu.`,
        locationText: `Hrozny na výrobu tohoto vína pochází z Němčiček na Moravě z viniční trati Staré Hory.`,
        year: `2023`,
        parameters: {
            alcohol: `10.7`,
            sugar: `37.4`,
            acid: `6.1`,
        },
        batchNumber: `1002-2023`,
    },
    {
        id: `svatovavrinecke`,
        name: `Svatovavřinecké`,
        type: `suché`,
        image: {
            staticImageData: svlisting,
        },
        detailImage: {
            staticImageData: svdetail,
        },
        qualityLevel: `moravské zemské víno`,
        volume: `0.75l`,
        perex: `Víno je rubínové barvy a jemně voní po švestkových povidlech s podtóny sušených švestek a ostružin, které zaznívají v dlouhé dochuti. Výraznější jemná tříslovina harmonicky ladí s obsahem kyselin a jemným ovocným tónem vyzrálých třešní.`,
        locationText: `Hrozny pochází ze starých hlav Svatovavřineckého z rodinného vinohradu na Karlově v Dolních Kounicích. Jsou ručně sbírané a při sběru měly cukernatost 21 g/nMol.`,
        year: `2023`,
        parameters: {
            alcohol: `12.5`,
            sugar: `0.1`,
            acid: `6.7`,
        },
        batchNumber: `1002-2023`,
    },
    {
        id: `sevar`,
        name: `Sevar`,
        type: `suché`,
        image: {
            staticImageData: selisting,
        },
        detailImage: {
            staticImageData: sedetail,
        },
        qualityLevel: `moravské zemské víno`,
        volume: `0.75l`,
        perex: `V aroma i chuti dominuje drobné lesní ovoce, které přechází do jemně sladkých čokoládových a květinových tónů.`,
        locationText: `Hrozny pochází z kounického vinohradu vypěstované ve Vinařství Dočkal.`,
        aboutVarietyText: `Sevar vznikl křížením odrůd Seyve Villard a Svatovavřinecké`,
        year: `2023`,
        parameters: {
            alcohol: `12.5`,
            sugar: `0.1`,
            acid: `6.5`,
        },
        batchNumber: `1002-2023`,
    },
];
