"use client";
import React, { useCallback, useEffect, useState } from 'react'
import { assets, blog_data } from '../../../Assets/assets';
import Image from 'next/image';
import Footer from '../../../components/Footer';
import Link from 'next/link';

interface PageProps {
    params:{
        id:string
    }
  }
  interface DataObj {
    id: number;
    title: string;
    description: string;
    image: any;
    author_img:any,
    author:string

}

const Page:React.FC<PageProps> = ({params})=>{
    const [data,setData] = useState<undefined|DataObj>(undefined);
    const fetchBlogData = useCallback((id:string):void=>{
        for(let i of blog_data){
            if(i.id===Number(id)){
                setData({
                    id: i.id,
                    title: i.title,
                    description: i.description,
                    image: i.image, // Assuming image is a string URL
                    author_img:i.author_img,
                    author:i.author
                });
            }
        }
    },[setData])
    useEffect(()=>{
        fetchBlogData(params.id);
    },[fetchBlogData,params.id])
    console.log(data);
  return (
    <>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-20'>
        <div className='flex justify-between items-center'>
            <Link href='/'>
            <Image src={assets.logo} alt='myimage' width={180} className='w-[130px] sm:w-auto' />
            </Link>
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>Get Started
                <Image src={assets.arrow} alt='myimage' />
            </button>
        </div>
        <div className="text-center my-24">
            <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data?.title}</h1>
            <Image src={data?.author_img} className='mx-auto mt-6 border border-white rounded-full' alt='myimage' width={60} height={60} />
            <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data?.author}</p>
        </div>
    </div>
    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        <Image className='border-4 border-white' src={data?.image} width={1280} height={720} alt='myimgae' />
        <h1 className='my-8 text-[26px] font-semibold'>Introduction:</h1>
        <p>{data?.description}</p>
        <h3 className='my-5 text-[18px] font-semibold'>Step1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab voluptates unde, facere, consequuntur accusantium nostrum eum, rem sit beatae laborum qui temporibus aspernatur quaerat? Iste fuga voluptas assumenda explicabo veritatis!</h3>
        <p className='my-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum animi reiciendis, cumque obcaecati explicabo expedita illum sit, fugiat, beatae laborum libero. Iste ipsum iusto veritatis dignissimos ab quibusdam accusantium fuga.</p>
        <p className='my-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum animi reiciendis, cumque obcaecati explicabo expedita illum sit, fugiat, beatae laborum libero. Iste ipsum iusto veritatis dignissimos ab quibusdam accusantium fuga.</p>

        <h3 className='my-5 text-[18px] font-semibold'>Step2: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab voluptates unde, facere, consequuntur accusantium nostrum eum, rem sit beatae laborum qui temporibus aspernatur quaerat? Iste fuga voluptas assumenda explicabo veritatis!</h3>
        <p className='my-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum animi reiciendis, cumque obcaecati explicabo expedita illum sit, fugiat, beatae laborum libero. Iste ipsum iusto veritatis dignissimos ab quibusdam accusantium fuga.</p>
        <p className='my-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum animi reiciendis, cumque obcaecati explicabo expedita illum sit, fugiat, beatae laborum libero. Iste ipsum iusto veritatis dignissimos ab quibusdam accusantium fuga.</p>

        <h3 className='my-5 text-[18px] font-semibold'>Step3: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab voluptates unde, facere, consequuntur accusantium nostrum eum, rem sit beatae laborum qui temporibus aspernatur quaerat? Iste fuga voluptas assumenda explicabo veritatis!</h3>
        <p className='my-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum animi reiciendis, cumque obcaecati explicabo expedita illum sit, fugiat, beatae laborum libero. Iste ipsum iusto veritatis dignissimos ab quibusdam accusantium fuga.</p>
        <p className='my-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum animi reiciendis, cumque obcaecati explicabo expedita illum sit, fugiat, beatae laborum libero. Iste ipsum iusto veritatis dignissimos ab quibusdam accusantium fuga.</p>

        <h3 className='my-5 text-[18px] font-semibold'>Conclusion: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab voluptates unde, facere, consequuntur accusantium nostrum eum, rem sit beatae laborum qui temporibus aspernatur quaerat? Iste fuga voluptas assumenda explicabo veritatis!</h3>
        <p className='my-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum animi reiciendis, cumque obcaecati explicabo expedita illum sit, fugiat, beatae laborum libero. Iste ipsum iusto veritatis dignissimos ab quibusdam accusantium fuga.</p>
        <div className='my-24'>
            <p className='text-black font font-semibold my-4'>Share this article on social media: </p>
            <div className='flex'>
                <Image src={assets.facebook_icon} alt='MYIMAGE' width={50} />
                <Image src={assets.twitter_icon} alt='MYIMAGE' width={50} />
                <Image src={assets.googleplus_icon} alt='MYIMAGE' width={50} />
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Page