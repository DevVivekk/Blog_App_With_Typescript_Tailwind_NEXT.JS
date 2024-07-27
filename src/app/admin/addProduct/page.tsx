"use client";
import Image from 'next/image'
import React, {  useState } from 'react'
import { assets } from '../../../Assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';

const AddProductPage = () => {
  const [image, setImage] = useState<File | null>(null);
  const [data,setData] = useState({title:"",description:"",category:"Startup",author:"Mark Henry",authorImg:"./1721923785940_Hero-img1.jpg"})

  const OnchangeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const name = e.target.name;
    const value = e.target.value;
    setData(data=>({...data,[name]:value}));
  }
 const OnchangeTextAreaHandler = (e:React.ChangeEvent<HTMLTextAreaElement>)=>{
    const name = e.target.name;
    const value = e.target.value;
    setData(data=>({...data,[name]:value}));
  }
  const OnchangeSelctAreaHandler = (e:React.ChangeEvent<HTMLSelectElement>)=>{
    const name = e.target.name;
    const value = e.target.value;
    setData(data=>({...data,[name]:value}));
  } 

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };
  
  async function submit(e:React.FormEvent){
    e.preventDefault();
    const formData = new FormData();
    formData.append("title",data.title);
    formData.append("description",data.description);
    formData.append("image",image!);
    formData.append("category",data.category);
    formData.append("author",data.author);
    formData.append("authorImg",data.authorImg)
    const reponse = await axios.post('/api/blog/email',formData);
    if(reponse.data.success===true){
      toast.success("Blog Created!")
      setImage(null);
      setData({title:"",description:"",category:"",author:"",authorImg:""});
    }else{
      toast.error("Failed request!")
    }
  }
  return (
    <>
    <form onSubmit={submit} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
      <p className='text-xl'>Upload thumbnail</p>
      <label htmlFor="image">
        <Image className='mt-4' src={!image?assets.upload_area:URL.createObjectURL(image)} width={140} alt='myimage' height={70} />
      </label>
      <input name='image' onChange={handleFileChange} type="file" id='image' hidden required  />
      <p className='text-xl mt-4'>Blog Title</p>
      <input type="text" name="title" value={data.title} onChange={OnchangeHandler} id="" placeholder='Type Here'  required className='w-full sm-w-[500px] mt-4 px-4 py-3 border'/>

      <p className='text-xl mt-4'>Blog Description</p>
      <textarea onChange={OnchangeTextAreaHandler} name="description" value={data.description} id="" placeholder='Write Content Here'  required className='w-full sm-w-[500px] mt-4 px-4 py-3 border' rows={6}/>
      <p className='text-xl mt-4'>Blog Category</p>
      <select onChange={OnchangeSelctAreaHandler} className='w-40 mt-4 px-4 py-3 border text-gray-500' name="category">
        <option value="Startup">Startup</option>
        <option value="Technology">Technology</option>
        <option value="Lifestyle">Lifestyle</option>
      </select>
      <br />
      <button type='submit' className='mt-8 w-40 h-12 bg-black text-white'>Add</button>
    </form>
    </>
  )
}

export default AddProductPage