import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ProductReview from './ProductReview';
import { ProductConsumer } from 'components/context/productcontext'

export default function ProductDetailTab() {
    return (
        <>
            <ProductConsumer>
                {(value) => {
                    const { name, fulldesc, materials, colors, type, length, width, height } = value.detailProduct;
                    return (
                        <Tabs>
                            <TabList className="product-details-tabs d-flex">
                                <Tab>Description</Tab>
                                <Tab>Additional Information</Tab>
                                <Tab>Reviews</Tab>
                            </TabList>
                            <TabPanel>
                                <div className="description">
                                    <h1>About {name}</h1>
                                    <p>{fulldesc}</p>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="information">
                                    <h1>Additional Info:</h1>
                                    <div className="table">
                                        <h3>General</h3>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>Material</td>
                                                    <td>{materials.map((item, index) => { return <span key={index}>{item}, </span> })}</td>
                                                </tr>
                                                <tr>
                                                    <td>Color</td>
                                                    <td>{colors.map((item, index) => { return <span key={index}>{item}, </span> })}</td>
                                                </tr>
                                                <tr>
                                                    <td>Type</td>
                                                    <td>{type}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="table">
                                        <h3>Dimensions</h3>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>Length</td>
                                                    <td>{length}</td>
                                                </tr>
                                                <tr>
                                                    <td>Width</td>
                                                    <td>{width}</td>
                                                </tr>
                                                <tr>
                                                    <td>Height</td>
                                                    <td>{height}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <ProductReview />
                            </TabPanel>
                        </Tabs>
                    )

                }}

            </ProductConsumer >
        </>
    )
}
