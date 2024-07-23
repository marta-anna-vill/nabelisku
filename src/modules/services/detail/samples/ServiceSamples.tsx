import FsLightbox from 'fslightbox-react';
import { StaticImageData } from 'next/image';
import React, { useState } from 'react';

import { ImageComponent } from '../../../utilities/image/Image';
import css from './service-samples.module.scss';
import { YourServiceSample } from './YourServiceSample';

export interface IServiceSample {
    images: StaticImageData[];
    text: string;
}

export interface IServiceSamples {
    items: IServiceSample[];
}

export const ServiceSamples = ({ items }: IServiceSamples) => {
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1,
        images: [``],
    });

    const setCurrentLightbox = (images: string[]) => {
        setLightboxController({
            slide: lightboxController.slide,
            toggler: !lightboxController.toggler,
            images: images,
        });
    };

    return (
        <React.Fragment>
            <div className={`Widget ${css[`ServiceSamplesWrapper`]}`}>
                <h2 className={css[`ServiceSamplesTitle`]}>Ukázky realizací</h2>
                <div className={css[`ServiceSamplesContainer`]}>
                    {items.map((sample, index) => {
                        const imagesPlusCount = sample.images.length - 1;

                        return (
                            <div className={css[`ServiceSample`]} key={index}>
                                <div
                                    className={css[`ServiceSample-image`]}
                                    onClick={() => setCurrentLightbox(sample.images.map((img) => img.src))}
                                >
                                    <ImageComponent
                                        image={{
                                            staticImageData: sample.images[0],
                                        }}
                                    />
                                    {imagesPlusCount > 0 && (
                                        <div className={css[`ServiceSample-imagesCount`]}>
                                            +{imagesPlusCount}
                                        </div>
                                    )}
                                </div>
                                <div className={css[`ServiceSample-text`]}>{sample.text}</div>
                            </div>
                        );
                    })}

                    <YourServiceSample />
                </div>
            </div>
            <FsLightbox
                toggler={lightboxController.toggler}
                sources={lightboxController.images}
                slide={lightboxController.slide}
            />
        </React.Fragment>
    );
};
