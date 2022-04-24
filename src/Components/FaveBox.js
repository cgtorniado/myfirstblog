import React from 'react'
import FaveContent from './FaveContent'

const FaveBox = () => {
    return (
        <>
            <div className='row p-5'>

                {FaveContent.map((product, key) => (
                    <div className='col-12 col-md-6 col-lg-3' key={key}>
                        <div className="card p-3 m-1 bg-light" style={{ width: "18rem", height:"35rem" }}>
                            <img src={product.imgurl} className="card-img-top" alt={product.name} style={{height:"18rem", objectFit:"cover"}}/>
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.brand}</p>
                                <p className="card-text">{product.description}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Php {product.price}</li>
                            </ul>
                        </div>
                    </div>

                ))}


            </div>
        </>
    )
}

export default FaveBox