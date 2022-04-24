import React from 'react'
import FaveBox from './FaveBox'

const FaveProducts = () => {
  return (
    <div className='pt-5'>
          <h1 className="pt-5 text-primary display-3 text-center"> My favorite items</h1>
          <p className="fs-5 col-md-6 mx-auto">These are the products that I really swear by 💖. I love trying out sets the most because I can buy small items without the commitment and with much cheaper prices. I also wait for the Shoppee/Lazada/BeautyMNL sales before I buy them to save more money. I hope these products works well for you too!</p>

        <FaveBox/>
    </div>
  )
}

export default FaveProducts