import { useState } from "react"
import { useDispatch } from "react-redux";
import "./ProductForm.css"
import { createProduct } from "../../store/product";
import { useHistory } from "react-router-dom";
import ErrorsModal from "./ErrorModal";

const ProductForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    // const [img, setImg] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [category, setCategory] = useState('');
    const [errors, setErrors] = useState([]);

    const [image, setImg] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const dispatch = useDispatch();

    const history = useHistory();


    const submitProductForm = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("image", image);
        formData.append("name", image);
        formData.append("description", image);
        formData.append("price", image);
        formData.append("quantity", image);
        formData.append("category", image);

        setImageLoading(true);

        const data = await dispatch(createProduct(formData));

        if (data) {
            setErrors(data);
            return
        }
        setImageLoading(false);

        history.push('/user/products')
    }

    return (
        <>
            <div className="form-main-div-product-sell">
                <div>

                    <form className="ana-form" onSubmit={submitProductForm}>
                        <div className="selam">
                            <p>Sell Your Item</p>
                        </div>

                        {/* <div className="jeezdodgeit"> */}

                        <div className="product-form-create">
                            <label>Name</label>
                            <input
                                type='text'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className='inputss whatdounow'
                            />
                        </div>

                        <div className="product-form-create">

                            <label>Price</label>
                            <input
                                type='number'
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className='inputss'
                            />
                        </div>

                        {/* </div> */}
                        {/* <div className="teamcompdependent"> */}

                        <div className="product-form-create">

                            <label>Quantity</label>
                            <input
                                type='text'
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                className='inputss'
                            />
                        </div>
                        <div className="product-form-create">

                            <label>Category</label>
                            <select className='inputss' onChange={(e) => setCategory(e.target.value)} value={category}>
                                <option value=''>--Please choose a category--</option>
                                <option value='electronics'>Electronics</option>
                                <option value='fashion'>Fashion</option>
                                <option value='furniture'>Furniture</option>
                                <option value='food'>Food</option>
                                <option value='toys'>Toys, Hobby & DIY</option>
                            </select>
                        </div>
                        <div className="product-form-create">
                            <label>Description</label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className='inputss'
                            />

                        </div>
                        {/* </div> */}
                        <div className="product-form-create image-thingiyhahaha">

                            <label>Product Image</label>
                            <input
                                type='file'
                                accept="image/*"
                                required
                                onChange={(e) => setImg(e.target.files[0])}
                                className='inputss'
                            />
                        </div>
                        <button className="formsubmitbuttons" type="submit">Submit</button>

                    </form>

                </div>
            </div>
            {errors?.length ?
                <ErrorsModal errors={errors} setErrors={setErrors} /> : null

            }
        </>
    )
}


export default ProductForm
