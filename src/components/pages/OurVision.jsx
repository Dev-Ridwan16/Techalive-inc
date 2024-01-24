import React from 'react'

const OurVision = () => {
  return (
    <div>
      <div className=''>
        <img
          src='https://i.pinimg.com/564x/53/8b/22/538b22f2d4d9c9599698b2f595048494.jpg'
          alt=''
          className='  w-screen h-[70vh] lg:h-screen'
        />

        <div className='absolute z-40 top-[35%] translate-y-[-35%] lg:top-[50%] lg:translate-y-[-50%] left-[25%] translate-x-[-25%] lg:left-[15%] lg:translate-x-[-15%] text-[#fff]'>
          <h1>Our Vision</h1>
          <p className='lg:w-[550px] mt-5'>
            Transforming visions into reality. Join us for a connected,
            sustainable future where innovation thrives.
          </p>
        </div>
      </div>

      <section className='max-w-[85%] mx-auto  my-10'>
        <div className=' flex flex-row justify-between items-center'>
          <div className='hidden lg:block w-[35%]'>
            <img
              src='https://i.pinimg.com/564x/ed/09/00/ed0900f2ff326823164c988c17b84c5c.jpg'
              alt=''
              className='w-full h-[350px] rounded-md'
            />
          </div>
          <div className='flex flex-col lg:w-[55%]'>
            <h3 className='text-f16 font-semibold text-blue'>INNOVATION HUB</h3>
            <p className='text-f12 lg:text-f14 mt-5'>
              <img
                src='https://i.pinimg.com/564x/ed/09/00/ed0900f2ff326823164c988c17b84c5c.jpg'
                alt=''
                className='lg:hidden w-[100px] h-[100px] rounded-md float-left mr-3'
              />
              Striving to be the four front of technological advancement comma
              providing our customers with access to cutting edge products that
              inspires creativity and productivity.
            </p>
          </div>
        </div>
        <div className=' flex flex-row-reverse justify-between items-center mt-10'>
          <div className='hidden lg:block w-[35%]'>
            <img
              src='https://i.pinimg.com/564x/22/e6/ba/22e6ba8655ca6dbecff2bce60ef36e78.jpg'
              alt=''
              className='w-full h-[350px] rounded-md float-right'
            />
          </div>
          <div className='flex flex-col lg:w-[55%]'>
            <h3 className='text-f16 font-semibold text-blue'>
              RELIABLE SERVICE SOLUTION
            </h3>
            <p className='text-f12 lg:text-f14 mt-5'>
              <img
                src='https://i.pinimg.com/564x/22/e6/ba/22e6ba8655ca6dbecff2bce60ef36e78.jpg'
                alt=''
                className='lg:hidden w-[100px] h-[100px] rounded-md float-right ml-3'
              />
              Aspiring to be the go to destination for product, sales, repair,
              and services. Offering unmatched reliability, quality, and
              expertise to ensure our customers device are dependable enough
              while fostering trust among customers.
            </p>
          </div>
        </div>
        <div className=' flex flex-row justify-between items-center mt-10'>
          <div className='hidden lg:block w-[35%]'>
            <img
              src='https://i.pinimg.com/564x/ed/09/00/ed0900f2ff326823164c988c17b84c5c.jpg'
              alt=''
              className='w-full h-[350px] rounded-md'
            />
          </div>
          <div className='flex flex-col lg:w-[55%]'>
            <h3 className='text-f16 font-semibold text-blue'>
              CUSTOMER CENTRIC APPROACH
            </h3>
            <p className='text-f12 lg:text-f14 mt-5'>
              <img
                src='https://i.pinimg.com/564x/ed/09/00/ed0900f2ff326823164c988c17b84c5c.jpg'
                alt=''
                className='lg:hidden w-[100px] h-[100px] mr-3 float-left rounded-md'
              />
              Serving individuals, schools, businesses, or organizations within
              our reach experts advice and quality product while placing our
              customers at the heart of everything.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurVision
