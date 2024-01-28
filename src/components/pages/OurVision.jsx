import React from 'react'

const OurVision = () => {
  const our_mission_data = [
    {
      title: 'Innovating Connectivity',
      img: 'https://i.pinimg.com/564x/fe/32/4e/fe324e15785d505cb15bd1793fdb0565.jpg',
    },
    {
      title: 'promoting sustainability',
      img: 'https://i.pinimg.com/564x/7d/89/fc/7d89fcec56321a6b8e86d8b68c8680ce.jpg',
    },
    {
      title: 'ensuring great customer service satisfaction',
      img: 'https://i.pinimg.com/564x/a6/c2/fc/a6c2fc623fb9f2379ea80adc53a4e11b.jpg',
    },
    {
      title: 'creating a dynamic working environment ',
      img: 'https://i.pinimg.com/564x/36/70/7a/36707a244dae598f533a4d78350049ba.jpg',
    },
    {
      title: 'empowering lives through integrated technology solution',
      img: 'https://i.pinimg.com/564x/cd/f1/ec/cdf1ec29dd8435b5c50458398955523a.jpg',
    },
  ]
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

      <section className='max-w-[85%] mx-auto  my-10' id='our-vision'>
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
        <div className=' flex flex-row-reverse justify-between items-center mt-10'>
          <div className='hidden lg:block w-[35%]'>
            <img
              src='https://i.pinimg.com/564x/ce/8c/4b/ce8c4be5996f525eb52898207fa43634.jpg'
              alt=''
              className='w-full h-[350px] rounded-md float-right'
            />
          </div>
          <div className='flex flex-col lg:w-[55%]'>
            <h3 className='text-f16 font-semibold text-blue'>
              QUALITY CRAFTMANSHIP
            </h3>
            <p className='text-f12 lg:text-f14 mt-5'>
              <img
                src='https://i.pinimg.com/564x/ce/8c/4b/ce8c4be5996f525eb52898207fa43634.jpg'
                alt=''
                className='lg:hidden w-[100px] h-[100px] rounded-md float-right ml-3'
              />
              Upholding the highest standards in laptop, smartphone, and
              electronic repair services, combining technical expertise with
              meticulous attention to details. Providing one on one interactions
              for technical support
            </p>
          </div>
        </div>
        <div className=' flex flex-row justify-between items-center mt-10'>
          <div className='hidden lg:block w-[35%]'>
            <img
              src='https://i.pinimg.com/564x/27/e0/eb/27e0eb4173113b355caf9c2ec4519b9b.jpg'
              alt=''
              className='w-full h-[350px] rounded-md'
            />
          </div>
          <div className='flex flex-col lg:w-[55%]'>
            <h3 className='text-f16 font-semibold text-blue'>
              DIGITAL INCLUSIVITY
            </h3>
            <p className='text-f12 lg:text-f14 mt-5'>
              <img
                src='https://i.pinimg.com/564x/27/e0/eb/27e0eb4173113b355caf9c2ec4519b9b.jpg'
                alt=''
                className='lg:hidden w-[100px] h-[100px] mr-3 float-left rounded-md'
              />
              Walking towards a future where every individuals as access to high
              quality product and reliable repair services while promoting
              digital literacy, education, and technological advancement.
            </p>
          </div>
        </div>
      </section>

      <section className='max-w-[85%] mx-auto my-10' id='our-mission'>
        <h1 className='text-pink mb-10 text-center'>Our Mission</h1>
        <div className='grid lg:grid-cols-5 gap-1 '>
          {our_mission_data.map((mission, index) => (
            <div
              key={index}
              className='relative'
            >
              <img
                src={mission.img}
                alt={`Image ${index + 1}`}
                className='h-[200px] w-full'
              />

              <div className='bg-blue bg-opacity-50 w-full h-[200px] absolute top-0' />

              <p className='text-center absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-[90%] z-50 text-[#fff]'>
                {mission.title.charAt(0).toUpperCase() + mission.title.slice(1)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default OurVision
