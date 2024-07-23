import Link from 'next/link';

import { WidgetType } from '../shared/widget-builder/WidgetBuilder';
import css from './jobs.module.scss';

export type IJob = {
    companyName: string;
    position: string;
    duration: string;
    description: string;
    websiteLink: string;
};

export type IJobsWidget = {
    type: WidgetType.Jobs;
    title: string;
    items: IJob[];
};

export const JobsWidget: React.FC<IJobsWidget> = (props) => {
    return (
        <div className={`Widget ${css[`Widget--jobs`]}`}>
            <h2 className={css[`JobsTitle`]}>{props.title}</h2>
            <div className={css[`JobsContainer`]}>
                {props.items.map((item, index) => (
                    <Link href={item.websiteLink} target='_blank' className={css[`JobItem`]} key={index}>
                        <div className={css[`JobItem-companyName`]}>{item.companyName}</div>
                        <div className={css[`JobItem-position`]}>{item.position}</div>
                        <div className={css[`JobItem-duration`]}>{item.duration}</div>
                        <div className={css[`JobItem-description`]}>{item.description}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
