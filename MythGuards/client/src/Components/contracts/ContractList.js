import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetContractsList } from "../../modules/contractManager";
import "../CSS/contractList.css";


export const Contracts = () => {
  const [contracts, setContracts] = useState([]);

    useEffect(() => {
        GetContractsList()
            .then(data => {
                setContracts(data)
            })
    }, []);
//Todo add price total for the contract
  return (
        <div className="contract_div">
            {contracts.map((contract) => { 
                return (
                    <div className="contracts" key= {contract.id}>
                            <h5>This Contract Binds {contract.userProfile.displayName} with {contract.guardProfile.displayName} for the agreed upon.</h5>
                            <div className="contract_items">Start Of Service Contract: {new Date(contract.requestedStartingDate).toDateString()}</div>
                            <div className="contract_items">End Of Service Contract: {new Date(contract.requestedEndingDate).toDateString()} </div>
                            <div className="contract_items">IsActive : {contract.isActive.toString()} </div>
                            <div> 
                                <Link to={`/contract/details/${contract.id}`}>Click Here for Details</Link>
                            </div>
                    </div>
            )})}
        </div>
    )
}
