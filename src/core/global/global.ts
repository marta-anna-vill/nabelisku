export {};

declare global {
    interface Window {
        dataLayer: [
            {
                [key: string]: string;
            }
        ];
    }
}
