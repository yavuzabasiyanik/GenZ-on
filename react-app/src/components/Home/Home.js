import './Home.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {deleteProduct} from '../../store/product'
import { NavLink } from 'react-router-dom';

const Home = () => {

    const products = useSelector(state => Object.values(state.products));
    const dispatch = useDispatch();

    const deleteProductFunc = (e,id) => {
        e.preventDefault();

        dispatch(deleteProduct(id));


    }



    const productMap = products.map(el => {

        return (
            <div key={el?.id}>
                <p >{el.name}</p>
                <button  onClick={(e) => deleteProductFunc(e,el?.id)}>Delete</button>
                <NavLink to={`/product/update/${el?.id}`}><button  >Update</button></NavLink>
            </div>
        )

    })










    return (
        <div className="home-main-div">
            {productMap}
        </div>
    )
}


export default Home
