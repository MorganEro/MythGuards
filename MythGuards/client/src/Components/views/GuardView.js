import { Route, Routes } from "react-router-dom"
import { ContractList } from "../contracts/ContractList"
import { GuardCard } from "../guards/GuardCard"


export const GuardView= () => {

	return (
	<Routes>
		<Route path="/" element= {
			<div>
				<div>Hello, {`${guard.DisplayName}`}!</div>
				<div>&nbsp;</div>	
			</div>
		} />
		<Route path="contracts" element={ <ContractList /> } />
		<Route path="profile" element={ <GuardCard /> } />
		

		
	</Routes>
	)
}