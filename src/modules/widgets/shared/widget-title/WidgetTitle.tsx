import styles from './widget-title.module.scss';

export type TTitleWidget = {
    title: string;
};

export const TitleWidget = (props: TTitleWidget) => (
    <div className={styles.container}>
        <h2>{props.title}</h2>
    </div>
);
