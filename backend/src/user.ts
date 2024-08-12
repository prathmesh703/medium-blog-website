import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import {  signinschema, signupschema } from "@pathmesh/medium-common";


export const userRoute=new Hono<{
    Bindings:{
        DATABASE_URL :string,
        JWT_SECRET:string
    }
}>();

userRoute.post('/signup', async (c) => {
  console.log("hii");
    const body=await c.req.json();
    console.log("after");
    const {success}=signupschema.safeParse(body);
     if(!success){
       c.status(401)
     return  c.text("inputs are wrong")
     }
    const prisma =  new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())
    
    try {
    const user= await  prisma.user.create({
        data:{
          email: body.email,
          password:body.password,
          name:body.name
         
        }
      })
      const jwt=await sign({
        id:user.id,
        name:user.name
      },c.env.JWT_SECRET)
      return c.text(jwt)
  
    } catch (error) {
      c.status(411);
      console.log(error);
      return c.text("invalid")
    }
  
    return c.text('account created ')
  })
  
  
  userRoute.post('/signin', async(c) => {
    const body= await c.req.json()
    const {success}=signinschema.safeParse(body);
    if(!success){
      c.status(401)
    return  c.text("inputs are wrong")
    }
    const prisma =  new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())
    try {
      const user= await  prisma.user.findUnique({
        where:{
          email: body.email,
         
          password:body.password
         
        }
      })
      if(user){
        const jwt=await sign({
          id:user.id,
          name:user.name
        },c.env.JWT_SECRET)
        return  c.text(jwt)
        return c.text("logged in")
      }
     
     
      
    } catch (error) {
      console.log(error);
      c.status(411)
      return c.text("account doesnt exist")
    }
    return c.text('Hello Hono!')
  
  })