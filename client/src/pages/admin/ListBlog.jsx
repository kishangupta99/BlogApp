import React, { useEffect, useState, useContext } from 'react';
import { blog_data } from '../../assets/assets';
import BlogTableItem from '../../components/admin/BlogTableItem';
import toast from 'react-hot-toast';
import { useAppContext } from "../../context/AppContext"; 
import axios from 'axios';

const ListBlog = () => {

  const [blogs, setBlogs] = useState([]);
  const {axios} = useAppContext()

  const fetchBlogs = async ()=> {
    try {
      console.log("run");
      
      const { data } = await axios.get("http://localhost:3000/api/blog/all");
      console.log("Fetched blogs:", data);
      
      if(data.success){
        setBlogs(data.blogs)
      }else{
        toast.error("Failed to fetch blogs")
      }
    } catch (error) {
      toast.error("Something went wrong")
      console.log(error);
      
    }
  }

  useEffect(()=> {
    fetchBlogs()
  },[])

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12  sm:pl-16 bg-blue-50/50'>
      <h1>All blogs</h1>

      <div className='relative h-4/5 mt-4 max-w-4xl overflow-x-auto shadow rounded-lg scroll-hide bg-white'>
        <table className='w-full text-sm text-gray-500'>
          <thead className='text-xs text-gray-600 text-left uppercase'>
            <tr>
              <th scope='col' className='px-2 py-4 xl:px-6'> # </th>
              <th scope='col' className='px-2 py-4'> Blog Title </th>
              <th scope='col' className='px-2 py-4 max-sm:hidden'> Date </th>
              <th scope='col' className='px-2 py-4 max-sm:hidden'> Status </th>
              <th scope='col' className='px-2 py-4'> Actions </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index)=> {
              return <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchBlogs} index={index + 1}/>
            })}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default ListBlog;
