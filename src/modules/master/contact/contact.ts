import { IconName } from '../../utilities/icon/Icon';

export type TContact = {
    icon: IconName;
    name: string;
    href: string;
    type: 'email' | 'phone';
};
