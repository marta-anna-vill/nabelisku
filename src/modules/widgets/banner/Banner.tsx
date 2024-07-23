import Link from 'next/link';

import { Icon, IconName } from '../../utilities/icon/Icon';
import { WidgetType } from '../shared/widget-builder/WidgetBuilder';
import styles from './banner.module.scss';

export type TBannerContact = {
    iconName: IconName;
    href: string;
    target: boolean;
};

export type TBanner = {
    perex: string;
    title: string;
    contactItems: TBannerContact[];
};

export type TBannerWidget = {
    type: WidgetType.Banner;
    anchor?: string;
    item: TBanner;
};

export const BannerWidget: React.FC<TBannerWidget> = (props) => {
    return (
        <div id={props.anchor} className={`Widget ${styles.container}`}>
            <div className={styles.inner}>
                <div className={`${styles.content}`}>
                    <h2>{props.item.title}</h2>
                    <div className='perex' dangerouslySetInnerHTML={{ __html: props.item.perex }}></div>

                    <div className={styles.contactsContainer}>
                        {props.item.contactItems.map((item, index) => (
                            <Link
                                className={styles.contactItem}
                                href={item.href}
                                target='_blank'
                                rel='noopenner'
                                key={index}
                            >
                                <Icon name={item.iconName} />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className={styles.image}></div>
            </div>
        </div>
    );
};
