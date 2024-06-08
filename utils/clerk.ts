import { currentUser } from "@clerk/nextjs/server"

interface User{
    email: String | undefined
    username:String | undefined | null
    avatar: String |undefined
}

export const getuserData=async():Promise<User>=>{
    const user = await currentUser()
        const email = user?.emailAddresses[0].emailAddress
        const username = user?.username
        const avatar = user?.imageUrl

        return{email,username,avatar}
    
}