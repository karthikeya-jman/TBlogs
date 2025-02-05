import { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import CreateForm from './components/CreateForm'
import { BsChevronDoubleDown } from "react-icons/bs";
import { postType } from './utils/models';
import BlogCard from './components/BlogCard';
import { samplePosts } from './utils/constants';

function App() {

  const title :string = "{ Create a Blog } ------>"
  const yourBlogs :string = "{ Your Blogs }"
  const sampleBlogs :string = "{ Sample Blogs }"

  const [success,setSuccess] = useState(false);
  const [posts,setPosts] = useState<postType[]>([]);

  useEffect(()=>{
    const updatedPosts :postType[] = JSON.parse(localStorage.getItem("posts") || "[]") as postType[]
    setPosts(updatedPosts) 
  },[success])

  return (
    <>
    <div>
      <NavBar />

      <div className='flex w-full lg:flex-row flex-col items-center h-screen  justify-between px-80 '>
        <div className='w-full flex flex-col gap-5'>
          <span className='text-5xl font-medium'> {title} </span>
          <div>
          <p className='text-lg text-gray-500'>You can view Your Blogs Down</p>
          <a href="#blogs">

          <BsChevronDoubleDown className='text-xl text-orange-500/[60%]'/>
          </a>
          </div>
        </div>
        <CreateForm success = {success } setSuccess={setSuccess}/>
      </div>
      { (posts.length>0) ?
      <>
      <p className='text-5xl text-center mb-10 font-bold'>{yourBlogs}</p>
      <div className='flex flex-wrap gap-10 place-content-center mb-30' id='blogs'>
        {
          posts.map((p : postType,index :number)=>{
            return(
              <BlogCard title={p.title} imgUrl={p.imgUrl} content={p.content} key={index} />
            )
          })
        }
      </div>
      </> :  <p className='text-5xl my-20 text-center'> {"{ Add your First Blog }"}</p>
      }
      <p className='text-5xl text-center mb-10 font-bold'>{sampleBlogs}</p>
      <div className='flex flex-wrap gap-10 place-content-center mb-30' id='blogs'>
        {
          samplePosts.map((p : postType,index :number)=>{
            return(
              <BlogCard title={p.title} imgUrl={p.imgUrl} content={p.content} key={index} />
            )
          })
        }
      </div>
    </div>
    </>
  )
}

export default App
