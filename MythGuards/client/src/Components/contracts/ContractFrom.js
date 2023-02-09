import React, { useEffect, useState } from 'react';
import { AddContract } from '../../modules/contractManager';
import { useParams } from 'react-router-dom';
import { GuardList } from '../guards/GuardList';


export const ContractForm = () => {s

    const { id } = useParams();
    const contractId = parseInt(id);

    const [contract, setContract] = useState ({
        UserProfileId: 0, //Todo get from browser
        GuardId: 0, //Todo get from browser
        ServiceTypeId: 0, 
        RequestedStartingDate: "", 
        RequestedEndingDate: "", 
        Details: "", 
        IsActive: False
    })


    const handleSubmitContractButtonClick = (e) => {
        e.preventDefault()
        AddContract(contract)
        //TODO: add a then to return show the contract and send confirmation message
    }

    return (
        <div className="contract">
            <div>&nbsp;</div>
            <form className="contract_form">
                <h2>Contract</h2>
                <div>&nbsp;</div>
                <fieldset>
                    <div className="contract_field">
                        <label htmlFor="serviceType">Service Type: </label>
                        <select
                            required autoFocus
                            className=""
                            value={contract.ServiceTypeId}
                            onChange={
                                (e) => {
                                    setContract({ServiceTypeId: e.target.id})
                                }}>
                                <option id="0" value= "--Select Type of Service--">--Choose a day--</option>
                                <option id="1" value= "Personal"> Personal Guard</option>
                                <option id="2" value= "Property"> Guard Property</option>
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
                                    copy.imgUrl = evt.target.value
                                    setContract(copy)
                                }
                            } />
                    </div>
                </fieldset>
                <div>&nbsp;</div>
                <fieldset>
                    <div className="contract_field">
                        <label htmlFor="details">Details/Notes: </label>
                        <input
                            required autoFocus
                            type="text"
                            className=""
                            value={contract.Details}
                            onChange={
                                (evt) => {
                                    const copy = {...contract}
                                    copy.imgUrl = evt.target.value
                                    setContract(copy)
                                }
                            } />
                    </div>
                </fieldset>
                <div>&nbsp;</div>
                <fieldset>
                    <div className="contract_field">
                        <label htmlFor="isActive">IsActive: </label>
                        <input
                            required autoFocus
                            type="text"
                            className=""
                            value={contract.IsActive}
                            onChange={
                                (evt) => {
                                    const copy = {...profile}
                                    copy.imgUrl = evt.target.value
                                    setContract(copy)
                                }
                            } />
                    </div>
                </fieldset>
                <div>&nbsp;</div>
                <button
                    onClick={(clickEvent) => handleSubmitContractButtonClick(clickEvent)}>
                    Submit Contract
                </button>
            </form>
        </div>
    )
}
