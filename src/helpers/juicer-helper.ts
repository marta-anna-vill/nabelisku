export interface IJuicerPost {
    additional_photos: string[];
    image: string;
    message: string;
    full_url: string;
    external_created_at: string;
    video?: string;
}

export interface IJuicerData {
    posts: {
        items: IJuicerPost[];
    };
}

export class JuicerHelper {
    public static async getData(): Promise<IJuicerData | null> {
        const response = await fetch(`https://www.juicer.io/api/feeds/vinarstvitoporcer?per=14&page=1`);

        if (!response.ok) {
            return null;
        }

        return (await response.json()) as IJuicerData;
    }

    public static formatMessage(htmlText: string, heading: 'h1' | 'h2' | 'h3' | 'h4') {
        const clearedText = htmlText
            .replaceAll(`<p>`, ``)
            .replaceAll(`</p>`, ``)
            .replaceAll(`_`, ``)
            .replaceAll(`—`, ``);

        const texts = clearedText.split(`<br><br>`);
        const title = texts.shift();
        const formattedTexts = texts.map((text) => `<span>${text}</span>`);

        formattedTexts.unshift(`<${heading}>${title}</${heading}>`);

        return formattedTexts.join(``);
    }
}
