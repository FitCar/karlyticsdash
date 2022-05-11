import { useParams } from "react-router-dom";
import "./request.css";
import firebaseApp from "../../firebase";
import DiagnosticReport from "../../components/diagnosticReport/DiagnosticReport";
import Quotation from "../../components/quotation/Quotation";
import { useEffect, useState } from "react";
import { sendPushNotifications } from "../../notificationConfig";

const firestore = firebaseApp.firestore();

export default function Request() {
  
  const id = useParams();

  const [status, setstatus] = useState("")
  const [reqData, setreqData] = useState(null)
  const [currentPushToken, setCurrentPushToken] = useState(null)

  const getPushToken = async () => {
    const current_user = await firestore.collection("users").doc(id.customerId).get()

    setCurrentPushToken(current_user.data().NotificationToken)
  }

  useEffect(async () => {
    const requestDoc = id.requestId;
    const customerDoc = id.customerId;

    getPushToken()

    const fetched_req = await firestore.collection("Requests").doc(customerDoc).collection("Requests").doc(requestDoc).get()
    setreqData(fetched_req.data())
    setstatus(fetched_req.data().status)
  }, [])

  const updateStatus = async (status) => {
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

    await requestRef.update(data).then(() => {
      setstatus("Confirmed")
      return sendPushNotifications(currentPushToken, "request confirmed", reqData)
    })
    
  };

  return (
    <div className="request">
      <div className="flex items-center">
        <p>Request</p>
        {status === "Confirmed" ? <p className="confirmed">Request has been confirmed</p> : <button onClick={() => updateStatus("Confirmed")}>Confirm</button>}
      </div>
      
      
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

       <DiagnosticReport currentPushToken={currentPushToken} reqData={reqData} />
       <Quotation currentPushToken={currentPushToken} reqData={reqData} />
      </div>
    </div>
  );
}
