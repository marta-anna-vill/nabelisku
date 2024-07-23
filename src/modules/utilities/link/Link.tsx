import Link, { LinkProps } from 'next/link';

import { ScrollHelper } from '../../../helpers/scroll-helper';

export interface ISiteLink extends LinkProps {
    name: string;
    className?: string;
    additionalOffset?: number;
    onClick?: () => void;
}

export const SiteLink = (props: ISiteLink) => {
    const handleClick = () => {
        ScrollHelper.smoothScroll(props.href.toString(), props.additionalOffset);
        props.onClick && props.onClick();
    };

    return (
        <Link onClick={() => handleClick()} href={props.href} className={props.className}>
            {props.name}
        </Link>
    );
};
