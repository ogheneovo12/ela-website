import React  from 'react'
import { ProductConsumer } from 'components/context/productcontext'
import BestProductContent from './BestProductContent';

export default function BestProducts() {
    return (
        <section className="best-products-wrapper">
            <div className="container">
                <div className="products best-products-grid d-grid">
                    <ProductConsumer>
                        {value => {
                            return value.bestproductShops.map(product => {
                                return <BestProductContent key={product.id} product={product} />
                            })
                        }}
                    </ProductConsumer>
                </div>
            </div>
        </section>
    )
}
