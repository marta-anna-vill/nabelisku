import styles from './switch.module.scss';

interface ISwitch {
    isDisabled: boolean;
    isChecked: boolean;
    onChange: (isChecked: boolean) => void;
}

export const Switch = ({ isDisabled = false, isChecked = false, onChange }: ISwitch) => {
    return (
        <label className={styles.switch}>
            <input
                type='checkbox'
                disabled={isDisabled}
                checked={isChecked}
                onChange={(ev) => onChange(ev.target.checked)}
            />
            <span className={styles.slider + ` ` + styles.round}></span>
        </label>
    );
};
