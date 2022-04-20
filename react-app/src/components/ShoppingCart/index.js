import { useDispatch, useSelector } from 'react-redux';
import './ShoppingCart.css';
import { shoppingcartDeleteone, updateShoppingcart } from '../../store/shoppingcart';
import { shoppingcartdeleteall } from '../../store/shoppingcart';
import { NavLink, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ShoppingCart = () => {


    let shoppingcart = useSelector(state => Object.values(state.shoppingcart));

    const user = useSelector(state => state.session.user);



    shoppingcart = shoppingcart.filter(ele => ele?.user_id === user?.id);

    const dispatch = useDispatch();
    const history = useHistory();
    let subtotal = 0;

    shoppingcart.forEach(ele => {
        subtotal += (ele?.product?.price * ele?.quantity);
    })

    const handleDeleteOne = (id) => {
        dispatch(shoppingcartDeleteone(id));
    }


    const pleasework = (num) => {
        let arr = []

        for (let i = 1; i <= num; i++) {
            arr.push((<option key={i} value={`${i}`}>{i}</option>))
        }
        return arr

    }


    const updateQuantity = (id,product_id,quantity) => {

        dispatch(updateShoppingcart(id,product_id,quantity));
        return
    }

    const allCart = shoppingcart.map(ele => {
        return (
            <div className='productsinuserpageCart' key={ele?.id}>
                <div className='imgnamepricedeletethingies'>

                    <NavLink exact to={`/productpage/${ele?.product?.id}`}><img className='imginthecart' src={ele?.product?.image_url}></img></NavLink>
                    <div className='somedivdd'>
                        <NavLink exact to={`/productpage/${ele?.product?.id}`}><p style={{ color: "#0F1111", fontSize: "17px", cursor: "pointer", wordWrap: "break-word", marginTop: "8px", fontWeight: "700" }}>{ele?.product?.name}</p></NavLink>
                        <p style={{ color: "#007185" }}>In Stock</p>
                        <p style={{ color: "#565959", fontSize: "12px", lineHeight: "16px" }}>Eligible for FREE Shipping & <span style={{ fontWeight: "700", fontSize: "12px", color: "#007185" }}>FREE Returns</span></p>
                        <div className='qtydelete'>
                            <select onChange={(e) => updateQuantity(ele?.id,ele?.product?.id ,e.target.value)} value={ele?.quantity} style={{ width: "60px", paddingRight: "8px", fontWeight: "700", }}>

                                {
                                    pleasework(ele?.product?.quantity)
                                }

                            </select>
                            <p onClick={() => handleDeleteOne(ele?.id)} className='dontholdme'>Delete</p>
                        </div>
                    </div>
                </div>
                <p style={{ fontSize: "18px", lineHeight: "24px", fontWeight: "700", color: "#0F1111" }}>${ele?.product?.price * ele?.quantity}.00</p>
            </div>
        )
    }).reverse()


    const legendaryLeagueEmptyImage = (
        <div className='legendmain-div'>
            <div className='asilllegendary-div-empty'>
                <div className='somethingheree3'>
                    <div className='h1veh6ikilisi'>

                        <h1 style={{ marginLeft: "10px", fontSize: "28px" }}>Your GenZon Cart is empty...</h1>
                    </div>

                </div>
                <img className='legendimg' src='https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt3d038a51072c6d5a/614cc18164c8007a9bdec0e2/zaun_splash.jpeg'></img>
            </div>
        </div>
    )

    const handleDeleteAll = () => {
        dispatch(shoppingcartdeleteall());
    }

    const handleCheckout = (e) => {
        e.preventDefault();

        dispatch(shoppingcartdeleteall());
        history.push('/checkout')

    }
    return (
        <>
            {
                shoppingcart.length
                    ?
                    <div className='user-products-main-divCart'>
                        <div className='productsGridCart'>
                            <div className='somethingheree3'>
                                <div className='h1veh6ikilisi'>

                                    <h1 style={{ fontSize: "28px" }}>Shopping Cart</h1>
                                    <h6 onClick={handleDeleteAll} className='h6deleteallitems' style={{ width: "fit-content", cursor: "pointer", color: "#007185" }}>Delete all items</h6>
                                </div>
                                <div className='someguy'>

                                    <p>Price</p>
                                </div>
                            </div>
                            {allCart}
                            <div className='somethingheree4'>
                                <p style={{ fontSize: "18px", marginTop: "10px" }} >

                                    Subtotal ({shoppingcart.length} {shoppingcart.length === 1 ? "item" : "items"}): <span style={{ fontSize: "18px", fontWeight: "700" }}>${subtotal}.00</span>
                                </p>
                            </div>

                        </div>
                        <div className='ikincicheckout'>
                            <p style={{ fontSize: "18px", marginTop: "10px" }} >

                                Subtotal ({shoppingcart.length} {shoppingcart.length === 1 ? "item" : "items"}): <span style={{ fontSize: "18px", fontWeight: "700" }}>${subtotal}.00</span>
                            </p>
                            <button onClick={handleCheckout} className='proceedtocheckout'>Proceed to checkout </button>
                        </div>

                    </div>
                    : legendaryLeagueEmptyImage
            }
        </>

    )
}

export default ShoppingCart;
