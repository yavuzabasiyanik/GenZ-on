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



    // const productMap = products.map(el => {

    //     return (
    //         <div key={el?.id}>
    //             <p >{el.name}</p>
    //             <button onClick={(e) => deleteProductFunc(e, el?.id)}>Delete</button>
    //             <NavLink to={`/product/update/${el?.id}`}><button  >Update</button></NavLink>
    //         </div>
    //     )

    // })


    const backgroundImgDivBigHome = (
        <div className='backgroundimgthingy'>


        </div>
    )











    return (
        <>
            {/* <div className='something1'> */}
            <div className="home-main-div">
                {/* {productMap} */}
                {backgroundImgDivBigHome}
                <div className='daddy-of-categories'>

                    <div className='categories-home-page'>
                        <NavLink exact to={'/allproducts/1'}><p style={{ fontSize: "21px", fontWeight: "bold" }}>Electronics go brrrr!</p></NavLink>
                        <NavLink exact to={'/productpage/1'}><img className='livinginthe' src='https://m.media-amazon.com/images/I/91shKLxoedL._AC_UY327_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink exact to={'/productpage/2'}><img className='livinginthe' src='https://m.media-amazon.com/images/I/718sn7oOcfL._AC_UY327_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink exact to={'/productpage/3'}><img  className='livinginthe' src='https://m.media-amazon.com/images/I/6109bE1DC0S._AC_UY327_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink exact to={'/productpage/4'}><img  className='livinginthe' src='https://m.media-amazon.com/images/I/71A2llPqz7L._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>

                    </div>
                    <div className='categories-home-page'>
                        <NavLink exact to={'/allproducts/2'}><p style={{ fontSize: "21px", fontWeight: "bold" }}>New clothing deals!</p></NavLink>
                        <NavLink exact to={'/productpage/5'}><img className='womanclothing' src='https://cdn.pixabay.com/photo/2013/07/13/14/08/apparel-162192_1280.png'></img></NavLink>
                        <NavLink exact to={'/productpage/7'}><img className='womanclothing' src='https://m.media-amazon.com/images/I/818Tnima1yL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink exact to={'/productpage/8'}><img className='womanclothing' src='https://m.media-amazon.com/images/I/71G4kkPdU-L._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink exact to={'/productpage/9'}><img className='womanclothing' src='https://m.media-amazon.com/images/I/515d7N7uQWS._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>

                    </div>
                    <div className='categories-home-page'>
                        <NavLink exact to={'/allproducts/3'}><p style={{ fontSize: "21px", fontWeight: "bold" }}>Recommended furnitures!</p></NavLink>
                        <NavLink exact to={'/productpage/10'}><img className='womanclothing' src='https://m.media-amazon.com/images/I/71-PSfCxooL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink exact to={'/productpage/11'}><img className='womanclothing' src='https://m.media-amazon.com/images/I/61ZG-mJ6juL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink exact to={'/productpage/12'}><img className='womanclothing' src='https://m.media-amazon.com/images/I/413vx3RglZL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink exact to={'/productpage/13'}><img className='womanclothing' src='https://m.media-amazon.com/images/I/81zImSZ-ACL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>

                    </div>
                    <div className='categories-home-page'>
                        <NavLink exact to={'/allproducts/4'}><p style={{ fontSize: "21px", fontWeight: "bold" }}>Get your food here!</p></NavLink>
                        <NavLink exact to={'/productpage/14'}><img className='womanclothing' src='https://m.media-amazon.com/images/I/81X1OIJiEFL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink exact to={'/productpage/15'}><img className='womanclothing' src='https://m.media-amazon.com/images/I/A1dBzjL58SL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink exact to={'/productpage/16'}><img className='womanclothing' src='https://m.media-amazon.com/images/I/81gtsep2+BL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink exact to={'/productpage/17'}><img className='womanclothing' src='https://m.media-amazon.com/images/I/51PEKtJMQfL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>

                    </div>
                    <div className='somethingdiff'>

                    </div>
                    <div className='somethingdiff2'>
                        <NavLink exact to={'/allproducts/5'}><p  style={{cursor:"pointer", fontSize: "21px", fontWeight: "bold" }}>Toys & Hobbies</p></NavLink>
                        <NavLink exact to={'/productpage/18'}><img className='womanclothing alsohehe' src='https://m.media-amazon.com/images/I/91yg3JBdlgL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink exact to={'/productpage/19'}><img className='womanclothing alsohehe' src='https://m.media-amazon.com/images/I/71JWVVP3nWL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink exact to={'/productpage/20'}><img className='womanclothing alsohehe' src='https://m.media-amazon.com/images/I/71wy2BJWFTL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink exact to={'/productpage/6'}><img className='womanclothing alsohehe' style={{marginRight:"0"}} src='https://m.media-amazon.com/images/I/81-jHs0yp8L._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>

                    </div>

                </div>
            </div>
            {/* <div className='something'>
                <div className='alt-bolum-home-page-thingies'>
                    <div className='alt-left-part-categories'>

                    </div>
                    <div className='alt-right-part-categories'>

                    </div>
                </div>
            </div> */}
            {/* </div> */}
        </>

    )
}


export default Home
