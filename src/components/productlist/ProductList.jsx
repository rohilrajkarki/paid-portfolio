import Product from "../product/Product"
import './productList.css';
import { products } from '../../data'


const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">🐻 Bear & Beers 🍻</h1>
                <p className="pl-desc">
                    a creative portfolio that your work has been waiting for.
                    Beautiful homes, stunning portfolio styles & a whole lot more awaits
                    inside.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => {
                    const { id, img, link } = item;

                    return <Product key={item.id} {...item} />
                }
                )}



            </div>
        </div>
    )
}

export default ProductList
