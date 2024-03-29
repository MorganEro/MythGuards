import React, { useEffect, useState } from "react";
import { DeleteContract, UpdateContract } from "../../modules/contractManager";
import { useNavigate, useParams } from "react-router-dom";
import { GetContractById } from "../../modules/contractManager";
import "../CSS/contractEdit.css";
import { Button } from "reactstrap";

export const ContractEdit = () => {
  const { id } = useParams();
  const contractId = parseInt(id);
  const date = new Date();
  const [oldContract, setOldContract] = useState({});
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    GetContractById(contractId).then((data) => {
      setOldContract(data);
    });
  }, []);

  const handleSubmitContractButtonClick = (e) => {
    e.preventDefault();

    const d1 = date;
    const d2 = new Date(oldContract.requestedStartingDate);
    const d3 = new Date(oldContract.requestedEndingDate);

    if (d1.getTime() >= d2.getTime() && d1.getTime() <= d3.getTime()) {
      oldContract.IsActive = true;
    } else {
      oldContract.IsActive = false;
    }
    UpdateContract(contractId, oldContract)
    toggle();
    navigate(`../contract/details/${contractId}`);
  };

  const handleDeleteContractButtonClick = (e) => {
    e.preventDefault();
    DeleteContract(contractId);
    toggle();
    navigate("../contract/list");
  };

  return (
    <div className="contract_edit">
      <div>&nbsp;</div>
      <form className="contract_edit_form">
        <h2 className="contract_edit_h2">Contract Edit</h2>
        <div className="contract_edit_form_users">
          <div>Client : {oldContract?.userProfile?.displayName}</div>
          <div>Guard : {oldContract?.guardProfile?.displayName}</div>
        </div>
        <div className="contract_edit_form_inputs">
          <div>&nbsp;</div>
          <fieldset>
            <div className="contract_edit_field">
              <label htmlFor="serviceType">Service Type: </label>
              <select
                required
                autoFocus
                className=""
                value={oldContract?.serviceType?.id}
                onChange={(evt) => {
                  const copy = { ...oldContract };
                  copy.serviceTypeId = parseInt(evt.target.value);
                  setOldContract(copy);
                }}
              >
                <option id="0" value="0">
                  --Choose a Service--
                </option>
                <option id="1" value="1">
                  {" "}
                  Personal Guard
                </option>
                <option id="2" value="2">
                  {" "}
                  Guard Property
                </option>
              </select>
            </div>
          </fieldset>
          <div>&nbsp;</div>
          <fieldset>
            <div className="contract_edit_field">
              <label htmlFor="requestedStartingDate">Starting Date: </label>
              <input
                required
                autoFocus
                type="date"
                className=" "
                value={oldContract.requestedStartingDate?.split("T")[0]}
                onChange={(evt) => {
                  const copy = { ...oldContract };
                  copy.requestedStartingDate = evt.target.value;
                  setOldContract(copy);
                }}
              />
            </div>
          </fieldset>
          <div>&nbsp;</div>
          <fieldset>
            <div className="contract_edit_field">
              <label htmlFor="requestedEndingDate">Expended End Date: </label>
              <input
                required
                autoFocus
                type="date"
                className=""
                value={oldContract.requestedEndingDate?.split("T")[0]}
                onChange={(evt) => {
                  const copy = { ...oldContract };
                  copy.requestedEndingDate = evt.target.value;
                  setOldContract(copy);
                }}
              />
            </div>
          </fieldset>
          <div>&nbsp;</div>
          <fieldset>
            <div className="contract_edit_field">
              <label htmlFor="details">Details/Notes: </label>
              <input
                maxLength={65}
                required
                autoFocus
                type="text"
                className=""
                value={oldContract.details}
                onChange={(evt) => {
                  const copy = { ...oldContract };
                  copy.details = evt.target.value;
                  setOldContract(copy);
                }}
              />
            </div>
            <div>&nbsp;</div>
            <div>Is Active : {`${oldContract.isActive}`}</div>
            <button
              className="contract_edit_submit"
              onClick={(clickEvent) =>
                handleSubmitContractButtonClick(clickEvent)
              }
            >
              SUBMIT CHANGES
            </button>
            <button
              className="contract_edit_delete"
              onClick={(clickEvent) =>
                handleDeleteContractButtonClick(clickEvent)
              }
            >
              DELETE
            </button>
          </fieldset>
        </div>
      </form>
    </div>
  );
};
