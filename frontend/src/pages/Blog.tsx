import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import Fullblog from "../components/Fullblog";
import Skeleton from "../components/Skeleton";
import Appbar from "../components/Appbar";

const Blog = () => {
    const { id } =useParams();
    const {loading,blog}=useBlog({
        //@ts-ignore
        id: id
    });
    if(loading){
        return <div>
            <Appbar/>
            <div className="flex justify-center">

           <Skeleton/>
            </div>
        </div>
    }
  return (
    <div>
        <Fullblog blog={blog}/>
    </div>
  )
}

export default Blog