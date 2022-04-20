import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './SingleProduct.css';
import { createshoppingcart } from '../../store/shoppingcart';
import { useEffect, useState } from 'react';
import { createReview } from '../../store/review';
import { deleteReview } from '../../store/review';
import { updateReview } from '../../store/review';
import ErrorsModal from "../ProductForm/ErrorModal";

const SingleProduct = () => {

    const [quantity, setQuantity] = useState(1)
    const [reviewDropdown, setReviewDropdown] = useState(false);
    const [selected, setSelected] = useState(1);
    const [title, setTitlte] = useState('');
    const [comment, setComment] = useState('');
    const [averageRating, setAveraegeRating] = useState(0);
    const [optionArr, setOptionArr] = useState([]);
    const [errors, setErrors] = useState([]);

    let { productId } = useParams();
    const [updateState, setUpdateState] = useState([false, 0, 0, '', ''])
    productId = +productId;

    const dispatch = useDispatch();
    const history = useHistory();
    const product = useSelector(state => Object.values(state.products)).filter(el => el.id === productId)[0];
    const user = useSelector(state => state.session.user);

    const reviews = useSelector(state => Object.values(state.reviews)).filter(el => el?.product_id === productId).reverse();
    const shoppingcart = useSelector(state => Object.values(state.shoppingcart)).filter(el => el?.product_id === productId)[0];


    const handleSubmit = (e) => {
        e.preventDefault();



        if ((shoppingcart?.user_id=== user?.id )&&(shoppingcart?.quantity + (+quantity)) > product?.quantity) {
            setErrors(['You cannot buy more than provided quantity!!! (You already have this product in your shopping cart...) '])
            return
        }


        dispatch(createshoppingcart(productId, quantity));
        history.push('/user/cart')

    }

    const handleSubmitComment = (e) => {
        e.preventDefault();



        if (title.length > 80) {
            setErrors(["Title length should be between 1-80!!!"])

            return
        }

        if (title.length === 0) {
            setErrors(["Title length should be between 1-80!!!"])

            return
        }

        if (comment.length > 1000) {
            setErrors(["Review length should be between 1-1000!!!"])

            return
        }

        if (comment.length === 0) {
            setErrors(["Review length should be between 1-1000!!!"])

            return
        }


            dispatch(createReview(product?.id, selected, title, comment));

            const anchor = document.querySelector('.writecustomerreviewbutton')
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
            setReviewDropdown(false);

            setSelected(1);
            setComment('')
            setTitlte('');
        }



    const hadnleUpdate = async (e) => {
        e.preventDefault();


        if (updateState[3].length > 80) {
            setErrors(["Title length should be between 0-80!!!"])

            return
        }
        if (updateState[3].length === 0) {
            setErrors(["Title length should be between 0-80!!!"])

            return
        }
        if (updateState[4].length > 1000) {
            setErrors(["Review length should be between 0-1000!!!"])

            return
        }
        if (updateState[4].length === 0) {
            setErrors(["Review length should be between 0-1000!!!"])

            return
        }

        // if (updateState[3].length > 80) {
        //     alert('Title length cannot be more than 80!!!')

        //     setUpdateState([false, 0, 0, '', '']);

        //     return
        // }

        // if (updateState[4].length > 1000) {
        //     alert('Written review cannot be more than 1000!!!')

        //     setUpdateState([false, 0, 0, '', '']);

        //     return
        // }


        await dispatch(updateReview(product?.id, updateState[2], updateState[3], updateState[4], updateState[1]));

        setUpdateState([false, 0, 0, '', '']);

    }

    const selectedthingyhandle = (e) => {
        e.preventDefault();

        if (!user) {
            history.push('/login')
        }

        setReviewDropdown(ele => {
            if (updateState[0] === false) {
                return !ele
            } else {
                return false
            }
        });

        setSelected(1);
        setComment('')
        setTitlte('');
        setUpdateState([false, 0, 0, '', '']);

    }

    const deleteHandle = (e, id) => {
        e.preventDefault();

        setUpdateState([false, 0, 0, '', '']);

        dispatch(deleteReview(id));

    }

    const editHandle = (e, id, rating, title, body) => {
        e.preventDefault();

        setUpdateState([true, id, rating, title, body]);
        setReviewDropdown(false);
        setSelected(1);
        setComment('')
        setTitlte('');
    }

    useEffect(() => {



        let toplam = 0
        for (let i = 0; i < reviews.length; i++) {
            toplam += reviews[i].rating;
        }

        setAveraegeRating(Math.round(toplam / reviews.length))
    }, [reviews])



    useEffect(() => {
        let arr = []
        for (let i = 1; i <= product?.quantity; i++) {
            arr.push((<option key={i} value={`${i}`}>{i}</option>))
        }

        setOptionArr(arr);

    }, [product?.quantity])

    return (
        <>
            <div className='indivproduct-main-div'>
                <div className='middivallthestuff'>
                    <div className='imgdivibu'>
                        <img alt='something' className='theimageintheindiv' src={product?.image_url}></img>
                    </div>
                    <div className='infordivibu'>
                        <h1 className='productnameh1' style={{ fontFamily: "Arial, sans-serif" }}>{product?.name}</h1>
                        <div className='imgandusername' style={{ marginTop: "10px" }}>
                            <div className='oneswehurt' >
                                <i style={averageRating >= 1 ? { color: "#fd4" } : { color: "#444" }} className='fas fa-star'></i>
                                <i style={averageRating >= 2 ? { color: "#fd4" } : { color: "#444" }} className='fas fa-star'></i>
                                <i style={averageRating >= 3 ? { color: "#fd4" } : { color: "#444" }} className='fas fa-star'></i>
                                <i style={averageRating >= 4 ? { color: "#fd4" } : { color: "#444" }} className='fas fa-star'></i>
                                <i style={averageRating === 5 ? { color: "#fd4" } : { color: "#444" }} className='fas fa-star'></i>
                            </div>
                            <h2 style={{ wordBreak: "break-all" }} >{reviews.length} {reviews.length > 1 ? "reviews" : "review"}</h2>
                        </div>
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

                                {optionArr}

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
                                        <img alt='something' className='imgreviewind' src={product?.image_url}></img>
                                        <h2 style={{ marginTop: "22px" }}>{product?.name}</h2>
                                    </div>
                                    <div className='formreviewthingy'>

                                        <h4 style={{ textDecoration: "underline", fontSize: "15.6px" }} className='h2reviewtrhisproduct'>Add a rating</h4>
                                        <div className='star-widget'>
                                            <input type='radio' value={selected} className="same" checked={selected === 5} onChange={(e) => setSelected(5)} id='rate-5'></input>
                                            <label htmlFor='rate-5' className='fas fa-star'></label>
                                            <input type='radio' value={selected} className="same" checked={selected === 4} onChange={(e) => setSelected(4)} id='rate-4'></input>
                                            <label htmlFor='rate-4' className='fas fa-star'></label>
                                            <input type='radio' value={selected} className="same" checked={selected === 3} onChange={(e) => setSelected(3)} id='rate-3'></input>
                                            <label htmlFor='rate-3' className='fas fa-star'></label>
                                            <input type='radio' value={selected} className="same" checked={selected === 2} onChange={(e) => setSelected(2)} id='rate-2'></input>
                                            <label htmlFor='rate-2' className='fas fa-star'></label>
                                            <input type='radio' value={selected} className="same" checked={selected === 1} onChange={(e) => setSelected(1)} id='rate-1'></input>
                                            <label htmlFor='rate-1' className='fas fa-star'></label>

                                        </div>
                                        <div style={{ marginTop: "10px" }}>

                                            <h2 style={{ textDecoration: "underline", fontSize: "15.6px" }} className='h2reviewtrhisproduct'>Add a title</h2>
                                            <input value={title} onChange={(e) => setTitlte(e.target.value)} type='text' style={{ outline: "none" }}></input>
                                        </div>
                                        <div style={{ marginTop: "10px" }}>
                                            <h2 style={{ textDecoration: "underline", fontSize: "15.6px" }} className='h2reviewtrhisproduct'>Add a written review</h2>
                                            <textarea value={comment} onChange={(e) => setComment(e.target.value)} style={{ outline: "none" }}></textarea>
                                        </div>
                                        <div className='cancelsubmit'>
                                            <button onClick={selectedthingyhandle} className='buttoncancel'>Cancel</button>
                                            <button onClick={handleSubmitComment} className='submitbutton'>Submit</button>
                                        </div>
                                    </div>

                                </div>
                            }
                            {updateState[0] ?
                                <div className='sennediyorsun'>
                                    <h2 style={{ textDecoration: "underline" }} className='h2reviewtrhisproduct'>Update your review:</h2>
                                    <div style={{ display: "flex", gap: "10px", paddingBottom: "20px" }}>
                                        <img alt='something' className='imgreviewind' src={product?.image_url}></img>
                                        <h2 style={{ marginTop: "22px" }}>{product?.name}</h2>
                                    </div>
                                    <div className='formreviewthingy'>

                                        <h4 style={{ textDecoration: "underline", fontSize: "15.6px" }} className='h2reviewtrhisproduct'>Edit your rating</h4>
                                        <div className='star-widget'>
                                            <input type='radio' value={updateState[2]} className="same" checked={updateState[2] === 5} onChange={(e) => setUpdateState(ele => [ele[0], ele[1], 5, ele[3], ele[4]])} id='rate-25'></input>
                                            <label htmlFor='rate-25' className='fas fa-star'></label>
                                            <input type='radio' value={updateState[2]} className="same" checked={updateState[2] === 4} onChange={(e) => setUpdateState(ele => [ele[0], ele[1], 4, ele[3], ele[4]])} id='rate-24'></input>
                                            <label htmlFor='rate-24' className='fas fa-star'></label>
                                            <input type='radio' value={updateState[2]} className="same" checked={updateState[2] === 3} onChange={(e) => setUpdateState(ele => [ele[0], ele[1], 3, ele[3], ele[4]])} id='rate-23'></input>
                                            <label htmlFor='rate-23' className='fas fa-star'></label>
                                            <input type='radio' value={updateState[2]} className="same" checked={updateState[2] === 2} onChange={(e) => setUpdateState(ele => [ele[0], ele[1], 2, ele[3], ele[4]])} id='rate-22'></input>
                                            <label htmlFor='rate-22' className='fas fa-star'></label>
                                            <input type='radio' value={updateState[2]} className="same" checked={updateState[2] === 1} onChange={(e) => setUpdateState(ele => [ele[0], ele[1], 1, ele[3], ele[4]])} id='rate-21'></input>
                                            <label htmlFor='rate-21' className='fas fa-star'></label>

                                        </div>
                                        <div style={{ marginTop: "10px" }}>

                                            <h2 style={{ textDecoration: "underline", fontSize: "15.6px" }} className='h2reviewtrhisproduct'>Edit your title</h2>
                                            <input value={updateState[3]} onChange={(e) => setUpdateState(ele => [ele[0], ele[1], ele[2], e.target.value, ele[4]])} type='text' style={{ outline: "none" }}></input>
                                        </div>
                                        <div style={{ marginTop: "10px" }}>

                                            <h2 style={{ textDecoration: "underline", fontSize: "15.6px" }} className='h2reviewtrhisproduct'>Edit your written review</h2>
                                            <textarea value={updateState[4]} onChange={(e) => setUpdateState(ele => [ele[0], ele[1], ele[2], ele[3], e.target.value])} style={{ outline: "none" }}></textarea>
                                        </div>
                                        <div className='cancelsubmit'>
                                            <button onClick={selectedthingyhandle} className='buttoncancel'>Cancel</button>
                                            <button onClick={hadnleUpdate} className='submitbutton'>Update</button>
                                        </div>
                                    </div>

                                </div> : ""
                            }
                        </div>
                        <div>
                            <h2 className='h2reviewtrhisproduct'>Top reviews</h2>
                            <div className='reviewgrid'>
                                {reviews.map(ele => {
                                    return (
                                        <div key={ele?.id} className='indvreviews'>
                                            <div className='imgandusername'>
                                                <img alt='something' style={{ width: "34px" }} src='https://images-na.ssl-images-amazon.com/images/S/amazon-avatars/default._CR0,0,1024,1024_SX48_.png'></img>
                                                <h4 style={{ wordBreak: "break-all", fontSize: "12.4px", lineHeihgt: "19px", color: "#0f1111", fontWeight: "300" }}>{ele?.user?.username}</h4>
                                            </div>
                                            <div className='imgandusername'>
                                                <div className='oneswehurt'>
                                                    <i style={{ color: "#fd4" }} className='fas fa-star'></i>
                                                    <i style={ele?.rating >= 2 ? { color: "#fd4" } : { color: "#444" }} className='fas fa-star'></i>
                                                    <i style={ele?.rating >= 3 ? { color: "#fd4" } : { color: "#444" }} className='fas fa-star'></i>
                                                    <i style={ele?.rating >= 4 ? { color: "#fd4" } : { color: "#444" }} className='fas fa-star'></i>
                                                    <i style={ele?.rating === 5 ? { color: "#fd4" } : { color: "#444" }} className='fas fa-star'></i>
                                                </div>
                                                <h2 style={{ wordBreak: "break-all" }} >{ele?.title}</h2>
                                            </div>
                                            <h6 style={{ marginBottom: "10px" }} className='verifiedpurchase'>Verified Purchase</h6>
                                            <p style={{ wordBreak: "break-all" }}>{ele?.body}</p>
                                            {user?.id === ele?.user?.id && <button onClick={(e) => editHandle(e, ele?.id, ele?.rating, ele?.title, ele?.body)} className='buttoncancelthing'>Edit</button>}
                                            {user?.id === ele?.user?.id && <button onClick={(e) => deleteHandle(e, ele?.id)} className='buttoncancelthing'>Delete</button>}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {errors?.length > 0 ?
                <ErrorsModal errors={errors} setErrors={setErrors} /> : null
            }
        </>
    )

}

export default SingleProduct;
