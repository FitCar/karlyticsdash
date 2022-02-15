import { useParams } from "react-router-dom";
import "./request.css";
import firebase from "firebase";

import DiagnosticReport from "../../components/diagnosticReport/DiagnosticReport";
import Quotation from "../../components/requestListItem/quotation/Quotation";
import { useState } from "react";

const db = firebase.firestore();
const firestore = firebase.firestore();

export default function Request() {
  

  const id = useParams();
  // console.log(id);

  const updateStatus = (status) => {
    
    const requestDoc = id.requestId;
    const customerDoc = id.customerId;
    const data = {
      status: status,
    };
    const requestRef = firestore
      .collection("Requests")
      .doc(customerDoc)
      .collection("Requests")
      .doc(requestDoc);

    requestRef.update(data);
  };

 

  return (
    <div className="request">
      Request
      <button onClick={updateStatus("Confirmed")}>Confirm</button>
      {/* <button onClick={updateStatus("Picked up")}>Picked-up</button>
      <button onClick={updateStatus("Vehicle received")}>Vehicle Received</button>
      <button onClick={updateStatus("Arrived at your location")}>Arrived at location</button>
      <button onClick={updateStatus("Work in progress")}>Work in progress</button>
      <button onClick={updateStatus("Repairs completed")}>Repairs completed</button> */}
      <div className="requestForm">
        <form>
          <input
            type="checkbox"
            name="Picked up"
            value="Picked Up"
            id="pickup"
          />
          <label htmlFor="pickup" className="">
            Picked up
          </label>
          <input type="submit" />
        </form>
       <DiagnosticReport />
       <Quotation />
      </div>
    </div>
  );
}
