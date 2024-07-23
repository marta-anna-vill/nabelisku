import { WidgetType } from '../shared/widget-builder/WidgetBuilder';
import css from './skills.module.scss';

export type ISkill = {
    name: string;
    text?: string;
};

export type ISkillWidget = {
    type: WidgetType.Skills;
    title: string;
    items: ISkill[];
};

export const SkillsWidget: React.FC<ISkillWidget> = (props) => {
    return (
        <div className={`Widget ${css[`Widget--skills`]}`}>
            <h2 className={css[`SkillsTitle`]}>{props.title}</h2>
            <div className={css[`SkillsContainer`]}>
                {props.items.map((item, index) => (
                    <div className={css[`SkillItem`]} key={index}>
                        <div className={css[`SkillItem-name`]}>{item.name}</div>
                        {item.text && <div className={css[`SkillItem-text`]}>{item.text}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
};
