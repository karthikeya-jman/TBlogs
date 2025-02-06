import React, { useState } from 'react'
import { postType,ack } from '../utils/models';

const CreateForm :React.FC<ack> = ({success, setSuccess}) => {



    const [title,setTitle] = useState("");
    const [imgUrl,setImgUrl] = useState("");
    const [content,setContent] = useState("");

    function handleSubmit(event : React.FormEvent) : void {
        event.preventDefault()

        let newPost :postType = { 
            id : Date.now(),
            title : title,
            imgUrl : imgUrl,
            content : content,
            date : new Date().toLocaleString()
        };


        const existingPosts: postType[] = JSON.parse(localStorage.getItem("posts") || "[]") as postType[];

        existingPosts.unshift(newPost)

        localStorage.setItem("posts",JSON.stringify(existingPosts));
        setTitle("")
        setImgUrl("")
        setContent("")
        // console.log(newPost);
        setSuccess(!success)
        
    }

    return (
        <div className="flex w-full justify-end text-black">
          <div className="bg-white p-8 w-full max-w-lg  rounded-lg shadow-lg">
            <form 
            onSubmit={(e) =>handleSubmit(e)}
            >
              <div className="flex flex-col mb-4">
                <label className="text-lg mb-2">Title</label>
                <input
                  type="text"
                  placeholder="Enter Title"
                  className="border border-gray-300 p-2 rounded"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="text-lg mb-2">Image URL</label>
                <input
                  type="text"
                  placeholder="Paste Image URL"
                  className="border border-gray-300 p-2 rounded"
                  value={imgUrl}
                  onChange={(e) => setImgUrl(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="text-lg mb-2">Content</label>
                <textarea
                  placeholder="Enter Content"
                  className="min-h-[200px] border border-gray-300 p-2 rounded"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 shadow-lg shadow-blue-500/50 text-white p-2 rounded"
              >
                Create Post
              </button>
            </form>
          </div>
        </div>
)}

export default CreateForm