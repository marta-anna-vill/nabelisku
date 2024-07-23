import Link, { LinkProps } from 'next/link';

import { ScrollHelper } from '../../../helpers/scroll-helper';
import { Icon, IconName } from '../icon/Icon';
import css from './button.module.scss';

export enum ButtonType {
    primary = `Button--primary`,
    default = `Button--default`,
}

export interface IButton extends LinkProps {
    name: string;
    styles?: ButtonType;
    additionalOffset?: number;
    target?: boolean;
    icon?: IconName;
}

export const Button: React.FC<IButton> = (props) => (
    <Link
        target={props.target ? `_blank` : ``}
        rel={props.target ? `noopenner` : ``}
        onClick={() => ScrollHelper.smoothScroll(props.href.toString(), props.additionalOffset)}
        className={`${css[`Button`]} ${css[props.styles ?? ButtonType.primary]}`}
        href={props.href}
    >
        {props.icon ? <Icon name={props.icon} /> : props.name}
    </Link>
);
