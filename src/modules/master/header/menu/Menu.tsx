import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';

import { DispatchHelper, DispatchHelperAction } from '../../../../helpers/dispatch-helper';
import { UiHelper } from '../../../../helpers/ui-helper';
import { Icon, IconName } from '../../../utilities/icon/Icon';
import { SiteLink } from '../../../utilities/link/Link';
import styles from '../header.module.scss';

export interface IHeaderMenuLink {
    name: string;
    url?: string;
    children?: IHeaderMenuLink[];
}

export interface IHeaderMenu {
    links: IHeaderMenuLink[];
}

export const HeaderMenu = (props: IHeaderMenu) => (
    <ul>
        {props.links.map((link, index) => (
            <HeaderSubmenuItem {...link} key={index} />
        ))}
    </ul>
);

export const HeaderSubmenuItem = (props: IHeaderMenuLink) => {
    const router = useRouter();
    const [isSubmenuOpen, setSubmenuOpen] = useState(false);

    const handleActiveLink = (asPath: string, url?: string) => {
        return decodeURIComponent(asPath).replace(/\/([^\/]*)$/, `$1`) === url;
    };

    const handleClick = () => {
        DispatchHelper.dispatch({
            type: DispatchHelperAction.closeHeaderMenu,
            payload: {},
        });
    };

    return (
        <li
            className={`${handleActiveLink(router.asPath, props.url) ? styles.isActive : ``} ${
                isSubmenuOpen ? styles.isOpen : ``
            }`}
        >
            {props.url ? (
                <SiteLink onClick={() => handleClick()} href={props.url} name={props.name} />
            ) : (
                <span>{props.name}</span>
            )}

            {props.children && (
                <span onClick={() => setSubmenuOpen((isOpen) => !isOpen)} className={styles.openner}>
                    <Icon name={IconName.ChevronDown} />
                </span>
            )}

            {props.children && <HeaderMenu links={props.children} />}
        </li>
    );
};
