import { useEffect } from 'react';

export enum DispatchHelperAction {
    closeHeaderMenu = `closeHeaderMenu`,
}

interface DispatchHelperDataType<TData> {
    type: DispatchHelperAction;
    payload: TData;
}

export class DispatchHelper {
    static dispatch<TData>(data: DispatchHelperDataType<TData>) {
        window.postMessage({
            pux: JSON.stringify(data),
        });
    }

    static listen<TData>(action: DispatchHelperAction, callback: (data: TData) => void) {
        useEffect(() => {
            const handleListen = (ev: MessageEvent) => {
                if (!ev.data.pux) {
                    return;
                }

                const evData: DispatchHelperDataType<TData> = JSON.parse(ev.data.pux);

                console.log(`Provided listen for ${action}, ${evData.type}`);

                if (action !== evData.type) {
                    return false;
                }

                callback(evData.payload);
            };

            // Bind the event listener
            window.addEventListener(`message`, handleListen);
            return () => {
                // Unbind the event listener on clean up
                window.removeEventListener(`message`, handleListen);
            };
        }, []);
    }
}
