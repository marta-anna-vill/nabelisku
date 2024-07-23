import css from './cookie-record.module.scss';

export interface ICookieRecord {
    name: string;
    domain: string;
    validity: string;
    description: string;
    processor: string;
}

export const CookieRecord = ({ name, domain, validity, description, processor }: ICookieRecord) => {
    return (
        <div className={css[`CookieRecord`]}>
            <div className={css[`CookieRecord-name`]}>{name}</div>
            <div className={css[`CookieRecord-items`]}>
                <div className={css[`CookieRecord-item`]}>
                    <div className={css[`CookieRecord-itemName`]}>Doména:</div>
                    <div className={css[`CookieRecord-itemValue`]}>{domain}</div>
                </div>
                <div className={css[`CookieRecord-item`]}>
                    <div className={css[`CookieRecord-itemName`]}>Platnost:</div>
                    <div className={css[`CookieRecord-itemValue`]}>{validity}</div>
                </div>
                <div className={css[`CookieRecord-item`]}>
                    <div className={css[`CookieRecord-itemName`]}>Popis:</div>
                    <div className={css[`CookieRecord-itemValue`]}>{description}</div>
                </div>
                <div className={css[`CookieRecord-item`]}>
                    <div className={css[`CookieRecord-itemName`]}>Zpracovatel:</div>
                    <div className={css[`CookieRecord-itemValue`]}>{processor}</div>
                </div>
            </div>
        </div>
    );
};
