import React from 'react'
import card1 from '../assets/Rectangle1.png'
import card2 from '../assets/Rectangle2.png'
import stars from "../assets/Frame.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
AOS.init();


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
export default function People() {
    return (
        <div>
            <section>
                <div className='bg-[#F7FBFF] pb-[127px]'>
                    <div className=' flex flex-col justify-center items-center text-cennter '>
                        <button className='bg-[#1572D31A] font-[500] text-[14px] text-[#1572D3] py-[16px] px-[32px] rounded-[8px] mb-[24px] mt-[127px]'>TESTIMONIALS</button>
                        <div data-aos="zoom-in">
                            <h1 className='font-[500] text-[38px] mb-[80px]'>What peole say about us?</h1>
                            </div> 
                    </div>

                    <Swiper
                        slidesPerView={1.5}
                        spaceBetween={30}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide><div className=''>
                            <div className='flex bg-[#fff] max-w-[800px] w-full shadow-[25px_20px_24px_#1572D31A] rounded-[24px]'>
                                <div className='mr-[40px] max-h-[500px] max-w-[390px] '> <img src={card1} alt="" className='w-full h-full' />
                                </div> <div className=''> <h2 className='font-[500] text-[64px] mb-[24px] mt-40px'>5.0 <span className='font-[500] text-[24px]'>stars</span></h2>
                                    <img src={stars} alt="" />
                                    <p className='mt-[48px] max-w-[300px] w-full font-[400] text-[22px] text-[#282828] mb-[80px]'>“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
                                    <h3 className='font-[500] text-[24px]'>Charlie Johnson</h3>
                                    <h6 className='text-[#838383]'>From New York, US</h6>
                                </div>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div className=''>
                            <div className='flex bg-[#fff] max-w-[800px] w-full shadow-[25px_20px_24px_#1572D31A] rounded-[24px]'>
                                <div className='mr-[40px] max-h-[500px] max-w-[390px] '> <img src={card1} alt="" className='w-full h-full' />
                                </div> <div className=''> <h2 className='font-[500] text-[64px] mb-[24px] mt-40px'>5.0 <span className='font-[500] text-[24px]'>stars</span></h2>
                                    <img src={stars} alt="" />
                                    <p className='mt-[48px] max-w-[300px] w-full font-[400] text-[22px] text-[#282828] mb-[80px]'>“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
                                    <h3 className='font-[500] text-[24px]'>Charlie Johnson</h3>
                                    <h6 className='text-[#838383]'>From New York, US</h6>
                                </div>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div className=''>
                            <div className='flex bg-[#fff] max-w-[800px] w-full shadow-[25px_20px_24px_#1572D31A] rounded-[24px]'>
                                <div className='mr-[40px] max-h-[500px] max-w-[390px] '> <img src={card1} alt="" className='w-full h-full' />
                                </div> <div className=''> <h2 className='font-[500] text-[64px] mb-[24px] mt-40px'>5.0 <span className='font-[500] text-[24px]'>stars</span></h2>
                                    <img src={stars} alt="" />
                                    <p className='mt-[48px] max-w-[300px] w-full font-[400] text-[22px] text-[#282828] mb-[80px]'>“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
                                    <h3 className='font-[500] text-[24px]'>Charlie Johnson</h3>
                                    <h6 className='text-[#838383]'>From New York, US</h6>
                                </div>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div className=''>
                            <div className='flex bg-[#fff] max-w-[800px] w-full shadow-[25px_20px_24px_#1572D31A] rounded-[24px]'>
                                <div className='mr-[40px] max-h-[500px] max-w-[390px] '> <img src={card1} alt="" className='w-full h-full' />
                                </div> <div className=''> <h2 className='font-[500] text-[64px] mb-[24px] mt-40px'>5.0 <span className='font-[500] text-[24px]'>stars</span></h2>
                                    <img src={stars} alt="" />
                                    <p className='mt-[48px] max-w-[300px] w-full font-[400] text-[22px] text-[#282828] mb-[80px]'>“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
                                    <h3 className='font-[500] text-[24px]'>Charlie Johnson</h3>
                                    <h6 className='text-[#838383]'>From New York, US</h6>
                                </div>
                            </div>
                        </div></SwiperSlide>

                    </Swiper>

                </div>
            </section>
        </div>
    )
}