export class ScrollHelper {
    public static smoothScroll(url: string, additionalOffset?: number) {
        const anchor = this.getAnchorFromUrl(url);

        if (!anchor) {
            return;
        }

        const target = document.querySelector<HTMLElement>(anchor);

        if (!target) {
            return;
        }

        const targetTop = target.getBoundingClientRect().top;
        const diffScroll =
            document.body.scrollHeight - window.innerHeight > targetTop + window.scrollY
                ? targetTop
                : document.body.scrollHeight - window.innerHeight;
        const initialPosition = window.scrollY;
        const duration = 20;
        const stepX = Math.PI / duration;

        let stepCount = 0;

        requestAnimationFrame(step);

        function step() {
            if (stepCount < duration) {
                requestAnimationFrame(step);
                stepCount++;
                window.scrollTo(
                    0,
                    initialPosition +
                        (diffScroll - (84 + (additionalOffset ?? 0))) *
                            0.25 *
                            Math.pow(1 - Math.cos(stepX * stepCount), 2)
                );
            }
        }
    }

    private static getAnchorFromUrl(url: string) {
        if (!url.includes(`#`)) {
            return null;
        }

        const anchor = url.slice(url.lastIndexOf(`#`), url.length);

        if (anchor.length === 0) {
            return null;
        }

        return anchor;
    }
}
