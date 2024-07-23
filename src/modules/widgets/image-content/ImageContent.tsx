import { StaticImageData } from 'next/image';
import Link from 'next/link';

import { Button, IButton } from '../../utilities/button/Button';
import { IImage, ImageComponent } from '../../utilities/image/Image';
import { SiteLink } from '../../utilities/link/Link';
import { WidgetType } from '../shared/widget-builder/WidgetBuilder';
import styles from './image-content.module.scss';

export type TImageContent = {
    image: IImage;
    title: string;
    perex: string;
    anchor?: string;
    isReversed?: boolean;
    gallery?: IImage[];
    cta?: IButton;
};

export type TImageContentWidget = {
    type: WidgetType.ImageContent;
    items: TImageContent[];
    title?: string;
    anchor?: string;
};

export const ImageContentWidget: React.FC<TImageContentWidget> = (props) => {
    return (
        <div className={`Widget ${styles.wrapper}`} id={props.anchor}>
            {/* <div className={styles.title}>
                <h2>{props.title}</h2>
                <div className={styles.navigation}>
                    {props.items.map((item, index) => (
                        <div className={styles.navigationItem} key={index}>
                            <SiteLink
                                className={styles.navigationItemLink}
                                additionalOffset={25}
                                href={`#${item.anchor}`}
                                name={item.title}
                            />
                        </div>
                    ))}
                </div>
            </div> */}

            <div className={styles.itemsContainer}>
                {props.items.map((item, index) => (
                    <div
                        id={item.anchor}
                        className={`${styles.item} ${item.isReversed ? styles.isReversed : ``}`}
                        key={index}
                    >
                        <div className={styles.image}>
                            <ImageComponent image={item.image} />
                        </div>

                        <div className={styles.content}>
                            <div className={styles.contentInner}>
                                <h3>{item.title}</h3>
                                <div dangerouslySetInnerHTML={{ __html: item.perex }}></div>

                                {item.cta && (
                                    <div className={styles.cta}>
                                        <Button {...item.cta} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
