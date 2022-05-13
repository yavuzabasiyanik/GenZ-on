import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './UserProducts.css';
import { deleteProduct } from '../../store/product';
import { useEffect, useState } from 'react';
import UpdateForm from '../ProductForm/UpdateForm';
import Footer from '../Footer';
// import { shoppingcartDeleteone } from '../../store/shoppingcart';
const UserProducts = () => {

    const user = useSelector(state => state.session.user);
    const [updateProduct, setUpdateProduct] = useState([false, 0]);
    const dispatch = useDispatch();

    const allProducts = useSelector(state => Object.values(state.products))
    const userProducts = allProducts.filter(ele => {
        return ele.user_id === user.id;
    }).reverse()

    let shoppingcart = useSelector(state => Object.values(state.shoppingcart));

    const deleteProductFunc = (e, id) => {
        e.preventDefault();


        shoppingcart = shoppingcart?.filter(thing => thing.product_id === id)[0]

        dispatch(deleteProduct(id));

        // if( +shoppingcart?.product_id === +id && +shoppingcart?.user_id === +user?.id){
        //     dispatch(shoppingcartDeleteone(Number(shoppingcart?.id)));
        // }


    }

    useEffect(() => {

        window.scrollTo(0, 0)
    }, [])

    const allProductsUserDiv = userProducts.map(ele => {
        return (<div className='productsinuserpage' key={ele?.id}>
            <div className='pallikiskeye'>
                <NavLink exact to={`/productpage/${ele?.id}`}><img alt='something' className='imageinthe' src={ele?.image_url}></img></NavLink>

                <div className='nameusernamepricedescription'>

                    <NavLink exact to={`/productpage/${ele?.id}`}><p style={{ color: "#007185", cursor: "pointer", fontSize: "14px", fontWeight: "700", display: "inline" }}>{ele?.name}</p></NavLink>
                    <p style={{ lineHeight: "20px" }}><span style={{ fontSize: "10.5px" }}>by</span> <span style={{ fontWeight: "700" }}>{ele?.user.username}</span></p>
                    <p style={{ marginTop: "20px", fontSize: "14px", width: "500px", wordBreak: "break-word" }}>{ele?.description}</p>
                </div>
            </div>
            <div className='herosoftonight'>
                <div className='sky'>

                    <p>Price: ${ele?.price}.00</p>
                    <p>Category: {ele?.category[0].toUpperCase() + ele?.category.slice(1)}</p>
                </div>
                <button className='yellowupdatethingy' onClick={(e) => setUpdateProduct([true, ele?.id])} >Update</button>
                <button className='reddeleteproduct' onClick={(e) => deleteProductFunc(e, ele?.id)}>Delete</button>
            </div>
        </div>)
    })


    // background-color: #ffd814;
    // border-color: #FCD200;

    const legendaryLeagueEmptyImage = (
        <div className='legendmain-div'>
            <div className='asilllegendary-div-empty'>
                <div className='somethingheree3'>
                    <div className='h1veh6ikilisi'>

                        <h1 style={{ marginLeft: "10px", fontSize: "28px" }}>Wanna sell your item on GenZon? Click
                         <NavLink  exact to={`/product/sell`}><span style={{margin: "0px 10px", fontSize: "28px", color: "#F08804", textDecoration:"underline" }}>here</span></NavLink>
                        to learn more.</h1>
                    </div>

                </div>
                <img alt='something' className='legendimg' src='https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt3d038a51072c6d5a/614cc18164c8007a9bdec0e2/zaun_splash.jpeg'></img>
            </div>
            <Footer something={true}></Footer>
        </div>
    )

    return (

        <>
            {userProducts?.length ?

                (<div className='user-products-main-div'>
                    <div className='productsGrid'>
                        {allProductsUserDiv}
                    </div>
                    <Footer something={true}/>
                </div>)
                : (
                    legendaryLeagueEmptyImage
                )

            }
            {updateProduct[0] &&
                <UpdateForm id={updateProduct[1]} update={updateProduct} setUpdate={setUpdateProduct} />
            }
        </>

    )
}

export default UserProducts;
