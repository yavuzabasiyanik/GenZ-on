import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import "./ProductForm.css"
import { createProduct } from "../../store/product";
import { useHistory } from "react-router-dom";
import ErrorsModal from "./ErrorModal";

const ProductForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [img, setImg] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [category, setCategory] = useState('');
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();

    const history = useHistory();


    const submitProductForm = async (e) => {
        e.preventDefault();
        const data = await dispatch(createProduct(name, description, price, img, quantity, category));

        if (data) {
            setErrors(data);
            return
        }

        history.push('/')
    }

    return (
        <>
            <div className="form-main-div-product-sell">
                <div>

                    <form className="ana-form" onSubmit={submitProductForm}>
                        <div className="product-form-create">
                            <label>Name</label>
                            <input
                                type='text'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className='inputss'
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
                        <div className="product-form-create image-thingiyhahaha">

                            <label>Product Image</label>
                            <input
                                type='text'
                                value={img}
                                onChange={(e) => setImg(e.target.value)}
                                className='inputss'
                            />
                        </div>
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
                        <button>Submit</button>

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
