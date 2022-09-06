import React  from 'react'
import { ProductConsumer } from 'components/context/productcontext'
import WidgetSearch from './widgets/WidgetSearch'
import WidgetCategory from './widgets/WidgetCategory'
import WidgetProductColor from './widgets/WidgetProductColor'
import WidgetFeaturedProduct from './widgets/WidgetFeaturedProduct'
import WidgetPopularTag from './widgets/WidgetPopularTag'
import WidgetFollower from './widgets/WidgetFollower'
import sectiondata from "../../store/store";


export default function ShopSidebar() {
    return (
        <aside className="shop-sidebar text-left">
            <WidgetSearch />
            <WidgetCategory
                title={sectiondata.shopdata.sidebar.categories.title}
                lists={sectiondata.shopdata.sidebar.categories.lists} />
            <WidgetProductColor
                title={sectiondata.shopdata.sidebar.productcolor.title}
                lists={sectiondata.shopdata.sidebar.productcolor.lists} />
            <div className="shop-widget widget_feature_products">
                <h3>Featured Products.</h3>
                <ul>
                    <ProductConsumer>
                        {value => {
                            return value.relatedpdsShops.map(product => {
                                return <WidgetFeaturedProduct key={product.id} product={product} />
                            })
                        }}
                    </ProductConsumer>
                </ul>
            </div>
            <WidgetPopularTag />
            <WidgetFollower title={sectiondata.Footerdata.ftLeftwidget.socials.title} lists={sectiondata.Footerdata.ftLeftwidget.socials.lists} />

        </aside>
    )
}
