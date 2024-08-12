import { Link } from "react-router-dom";

interface Blogcardprops {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id:number;
}

export const Blogcard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: Blogcardprops) => {
  return (
    <Link to={`/blog/${id}`}>
    <div className="p-2 border-b border-slate-100 pb-4 w-screen max-w-screen-md hover:cursor-pointer ">
      
      <div className="flex " >
        <div className="fex justify-center flex-col " >

        <Avatar name={`${authorName}`} />
        </div>
        <div className="font-light pl-2 flex justify-center flex-col">
        {authorName}
        </div>
        <div className="flex justify-center flex-col pl-2 pt-1">
        <Circle/>
        </div>
        <div className="flex justify-center flex-col font-thin text-slate-500 pl-2">
        {publishedDate}
        </div>
        
      </div>
      <div className="text-xl font-semibold pt-2 ">{title}</div>
      <div className="text-md ">{content.slice(0, 100) + "...."}</div>
      <div className="w-full text-sm font-thin text-slate-500 pt-2">{`${Math.ceil(content.length / 100)} minutes`}</div>
      
    </div>
    </Link>
  );
};

export function Avatar({ size,name }: { name: string;
  size?:number
 }) {
  
  return (
    <div  className={`relative inline-flex items-center justify-center ${size?`w-${size} h-${size}`:"w-8 h-8"} overflow-hidden bg-black rounded-full dark:bg-black`}>
      <span className="font-medium tex-xl dark:text-gray-300 flex flex-col justify-center">
        {name[0].toUpperCase()}
      </span>
    </div>
  );
}

function Circle(){
  return <div className="h-1 w-1 rounded-full bg-slate-500">

  </div>
}
