import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetContractById } from "../../modules/contractManager";
import "../CSS/contract.css";


export const ContractDetails = () => {
    const { id } = useParams()
    const [contract, setContract] = useState({});
    const navigate = useNavigate()
    
    useEffect(() => {
        GetContractById(id)
            .then(setContract)
    }, [id]);

    const BackButton = () => {
        navigate("/contract")
    }
    const EditButton = () => {
        navigate(`/contract/${contract.id}`)
    }

    return (
            <div className = "contractPage">           
                <div className="contract">
                    <h4>This Contract Binds {contract?.userProfile?.displayName} with {contract?.guardProfile?.displayName} for the period agreed upon.</h4>
                    <div className="contract_terms">
                        
                        <div className="contract_terms_term">
                            Terms of Agreement:
                        </div>
                    
                        <p>
                            1. The scope of the Guard services is to be agreed upon between Client and MythGuards. If for any
                            reason, the Client believes that any guard supplied by MythGuards is not properly carrying out their
                            duties; MythGuards will immediately remove that guard from the performance of the services to be provided
                            under this Agreement and substitute another guard.
                        </p>
                        <p>
                            2. Client hereby authorizes any representative of MPP Bodyguard and Security to enter the job site premises whenever
                                necessary to fulfill the duty of MPP Bodyguard and Security to protect the property. Compliance with Statutes,
                                Ordinances and Regulations
                        </p>
                        <p>
                            3. In performing the services required of it under this Agreement, the Guard shall comply with
                            all applicable federal, state, county and city statutes, ordinances, and regulations.
                        </p>
                        <p>
                            4. For the services herein agreed to be performed, the Client shall pay MythGuards at the specified rate per day per guard.
                        </p>                 
                    </div>
                    <div className= "contract_span">
                        <span  className="contract_span_items">Start Of Service : {new Date(contract.requestedStartingDate).toDateString()} </span>
                        <span className="contract_span_items">Service Type : {contract?.serviceType?.type} </span> 
                        <span className="contract_span_items">End Of Service : {new Date(contract.requestedEndingDate).toDateString()} </span>
                    </div>
                    <div>&nbsp;</div>
                    <div className="contract_items">Contract Details : {contract.details} </div> 
                    <div className="contract_items">IsActive : {contract?.isActive?.toString()} </div>
                    <button className="contract_edit_button" onClick={(clickEvent) => BackButton (clickEvent)}>Back</button>   
                    <button className="contract_back_button" onClick={(clickEvent) => EditButton (clickEvent)}>Edit</button>   
                </div>
            </div>
        )
}


