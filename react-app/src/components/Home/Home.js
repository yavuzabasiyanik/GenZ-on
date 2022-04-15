import './Home.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../../store/product'
import { NavLink } from 'react-router-dom';

const Home = () => {

    const products = useSelector(state => Object.values(state.products));
    const dispatch = useDispatch();

    const deleteProductFunc = (e, id) => {
        e.preventDefault();

        dispatch(deleteProduct(id));


    }



    const productMap = products.map(el => {

        return (
            <div key={el?.id}>
                <p >{el.name}</p>
                <button onClick={(e) => deleteProductFunc(e, el?.id)}>Delete</button>
                <NavLink to={`/product/update/${el?.id}`}><button  >Update</button></NavLink>
            </div>
        )

    })


    const backgroundImgDivBigHome = (
        <div className='backgroundimgthingy'>
            <div className='daddy-of-categories'>

                <div className='categories-home-page'></div>
                <div className='categories-home-page'></div>
                <div className='categories-home-page'></div>
                <div className='categories-home-page'></div>
            </div>

        </div>
    )











    return (
        <>
        <div className='something1'>
            <div className="home-main-div">
                {/* {productMap} */}
                {backgroundImgDivBigHome}
            </div>
            <div className='something'>
                <div className='alt-bolum-home-page-thingies'>
                    <div className='alt-left-part-categories'>

                    </div>
                    <div className='alt-right-part-categories'>

                    </div>
                </div>
            </div>
        </div>
        </>

    )
}


export default Home
