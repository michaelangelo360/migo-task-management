import {auth , currentUser } from "@clerk/nextjs/server"
import {UserButton} from "@clerk/nextjs"

const ProtectedPage =() =>{

const user = currentUser();
const {userId} = auth();
    
    return (
        <div>
            <UserButton/>
        </div>
    )
}

export default ProtectedPage;