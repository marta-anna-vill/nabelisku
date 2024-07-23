import { Button } from '../../../utilities/button/Button';
import css from './service-samples.module.scss';

export const YourServiceSample = () => {
    return (
        <div className={`${css[`YourServiceSample`]}`}>
            <div className={`${css[`YourServiceSample-title`]}`}>Další realizace může být ta Vaše!</div>
            <div className={`${css[`YourServiceSample-button`]}`}>
                <Button name='Domluvit schůzku' href={`#kontakt`}></Button>
            </div>
        </div>
    );
};
