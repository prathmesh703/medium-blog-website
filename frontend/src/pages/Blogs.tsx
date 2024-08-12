import Appbar from "../components/Appbar"
import {Blogcard} from "../components/Blogcard"
import Skeleton from "../components/Skeleton";
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const {loading, blogs}=useBlogs();

    if(loading){
        return <div >
            <Appbar/>
            <div className="flex  justify-center">
            <div>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            </div>
           
            </div>
           
        </div>
    }
  return (
      <div >
        <Appbar/>
        <div className="flex  justify-center p-2 ">
        
      
        <div className=" flex flex-col gap-4 ">
            
        {blogs.map(blog =>
                <Blogcard 
                id={blog.id}
                authorName={blog.author.name}
                title={blog.title}
                content={blog.content}
                publishedDate={
                    "10th Aug 2024"
                }/>
        )}
        
           
    </div>
    </div>
    </div>
  )
}

