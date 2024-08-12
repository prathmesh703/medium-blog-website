import { Link } from "react-router-dom"
import { Avatar } from "./Blogcard"

const Appbar = ({publish=true}:{publish?:boolean}) => {
  return (
    <div className="border-b flex justify-between p-3  px-10">
        <div className="font-semibold text-xl cursor-pointer pt-4">
      <Link to={"/blogs"}>
            Medium
      </Link>
        </div >
        <div className="flex "  >
          {publish===true?<div >
            <Link to={"/publish"}>
        <button type="button" className=" text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 flex flex-col justify-center ">NEW</button>
          </Link>
          </div>:null}
         
          <div className="flex flex-col justify-center">

            <Avatar name={"Prathmesh"}/>
          </div>
        </div>

    </div>
  )
}

export default Appbar