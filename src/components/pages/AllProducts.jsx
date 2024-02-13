import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../../Styles/Home.css'
import ProductInforModal from '../../layouts/ProductInforModal'

const AllProducts = () => {
  const [products, setProducts] = useState([])
  const [productInfo, setProductInfo] = useState(null)
  const [showInfo, setShowInfo] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          'https://techalive.onrender.com/api/v1/product/list-products'
        )
        const data = response.data
        setProducts(data.products)
      } catch (error) {
        console.log(error)
      }
    }

    fetchProducts()
  }, [])

  const handleShowInfo = (product) => {
    setShowInfo(true)
    setProductInfo(product)
  }

  const handleCloseInfo = () => {
    setShowInfo(false)
  }

  return (
    <div>
      <div className='w-screen h-[70vh] relative'>
        <img
          src='https://i.pinimg.com/564x/9c/0d/5b/9c0d5b5d5951ccfdd65d4e7bb2289a06.jpg'
          alt=''
          className='w-full h-full object-cover'
        />

        <div className='bg-blue bg-opacity-60 absolute top-0 left-0 h-full w-full' />

        <div className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-50'>
          <div className='flex flex-col items-center gap-[20px] text-[#fff]'>
            <img
              src='https://i.imgur.com/UKGl5Qk.png'
              alt='techalive-logo'
              className='w-[100px] h-[100px]'
            />

            <div className='flex flex-col items-center'>
              <h3 className='text-lg text-center lg:text-xl'>
                Contact us for what you didn't see!
              </h3>
              <hr className='w-[300px] lg:w-[500px] mt-5 bg-[#fff]' />
              <div className='flex flex-row items-center justify-between w-[250px] lg:w-[400px] mt-8'>
                <a
                  href='https://maps.app.goo.gl/YNVP8jy6EbR3ZZG27'
                  target='_blank'
                >
                  <div className='flex flex-col items-center gap-[15px]'>
                    <i className='pi pi-map-marker' />
                    <p>Address on map</p>
                  </div>
                </a>
                <hr className='h-[100px] w-[1px] border' />
                <a
                  href='https://wa.me/2348050500466'
                  target='_blank'
                >
                  <div className='flex flex-col items-center gap-[15px]'>
                    <i className='pi pi-whatsapp' />
                    <p>
                      <span> Whatsapp</span>
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className='max-w-[85%] mx-auto'>
        <section className=''>
          {products.length > 0 && (
            <div className='flex flex-col lg:flex-row lg:items-center justify-between my-[80px]'>
              <div className='w-[300px] lg:w-[400px] h-[300px] lg:h-[400px]'>
                <img
                  src={products[0].image}
                  alt=''
                  className='w-full h-full first-product'
                />
              </div>

              <div className='w-[350px] lg:w-[600px] mt-[80px] lg:mt-0 flex flex-col items-center gap-[12px] lg:items-start'>
                <h1>{products[0].name}</h1>
                <p className=' leading-[25px]'>{products[0].description}</p>
                <h3 className='text-xl font-bold text-pink'>
                  ₦{products[0].price}
                </h3>
                <button className='bg-pink h-[35px] w-[150px] text-[#fff] rounded-md mt-8'>
                  Buy Now!
                </button>
              </div>
            </div>
          )}
        </section>

        <section className=''>
          <div className='mb-10 flex justify-between items-center'>
            <h4 className='text-blue text-f14 lg:text-f20 font-semibold my-2 h-[25px]'>
              Products <span className='text-pink'>in store</span>
            </h4>

            <input
              type='search'
              name='search'
              id=''
              placeholder='Search Item'
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className='border outline-none h-[20px] lg:h-[25px] w-[200px] lg:w-[300px] rounded-full px-3 text-[12px]'
            />
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-5'>
            {products
              .filter((prod) =>
                search.toLowerCase() === ''
                  ? prod
                  : prod.name.toLowerCase().includes(search.toLowerCase())
              )
              .slice(1)
              .map((product, index) => (
                <div
                  key={index}
                  className='mx-3 h-[300px] px-2 shadow-sm rounded-lg mb-5 max-w-[100%]'
                >
                  <img
                    src={product.image}
                    alt=''
                    className='mx-auto scale-[.8] w-full h-[150px]'
                  />
                  <p className='text-white text-f12 md:text-f14 mt-3'>
                    {product.category}
                  </p>
                  <h4
                    id='name'
                    className='text-blue text-f12 lg:text-f16 font-semibold my-2 h-[25px]'
                  >
                    {product.name.length > 18
                      ? product.name.slice(0, 15) + '...'
                      : product.name}
                  </h4>
                  <h4
                    id='price'
                    className='text-pink font-semibold'
                  >
                    ₦{product.price}
                  </h4>
                  <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-row  items-center gap-3'>
                      <a href='https://wa.me/2348050500466'>
                        <i className='pi pi-whatsapp text-green'></i>
                      </a>
                      <a href='tel:+2348050500466'>
                        <i className='pi pi-phone text-indigo-500'></i>
                      </a>
                    </div>
                    <button
                      onClick={() => handleShowInfo(product)}
                      className='w-[50px] h-[25px] text-f10 bg-grey bg-opacity-10 rounded'
                    >
                      <span>Info </span>
                      <i className='pi pi-info-circle'></i>
                    </button>
                  </div>
                </div>
              ))}
          </div>
          {showInfo && (
            <ProductInforModal
              productInfo={productInfo}
              handleCloseInfo={handleCloseInfo}
            />
          )}
        </section>
      </main>
    </div>
  )
}

export default AllProducts
