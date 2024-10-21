import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang='cs'>
            <Head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-KJPPP8MB');
				`,
                    }}
                ></script>

                {/* Fonts */}
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Marcellus&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
                    rel='stylesheet'
                />

                {/* <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link href='https://fonts.googleapis.com/css2?family=Radley&display=swap' rel='stylesheet' /> */}

                {/* Favicon */}
                <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
                <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
                <link rel='manifest' href='/site.webmanifest' />
                <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#fff' />
                <meta name='msapplication-TileColor' content='#fff' />
                <meta name='theme-color' content='#ffffff'></meta>
            </Head>
            <body>
                <noscript>
                    <iframe
                        src='https://www.googletagmanager.com/ns.html?id=GTM-KJPPP8MB'
                        height='0'
                        width='0'
                        style={{ display: `none`, visibility: `hidden` }}
                    ></iframe>
                </noscript>

                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
