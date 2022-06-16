import { useLocation, useParams } from "react-router-dom";
import "./request.css";
import firebaseApp from "../../firebase";
import DiagnosticReport from "../../components/diagnosticReport/DiagnosticReport";
import Quotation from "../../components/quotation/Quotation";
import { useEffect, useState } from "react";
import { sendPushNotifications } from "../../notificationConfig";

const firestore = firebaseApp.firestore();

export default function Request() {
  const id = useParams();
  const { search } = useLocation();

  const [status, setstatus] = useState("");
  const [reqData, setreqData] = useState(null);
  const [currentPushToken, setCurrentPushToken] = useState(null);

  const [healthScoreInputs, sethealthScoreInputs] = useState({
    inspectionVal: "",
    diagnosticVal: "",
  });

  const getPushToken = async () => {
    const current_user = await firestore
      .collection("users")
      .doc(id.customerId)
      .get();

    setCurrentPushToken(current_user.data().NotificationToken);
  };

  useEffect(async () => {
    const requestDoc = id.requestId;
    const customerDoc = id.customerId;

    getPushToken();

    const fetched_req = await firestore
      .collection("Requests")
      .doc(customerDoc)
      .collection("Requests")
      .doc(requestDoc)
      .get();
    setreqData(fetched_req.data());
    setstatus(fetched_req.data().status);
  }, []);

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
      setstatus("Confirmed");
      return sendPushNotifications(
        currentPushToken,
        "request confirmed",
        reqData
      );
    });
  };

  const sendHealthScore = async (e) => {
    e.preventDefault();
    const param_data = search.split("=")[1];

    let sum =
      Number.parseInt(healthScoreInputs.inspectionVal) +
      Number.parseInt(healthScoreInputs.diagnosticVal);

    if (!sum) return;

    if (search.split("=")[0] === "?carID") {
      await firestore
        .collection("Garage")
        .doc(id.customerId)
        .collection("Garage")
        .doc(search.split("=")[1])
        .update({
          healthScore: sum / 2,
        });
    } else {
      await firestore
        .collection("Garage")
        .doc(id.customerId)
        .collection("Garage")
        .where("Model", "==", param_data.split("%20")[1])
        .where("Make", "==", param_data.split("%20")[0])
        .get()
        .then((snapshot) => {
          let carID = snapshot.docs.map((doc) => doc.id)[0];

          firestore
            .collection("Garage")
            .doc(id.customerId)
            .collection("Garage")
            .doc(carID)
            .update({
              healthScore: sum / 2,
            });
        });
    }
  };

  const handleInputChange = (e) => {
    sethealthScoreInputs({
      ...healthScoreInputs,
      [e.target.name]: e.target.value,
    });
  };

  console.log();

  return (
    <div className="request">
      <div className="flex items-center">
        <p>Request</p>
        {status === "Confirmed" ? (
          <p className="confirmed">Request has been confirmed</p>
        ) : (
          <button onClick={() => updateStatus("Confirmed")}>Confirm</button>
        )}
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

        <DiagnosticReport
          currentPushToken={currentPushToken}
          reqData={reqData}
          sethealthScoreInputs={sethealthScoreInputs}
          healthScoreInputs={healthScoreInputs}
        />

        <form className="healthScoreForm">
          <h3>Health Value</h3>

          <input
            type="text"
            placeholder="Fault score"
            name="inspectionVal"
            value={healthScoreInputs.inspectionVal}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Diagnostic score"
            name="diagnosticVal"
            value={healthScoreInputs.diagnosticVal}
            onChange={handleInputChange}
            disabled={true}
          />

          <button onClick={sendHealthScore}>Compute health score</button>
        </form>

        <Quotation currentPushToken={currentPushToken} reqData={reqData} />
      </div>
    </div>
  );
}
