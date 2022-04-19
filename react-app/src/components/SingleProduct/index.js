import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './SingleProduct.css';
import { createshoppingcart } from '../../store/shoppingcart';
import { useState } from 'react';

const SingleProduct = () => {

    const [quantity, setQuantity] = useState(1)
    const [reviewDropdown, setReviewDropdown] = useState(false);
    let { productId } = useParams();
    productId = +productId;
    const dispatch = useDispatch();
    const history = useHistory();
    const product = useSelector(state => Object.values(state.products)).filter(el => el.id === productId)[0];



    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createshoppingcart(productId, quantity));
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
            <div className='reviewsmain-div'>
                <div className='middlediv-forreviews'>
                    <div className='reviewthisproductdiv'>
                        <h2 className='h2reviewtrhisproduct'>Review this product</h2>
                        <p className='pshareyourthought'>Share your thoughts with other customers</p>
                        <button onClick={(e) => setReviewDropdown(true)} className='writecustomerreviewbutton'>Write a customer review</button>
                        {reviewDropdown &&
                            <div className='sennediyorsun'>
                                <h2 style={{ textDecoration: "underline" }} className='h2reviewtrhisproduct'>Add a review for:</h2>
                                <div style={{ display: "flex", gap: "10px", paddingBottom: "20px"}}>
                                    <img className='imgreviewind' src={product?.image_url}></img>
                                    <h2 style={{ marginTop: "22px" }}>{product?.name}</h2>
                                </div>
                                <div className='formreviewthingy'>

                                    <h4 style={{ textDecoration: "underline", fontSize: "15.6px" }} className='h2reviewtrhisproduct'>Add a rating</h4>
                                    <div className='star-widget'>
                                        <input type='radio' className='rate' id='rate-5'></input>
                                        <label for='rate-5' className='fas fa-star'></label>
                                        <input type='radio' className='rate' id='rate-4'></input>
                                        <label for='rate-4' className='fas fa-star'></label>
                                        <input type='radio' className='rate' id='rate-3'></input>
                                        <label for='rate-3' className='fas fa-star'></label>
                                        <input type='radio' className='rate' id='rate-2'></input>
                                        <label for='rate-2' className='fas fa-star'></label>
                                        <input type='radio' className='rate' id='rate-1'></input>
                                        <label for='rate-1' className='fas fa-star'></label>

                                    </div>
                                    <h2 style={{ textDecoration: "underline", fontSize: "15.6px" }} className='h2reviewtrhisproduct'>Add a title</h2>
                                    <input></input>
                                    <h2 style={{ textDecoration: "underline", fontSize: "15.6px" }} className='h2reviewtrhisproduct'>Add a written review</h2>
                                    <textarea></textarea>
                                    <div>
                                        <button>Cancel</button>
                                        <button>Submit</button>
                                    </div>
                                </div>

                            </div>
                        }
                    </div>
                    <div>
                        <h2 className='h2reviewtrhisproduct'>Top reviews</h2>
                        <div>
                            <h3>asdas</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SingleProduct;
