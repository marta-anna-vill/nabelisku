import Image, { StaticImageData } from 'next/image';

export interface IImage {
    staticImageData: StaticImageData;
    alt?: string;
}

export interface IImageComponent {
    image: IImage;
    loading?: 'lazy' | 'eager';
    priority?: 'low' | 'high';
    className?: string;
}

export const ImageComponent = ({ image, loading, className, priority }: IImageComponent) => {
    return (
        <picture>
            <source media='(min-width:320px)' srcSet={image.staticImageData.src} type='image/webp'></source>
            <Image
                className={className}
                fetchPriority={priority}
                loading={loading}
                src={image.staticImageData.src}
                height={image.staticImageData.height}
                width={image.staticImageData.width}
                alt={image.alt ?? ``}
            />
        </picture>
    );
};
