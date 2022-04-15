import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './UserProducts.css';
import { deleteProduct } from '../../store/product';
import { useState } from 'react';
import UpdateForm from '../ProductForm/UpdateForm';

const UserProducts = () => {

    const user = useSelector(state => state.session.user);
    const [updateProduct, setUpdateProduct] = useState([false,0]);
    const dispatch = useDispatch();

    const allProducts = useSelector(state => Object.values(state.products))
    const userProducts = allProducts.filter(ele => {
        return ele.user_id === user.id;
    })

    const deleteProductFunc = (e, id) => {
        e.preventDefault();

        dispatch(deleteProduct(id));

    }


    const allProductsUserDiv = userProducts.map(ele => {
        return (<div key={ele?.id}>
            <p>{ele?.name}</p>
            <button onClick={(e) => deleteProductFunc(e, ele?.id)}>Delete</button>
            {/* <NavLink to={`/product/update/${ele?.id}`}><button onClick={()=>setUpdateProduct(true)} >Update</button></NavLink> */}
            <button onClick={(e) => setUpdateProduct([true,ele?.id])} >Update</button>
        </div>)
    })


    return (
        <>
            <div className='user-products-main-div'>
                {allProductsUserDiv}
            </div>
            {updateProduct[0] &&
                <UpdateForm id={updateProduct[1]} update={updateProduct} setUpdate={setUpdateProduct}/>
            }
        </>
    )
}

export default UserProducts;
