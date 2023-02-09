import React, { useEffect, useState } from "react";
import { GetContract } from "../modules/contractManager";



export const ContractPage = (id ) => {
  const [contract, setContract] = useState([]);

    useEffect(() => {
        GetContract(id)
            .then(data => {
                setContract(data)
            })
    }, []);

  return (
        <div>
             return (
                <div className="contract">
                    <h4>This Contract Binds {contract.ClientName} with {contract.GuardName} for the agreed upon.</h4>
                    <div>Terms of Agreement: </div>
                    <div className="contract_items">Contract Details/Notes: {contract.details}</div>
                    <div className="contract_items">Service Type : {contract.serviceType}'</div>
                    <div className="contract_items">Start Of Service Contract: {contract.requestedStartDate}</div>
                    <div className="contract_items">End Of Service Contract: {contract.requestedEndingDate}'</div>
                    <div className="contract_items">IsActive : {contract.isActive}'</div>
                    //Todo add price total for the contract
                </div>
                )
        </div>
    )
}
