import { WidgetType } from '../shared/widget-builder/WidgetBuilder';
import styles from './numbers.module.scss';

export type TNumber = {
    number: number;
    unit: string;
    name: string;
};

export type TNumbersWidget = {
    type: WidgetType.Numbers;
    title: string;
    items: TNumber[];
};

export const NumbersWidget: React.FC<TNumbersWidget> = (props) => {
    return (
        <div className={`Widget ${styles[`Widget--numbers`]} ${styles.container}`}>
            <div className={styles.inner}>
                {props.items.map((item, index) => (
                    <div className={styles.item} key={index}>
                        <div className={styles.itemValue}>{item.number + ` ` + item.unit}</div>
                        <div className={styles.itemTitle}>{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
