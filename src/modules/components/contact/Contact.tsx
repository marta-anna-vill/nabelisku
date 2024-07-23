import Link from 'next/link';

import { TContact } from '../../master/contact/contact';
import { Icon, IconName } from '../../utilities/icon/Icon';
import css from './contact.module.scss';

export interface IContact {
    contact: TContact;
}

export const Contact = (props: IContact) => (
    <Link href={props.contact.href} className={css[`ContactItem`]}>
        <div className={css[`ContactItem-icon`]}>
            <Icon name={props.contact.icon} />
        </div>
        <div className={css[`ContactItem-content`]}>
            <div className={css[`ContactItem-name`]}>
                <span dangerouslySetInnerHTML={{ __html: props.contact.name }}></span>
            </div>
        </div>
    </Link>
);
