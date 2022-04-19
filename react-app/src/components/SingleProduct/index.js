import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './SingleProduct.css';
import { createshoppingcart } from '../../store/shoppingcart';
import { useState } from 'react';
import { createReview } from '../../store/review';
import { deleteReview } from '../../store/review';

const SingleProduct = () => {

    const [quantity, setQuantity] = useState(1)
    const [reviewDropdown, setReviewDropdown] = useState(false);
    const [selected, setSelected] = useState(1);
    const [title, setTitlte] = useState('');
    const [comment, setComment] = useState('');
    let { productId } = useParams();

    productId = +productId;

    const dispatch = useDispatch();
    const history = useHistory();
    const product = useSelector(state => Object.values(state.products)).filter(el => el.id === productId)[0];
    const user = useSelector(state => state.session.user);

    const reviews = useSelector(state => Object.values(state.reviews)).filter(el => el?.product_id === productId).reverse();


    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createshoppingcart(productId, quantity));
        history.push('/user/cart')

    }

    const handleSubmitComment = (e) => {
        e.preventDefault();

        dispatch(createReview(product?.id, selected, title, comment));

        const anchor = document.querySelector('.writecustomerreviewbutton')
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
        setReviewDropdown(false);

        setSelected(1);
        setComment('')
        setTitlte('');
    }

    const selectedthingyhandle = (e) => {
        e.preventDefault();
        setReviewDropdown(ele => !ele)
        setSelected(1);
        setComment('')
        setTitlte('');
    }

    const deleteHandle = (e,id) => {
        e.preventDefault(0);

        dispatch(deleteReview(id));

    }
    return (
        <div className='indivproduct-main-div'>
            <div className='middivallthestuff'>
                <div className='imgdivibu'>
                    <img className='theimageintheindiv' src={product?.image_url}></img>
                </div>
                <div className='infordivibu'>
                    <h1 className='productnameh1' style={{ fontFamily: "Arial, sans-serif" }}>{product?.name}</h1>
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
                        <button onClick={selectedthingyhandle} className='writecustomerreviewbutton'>Write a customer review</button>
                        {reviewDropdown &&
                            <div className='sennediyorsun'>
                                <h2 style={{ textDecoration: "underline" }} className='h2reviewtrhisproduct'>Add a review for:</h2>
                                <div style={{ display: "flex", gap: "10px", paddingBottom: "20px" }}>
                                    <img className='imgreviewind' src={product?.image_url}></img>
                                    <h2 style={{ marginTop: "22px" }}>{product?.name}</h2>
                                </div>
                                <div className='formreviewthingy'>

                                    <h4 style={{ textDecoration: "underline", fontSize: "15.6px" }} className='h2reviewtrhisproduct'>Add a rating</h4>
                                    <div className='star-widget'>
                                        <input type='radio' value={selected} className="same" checked={selected === 5} onChange={(e) => setSelected(5)} id='rate-5'></input>
                                        <label for='rate-5' className='fas fa-star'></label>
                                        <input type='radio' value={selected} className="same" checked={selected === 4} onChange={(e) => setSelected(4)} id='rate-4'></input>
                                        <label for='rate-4' className='fas fa-star'></label>
                                        <input type='radio' value={selected} className="same" checked={selected === 3} onChange={(e) => setSelected(3)} id='rate-3'></input>
                                        <label for='rate-3' className='fas fa-star'></label>
                                        <input type='radio' value={selected} className="same" checked={selected === 2} onChange={(e) => setSelected(2)} id='rate-2'></input>
                                        <label for='rate-2' className='fas fa-star'></label>
                                        <input type='radio' value={selected} className="same" checked={selected === 1} onChange={(e) => setSelected(1)} id='rate-1'></input>
                                        <label for='rate-1' className='fas fa-star'></label>

                                    </div>
                                    <h2 style={{ textDecoration: "underline", fontSize: "15.6px" }} className='h2reviewtrhisproduct'>Add a title</h2>
                                    <input value={title} onChange={(e) => setTitlte(e.target.value)} type='text' style={{ outline: "none" }}></input>
                                    <h2 style={{ textDecoration: "underline", fontSize: "15.6px" }} className='h2reviewtrhisproduct'>Add a written review</h2>
                                    <textarea value={comment} onChange={(e) => setComment(e.target.value)} style={{ outline: "none" }}></textarea>
                                    <div className='cancelsubmit'>
                                        <button onClick={selectedthingyhandle} className='buttoncancel'>Cancel</button>
                                        <button onClick={handleSubmitComment} className='submitbutton'>Submit</button>
                                    </div>
                                </div>

                            </div>
                        }
                    </div>
                    <div>
                        <h2 className='h2reviewtrhisproduct'>Top reviews</h2>
                        <div className='reviewgrid'>
                            {reviews.map(ele => {
                                return (
                                    <div key={ele?.id} className='indvreviews'>
                                        <div className='imgandusername'>
                                            <img style={{ width: "34px" }} src='https://images-na.ssl-images-amazon.com/images/S/amazon-avatars/default._CR0,0,1024,1024_SX48_.png'></img>
                                            <h4 style={{ wordBreak: "break-all", fontSize: "12.4px", lineHeihgt: "19px", color: "#0f1111", fontWeight: "300" }}>{ele?.user?.username}</h4>
                                        </div>
                                        <div className='imgandusername'>
                                            <div className='oneswehurt'>
                                                <i style={{ color: "#fd4" }} className='fas fa-star'></i>
                                                <i style={ele?.rating >= 2 ? { color: "#fd4" } : { color: "444" }} className='fas fa-star'></i>
                                                <i style={ele?.rating >= 3 ? { color: "#fd4" } : { color: "444" }} className='fas fa-star'></i>
                                                <i style={ele?.rating >= 4 ? { color: "#fd4" } : { color: "444" }} className='fas fa-star'></i>
                                                <i style={ele?.rating === 5 ? { color: "#fd4" } : { color: "444" }} className='fas fa-star'></i>

                                            </div>
                                            <h2>{ele?.title}</h2>
                                        </div>
                                        <h6 style={{ marginBottom: "10px" }} className='verifiedpurchase'>Verified Purchase</h6>
                                        <p style={{ wordBreak: "break-all" }}>{ele?.body}</p>
                                        {user?.id === ele?.user?.id && <button className='buttoncancelthing'>Edit</button>}
                                        {user?.id === ele?.user?.id && <button onClick={(e) => deleteHandle(e,ele?.id)} className='buttoncancelthing'>Delete</button>}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SingleProduct;
