import { useSelector } from 'react-redux';
import './ShoppingCart.css';


const ShoppingCart = () => {


    const shoppingcart = useSelector(state => Object.values(state.shoppingcart));

    // console.log(shoppingcart);

    const allCart = shoppingcart.map(ele => {
        return (
            <div className='productsinuserpageCart' key={ele?.id}>
                <div className='imgnamepricedeletethingies'>

                    <img className='imginthecart' src={ele?.product?.image_url}></img>
                    <div className='somedivdd'>
                        <p style={{color:"#0F1111", fontSize:"17px",cursor:"pointer",wordWrap:"break-word", marginTop:"8px", fontWeight:"700"}}>{ele?.product?.name}</p>
                        <p style={{ color: "#007185" }}>In Stock</p>
                        <p style={{color:"#565959", fontSize:"12px", lineHeight:"16px"}}>Eligible for FREE Shipping & <p style={{fontWeight:"700", fontSize:"12px", color: "#007185" }}>FREE Returns</p></p>
                        <div className='qtydelete'>
                            <p style={{paddingRight:"8px",fontWeight:"700", borderRight:"1px #D5D9D9 solid"}}>Qty: {ele?.quantity}</p>
                            <p>Delete</p>
                        </div>
                    </div>
                </div>
                <p style={{fontSize:"18px",lineHeight:"24px", fontWeight:"700", color:"#0F1111"}}>${ele?.product?.price}.00</p>
            </div>
        )
    })

    return (
        <div className='user-products-main-div'>
            <div className='productsGridCart'>
                <div className='somethingheree3'>
                    <div className='h1veh6ikilisi'>

                        <h1 style={{ fontSize: "28px" }}>Shopping Cart</h1>
                        <h6 style={{ color: "#007185" }}>Delete all items</h6>
                    </div>
                    <div className='someguy'>

                        <p>Price</p>
                    </div>
                </div>
                {allCart}

            </div>
        </div>
    )
}

export default ShoppingCart;
