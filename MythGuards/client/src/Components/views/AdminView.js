import { Route, Routes } from "react-router-dom"
import { ClientList } from "../clients/ClientList"
import { ContractList } from "../contracts/ContractList"
import { GuardList } from "../guards/GuardList copy"



export const AdminView= () => {

	return (
	<Routes>
		<Route path="/" element= {
			<div>
				<div>Hello, {`${Admin.DisplayName}`}!</div>
				<div>&nbsp;</div>	
			</div>
		} />
		<Route path="contracts" element={ <ContractList/> } />
		<Route path="clientList" element={ <ClientList /> } />
		<Route path="guardList" element={ <GuardList /> } />

		
	</Routes>
	)
}
