import Link from 'next/link';

import { Icon, IconName } from '../../utilities/icon/Icon';
import styles from './social.module.scss';

export type ISocial = {
    icon: IconName;
    url: string;
    name: string;
};

export interface ISocialList {
    items: ISocial[];
}

export const SocialList = (props: ISocialList) => (
    <div className={styles.container}>
        {props.items.map((social, index) => {
            return (
                <Link
                    href={social.url}
                    target='_blank'
                    rel='noopener'
                    className={`${styles.item} ${styles[social.icon]}`}
                    key={index}
                >
                    <Icon name={social.icon} />
                    <span className={styles.itemName}>{social.name}</span>
                </Link>
            );
        })}
    </div>
);
