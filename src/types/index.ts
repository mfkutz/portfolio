import { z } from "zod"

export const dataUserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    phoneNumber: z.string(),
    message: z.string()
})

export type UserDataForm = z.infer<typeof dataUserSchema>