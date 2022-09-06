import React  from 'react'
import { ProductConsumer } from 'components/context/productcontext'
import RelatedProductsContent from './RelatedProductsContent';

export default function RelatedProducts() {
    return (
        <section className="related-product-contents">
            <div className="container">
                <div className="products best-products-grid d-grid">
                    <ProductConsumer>
                        {value => {
                            return value.relatedpdsShops.map(product => {
                                return <RelatedProductsContent key={product.id} product={product} />
                            })
                        }}
                    </ProductConsumer>
                </div>
            </div>
        </section>
    )
}
