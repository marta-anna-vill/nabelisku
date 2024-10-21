import { ISocial } from '../../../modules/master/social/Social';
import { IconName } from '../../../modules/utilities/icon/Icon';
import { TContentItem } from '../../manager/manager';

export const DATA_INSTAGRAM_URL = `https://www.instagram.com/penzion_na_belisku/`;

export const DATA_SOCIAL: TContentItem<ISocial> = {
    records: [
        {
            icon: IconName.Instagram,
            name: `Instagram`,
            url: `https://www.instagram.com/penzion_na_belisku/`,
        },
        {
            icon: IconName.Facebook,
            name: `Facebook`,
            url: `https://www.facebook.com/nabelisku`,
        },
    ],
};
