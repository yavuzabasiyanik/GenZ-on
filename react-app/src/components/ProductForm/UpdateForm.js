import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../store/product";
import ErrorsModal from './ErrorModal';

const UpdateForm = ({ update, setUpdate, id }) => {

    const dispatch = useDispatch();

    const products = useSelector(state => Object.values(state.products));
    const product_id = id;
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




    const submitUpdateForm = async (e) => {
        e.preventDefault();
        const data = await dispatch(updateProduct(name, description, price, img, quantity, category, theProduct?.id));

        if (data) {
            setErrors(data);
            return
        }
        setUpdate(false)
    }



    let menuRef = useRef();


    useEffect(() => {

        const handler = (event) => {

            if (!menuRef.current.contains(event.target)) {

                setUpdate(false);
            }
        }

        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler)
        }


    });









    return (
        <>
            <div className="background-modal">

                <div className="form-main-div-product-sell">
                    <div>

                        <form ref={menuRef} className="ana-form animationFortheform" onSubmit={submitUpdateForm}>
                            <div className="selam">
                                <p>Edit</p>
                            </div>

                            <div className="product-form-create">

                                <label>Name</label>
                                <input
                                    type='text'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} className='inputss'
                                    maxLength={80}

                                />
                            </div>

                            <div className="product-form-create">

                                <label>Price</label>
                                <input
                                    type='number'
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)} className='inputss'
                                />
                            </div>
                            <div className="product-form-create">

                                <label>Image Url</label>
                                <input
                                    type='text'
                                    value={img}
                                    onChange={(e) => setImg(e.target.value)} className='inputss'
                                />
                            </div>

                            <div className="product-form-create">

                                <label>Quantity</label>
                                <input
                                    type='text'
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)} className='inputss'
                                />
                            </div>
                            <div className="product-form-create">

                                <label>Category</label>
                                <select onChange={(e) => setCategory(e.target.value)} className='inputss' value={category?.toLowerCase()}>
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
                                    onChange={(e) => setDescription(e.target.value)} className='inputss'
                                />

                            </div>
                            <button className="formsubmitbuttons">Submit</button>

                        </form>

                    </div>
                </div>
            </div>
            {
                errors?.length ?
                    <ErrorsModal errors={errors} update={'update'} setErrors={setErrors} /> : null

            }
        </>
    )
}

export default UpdateForm
