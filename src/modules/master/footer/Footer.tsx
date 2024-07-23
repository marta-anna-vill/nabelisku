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
                            <h3 className={css[`FooterColumn-title`]}>Call me</h3>
                            <div className={css[`FooterContactBox`]}>
                                <Contact {...props.contactPhone} />
                            </div>
                        </div>
                        <div className={css[`FooterColumn`]}>
                            <h3 className={css[`FooterColumn-title`]}>Write me an email</h3>
                            <div className={css[`FooterContactBox`]}>
                                <Contact {...props.contactEmail} />
                            </div>
                        </div>
                        <div className={css[`FooterColumn`]}>
                            <h3 className={css[`FooterColumn-title`]}>Socials</h3>
                            <div className={css[`Footer-followUs`]}>
                                <SocialList items={DATA_SOCIAL.records} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={css[`Footer-bottom`]}>
                    <div className={css[`Footer-bottomLogo`]}>Marta Halámková</div>
                    <div className={css[`Footer-bottomLink`]}>
                        <Link href={`/cookies`}>Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
