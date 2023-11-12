import React from 'react'
class Product extends React.Component{
    product={
        pid:'p101',
        pname:'Iphone 12s',
        price:25000,
        color:['red','blue','yellow'],
        image:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70'
    }
    render(){
        return <div className="container mt-5">
            <pre>{JSON.stringify(this.product)}</pre>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <img src={this.product.image} alt="" />

                         </div>
                         <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item">{this.product.pid} </li>
                                <li className="list-group-item">{this.product.pname} </li>
                                <li className="list-group-item">{this.product.price} </li>

                            </ul>

                         </div>

                    </div>

                </div>

            </div>

        </div>
    }
}
export default Product