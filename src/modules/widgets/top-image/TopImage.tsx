import React from 'react';

import { Button, IButton } from '../../utilities/button/Button';
import { Icon, IconName } from '../../utilities/icon/Icon';
import { IImage, ImageComponent } from '../../utilities/image/Image';
import { WidgetType } from '../shared/widget-builder/WidgetBuilder';
import styles from './top-image.module.scss';

export type ITopImage = {
    perex: string;
    title: string;
    motto?: string;
    image?: IImage;
    video?: string;
    cta?: IButton;
    secondaryCta?: IButton;
    ctaScroll?: boolean;
};

export type ITopImageWidget = {
    type: WidgetType.TopImage;
    item: ITopImage;
};

export const TopImageWidget: React.FC<ITopImageWidget> = (props) => {
    return (
        <React.Fragment>
            <div className={`Widget ${styles[`Widget--topImage`]}`}>
                <div className='BaseContainer'>
                    <div className={styles.container}>
                        <div className={styles.inner}>
                            {/* <svg
                                className={styles.ornament2}
                                width='951'
                                height='1019'
                                viewBox='0 0 951 1019'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M941.688 7.08278C823.329 8.68165 706.787 37.7811 591.802 69.7586C516.53 90.8637 441.258 111.969 365.986 133.394C366.765 129.237 367.543 124.76 368.322 120.283C375.33 85.1078 382.857 49.9326 390.644 14.7574C394.018 0.0477412 375.33 -6.34775 371.956 8.36188C362.352 51.5315 353.268 95.3406 344.962 139.15C308.623 149.382 272.025 159.615 235.687 170.168C177.027 186.796 118.107 203.105 59.4466 219.733C7.01562 234.762 -45.4153 251.71 -94.2124 280.49C-108.229 288.804 -139.376 305.752 -121.726 330.695C-114.977 340.288 -100.961 342.207 -91.3573 344.765C-77.3411 348.922 -63.3249 351.48 -49.0491 353.399C-17.6425 357.876 13.7642 358.195 45.1708 358.835C132.902 360.754 220.633 362.352 308.364 364.271C285.263 535.99 273.064 709.947 272.545 883.585C272.545 918.441 273.583 952.976 277.736 987.512C279.293 999.024 280.851 1009.9 290.195 1015.65C297.462 1020.13 306.287 1019.17 312.776 1012.77C321.082 1004.46 323.937 987.832 327.052 976C331.984 958.732 335.877 941.144 339.251 923.237C346 888.701 350.672 853.846 355.604 818.991C366.505 743.524 377.406 668.057 388.308 592.91C393.499 556.136 398.95 519.362 404.141 482.588C407.775 457.325 414.783 429.185 412.707 402.964C408.813 350.521 368.322 342.207 330.945 340.608C339.511 279.851 349.374 219.093 360.795 158.976C405.439 146.505 449.824 134.033 494.468 121.242C612.827 87.9858 731.445 50.8919 852.659 36.502C882.249 32.9845 911.839 31.0659 941.429 30.4263C954.147 30.7461 954.147 7.08278 941.688 7.08278ZM334.839 364.911C356.642 365.23 387.789 367.789 393.24 399.766C397.393 424.708 388.827 454.767 385.453 479.07C380.262 515.844 374.811 552.618 369.62 589.392C358.978 662.941 348.336 736.489 337.954 809.717C333.022 844.573 328.09 879.748 321.601 914.283C318.487 930.272 315.112 946.261 310.959 961.93C308.883 969.604 306.806 977.599 304.211 984.954C300.058 996.785 298.76 996.466 297.203 983.994C287.859 913.004 292.012 838.177 294.607 766.547C297.203 693.959 301.615 621.37 307.845 549.101C313.295 487.384 320.044 425.988 328.35 364.911C330.426 364.911 332.503 364.911 334.839 364.911ZM311.478 340.608C306.028 340.608 301.096 340.608 296.164 340.608C238.283 339.329 180.401 338.369 122.519 337.09C78.9135 336.131 35.048 336.131 -8.81749 333.892C-38.6668 332.294 -68.5161 328.456 -97.5867 318.863C-107.71 315.345 -103.037 312.787 -96.2889 308.63C-90.0595 304.473 -83.5705 300.636 -77.0815 297.118C-63.5845 289.444 -49.5683 283.048 -35.5521 276.973C18.4362 254.269 74.501 240.198 130.047 224.53C199.868 204.704 269.949 185.197 339.77 165.371C329.388 223.25 319.784 281.769 311.478 340.608Z'
                                    fill='#F3EDAF'
                                />
                            </svg> */}
                            {/* <svg
                                className={styles.ornament2}
                                xmlns='http://www.w3.org/2000/svg'
                                width='420'
                                height='420'
                                viewBox='0 0 420 420'
                                fill='none'
                            >
                                <path
                                    d='M21 7V412.5H88V170L210 412.5L334.5 170V412.5H400V7H334.5L210 276.5L88 7H21Z'
                                    fill='url(#paint0_linear_738_314)'
                                    fill-opacity='0.7'
                                />
                                <defs>
                                    <linearGradient
                                        id='paint0_linear_738_314'
                                        x1='210.5'
                                        y1='7'
                                        x2='210.5'
                                        y2='412.5'
                                        gradientUnits='userSpaceOnUse'
                                    >
                                        <stop offset='0.583333' stop-color='#eeeeee' />
                                        <stop offset='1' stop-color='#eeeeee' stop-opacity='0.31' />
                                    </linearGradient>
                                </defs>
                            </svg> */}

                            <div className={`${styles.content} perex`}>
                                <h1>{props.item.title}</h1>
                                <div className={styles.contentInner}>
                                    <div dangerouslySetInnerHTML={{ __html: props.item.perex }}></div>
                                    {props.item.motto && (
                                        <div className={styles[`TopImage-motto`]}>"{props.item.motto}"</div>
                                    )}
                                    {(props.item.cta || props.item.ctaScroll) && (
                                        <div className={styles.cta}>
                                            {props.item.cta && <Button {...props.item.cta} />}
                                            {props.item.secondaryCta && (
                                                <Button {...props.item.secondaryCta} />
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className={styles.background}>
                                {/* <svg
                                    className={styles[`TopImage-backgroundOrnament`]}
                                    width='130'
                                    height='927'
                                    viewBox='0 0 130 927'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M0 0H130C130 0 3 276.401 3 463.5C3 650.598 130 927 130 927H0V0Z'
                                        fill='#2A2A29'
                                    />
                                </svg>

                                <svg
                                    className={styles[`TopImage-backgroundOrnamentRespo`]}
                                    width='928'
                                    height='131'
                                    viewBox='0 0 928 131'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M0.5 130.5L0.5 0.5C0.5 0.5 276.902 127.5 464 127.5C651.098 127.5 927.5 0.5 927.5 0.5V130.5L0.5 130.5Z'
                                        fill='#2A2A29'
                                    />
                                </svg> */}

                                {props.item.video && (
                                    <React.Fragment>
                                        <div className={styles.video}>
                                            {/* <ImageComponent {...props.item.image} /> */}
                                            <video height='500' width='500' autoPlay muted loop>
                                                <source src={props.item.video} type='video/mp4'></source>
                                            </video>
                                        </div>
                                        <div className={styles[`TopImage-logo`]}>
                                            <Icon name={IconName.Logo} />
                                        </div>
                                    </React.Fragment>
                                )}

                                {props.item.image && (
                                    <div className={styles.image}>
                                        <ImageComponent image={props.item.image} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {props.item.cta?.href === `#obsah` ? (
                <div id={props.item.cta?.href.replace(`#`, ``)}></div>
            ) : null}
        </React.Fragment>
    );
};
