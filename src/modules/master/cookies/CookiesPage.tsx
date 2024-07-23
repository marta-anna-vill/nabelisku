import React from 'react';

import { DATA_COOKIES } from '../../../data/master/cookies/data';
import { ButtonType } from '../../utilities/button/Button';
import cssButton from '../../utilities/button/button.module.scss';
import { CookieRecord } from './components/record/CookieRecord';
import { CookiesSettings } from './components/settings/CookiesSettings';
import styles from './cookies-page.module.scss';
import { UseCookies } from './hooks/UseCookies';
import { useCookiesStore } from './store/cookies-store';

export const CookiesPage = () => {
    const { handleUpdateSettings } = UseCookies();
    const store = useCookiesStore();

    return (
        <div>
            <div className='Section Section--backgroundWhite'>
                <div className='TextContainer'>
                    <div className={styles[`CookiesPageContent`]}>
                        <h1 dangerouslySetInnerHTML={{ __html: DATA_COOKIES.title }}></h1>
                        <div dangerouslySetInnerHTML={{ __html: DATA_COOKIES.description }}></div>
                        <h2>{DATA_COOKIES.subtitle}</h2>
                        <div dangerouslySetInnerHTML={{ __html: DATA_COOKIES.nextDescription }}></div>

                        <div className={styles[`CookiesTypeContainer`]}>
                            <h3>{DATA_COOKIES.technical.title}</h3>
                            <div
                                dangerouslySetInnerHTML={{ __html: DATA_COOKIES.technical.description }}
                            ></div>
                            <div className={styles[`CookieRecordContainer`]}>
                                {DATA_COOKIES.technical.records.map((record, index) => (
                                    <CookieRecord {...record} key={index} />
                                ))}
                            </div>
                        </div>

                        <div className={styles[`CookiesTypeContainer`]}>
                            <h3>{DATA_COOKIES.analytics.title}</h3>
                            <div
                                dangerouslySetInnerHTML={{ __html: DATA_COOKIES.analytics.description }}
                            ></div>
                            <div className={styles[`CookieRecordContainer`]}>
                                {DATA_COOKIES.analytics.records.map((record, index) => (
                                    <CookieRecord {...record} key={index} />
                                ))}
                            </div>
                        </div>

                        <div className={styles[`CookiesTypeContainer`]}>
                            <h3>{DATA_COOKIES.marketing.title}</h3>
                            <div
                                dangerouslySetInnerHTML={{ __html: DATA_COOKIES.marketing.description }}
                            ></div>
                            <div className={styles[`CookieRecordContainer`]}>
                                {DATA_COOKIES.marketing.records.map((record, index) => (
                                    <CookieRecord {...record} key={index} />
                                ))}
                            </div>
                        </div>

                        <h2>{DATA_COOKIES.learnTitle}</h2>
                        <div dangerouslySetInnerHTML={{ __html: DATA_COOKIES.learnText }}></div>
                        <h2>{DATA_COOKIES.termsConditionsTitle}</h2>
                        <div dangerouslySetInnerHTML={{ __html: DATA_COOKIES.termsConditionsText }}></div>
                    </div>
                </div>
            </div>
            <div className='Section Section--backgroundSoftSecondary'>
                <div className='TextContainer'>
                    <div className={styles.settingsContainer}>
                        <h2 className={styles.settingsTitle}>Nastavení</h2>
                        <CookiesSettings />
                        <div className={styles.settingsButtons}>
                            <span
                                className={`${cssButton[`Button`]} ${cssButton[ButtonType.default]}`}
                                onClick={() => handleUpdateSettings(store.settings)}
                            >
                                Uložit nastavení
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
