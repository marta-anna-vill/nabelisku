import '../src/core/main.bundle.scss';

import type { AppProps } from 'next/app';

import Layout from './layout';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
