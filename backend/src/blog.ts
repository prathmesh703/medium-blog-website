import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'
import { createblogschema } from "@pathmesh/medium-common";


export const blogroute=new Hono<{
    Bindings:{
        DATABASE_URL: string,
        JWT_SECRET:string
    },
    Variables:{
      id:string
    }
}>();

blogroute.use("/*", async (c,next) => {
  const authheader=  c.req.header("authorization") || "";
  const user= await verify(authheader,c.env.JWT_SECRET);
  if(user){
    //@ts-ignore
    c.set( "id",user.id)
  }
  await  next();
  })
  
  
  blogroute.post('/', async (c) => {
    const body=await c.req.json();

    const authorid=c.get("id")
    console.log(body);
    const {success}=createblogschema.safeParse(body)
    if(!success){
      c.status(401)
    return  c.text("inputs are wrong")
    }
    console.log(authorid);
    const prisma =  new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
      }).$extends(withAccelerate())

     try {
      const post= await prisma.post.create({
        data:{
             title:body.title,
             content:body.content,
             authorid:authorid
        }
       })
     return c.json({
       id:post.id
     })
     } catch (error) {
      console.log(error)
     }
  })
  
  
  blogroute.put('/', async (c) => {
    const body=await c.req.json();
    const prisma =  new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
      }).$extends(withAccelerate())

     const post= await prisma.post.update({
      where:{
        id:body.id
      },
       data:{
            title:body.title,
            content:body.content,
           
       }
      })
    return c.json({
      id:post.id
    })
  })

  blogroute.get('/bulk', async (c) => {
    const prisma =  new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
      }).$extends(withAccelerate())
      try {
        const post= await prisma.post.findMany({
          select:{
            content:true,
            title:true,
            id:true,
            author:{
              select:{
                name:true
              }
            }
          }
        })
        return c.json({
          post
        })
      } catch (error) {
        c.status(411);

        console.log(error)
        return c.json({
          msg:"error while fetching all the blog"
        })
      }
     
  })

  blogroute.get('/:id', async (c) => {
    const id=c.req.param("id")
    
    const prisma =  new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
      }).$extends(withAccelerate())

     try {
      const post= await prisma.post.findUnique({
        where:{
         id:id
       },
       select:{
        title:true,
        content:true,
        author:{
          select:{
            name:true
          }
        }
       }
       })
     return c.json({
       post
     })
      
     } catch (error) {
      console.log(error)
     }
  })
  
  
 