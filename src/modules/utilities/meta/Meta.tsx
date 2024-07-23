import Head from 'next/head';

export interface IMeta {
    title?: string;
    image?: string;
    description?: string;
}

export const Meta = (props: IMeta) => {
    const title = `Marta Halámková${props.title ? ` - ${props.title}` : ``}`;

    return (
        <Head>
            <title>{title}</title>
            <meta property='og:title' content={title}></meta>
            {props.image && (
                <meta property='og:image' content={`https://vinarstvitoporcer.cz/${props.image}`}></meta>
            )}
            {props.description && <meta property='og:description' content={props.description}></meta>}
        </Head>
    );
};
