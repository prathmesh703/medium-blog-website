import Appbar from "./Appbar"


const Skeleton = () => {
    

  return (
    <div>
        
    < div role="status" className="max-w-full animate-pulse">
   
    <div className="p-2 border-b border-slate-100 pb-4 w-screen max-w-screen-md hover:cursor-pointer ">
      
    <div className="flex " >
      <div className="fex justify-center flex-col " >

      <div className="h-4 w-4 bg-gray-200 rounded-full   mb-4"></div>
      </div>
      <div className="font-light pl-2 flex justify-center flex-col">
      <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
      </div>
      <div className="flex justify-center flex-col pl-2 pt-1">
      <circle/>
      </div>
      <div className="flex justify-center flex-col font-thin text-slate-500 pl-2">
      <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
      </div>
      
    </div>
    <div className="text-xl font-semibold pt-2 "> <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div></div>
    <div className="text-md "><div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div></div>
    <div className="w-full text-sm font-thin text-slate-500 pt-2"><div className="h-2 bg-gray-200 rounded-full  max-w-[360px]"></div></div>
    
  </div>
   
   
    
    
    <span className="sr-only">Loading...</span>
</div>
    </div>
  )
}

export default Skeleton