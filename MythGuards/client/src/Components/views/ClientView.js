import { Route, Routes } from "react-router-dom"
import { ClientCard } from "../clients/ClientCard"
import { ContractList } from "../contracts/ContractList"


export const ClientView= () => {

	return (
	<Routes>
		<Route path="/" element= {
			<div>
				<div>Hello, {`${client.DisplayName}`}!</div>
				<div>&nbsp;</div>	
			</div>
		} />
		<Route path="contracts" element={ <ContractList /> } />
		<Route path="profile" element={ <ClientCard /> } />
		<Route path="guardList" element={ <ClientTrainerDetails /> } />

		
	</Routes>
	)
}
