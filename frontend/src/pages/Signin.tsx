import { Auth } from "../components/Auth"
import Quote from "../components/quote"


const Signin = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
    <div>
      <Auth type="signin"/>
    </div>
    <div >

    <Quote/>
    </div>

  </div>
  )
}

export default Signin