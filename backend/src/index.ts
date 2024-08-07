import { Hono } from 'hono'

import { userRoute } from './user'
import { blogroute } from './blog'

const app = new Hono<{
  Bindings:{
    DATABASE_URL:string;
  }
}>()

app.route("/api/v1/user",userRoute);
app.route("/api/v1/blog",blogroute);








export default app
