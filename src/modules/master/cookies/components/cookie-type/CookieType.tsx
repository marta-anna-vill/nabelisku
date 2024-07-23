import { Switch } from '../../../../utilities/switch/Switch';
import { useCookiesStore } from '../../store/cookies-store';
import styles from './cookie-type.module.scss';

interface ICookieType {
    name: string;
    type: string;
    description: string;
    isDisabled: boolean;
    isChecked: boolean;
}

export const CookieType = (props: ICookieType) => {
    const store = useCookiesStore();

    const handleChange = (isChecked: boolean) => {
        if (!store.settings) {
            return;
        }

        store.setSettings({
            ...store.settings,
            [props.type]: isChecked,
        });
    };

    return (
        <div className={styles.item}>
            <div>
                <strong>{props.name}</strong>
                {props.description}
            </div>
            <Switch
                isChecked={props.isChecked}
                isDisabled={props.isDisabled}
                onChange={(isChecked) => handleChange(isChecked)}
            />
        </div>
    );
};
