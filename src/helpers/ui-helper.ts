import { Dispatch, SetStateAction, useEffect } from 'react';

export class UiHelper {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public static onMouseDownOutside(ref: any, callback: Dispatch<SetStateAction<boolean>>) {
        useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    callback(false);
                }
            };

            // Bind the event listener
            document.addEventListener(`mousedown`, handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener(`mousedown`, handleClickOutside);
            };
        }, [ref]);
    }
}
