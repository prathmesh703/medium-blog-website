import {Auth} from "../components/Auth"
import Quote from "../components/quote"

const Signup = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <Auth type="signup"/>
      </div>
      <div >

      <Quote/>
      </div>

    </div>
  )
}

export default Signup