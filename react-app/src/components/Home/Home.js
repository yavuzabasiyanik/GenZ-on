import './Home.css';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer';
import { useEffect, useState } from 'react';
const Home = () => {


    const [imgInde, setImgIndex] = useState(1);
    const [some,setSome] = useState(0);

    const leftok = (e) => {

        e.preventDefault();

        setImgIndex((el) => {

            if(el-1 <1){
                return 5;
            }else{
                return el-1;
            }

        })
        setSome((e)=> e+1);

    }

    const sagok = (e) => {

        e.preventDefault();

        setImgIndex((el) => {

            if(el+1 >5){
                return 1;
            }else{
                return el+1;
            }

        })

        setSome((e)=> e+1);

    }


    useEffect(() => {

        const interval = setInterval(() => {

            setImgIndex((e) => {
                if(e+1 >5){
                    return 1;
                }else{
                    return e+1;
                }
            })


        },4000)

        return () => clearInterval(interval);

    },[some])

    const backgroundImgDivBigHome = (
        <div className='backgroundimgthingy'>


            <button onClick={leftok} className='carousel-button prev'><i className="fa-solid fa-chevron-left"></i></button>
            <button onClick={sagok} className='carousel-button next'><i className="fa-solid fa-chevron-right"></i></button>

                <ul>
                    <li className={imgInde===1 ? 'slide data-active' : "slide"} >
                        <img src='https://m.media-amazon.com/images/I/71iZHxT2gNL._SX3000_.jpg' alt='img1'></img>
                    </li>
                    <li className={imgInde===2 ? 'slide data-active' : "slide"}>
                        <img src='https://m.media-amazon.com/images/I/71CoaA99FzL._SX3000_.jpg' alt='img2'></img>
                    </li>
                    <li className={imgInde===3 ? 'slide data-active' : "slide"}>
                        <img src='https://m.media-amazon.com/images/I/61gLca6v8gL._SX3000_.jpg' alt='img3'></img>
                    </li>
                    <li className={imgInde===4 ? 'slide data-active' : "slide"}>
                        <img src='https://rainforest-dev.s3.us-west-1.amazonaws.com/home_page_banner_4.jpg' alt='img4'></img>
                    </li>
                    <li className={imgInde===5 ? 'slide data-active' : "slide"}>
                        <img src='https://rainforest-dev.s3.us-west-1.amazonaws.com/home_page_banner_1.jpg ' alt='img5'></img>
                    </li>
                </ul>

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
                        <NavLink exact to={'/productpage/1'}><img alt='something' className='livinginthe' src='https://m.media-amazon.com/images/I/91shKLxoedL._AC_UY327_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink exact to={'/productpage/2'}><img alt='something' className='livinginthe' src='https://m.media-amazon.com/images/I/718sn7oOcfL._AC_UY327_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink exact to={'/productpage/3'}><img alt='something' className='livinginthe' src='https://m.media-amazon.com/images/I/6109bE1DC0S._AC_UY327_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink exact to={'/productpage/4'}><img alt='something' className='livinginthe' src='https://m.media-amazon.com/images/I/71A2llPqz7L._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>

                    </div>
                    <div className='categories-home-page'>
                        <NavLink exact to={'/allproducts/2'}><p style={{ fontSize: "21px", fontWeight: "bold" }}>New clothing deals!</p></NavLink>
                        <NavLink exact to={'/productpage/5'}><img alt='something' className='womanclothing' src='https://cdn.pixabay.com/photo/2013/07/13/14/08/apparel-162192_1280.png'></img></NavLink>
                        <NavLink exact to={'/productpage/7'}><img alt='something' className='womanclothing' src='https://m.media-amazon.com/images/I/818Tnima1yL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink exact to={'/productpage/8'}><img alt='something' className='womanclothing' src='https://m.media-amazon.com/images/I/71G4kkPdU-L._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink exact to={'/productpage/9'}><img alt='something' className='womanclothing' src='https://m.media-amazon.com/images/I/515d7N7uQWS._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>

                    </div>
                    <div className='categories-home-page'>
                        <NavLink exact to={'/allproducts/3'}><p style={{ fontSize: "21px", fontWeight: "bold" }}>Recommended furnitures!</p></NavLink>
                        <NavLink exact to={'/productpage/10'}><img alt='something' className='womanclothing' src='https://m.media-amazon.com/images/I/71-PSfCxooL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink exact to={'/productpage/11'}><img alt='something' className='womanclothing' src='https://m.media-amazon.com/images/I/61ZG-mJ6juL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink exact to={'/productpage/12'}><img alt='something' className='womanclothing' src='https://m.media-amazon.com/images/I/413vx3RglZL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink exact to={'/productpage/13'}><img alt='something' className='womanclothing' src='https://m.media-amazon.com/images/I/81zImSZ-ACL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>

                    </div>
                    <div className='categories-home-page'>
                        <NavLink exact to={'/allproducts/4'}><p style={{ fontSize: "21px", fontWeight: "bold" }}>Get your food here!</p></NavLink>
                        <NavLink exact to={'/productpage/14'}><img alt='something' className='womanclothing' src='https://m.media-amazon.com/images/I/81X1OIJiEFL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink exact to={'/productpage/15'}><img alt='something' className='womanclothing' src='https://m.media-amazon.com/images/I/A1dBzjL58SL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink exact to={'/productpage/16'}><img alt='something' className='womanclothing' src='https://m.media-amazon.com/images/I/81gtsep2+BL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink exact to={'/productpage/17'}><img alt='something' className='womanclothing' src='https://m.media-amazon.com/images/I/51PEKtJMQfL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>

                    </div>
                    {/* <div className='somethingdiff'>

                    </div> */}
                    <div className='somethingdiff2'>
                        <NavLink exact to={'/allproducts/5'}><p style={{ cursor: "pointer", fontSize: "21px", fontWeight: "bold" }}>Toys & Hobbies</p></NavLink>
                        <NavLink exact to={'/productpage/18'}><img alt='something' className='womanclothing alsohehe' src='https://m.media-amazon.com/images/I/91yg3JBdlgL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink exact to={'/productpage/19'}><img alt='something' className='womanclothing alsohehe' src='https://m.media-amazon.com/images/I/71JWVVP3nWL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink exact to={'/productpage/20'}><img alt='something' className='womanclothing alsohehe' src='https://m.media-amazon.com/images/I/71wy2BJWFTL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink exact to={'/productpage/6'}><img alt='something' className='womanclothing alsohehe' style={{ marginRight: "0" }} src='https://m.media-amazon.com/images/I/81-jHs0yp8L._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>

                    </div>

                </div>
                <Footer />
            </div>

        </>

    )
}


export default Home
