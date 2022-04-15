import { useEffect, useRef } from 'react';
import './ErrorsModal.css';

const ErrorsModal = ({ errors, setErrors ,update}) => {

    let menuRef = useRef()


    useEffect(() => {

        const handler = (event) => {

            if (!menuRef.current.contains(event.target)) {

                setErrors([]);
            }
        }

        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler)
        }


    });


    return (
        <div className={update ? 'background-modal andotherstuff' :"background-modal"}>
            <div ref={menuRef} className="modal-container">
                <div className='signinerrors'>
                    {errors.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
                </div>
                <button onClick={() => setErrors([])} className='tryagain'>Try again</button>
            </div>

        </div>
    )
}

export default ErrorsModal
