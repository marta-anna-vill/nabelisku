import { ISocial } from '../../../modules/master/social/Social';
import { IconName } from '../../../modules/utilities/icon/Icon';
import { TContentItem } from '../../manager/manager';

export const DATA_INSTAGRAM_URL = `https://www.instagram.com/vinarstvitoporcer/`;

export const DATA_SOCIAL: TContentItem<ISocial> = {
    records: [
        {
            icon: IconName.Linkedin,
            name: `Linkedin`,
            url: `https://www.linkedin.com/in/marta-halamkova/`,
        },
    ],
};
