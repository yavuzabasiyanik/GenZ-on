import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './SingleProduct.css';
import { createshoppingcart } from '../../store/shoppingcart';
import { useState } from 'react';

const SingleProduct = () => {

    const [quantity, setQuantity] = useState(1)
    let { productId } = useParams();
    productId = +productId;
    const dispatch = useDispatch();
    const history = useHistory();
    const product = useSelector(state => Object.values(state.products)).filter(el => el.id === productId)[0];



    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createshoppingcart(productId,quantity));
        history.push('/user/cart')

    }


    return (
        <div className='indivproduct-main-div'>
            <div className='middivallthestuff'>
                <div className='imgdivibu'>
                    <img className='theimageintheindiv' src={product?.image_url}></img>
                </div>
                <div className='infordivibu'>
                    <h1 className='productnameh1'>{product?.name}</h1>
                    <div className='pricethingyhehe'>
                        <p style={{ fontFamily: "Merienda", fontSize: "17px" }} ><span style={{ fontSize: "14px", fontFamily: "Merienda" }}>Price:</span> ${product?.price}.00</p>
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
                        <p style={{ fontFamily: "Merienda", fontSize: "17px" }} >${product?.price}.00</p>
                    </div>
                    <p style={{ margin: "10px 0", color: "#007185" }}>& FREE Returns</p>
                    <p style={{ marginTop: "50px", color: "#007185" }}>Deliver to {product?.user?.username}</p>
                    <p style={{ marginTop: "0px", color: "#007185" }}>In Stock.</p>
                    <div className='muhtesem-uclu'>

                        <select onChange={(e) => setQuantity(e.target.value)} style={{ width: "60px", margin: "15px 0 20px" }}>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>

                        <button onClick={handleSubmit} className='somebuttonadd'>Add to Cart</button>
                        <button className='somebuttonbuy'>Buy Now</button>

                    </div>

                </div>
            </div>
        </div>
    )

}

export default SingleProduct;
