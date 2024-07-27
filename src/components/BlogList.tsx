import React, { useState } from 'react'
import BlogItem from './BlogItem'
import { blog_data } from '../Assets/assets'

const BlogList = () => {
    const [menu,setMenu] = useState<string>('All');

  return (
    <div>
    <div className='flex justify-center gap-6 my-10'>
        <button onClick={():void=>setMenu('All')} className={menu==='All'?'bg-black text-white py-1 px-4 rounded-sm':""}>All</button>
        <button className={menu==='Technology'?'bg-black text-white py-1 px-4 rounded-sm':""} onClick={():void=>setMenu('Technology')} >Technology</button>
        <button className={menu==='Startup'?'bg-black text-white py-1 px-4 rounded-sm':""} onClick={():void=>setMenu('Startup')} >Startup</button>
        <button className={menu==='Lifestyle'?'bg-black text-white py-1 px-4 rounded-sm':""} onClick={():void=>setMenu('Lifestyle')} >LifeStyle</button>
    </div>
    <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
        {
            blog_data.filter((item)=>menu==="All"?true:item.category.toLowerCase()===menu.toLowerCase()).map((item,index)=>{
                return <BlogItem key={index} category={item.category} title={item.title} image={item.image} description={item.description} id={item.id} />
            })
        }
    </div>
    </div>
  )
}

export default BlogList