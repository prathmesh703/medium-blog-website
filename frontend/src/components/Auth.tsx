import { SignupInput } from "@pathmesh/medium-common";
import axios from "axios";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "./config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setpostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
const navigate=useNavigate();
  async function sendRequst() {
    try {
        const response= await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signin"?"signin":"signup"}`,postInputs)
        const token=response.data;
        localStorage.setItem("token",token);
        navigate("/blogs")
        
    } catch (error) {
        alert("error while logging")
        console.log(error)
    }
  }
  return (
    
    <div className="h-screen flex justify-center flex-col">
       
      <div className="flex   justify-center">
        <div>
        <div className="px-10">
          <div className="text-4xl font-bold p-1">{type==="signin"?"login to account":"Create an account"}</div>
          <div className="text-slate-400 text-center ">{type==="signin"?"Create an account":" already have an account?"}
            
           
            <Link className="p-2" to={type==="signin"?"/signup":"/signin"}>{type==="signin"?"signup":"signin"}
              
            </Link>
          </div>
        </div>
        <div className="pt-4 ">
          <LablledInput
            label="Name"
            placeholder="prathmesh kolpe"
            onChange={(e) => {
              setpostInputs({
                ...postInputs,
                name: e.target.value,
              });
            }}
          />
          <LablledInput
            label="Email"
            placeholder="kolpe@gmail.com"
            onChange={(e) => {
              setpostInputs({
                ...postInputs,
                name: e.target.value,
              });
            }}
          />
          <LablledInput
            label="Password"
            placeholder="12345"

            onChange={(e) => {
              setpostInputs({
                ...postInputs,
                name: e.target.value,
              });
            }}
            type="password"
          />
        </div>
        <div>
        <button onClick={sendRequst} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 w-full mt-7 dark:border-gray-700">{type==="signin"?"sign in":"sign up"}</button>
        </div>
        </div>
        
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?:string
}

function LablledInput({ label, placeholder, onChange, type }: LabelledInputType) {
  return (
    <div>
      <label className="block pt-3 px-1 mb-2 text-sm font-semibold text-gray-900 dark:text-black">
        {label}
      </label>
      <input
        type={type ||"text"}
        id="first_name"
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
        placeholder={placeholder}
        required
      />
    </div>
  );
}
