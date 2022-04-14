import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../store/product";
import { useHistory, useParams } from "react-router-dom";
import { updateProduct } from "../../store/product";

const UpdateForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const products = useSelector(state => Object.values(state.products));
    const {product_id} = useParams();
    const theProduct = products.filter(el => {
        return el?.id === +product_id
    })[0]

    const [name, setName] = useState(theProduct?.name);
    const [description, setDescription] = useState(theProduct?.description);
    const [price, setPrice] = useState(theProduct?.price);
    const [img, setImg] = useState(theProduct?.image_url);
    const [quantity, setQuantity] = useState(theProduct?.quantity);
    const [category, setCategory] = useState(theProduct?.category);
    const [errors, setErrors] = useState([]);


    // useEffect(()=>{

    //     setName(theProduct?.name);
    //     setDescription(theProduct?.description);
    //     setPrice(theProduct?.price);
    //     setImg(theProduct?.image_url);
    //     setQuantity(theProduct?.quantity);
    //     setCategory(theProduct?.category);


    // },[theProduct])


    const submitUpdateForm = async (e) => {
        e.preventDefault();
        const data = await dispatch(updateProduct(name,description,price,img,quantity,category,theProduct?.id));

        if (data) {
            setErrors(data);
            return
        }

        history.push('/')
    }

    return (
        <div className="form-main-div-product-sell">
            <div>

                <form className="ana-form" onSubmit={submitUpdateForm}>
                    <div>

                        <label>Name</label>
                        <input
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />

                    </div>
                    <div>

                        <label>Price</label>
                        <input
                            type='number'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div>

                        <label>Img</label>
                        <input
                            type='text'
                            value={img}
                            onChange={(e) => setImg(e.target.value)}
                        />
                    </div>
                    <div>

                        <label>Quantity</label>
                        <input
                            type='text'
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </div>
                    <div>

                        <label>Category</label>
                        <select onChange={(e) => setCategory(e.target.value)} value={category?.toLowerCase()}>
                            <option value=''>--Please choose a category--</option>
                            <option value='electronics'>Electronics</option>
                            <option value='fashion'>Fashion</option>
                            <option value='furniture'>Furniture</option>
                            <option value='food'>Food</option>
                            <option value='toys'>Toys, Hobby & DIY</option>
                        </select>
                    </div>
                    <button>Submit</button>
                <div className='signinerrors'>
                {errors.map((error, ind) => (
                  <div key={ind}>{error}</div>
                ))}
              </div>
                </form>

            </div>
        </div>
    )
}

export default UpdateForm
