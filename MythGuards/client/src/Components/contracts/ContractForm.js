import React, { useEffect, useState } from 'react';
import { AddContract } from '../../modules/contractManager';
import { useNavigate, useParams } from 'react-router-dom';
import { thisUser, onLoginStatusChange } from '../../modules/authManager';
import "../CSS/contractForm.css";

export const ContractForm = () => {

    // const { id } = useParams();
    // const contractId = parseInt(id);
    const date = new Date();
    const navigate = useNavigate()

    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    useEffect(() => {
        onLoginStatusChange(setIsLoggedIn);
      }, []);

    useEffect(() => {
        if (isLoggedIn) {
          thisUser().then(setUser);
        } else {
          setUser(null);
        }
      }, [isLoggedIn]);
   
      console.log(user)

   

    const [contract, setContract] = useState ({
        UserProfileId: 1, 
        GuardId:2, 
        ServiceTypeId: 1,
        RequestedStartingDate: "", 
        RequestedEndingDate: "", 
        Details: "", 
        IsActive: false
    })


  
    const handleSubmitContractButtonClick = (e) => {
        e.preventDefault()

       
            const d1= date;
            const d2 = new Date(contract.RequestedStartingDate);
            const d3 = new Date(contract.RequestedEndingDate);
            if ((d1.getTime() >= d2.getTime()) && 
                (d1.getTime() <= d3.getTime())){
                contract.IsActive = true
            } else {
                contract.IsActive = false
            }

            const answer = window.confirm("You are about to enter into this binding agreement. Are you ready?");
            if (answer) {
                contract.UserProfileId = user?.id;
                AddContract(contract)
                window.alert("Contract Added!");
                navigate("/contract")
           
            } else {
            window.alert("contract not added");
            console.log("Changes not saved to the database.");
            }

        }

        
    

    const BackButton = () => {
        navigate("/contract")
    }

   

    return (
        <div className="contractForm">
            <div>&nbsp;</div>
            <form className="contract_form">
                <h2 className ="contract_form_h2">Contract</h2>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>

                <div className="contract_terms">
                        
                        <div className="contract_form_terms_term">
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
                <fieldset>
                    <div className="contract_field">
                        <label htmlFor="serviceType">Service Type: </label>
                        <select
                            required autoFocus
                            className=""
                            value={contract.ServiceTypeId}
                            onChange={
                                (evt) => {
                                    const copy = {...contract}
                                    copy.ServiceTypeId = parseInt(evt.target.value)
                                    setContract(copy)   
                                }
                            }>
                                <option id="0" value= "0">--Choose a Service--</option>
                                <option id="1" value= "1"> Personal Guard</option>
                                <option id="2" value= "2"> Guard Property</option>
                        </select>    
                    </div>
                </fieldset>
                <div>&nbsp;</div>
                <fieldset>
                    <div className="contract_field">
                        <label htmlFor="requestedStartingDate">Starting Date: </label>
                        <input
                            required autoFocus
                            type="date"
                            className=" "
                            value={contract.RequestedStartingDate}
                            onChange={
                                (evt) => {
                                    const copy = {...contract}
                                    copy.RequestedStartingDate = evt.target.value
                                    setContract(copy)
                                }
                            } />
                    </div>
                </fieldset>
                <div>&nbsp;</div>
                <fieldset>
                    <div className="contract_field">
                        <label htmlFor="requestedEndingDate">Expended End Date: </label>
                        <input
                            required autoFocus
                            type="date"
                            className=""
                            value={contract.RequestedEndingDate}
                            onChange={
                                (evt) => {
                                    const copy = {...contract}
                                    copy.RequestedEndingDate= evt.target.value
                                    setContract(copy)
                                }
                            } />
                    </div>
                </fieldset>
                <div>&nbsp;</div>
                <fieldset >
                    <div className="contract_field">
                        <label htmlFor="details">Details/Notes: </label>
                        <input
                            className="contract_field_input"
                            size="60"
                            required autoFocus
                            type="text"
                            value={contract.Details}
                            onChange={
                                (evt) => {
                                    const copy = {...contract}
                                    copy.Details = evt.target.value
                                    setContract(copy)
                                }
                            } />
                    </div>
                </fieldset>             
                <div>&nbsp;</div>
                <button
                    className="contract_form_submit"
                    onClick={(clickEvent) => handleSubmitContractButtonClick(clickEvent)}>
                    Submit Contract
                </button>
                <button className="contract_form_back" onClick={(clickEvent) => BackButton (clickEvent)}>Back</button>
            </form>
        </div>
    )
}
