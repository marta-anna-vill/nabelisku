import { useEffect, useState } from 'react';

import { DATA_INSTAGRAM_URL, DATA_SOCIAL } from '../../data/master/social/data';
import { IJuicerData, JuicerHelper } from '../../helpers/juicer-helper';
import { Button, ButtonType } from '../utilities/button/Button';
import { NewestPost } from './components/newest-post/NewestPost';
import { NewsPost } from './components/news-post/NewsPost';
import styles from './news-page.module.scss';

export interface INewsPage {
    data: IJuicerData;
}

export const NewsPage = (props: INewsPage) => {
    const posts = [...props.data.posts.items];
    const newestPost = posts.shift();

    return (
        <div className='BaseContainer'>
            {newestPost && <NewestPost post={newestPost} />}

            <div id='posts' className={styles.container}>
                {posts.map((item, index) => (
                    <NewsPost {...item} key={index} />
                ))}
            </div>

            <div className={styles.button}>
                <Button
                    name='Všechny příspěvky'
                    href={DATA_INSTAGRAM_URL}
                    target={true}
                    styles={ButtonType.default}
                ></Button>
            </div>
        </div>
    );
};
