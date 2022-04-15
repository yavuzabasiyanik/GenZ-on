import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './SingleProduct.css';

const SingleProduct = () => {

    let {productId} = useParams();
    productId = +productId;

    const product = useSelector(state => Object.values(state.products)).filter(el => el.id === productId)[0];






    return (
        <div className='indivproduct-main-div'>
            <div className='middivallthestuff'>
                <div className='imgdivibu'>
                    <img className='theimageintheindiv' src={product?.image_url}></img>
                </div>
                <div className='infordivibu'>
                    <h1>{}</h1>
                </div>
                <div className='addtocartbuynowdivibu'>

                </div>
            </div>
        </div>
    )

}

export default SingleProduct;
