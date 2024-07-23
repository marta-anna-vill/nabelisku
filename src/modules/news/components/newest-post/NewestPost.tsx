import FsLightbox from 'fslightbox-react';
import { useState } from 'react';
import React from 'react';

import { IJuicerPost } from '../../../../helpers/juicer-helper';
import { Button } from '../../../utilities/button/Button';
import { ImageComponent } from '../../../utilities/image/Image';
import { NewsHelper } from '../../helpers/helper';
import { NewsPostToolbar } from '../toolbar/Toolbar';
import styles from './newest-post.module.scss';

export interface INewestPost {
    post: IJuicerPost;
}

export const NewestPost = (props: INewestPost) => {
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1,
    });

    const [lightboxVideoController, setLightboxVideoController] = useState({
        toggler: false,
        slide: 1,
    });

    return (
        <React.Fragment>
            <div className={styles.newestItem}>
                <div className={styles.newestItemImage}>
                    <ImageComponent
                        image={{ staticImageData: { src: props.post.image, height: 500, width: 500 } }}
                    />
                    <NewsPostToolbar
                        post={props.post}
                        lightboxController={lightboxController}
                        setLightboxController={setLightboxController}
                        lightboxVideoController={lightboxVideoController}
                        setLightboxVideoController={setLightboxVideoController}
                    />
                </div>
                <div className={styles.newestItemContent}>
                    <div className={styles.newestItemContentInner}>
                        <div
                            className={styles.newestItemContentText}
                            dangerouslySetInnerHTML={{ __html: props.post.message }}
                        ></div>
                        <div className={styles.newestItemButtons}>
                            <div className={styles.newestItemButton}>
                                <Button href={`#posts`} name='Další příspěvky' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {props.post.additional_photos.length > 0 && (
                <FsLightbox
                    toggler={lightboxController.toggler}
                    sources={props.post.additional_photos}
                    slide={lightboxController.slide}
                />
            )}

            {props.post.video && (
                <FsLightbox
                    toggler={lightboxVideoController.toggler}
                    sources={[props.post.video]}
                    slide={lightboxVideoController.slide}
                    onOpen={() => {
                        NewsHelper.playVideo();
                    }}
                />
            )}
        </React.Fragment>
    );
};
