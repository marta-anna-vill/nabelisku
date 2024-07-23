import FsLightbox from 'fslightbox-react';
import { useState } from 'react';
import React from 'react';

import { IJuicerPost } from '../../../../helpers/juicer-helper';
import { ImageComponent } from '../../../utilities/image/Image';
import { NewsHelper } from '../../helpers/helper';
import { NewsPostToolbar } from '../toolbar/Toolbar';
import styles from './news-post.module.scss';

export const NewsPost = (props: IJuicerPost) => {
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
            <div className={styles.item}>
                <div className={styles.itemImage}>
                    <ImageComponent
                        image={{ staticImageData: { src: props.image, height: 500, width: 500 } }}
                    />
                    <NewsPostToolbar
                        post={props}
                        lightboxController={lightboxController}
                        setLightboxController={setLightboxController}
                        lightboxVideoController={lightboxVideoController}
                        setLightboxVideoController={setLightboxVideoController}
                    />
                </div>
                <div className={styles.itemContent}>
                    <div
                        className={styles.itemContentText}
                        dangerouslySetInnerHTML={{ __html: props.message }}
                    ></div>
                </div>
            </div>

            {props.additional_photos.length > 0 && (
                <FsLightbox
                    toggler={lightboxController.toggler}
                    sources={props.additional_photos}
                    slide={lightboxController.slide}
                />
            )}

            {props.video && (
                <FsLightbox
                    toggler={lightboxVideoController.toggler}
                    sources={[props.video]}
                    slide={lightboxVideoController.slide}
                    onOpen={() => {
                        NewsHelper.playVideo();
                    }}
                />
            )}
        </React.Fragment>
    );
};
