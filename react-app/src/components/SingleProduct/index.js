import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './SingleProduct.css';

const SingleProduct = () => {

    let { productId } = useParams();
    productId = +productId;

    const product = useSelector(state => Object.values(state.products)).filter(el => el.id === productId)[0];






    return (
        <div className='indivproduct-main-div'>
            <div className='middivallthestuff'>
                <div className='imgdivibu'>
                    <img className='theimageintheindiv' src={product?.image_url}></img>
                </div>
                <div className='infordivibu'>
                    <h1 className='productnameh1'>{product?.name}</h1>
                    <div className='pricethingyhehe'>
                        <p style={{ fontFamily: "Merienda", fontSize: "17px" }} ><span style={{ fontSize: "14px", fontFamily: "Merienda" }}>Price:</span> ${product?.price}</p>
                    </div>
                    <div className='descriptionindivpageinside'>
                        <p className='onlarbizler'>About this item:</p>

                        <p className='asildescription'>
                            {product?.description}
                        </p>

                    </div>
                </div>
                <div className='addtocartbuynowdivibu'>
                    <div className='pricethingyhehe2'>
                        <p style={{ fontFamily: "Merienda", fontSize: "17px" }} >${product?.price}</p>
                    </div>
                    <p style={{ margin: "10px 0", color: "#007185" }}>& FREE Returns</p>
                    <p style={{ marginTop: "50px", color: "#007185" }}>Deliver to {product?.user?.username}</p>
                    <p style={{ marginTop: "0px", color: "#007185" }}>In Stock.</p>
                    <div className='muhtesem-uclu'>

                        <select style={{width:"60px", margin:"15px 0 20px"}}></select>
                        <button className='somebuttonadd'>Add to Cart</button>
                        <button className='somebuttonbuy'>Buy Now</button>

                    </div>

                </div>
            </div>
        </div>
    )

}

export default SingleProduct;
