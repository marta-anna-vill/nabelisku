import { ButtonType } from '../../utilities/button/Button';
import { IconName } from '../../utilities/icon/Icon';
import { IImage } from '../../utilities/image/Image';
import { Meta } from '../../utilities/meta/Meta';
import { BannerWidget, TBanner } from '../../widgets/banner/Banner';
import { WidgetType } from '../../widgets/shared/widget-builder/WidgetBuilder';
import { TopImageWidget } from '../../widgets/top-image/TopImage';
import { WysiwygWidget } from '../../widgets/wysiwyg/Wysiwyg';
import { IServiceProcess, ServiceProcess } from './process/ServiceProcess';
import { IServiceSamples, ServiceSamples } from './samples/ServiceSamples';
import styles from './service-detail.module.scss';

export type TService = {
    id: string;
    title: string;
    perex: string;
    image: IImage;
    description: string;
    process: IServiceProcess;
    banner: TBanner;
    samples?: IServiceSamples;
};

export const ServiceDetail = (props: TService) => {
    return (
        <div className={styles.detail}>
            <Meta title={props.title} description={props.perex} image={props.image.staticImageData.src} />

            <TopImageWidget
                type={WidgetType.TopImage}
                item={{
                    title: props.title,
                    perex: props.perex,
                    image: props.image,
                    cta: {
                        name: ``,
                        icon: IconName.ChevronDown,
                        href: `#obsah`,
                        styles: ButtonType.primary,
                    },
                }}
            />

            <div className='Section Section--backgroundWhite'>
                <div className='BaseContainer'>
                    <WysiwygWidget html={props.description} />
                </div>
            </div>

            {props.samples && (
                <div className='Section Section--backgroundSoftSecondary'>
                    <div className='BaseContainer'>
                        <ServiceSamples {...props.samples} />
                    </div>
                </div>
            )}

            <div className='Section Section--backgroundWhite'>
                <div className='BaseContainer'>
                    <ServiceProcess {...props.process} />
                    <BannerWidget type={WidgetType.Banner} item={{ ...props.banner }} anchor='kontakt' />
                </div>
            </div>
        </div>
    );
};
