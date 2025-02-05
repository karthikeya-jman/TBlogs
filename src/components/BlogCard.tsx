import React from 'react'
import { blogDetails } from '../utils/models'


const BlogCard :React.FC<blogDetails> = ({title,imgUrl,content}) => {
    console.log(content);
    
    return (
        <div className="flex gap-2 flex-col bg-white p-2 text-black rounded-lg">
          <img src={imgUrl} alt="" className="w-[500px] h-[300px] object-cover rounded-lg" />
          <div className='w-[500px] px-1 gap-1'>
          <span className="text-3xl font-medium">{title}</span>
          <p className="text-gray-500  max-w-[600px] overflow-hidden text-ellipsis line-clamp-3 pb-1">{content}</p>
          </div>
        </div>
      );
      
}

export default BlogCard