import z from "zod";

export const signupschema=z.object({
    email:z.string().email(),
    password:z.string().min(6),
    name:z.string().optional()
})

export const signinschema=z.object({
    email:z.string().email(),
    password:z.string().min(6)})

export const createblogschema=z.object({
    title:z.string(),
    content:z.string(),
    
})


export type SignupInput=z.infer<typeof signupschema>
export type SigninInput=z.infer<typeof signinschema>
export type CreateblogInput=z.infer<typeof createblogschema>