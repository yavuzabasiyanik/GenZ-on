import './Home.css';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer';
import { useEffect, useState } from 'react';
const Home = () => {


    const [imgInde, setImgIndex] = useState(1);
    const [some, setSome] = useState(0);

    const leftok = (e) => {

        e.preventDefault();

        setImgIndex((el) => {

            if (el - 1 < 1) {
                return 4;
            } else {
                return el - 1;
            }

        })
        setSome((e) => e + 1);

    }

    const sagok = (e) => {

        e.preventDefault();

        setImgIndex((el) => {

            if (el + 1 > 4) {
                return 1;
            } else {
                return el + 1;
            }

        })

        setSome((e) => e + 1);

    }


    useEffect(() => {

        const interval = setInterval(() => {

            setImgIndex((e) => {
                if (e + 1 > 4) {
                    return 1;
                } else {
                    return e + 1;
                }
            })


        }, 4000);

        return () => clearInterval(interval);

    }, [some]);


    useEffect(() => {

        window.scrollTo(0, 0)
    }, [])



    const backgroundImgDivBigHome = (
        <div className='backgroundimgthingy'>


            <button onClick={leftok} className='carousel-button prev'><i className="fa-solid fa-chevron-left"></i></button>
            <button onClick={sagok} className='carousel-button next'><i className="fa-solid fa-chevron-right"></i></button>

            <ul>
                <li className={imgInde === 1 ? 'slide data-active' : "slide"} >
                    <img  src='https://m.media-amazon.com/images/I/71iZHxT2gNL._SX3000_.jpg' alt='img1'></img>
                </li>

                <li className={imgInde === 2 ? 'slide data-active' : "slide"}>
                    <img src='https://m.media-amazon.com/images/I/61gLca6v8gL._SX3000_.jpg' alt='img3'></img>
                </li>
                <li className={imgInde === 3 ? 'slide data-active' : "slide"}>
                    <img src='https://rainforest-dev.s3.us-west-1.amazonaws.com/home_page_banner_4.jpg' alt='img4'></img>
                </li>
                <li className={imgInde === 4 ? 'slide data-active' : "slide"}>
                    <img src='https://nozama-fsp.herokuapp.com/assets/carousel1-78ebb6cfa296d65ccfe8e31b97159285f25052421c16c2b02ae78f347f9af3fd.jpg' alt='img4'></img>
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

                        <NavLink style={{cursor:"auto"}} exact to={'/allproducts/1'}><p className="homepageptags" style={{ fontSize: "21px", fontWeight: "bold" }}>Electronics</p></NavLink>
                        <NavLink exact to={'/productpage/21'}><img id='alexa' alt='something' className='' src='https://m.media-amazon.com/images/I/51MzOVciT3L._AC_UY218_.jpg'></img></NavLink>
                        <div className='genzonrecommended'>
                            GenZon Recommended
                        </div>
                        <p style={{ fontFamily: "Merienda", fontSize: "18px", margin: "7px 0 0", display: "flex", cursor:"auto" }} ><span style={{ fontSize: "12px", fontFamily: "Merienda" }}>$</span>59.99</p>
                        <NavLink exact to={'/productpage/21'}><p style={{ marginTop: "7px" }}>Echo Dot Smart speaker with clock and Alexa</p></NavLink>

                        <NavLink  style={{cursor:"auto"}} exact to={'/allproducts/1'}><p style={{ marginTop: "20px" }} className='mavicik'>Shop from this category</p></NavLink>


                        {/* <NavLink exact to={'/productpage/1'}><img alt='something' className='livinginthe' src='https://m.media-amazon.com/images/I/91shKLxoedL._AC_UY327_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink exact to={'/productpage/3'}><img alt='something' className='livinginthe' src='https://m.media-amazon.com/images/I/6109bE1DC0S._AC_UY327_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink exact to={'/productpage/4'}><img alt='something' className='livinginthe' src='https://m.media-amazon.com/images/I/71A2llPqz7L._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink> */}

                    </div>

                    <div className='categories-home-page'>
                        <NavLink style={{cursor:"auto"}} exact to={'/productpage/22'}><p className="homepageptags" style={{ fontSize: "21px", fontWeight: "bold" }}>Best Deal...</p></NavLink>

                        <NavLink exact to={'/productpage/22'}><img id='alexa' alt='something' className='' src='https://m.media-amazon.com/images/I/71iUrQk82KL._SY500_.jpg'></img></NavLink>
                        <div style={{ width: "100px" }} className='genzonrecommended'>
                            Deal of the Day
                        </div>
                        <p style={{ fontFamily: "Merienda", fontSize: "18px", margin: "7px 0 0", display: "flex" , cursor:"auto"}} ><span style={{ fontSize: "12px", fontFamily: "Merienda" }}>$</span>23.00</p>
                        <NavLink exact to={'/productpage/22'}><p style={{ marginTop: "7px" }}>League of Legends Gift Card</p></NavLink>

                        <NavLink  style={{cursor:"auto"}} exact to={'/allproducts/5'}><p style={{ marginTop: "20px" }} className='mavicik'>Buy more League products</p></NavLink>



                    </div>
                    <div className='categories-home-page4'>
                        <NavLink exact to={'/allproducts/2'}><p className="homepageptags" style={{ fontSize: "21px", fontWeight: "bold" }}>Recommended clothing!</p></NavLink>
                        <NavLink style={{ display: "flex", alignItems: "center" }} exact to={'/productpage/5'}><img alt='something' className='womanclothing' src='https://cdn.pixabay.com/photo/2013/07/13/14/08/apparel-162192_1280.png'></img></NavLink>
                        <NavLink style={{ display: "flex", alignItems: "center" }} exact to={'/productpage/7'}><img alt='something' className='womanclothing' src='https://m.media-amazon.com/images/I/818Tnima1yL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink style={{ display: "flex", alignItems: "center" }} exact to={'/productpage/8'}><img alt='something' className='womanclothing' src='https://m.media-amazon.com/images/I/71G4kkPdU-L._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink style={{ display: "flex", alignItems: "center" }} exact to={'/productpage/9'}><img alt='something' className='womanclothing' src='https://m.media-amazon.com/images/I/515d7N7uQWS._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        {/* <NavLink style={{display:"flex", alignItems:"center"}} exact to={'/productpage/10'}><img alt='something' className='womanclothing' src='https://m.media-amazon.com/images/I/71-PSfCxooL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink style={{display:"flex", alignItems:"center"}} exact to={'/productpage/11'}><img alt='something' className='womanclothing' src='https://m.media-amazon.com/images/I/61ZG-mJ6juL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink style={{display:"flex", alignItems:"center"}} exact to={'/productpage/12'}><img alt='something' className='womanclothing' src='https://m.media-amazon.com/images/I/413vx3RglZL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink style={{display:"flex", alignItems:"center"}} exact to={'/productpage/13'}><img alt='something' className='womanclothing' src='https://m.media-amazon.com/images/I/81zImSZ-ACL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink> */}
                        <NavLink style={{ cursor: "auto", display: "flex", alignItems: "flex-end" }} exact to={'/allproducts/2'}><p className='mavicik'>See more deals</p></NavLink>

                    </div>
                    <div style={{ width: "307px", height: "150px", paddingTop: "25px", padding: "20px" }} className='categories-home-page'>
                        <NavLink style={{cursor:"auto"}} exact to={'/allproducts/4'}><p className="homepageptags" style={{ fontSize: "21px", fontWeight: "bold", marginBottom: "14px" }}>Let us do the shopping</p></NavLink>
                        <p style={{ marginBottom: "14px" }}>Free 1-hour grocery pickup from Whole Foods Market included with Prime</p>
                        <NavLink style={{ cursor: "auto" }} exact to={'/allproducts/4'}><p className='mavicik'>Show all Groceries</p></NavLink>
                        {/* <NavLink exact to={'/productpage/14'}><img alt='something' className='womanclothing' src='https://m.media-amazon.com/images/I/81X1OIJiEFL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink exact to={'/productpage/15'}><img alt='something' className='womanclothing' src='https://m.media-amazon.com/images/I/A1dBzjL58SL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink exact to={'/productpage/16'}><img alt='something' className='womanclothing' src='https://m.media-amazon.com/images/I/81gtsep2+BL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink exact to={'/productpage/17'}><img alt='something' className='womanclothing' src='https://m.media-amazon.com/images/I/51PEKtJMQfL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink> */}

                    </div>
                    <div className='categories-home-page4'>
                        <NavLink exact to={'/allproducts/5'}><p className="homepageptags" style={{ cursor: "pointer", fontSize: "21px", fontWeight: "bold" }}>Toys & Hobbies</p></NavLink>
                        <NavLink style={{ display: "flex", alignItems: "center" }} exact to={'/productpage/18'}><img alt='something' className='womanclothing' src='https://m.media-amazon.com/images/I/91yg3JBdlgL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink style={{ display: "flex", alignItems: "center" }} exact to={'/productpage/19'}><img alt='something' className='womanclothing' src='https://m.media-amazon.com/images/I/71JWVVP3nWL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink style={{ display: "flex", alignItems: "center" }} exact to={'/productpage/20'}><img alt='something' className='womanclothing' src='https://m.media-amazon.com/images/I/71wy2BJWFTL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink style={{ display: "flex", alignItems: "center" }} exact to={'/productpage/6'}><img alt='something' className='womanclothing' src='https://m.media-amazon.com/images/I/81-jHs0yp8L._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        {/* <NavLink style={{display:"flex", alignItems:"center"}} exact to={'/productpage/10'}><img alt='something' className='womanclothing' src='https://m.media-amazon.com/images/I/71-PSfCxooL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink style={{display:"flex", alignItems:"center"}} exact to={'/productpage/11'}><img alt='something' className='womanclothing' src='https://m.media-amazon.com/images/I/61ZG-mJ6juL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink style={{display:"flex", alignItems:"center"}} exact to={'/productpage/12'}><img alt='something' className='womanclothing' src='https://m.media-amazon.com/images/I/413vx3RglZL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink style={{display:"flex", alignItems:"center"}} exact to={'/productpage/13'}><img alt='something' className='womanclothing' src='https://m.media-amazon.com/images/I/81zImSZ-ACL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink> */}
                        <NavLink style={{ cursor: "auto", display: "flex", alignItems: "flex-end" }} exact to={'/allproducts/5'}><p className='mavicik'>See more toys & hobbies</p></NavLink>
                        {/* <NavLink exact to={'/productpage/18'}><img alt='something' className='womanclothing alsohehe' src='https://m.media-amazon.com/images/I/91yg3JBdlgL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink exact to={'/productpage/19'}><img alt='something' className='womanclothing alsohehe' src='https://m.media-amazon.com/images/I/71JWVVP3nWL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink exact to={'/productpage/20'}><img alt='something' className='womanclothing alsohehe' src='https://m.media-amazon.com/images/I/71wy2BJWFTL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <NavLink exact to={'/productpage/6'}><img alt='something' className='womanclothing alsohehe' style={{ marginRight: "0" }} src='https://m.media-amazon.com/images/I/81-jHs0yp8L._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink> */}

                    </div>
                    <div className='categories-home-page'>
                        <NavLink style={{cursor:"auto"}} exact to={'/productpage/4'}><p className="homepageptags" style={{ fontSize: "21px", fontWeight: "bold" }}>Gaming computer</p></NavLink>

                        <NavLink exact to={'/productpage/4'}><img id='alexa' alt='something' className='' src='https://m.media-amazon.com/images/I/71A2llPqz7L._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <div style={{ width: "120px" }} className='genzonrecommended'>
                            Deal of the Month
                        </div>
                        <p style={{ fontFamily: "Merienda", fontSize: "18px", margin: "7px 0 0", display: "flex", cursor:"auto" }} ><span style={{ fontSize: "12px", fontFamily: "Merienda" }}>$</span>5000.00</p>
                        <NavLink exact to={'/productpage/4'}><p style={{ marginTop: "7px" }}>Periphio  Prebuilt RGB Gaming Computer</p></NavLink>

                        <NavLink style={{cursor:"auto"}} exact to={'/productpage/4'}><p style={{ marginTop: "20px" }} className='mavicik'>See the deal</p></NavLink>



                    </div>
                    <div className='categories-home-page'>
                        <NavLink style={{cursor:"auto"}} exact to={'/productpage/19'}><p className="homepageptags" style={{ fontSize: "21px", fontWeight: "bold" }}>Deal of the Day</p></NavLink>

                        <NavLink exact to={'/productpage/19'}><img id='alexa' alt='something' className='' src='https://m.media-amazon.com/images/I/71JWVVP3nWL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <div style={{ width: "100px" }} className='genzonrecommended'>
                            Deal of the Day
                        </div>
                        <p style={{ fontFamily: "Merienda", fontSize: "18px", margin: "7px 0 0", display: "flex", cursor:"auto" }} ><span style={{ fontSize: "12px", fontFamily: "Merienda" }}>$</span>23.00</p>
                        <NavLink exact to={'/productpage/19'}><p style={{ marginTop: "7px" }}>League of Legends</p></NavLink>

                        <NavLink  style={{cursor:"auto"}} exact to={'/allproducts/5'}><p style={{ marginTop: "20px" }} className='mavicik'>Buy more League products</p></NavLink>



                    </div>
                    <div className='categories-home-page'>
                        <NavLink style={{cursor:"auto"}} exact to={'/productpage/15'}><p className="homepageptags" style={{ fontSize: "21px", fontWeight: "bold" }}>Junk Food</p></NavLink>

                        <NavLink exact to={'/productpage/15'}><img id='alexa' alt='something' className='' src='https://m.media-amazon.com/images/I/A1dBzjL58SL._AC_UL480_FMwebp_QL65_.jpg'></img></NavLink>
                        <div style={{ width: "100px" }} className='genzonrecommended'>
                            Best junk food
                        </div>
                        <p style={{ fontFamily: "Merienda", fontSize: "18px", margin: "7px 0 0", display: "flex" , cursor:"auto"}} ><span style={{ fontSize: "12px", fontFamily: "Merienda" }}>$</span>45.00</p>
                        <NavLink exact to={'/productpage/15'}><p style={{ marginTop: "7px" }}>Chipss</p></NavLink>

                        <NavLink style={{cursor:"auto"}} exact to={'/allproducts/4'}><p style={{ marginTop: "20px" }} className='mavicik'>Shop more groceries</p></NavLink>

                    </div>


                    <div style={{ width: '307px' }}></div>
                    <div style={{ width: '307px' }}></div>

                </div>
                <div style={{ marginTop: "300px" }}>


                    <Footer something={true} />
                </div>
            </div>

        </>

    )
}


export default Home
