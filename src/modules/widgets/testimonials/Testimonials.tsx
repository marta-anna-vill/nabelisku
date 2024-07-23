import { WidgetType } from '../shared/widget-builder/WidgetBuilder';
import { TitleWidget } from '../shared/widget-title/WidgetTitle';
import styles from './testimonials.module.scss';

export type TTestimonional = {
    text: string;
    personName: string;
};

export type TTestimonionalsWidget = {
    type: WidgetType.Testimonials;
    title: string;
    items: TTestimonional[];
    anchor?: string;
};

export const TestimonionalsWidget: React.FC<TTestimonionalsWidget> = (props) => {
    return (
        <div className={`Widget ${styles.container}`} id={props.anchor}>
            <TitleWidget title={props.title} />
            <div className='smallerContainer'>
                <div className={styles.inner}>
                    {props.items.map((item, index) => (
                        <div
                            className={`${styles.item} ${index % 2 === 0 ? styles.isReversed : ``}`}
                            key={index}
                        >
                            <div className={styles.itemText}>{`"${item.text}"`}</div>
                            <div className={styles.itemPersonName}>{item.personName}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
