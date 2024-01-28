import React, { useState } from 'react'
import { about_contents, about_indicators } from '../../default_data'
import '../../Styles/Home.css'

const AboutUs = () => {
  return (
    <div>
      <div className=''>
        <img
          src='https://i.pinimg.com/564x/30/01/c3/3001c3db1353f35e4ff0efd9c5f74ca2.jpg'
          alt=''
          className='  w-screen h-[70vh] lg:h-screen'
        />

        <div className='absolute z-40 top-[35%] translate-y-[-35%] lg:top-[50%] lg:translate-y-[-50%] left-[25%] translate-x-[-25%] lg:left-[15%] lg:translate-x-[-15%] text-[#fff]'>
          <h1>About Us</h1>
          <p className='lg:w-[550px] mt-5'>
            Transforming visions into reality. Join us for a connected,
            sustainable future where innovation thrives.
          </p>
        </div>
      </div>

      <section
        className='max-w-[85%] mx-auto  my-10'
        id='about'
      >
        <div className=' flex flex-row justify-between items-center'>
          <div className='hidden lg:block w-[35%]'>
            <img
              src='https://i.pinimg.com/564x/e0/29/3c/e0293c2b193859b97d6b290a27d7c74f.jpg'
              alt=''
              className='w-full h-[350px] rounded-md'
            />
          </div>
          <div className='flex flex-col lg:w-[55%]'>
            <h3 className='text-f16 font-semibold text-blue'>
              PROBLEM SOLVERS
            </h3>
            <p className='text-f12 lg:text-f14 mt-5'>
              <img
                src='https://i.pinimg.com/564x/e0/29/3c/e0293c2b193859b97d6b290a27d7c74f.jpg'
                alt=''
                className='lg:hidden w-[100px] h-[100px] rounded-md float-left mr-3'
              />
              We understand the frustration that comes with technological
              equipment usage. We have technical aptitude and experience to
              repair any of your technological equipment. We specialized in a
              wide range of computer,electronics and telecommunication which
              includes: Laptops,smartphone,car tracking system,solar cctv
              system,wireless intercome, solar & inverter system and many more.
              Every client/customers satisfactionis our priority therefore,we
              strive to listen to the problem and creat a solution while giving
              effective and efficent customer service.
            </p>
          </div>
        </div>
        <div className=' flex flex-row-reverse justify-between items-center mt-10'>
          <div className='hidden lg:block w-[35%]'>
            <img
              src='https://i.pinimg.com/564x/fe/99/0a/fe990a751126a3f8c7512d070b957f26.jpg'
              alt=''
              className='w-full h-[350px] rounded-md float-right'
            />
          </div>
          <div className='flex flex-col lg:w-[55%]'>
            <h3 className='text-f16 font-semibold text-blue'>REPUTATION</h3>
            <p className='text-f12 lg:text-f14 mt-5'>
              <img
                src='https://i.pinimg.com/564x/fe/99/0a/fe990a751126a3f8c7512d070b957f26.jpg'
                alt=''
                className='lg:hidden w-[100px] h-[100px] rounded-md float-right ml-3'
              />
              As a limited company that we are,we have created a great interest
              in building a good reputation to all our customers. We have a team
              of expertize to provide effective customer service in both sales
              and repair department. Our customer satisfaction means everything
              to us; Therefore, we continuously grow and improve our skills,
              process and techniques to better services.
            </p>
          </div>
        </div>
        <div className=' flex flex-row justify-between items-center mt-10'>
          <div className='hidden lg:block w-[35%]'>
            <img
              src='https://i.pinimg.com/564x/49/c5/32/49c5328ef6a5727882ebd66ff36ab68b.jpg'
              alt=''
              className='w-full h-[350px] rounded-md'
            />
          </div>
          <div className='flex flex-col lg:w-[55%]'>
            <h3 className='text-f16 font-semibold text-blue'>DOMINANCE</h3>
            <p className='text-f12 lg:text-f14 mt-5'>
              <img
                src='https://i.pinimg.com/564x/49/c5/32/49c5328ef6a5727882ebd66ff36ab68b.jpg'
                alt=''
                className='lg:hidden w-[100px] h-[100px] mr-3 float-left rounded-md'
              />
              We focus on beign an asset to every client we serve and we are
              growing tremendensly with over 1000plus customers as at 2020. We
              continue to provide repair solution,productsales,supply of laptops
              & accessories,effective training and efficient technical
              consultant services to schools,bussinesses and individual within &
              the communities. We are happy to recieve feedback from our
              customers about our quality sales,repairs and services.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
