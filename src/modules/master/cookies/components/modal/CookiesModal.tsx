import { Button, ButtonType } from '../../../../utilities/button/Button';
import cssButton from '../../../../utilities/button/button.module.scss';
import { UseCookies } from '../../hooks/UseCookies';
import { useCookiesStore } from '../../store/cookies-store';
import { CookieType } from '../cookie-type/CookieType';
import { CookiesSettings } from '../settings/CookiesSettings';
import styles from './cookies-modal.module.scss';

export const CookiesModal = () => {
    const store = useCookiesStore();
    const { enableNecessaryCookies, enableAllCookies, saveSettings } = UseCookies();

    return (
        <div className={`${styles.modal} ${store.isModalDisplayed ? styles.isVisible : ``}`}>
            <div className={styles.container}>
                <div className={styles.dialog}>
                    <h3 className={styles.title}>Nastavení cookies</h3>
                    <div className={styles.options}>
                        <CookiesSettings />
                    </div>
                    <div className={styles.controls}>
                        <span
                            onClick={() => enableNecessaryCookies()}
                            className={`${cssButton[`Button`]} ${cssButton[ButtonType.default]}`}
                        >
                            Pouze nutné
                        </span>
                        <span
                            onClick={() => saveSettings(store.settings)}
                            className={`${cssButton[`Button`]} ${cssButton[ButtonType.default]}`}
                        >
                            Potvrdit moje volby
                        </span>
                        <span
                            onClick={() => enableAllCookies()}
                            className={`${cssButton[`Button`]} ${cssButton[ButtonType.primary]}`}
                        >
                            Akceptovat vše
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
