import css from './wysiwyg.module.scss';

export interface IWysiwygWidget {
    html: string;
}

export const WysiwygWidget = ({ html }: IWysiwygWidget) => (
    <div className={`Widget ${css[`Wysiwyg`]}`} dangerouslySetInnerHTML={{ __html: html }}></div>
);
