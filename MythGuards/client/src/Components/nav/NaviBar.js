
import { AdminNav } from "./AdminNav"
import { ClientNav } from "./ClientNav"
import { GuardNav } from "./GuardNav"


export const NaviBar = ({ user }) => {
  
    if (user.userTypeId == 2) {
        return <AdminNav />
    } else if (user.userTypeId == 3) {
        return <ClientNav/>
    } else {
        return <GuardNav/>
    }	
}