import { NavLink } from 'react-router-dom';
import './checkout.css';

const Checkout = () => {

    return (
        <div className="checkoutmaindiv">
            <div className='yesilli'>

                <div className='bakma'>
                    <i className='fas fa-check'></i>
                    <p className='thankyou'> Thank you, your order has been placed.</p>
                </div>

                <p>Thank you for using GenZon.</p>
                <NavLink exact to={'/orders'}><h2 className='viewyourorder'>View your order</h2></NavLink>
            </div>
        </div>
    )
}

export default Checkout;
