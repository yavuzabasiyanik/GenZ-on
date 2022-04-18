import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import './AllProducts.css';
const AllProductsPage = () => {

    let { tagNumber } = useParams();
    tagNumber = +tagNumber

    let allProducts = useSelector(state => Object.values(state.products));

    if (tagNumber === 1) {
        allProducts = allProducts.filter(ele => ele?.category.toLowerCase() === 'electronics');
    } else if (tagNumber === 2) {
        allProducts = allProducts.filter(ele => ele?.category.toLowerCase() === 'fashion');

    } else if (tagNumber === 3) {
        allProducts = allProducts.filter(ele => ele?.category.toLowerCase() === 'furniture');

    } else if (tagNumber === 4) {
        allProducts = allProducts.filter(ele => ele?.category.toLowerCase() === 'food');

    } else if (tagNumber === 5) {
        allProducts = allProducts.filter(ele => ele?.category.toLowerCase() === 'toys');
    }


    const mappedProducts = allProducts.map(ele => (
        <div key={ele?.id} className="selam23">
            <div style={{width:"271px", height:"271px", backgroundColor:"white"}}>

                <NavLink exact to={`/productpage/${ele?.id}`}><img style={{ cursor: "pointer" }} className="imgcokzor" src={ele?.image_url}></img></NavLink>
            </div>
            <div className="name-price-description">
                <NavLink exact to={`/productpage/${ele?.id}`}><p style={{ cursor: "pointer", fontSize: "16px", fontWeight: "bold", maxWidth: "215px", color: "#007185" }}>{ele?.name}</p></NavLink>
                <p className="dolarthingy">$<span style={{ fontWeight: "bold", fontSize: "14px" }}>{ele?.price}</span></p>
                <p className="getitassonsas">Get it as soon as <span style={{ fontWeight: "bold" }}>Tomorrow</span><br></br>FREE Shipping by GenZon</p>
                <p className="description-product-page">{ele?.description}</p>

            </div>

        </div>
    )).reverse()

    return (
        <div className="main-div-all-products">
            <div className="middle-div-hehe">
                <div className="left-navbarthingy">

                </div>
                <div className="main-product-smallgrid">
                    <h1 style={{ marginBottom:"30px",fontSize: "20px", color: "#0F1111", fontFamily: "Merienda" }} >Results</h1>
                    <div className="asildiv">
                        {mappedProducts}
                    </div>
                </div>
            </div>
        </div>
    )

}


export default AllProductsPage;
