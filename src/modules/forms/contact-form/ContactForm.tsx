import { SubmitHandler, useForm } from 'react-hook-form';

import { ButtonType } from '../../utilities/button/Button';
import buttonStyles from '../../utilities/button/button.module.scss';

interface IFormInput {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    message: string;
    gdpr: boolean;
    contact: string;
}

export const ContactForm = () => {
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

    return (
        <div className='smallContainer'>
            <h2 className='form-title'>Napište nám</h2>
            <form name='contact' method='POST' action='/' data-netlify='true' hidden>
                <div className='form-inner'>
                    <div className='form-control'>
                        <label>Křestní jméno</label>
                        <input type='text' name='firstName' />
                    </div>

                    <div className='form-control'>
                        <label>Příjmení</label>
                        <input type='text' name='lastName' />
                    </div>

                    <div className='form-control'>
                        <label>Telefon</label>
                        <input type='phone' name='phone' />
                    </div>

                    <div className='form-control'>
                        <label>E-mail</label>
                        <input type='email' name='email' />
                    </div>

                    <div className='form-control'>
                        <label>Zpráva</label>
                        <textarea {...register(`message`, {})} />
                    </div>

                    <div className='form-control'>
                        <label>Souhlasíte s gdpr</label>
                        <input type='checkbox' name='gdpr' />
                    </div>

                    <div className='form-control'>
                        <button
                            className={`${buttonStyles.button} ${buttonStyles[ButtonType.primary]}`}
                            type='submit'
                        >
                            Odeslat
                        </button>
                    </div>
                </div>
            </form>
            <form name='contact' method='POST' action='/'>
                <input type='hidden' name='form-name' value='contact' />
                <div className='form-inner'>
                    <div className='form-control'>
                        <label>Křestní jméno</label>
                        <input {...register(`firstName`, { maxLength: 20 })} />
                    </div>

                    <div className='form-control'>
                        <label>Příjmení</label>
                        <input {...register(`lastName`, { pattern: /^[A-Za-z]+$/i })} />
                    </div>

                    <div className='form-control'>
                        <label>Telefon</label>
                        <input {...register(`phone`, {})} />
                    </div>

                    <div className='form-control'>
                        <label>E-mail</label>
                        <input {...register(`email`, {})} />
                    </div>

                    <div className='form-control'>
                        <label>Zpráva</label>
                        <textarea {...register(`message`, {})} />
                    </div>

                    <div className='form-control'>
                        <label>Souhlasíte s gdpr</label>
                        <input type='checkbox' {...register(`gdpr`, {})} />
                    </div>

                    <div className='form-control'>
                        <button
                            className={`${buttonStyles.button} ${buttonStyles[ButtonType.primary]}`}
                            type='submit'
                        >
                            Odeslat
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};
