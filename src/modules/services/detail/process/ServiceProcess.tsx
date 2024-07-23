import styles from './service-process.module.scss';

export interface IServiceProcessStep {
    name: string;
    text: string;
}

export interface IServiceProcess {
    title?: string;
    steps: IServiceProcessStep[];
}

export const ServiceProcess = (props: IServiceProcess) => (
    <div className={`Widget ${styles.container}`}>
        <h2 className={styles[`ServiceProcessTitle`]}>{props.title}</h2>
        <div className={styles.inner}>
            {props.steps.map((item, index) => (
                <div className={styles.item} key={index}>
                    <div className={styles.name}>
                        {index + 1}. {item.name}
                    </div>
                    <div className={styles.text}>{item.text}</div>
                </div>
            ))}
        </div>
    </div>
);
