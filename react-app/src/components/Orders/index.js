import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { orderCreate } from '../../store/order';
import Footer from '../Footer';
import './orders.css';


const Orders = () => {

    const user = useSelector(state => state.session.user);

    const orders = useSelector(state => Object.values(state.orders)).filter(el => el.userId === user?.id);

    const dispatch = useDispatch();
    const history = useHistory();

    const months = [
        "January",
        "Febraury",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    const handleBuySubmit = (e, product) => {
        e.preventDefault();


        let payload = {
            totalCost: product.price,
            instructions: 'Leave it at the front door!',
            products: [product]
        }

        dispatch(orderCreate(payload))
        history.push('/checkout')

    }

    const orderDivs = orders.map((el) => (

        <>
            <div className='kucukdivler' key={el?.id}>
                <div className='ustpart'>
                    <div style={{ display: "flex", gap: "30px" }}>
                        <div className='orderplaced'>
                            <p style={{ color: "#565959", fontSize: "11px", lineHeight: "16px", fontFamily: "Merienda" }}>ORDER PLACED</p>
                            <p style={{ color: "#565959", fontSize: "13px", lineHeight: "20px", fontFamily: "Merienda" }}>{months[new Date(el?.created_at).getMonth()]} {new Date(el?.created_at).getDate()}, {new Date(el?.created_at).getFullYear()}</p>
                        </div>
                        <div className='shipti'>
                            <p style={{ color: "#565959", fontSize: "11px", lineHeight: "16px", fontFamily: "Merienda" }}>SHIP TO</p>
                            <p style={{ color: "#007185", fontSize: "13px", lineHeight: "20px", fontFamily: "Merienda" }}>{el?.buyer?.username}</p>
                        </div>
                    </div>

                    <div style={{ margin: "0" }} className='total'>
                        <p style={{ color: "#565959", fontSize: "11px", lineHeight: "16px", fontFamily: "Merienda" }}>TOTAL</p>
                        <p style={{ color: "#565959", fontSize: "13px", lineHeight: "20px", fontFamily: "Merienda" }}>$ {el?.totalCost}</p>
                    </div>
                </div>
                <div className='middlepart'>
                    {Object.values(el?.orderedItems).map(ele => (
                        <>
                            <div key={ele?.id} className='eachdivsomething'>
                                <NavLink exact to={`/productpage/${ele?.product?.id}`}><img style={{ width: "90px" }} src={ele?.product?.image_url} alt='nothing'></img></NavLink>
                                <div className='twobttonsonename'>
                                    <NavLink exact to={`/productpage/${ele?.product?.id}`}><p className='askneyledi'>{ele?.product?.name}</p></NavLink>
                                    <p><span style={{fontWeight:"bold", fontSize:"12px", marginBottom:"10px"}}>Price:</span> ${ele?.product?.price}</p>
                                    <p><span style={{fontWeight:"bold", fontSize:"12px", marginBottom:"10px"}}>Quantity:</span> {}</p>
                                    <div>
                                        <button onClick={(e) => handleBuySubmit(e, ele?.product)} className='yellowbutton' style={{ margin: '0px 7px 4px 0', width: "122.38px", height: "31px", fontFamily: "Merienda", borderRadius: "8px", border: "none" }}>Buy it again</button>
                                        <NavLink exact to={`/productpage/${ele?.product?.id}`}><button className='whitebutton' >View your item</button></NavLink>
                                    </div>

                                </div>
                                <NavLink exact to={`/productpage/${ele?.product?.id}`}><button className='writeareview'>Write a product review</button></NavLink>
                            </div>
                        </>
                    ))}
                </div>
                <div className='altpart'>
                    {
                        ((Number(new Date(el?.created_at)) + (60 * 60 * 24 * 1000)) - Number(new Date())) > 0 ? <p style={{ fontSize: "13px" }} className='askneyledi'>Cancel Order</p> : <p style={{ fontSize: "13px" }} className='askneyledi'>Return Item</p>}

                </div>
            </div>
        </>
    )).reverse();






    return (
        <>
            <div className='orderspagemaindiv'>
                <div className='middivorderpage'>
                    <h1 className='yourorders'>Your Orders</h1>
                    <p className='imgoingtothegym'> <span style={{ fontWeight: "bold", fontSize: "14px", color: "black" }}>{orders.length} {orders.length > 1 ? 'orders' : 'order'}</span> placed in <span style={{ fontWeight: "bold", fontSize: "14px", color: "black" }}>2022</span></p>
                </div>

                <div className='orders'>
                    {orderDivs}
                </div>

                <div style={{ width: "100%", margin: "40px 0" }}>

                    <Footer something={true} />
                </div>

            </div>
        </>
    )
}

export default Orders
