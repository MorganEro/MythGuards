import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  GetContractsList,
  GetUserContractsList,
} from "../../modules/contractManager";
import "../CSS/contractList.css";

export const ContractList = ({user}) => {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    if (user.userTypeId === 1) {
      GetContractsList().then((data) => {
        setContracts(data);
      });
    } else {
      GetUserContractsList(user.id).then((data) => {
        setContracts(data);
      });
    }
  }, []);

  return (
    <div className="contract_div">
      {contracts.map((contract) => {
        return (
          <div className="contracts" key={contract.id}>
            <h5>
              Contract binding {contract.guardProfile.displayName} to{" "}
              {contract.userProfile.displayName}.{" "}
            </h5>
            <div>{contract.details}</div>
            <div className="contract_items">
              Start Of Service Contract:{" "}
              {new Date(contract.requestedStartingDate).toDateString()}
            </div>
            <div className="contract_items">
              End Of Service Contract:{" "}
              {new Date(contract.requestedEndingDate).toDateString()}{" "}
            </div>
            <div className="contract_items">
              IsActive : {contract.isActive.toString()}{" "}
            </div>
            <div>
              <Link to={`/contract/details/${contract.id}`}>
                Click Here for Details
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
