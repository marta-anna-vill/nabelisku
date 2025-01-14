import Link from 'next/link';

import { DATA_EMAIL } from '../../../data/master/contact/email/data';
import { DATA_SOCIAL } from '../../../data/master/social/data';
import { Contact, IContact } from '../../components/contact/Contact';
import { SocialList } from '../social/Social';
import css from './footer.module.scss';

export interface IFooter {
    mapTitle: string;
    iframeButton: string;
    contactTitle: string;
    writeUsTitle: string;
    followUsTitle: string;
    place: string;
    ico: string;
    contactPhone: IContact;
    contactPhone2: IContact;
    contactEmail: IContact;
}

export const Footer = (props: IFooter) => {
    return (
        <footer className={css[`Footer`]} id='contact'>
            <div className='BaseContainer'>
                {` `}
                <div className={css[`Footer-top`]}>
                    <div className={css[`Footer-columns`]}>
                        <div className={css[`FooterColumn`]}>
                            <h3 className={css[`FooterColumn-title`]}>Zavolejte nám</h3>
                            <div className={css[`FooterContactBox`]}>
                                <Contact {...props.contactPhone} />
                            </div>
                            {/* <h4>
                                Pokud chcete stihnout ubytování a svatbu ještě nyní, v termínu do 15. ledna
                                2025, volejte +420 734 719 139
                            </h4> */}
                        </div>
                        <div className={css[`FooterColumn`]}>
                            <h3 className={css[`FooterColumn-title`]}>Napište nám na e-mail</h3>
                            <div className={css[`FooterContactBox`]}>
                                <Contact {...props.contactEmail} />
                            </div>
                        </div>
                        <div className={css[`FooterColumn`]}>
                            <h3 className={css[`FooterColumn-title`]}>Sledujte nás na sociálních sítích</h3>
                            <div className={css[`Footer-followUs`]}>
                                <SocialList items={DATA_SOCIAL.records} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={css[`Footer-bottom`]}>
                    <div className={css[`Footer-bottomLogo`]}>2024 © Na Bělisku</div>
                    <div className={css[`Footer-bottomLink`]}>
                        <Link href={`/cookies`}>Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
