import axios from "axios";
import Appbar from "../components/Appbar";
import { BACKEND_URL } from "../components/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Publish = () => {
    const [title,settitle]=useState("");
    const[description,setdescription]=useState("");
    const navigate=useNavigate();
    const handleSubmit = async (event: { preventDefault: () => void; }) => {
      event.preventDefault(); 
      try {
          console.log(title);
          console.log(description);
          const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
              title,
              content: description
          }, {
              headers: {
                  Authorization: localStorage.getItem("token")
              }
          });
          console.log(response);
          navigate(`/blog/${response.data.id}`);
      } catch (error) {
          console.log(error);
      }
  };
  return (
    <div>
      <Appbar publish={false} />
      <div className=" flex   justify-center w-full">
        <div className="max-w-screen-lg pt-8 w-full">
          <div className=" pt-8 w-full">
            <input onChange={(e)=>{
                settitle(e.target.value)
            }}
              placeholder="TITLE"
              type="text"
              className=" w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500  "
            />
          </div>
          <div className="pt-4">
            <form onSubmit={handleSubmit}>
              <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 ">
                <div className="px-4 py-2 bg-white rounded-t-lg">
                  
                  <textarea
                    onChange={(e)=>{
                        setdescription(e.target.value)
                    }}
                    rows={4}
                    className="w-full px-0 text-sm text-gray-900 bg-white border-0 outline-none "
                    placeholder="Write content of the post..."
                    required
                  ></textarea>
                </div>
                <div className="flex items-center justify-between px-3 py-2 border-t ">
                  <button 
                    type="submit"
                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800"
                  >
                    Post comment
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publish;
