import Link from 'next/link';

import { IJuicerPost } from '../../../../helpers/juicer-helper';
import { Icon, IconName } from '../../../utilities/icon/Icon';
import { NewsHelper } from '../../helpers/helper';
import styles from './toolbar.module.scss';

export interface INewsPostToolbar {
    post: IJuicerPost;
    setLightboxController: React.Dispatch<React.SetStateAction<{ toggler: boolean; slide: number }>>;
    lightboxController: { toggler: boolean; slide: number };
    setLightboxVideoController: React.Dispatch<React.SetStateAction<{ toggler: boolean; slide: number }>>;
    lightboxVideoController: { toggler: boolean; slide: number };
}

export const NewsPostToolbar = (props: INewsPostToolbar) => {
    const publishedDays = NewsHelper.countPostPublishedDays(new Date(props.post.external_created_at));

    return (
        <div className={styles.itemToolbar}>
            <Link
                title='Otevřít v instagramu'
                href={props.post.full_url}
                target='_blank'
                rel='noopenner'
                className={`${styles.itemToolbarItem} ${styles.itemToolbarInstagram}`}
            >
                <Icon name={IconName.Instagram} />
            </Link>
            {props.post.video && (
                <div
                    title='Přehrát video'
                    className={`${styles.itemToolbarItem} ${styles.itemToolbarVideo}`}
                    onClick={() =>
                        props.setLightboxVideoController((prevState) => ({
                            slide: 1,
                            toggler: !prevState.toggler,
                        }))
                    }
                >
                    <Icon name={IconName.Play} />
                </div>
            )}
            {props.post.additional_photos.length > 0 && (
                <div
                    title='Prohlédnout obrázky'
                    className={`${styles.itemToolbarItem} ${styles.itemToolbarAdditionalMedia}`}
                    onClick={() =>
                        props.setLightboxController((prevState) => ({
                            slide: 1,
                            toggler: !prevState.toggler,
                        }))
                    }
                >
                    <Icon name={IconName.Lightbox} />
                </div>
            )}
            <div
                title='Publikováno'
                className={`${styles.itemToolbarItem} ${styles.itemToolbarPublishedDays}`}
            >
                {publishedDays}d
            </div>
        </div>
    );
};
