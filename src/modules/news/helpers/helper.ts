export class NewsHelper {
    public static countPostPublishedDays(publishedDate: Date) {
        const currentDate = new Date();
        const timeDifference = currentDate.getTime() - publishedDate.getTime();
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (days === 0) {
            return 1;
        }

        return days;
    }

    public static playVideo() {
        setTimeout(() => {
            const lightbox = document.querySelector(`.fslightbox-container`);

            if (!lightbox) {
                return;
            }

            const video = document.querySelector(`video`);

            if (!video) {
                return;
            }

            video.play();
        }, 1200);
    }
}
