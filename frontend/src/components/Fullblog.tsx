
import Appbar from "./Appbar";
import { Avatar } from "./Blogcard";
interface Blogi {
  "content": string;
  "title": string;
  "id": number;
  "author": {
    "name": string;
  };
}
const Fullblog = ({blog}:{blog:Blogi}) => {
  return (
    <div>
      <Appbar/>
    <div className="grid grid-cols-12 px-40 pt-12 w-full max-w-screen-2xl flex justify-center">
      <div className="col-span-8  ">
        <div className="text-4xl font-extrabold">
          {blog.title}
        </div>
        <div className="text-slate-500 pt-2" >
          posted on 2nd oct 
        </div>
        <div className="pt-4">
          {blog.content}
        </div>
        
      </div>
      <div className="col-span-4 ">
        <div className="text-slate-600 font-bold">
          Author
        </div>
        <div className="pt-3 flex gap-3   ">
          <div className="flex flex-col justify-center ">
            <Avatar size={8} name={blog.author.name}/>
          </div>

        <div>
        <div className=" text-2xl font-bold">
          {blog.author.name}
        </div>
        <div className="text-slate-500">
          about the author Lorem ipsum dolor sit amet consectetur adipisicing elit. Est enim non 
        </div>
        </div>
       
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default Fullblog;
