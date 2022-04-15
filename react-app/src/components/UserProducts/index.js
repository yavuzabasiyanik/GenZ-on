import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './UserProducts.css';
import { deleteProduct } from '../../store/product';
import { useState } from 'react';
import UpdateForm from '../ProductForm/UpdateForm';

const UserProducts = () => {

    const user = useSelector(state => state.session.user);
    const [updateProduct, setUpdateProduct] = useState([false, 0]);
    const dispatch = useDispatch();

    const allProducts = useSelector(state => Object.values(state.products))
    const userProducts = allProducts.filter(ele => {
        return ele.user_id === user.id;
    }).reverse()

    const deleteProductFunc = (e, id) => {
        e.preventDefault();

        dispatch(deleteProduct(id));

    }


    const allProductsUserDiv = userProducts.map(ele => {
        return (<div className='productsinuserpage' key={ele?.id}>
            <div className='pallikiskeye'>
                <img className='imageinthe' src={ele?.image_url}></img>

                <div className='nameusernamepricedescription'>

                    <p style={{ color: "#007185", cursor: "pointer", fontSize: "14px", fontWeight: "700", display:"inline" }}>{ele?.name}</p>
                    <p style={{ lineHeight: "20px" }}><span style={{ fontSize: "10.5px" }}>by</span> <span style={{ fontWeight: "700" }}>{ele?.user.username}</span></p>
                    <p style={{ marginTop: "20px", fontSize: "14px", width: "500px", wordBreak: "break-word" }}>{ele?.description}</p>
                </div>
            </div>
            <div className='herosoftonight'>
                <div className='sky'>

                    <p>Price: ${ele?.price}</p>
                    <p>Category: {ele?.category[0].toUpperCase() + ele?.category.slice(1)}</p>
                </div>
                <button className='yellowupdatethingy' onClick={(e) => setUpdateProduct([true, ele?.id])} >Update</button>
                <button className='reddeleteproduct' onClick={(e) => deleteProductFunc(e, ele?.id)}>Delete</button>
            </div>
        </div>)
    })


    // background-color: #ffd814;
    // border-color: #FCD200;

    return (
        <>
            <div className='user-products-main-div'>
                <div className='productsGrid'>
                    {allProductsUserDiv}
                </div>
            </div>
            {updateProduct[0] &&
                <UpdateForm id={updateProduct[1]} update={updateProduct} setUpdate={setUpdateProduct} />
            }
        </>
    )
}

export default UserProducts;
