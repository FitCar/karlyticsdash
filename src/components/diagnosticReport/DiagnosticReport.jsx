import "./diagnosticReport.css";
import Collapsible from "react-collapsible";
import { useEffect, useState } from "react";
import firebase from "firebase";
import { useParams } from "react-router-dom";
import { reportData } from "./diagnosticData";
import { sendPushNotifications } from "../../notificationConfig";

const firestore = firebase.firestore();
export default function DiagnosticReport({
  currentPushToken,
  reqData,
  sethealthScoreInputs,
  healthScoreInputs,
}) {
  const [report, setReport] = useState(reportData);
  const [reportAvailable, setreportAvailable] = useState(false);
  const [loading, setloading] = useState(false);
  const [score, setscore] = useState([]);

  const id = useParams();

  const requestDoc = id.requestId;
  const customerDoc = id.customerId;

  const calculateSum = (arr) => {
    let sum = 0;

    arr.forEach((x) => {
      let values = Object.values(x);
      sum += values[0];
    });

    return sum;
  };

  const getScore = (key, val) => {
    let keys = [];

    score.forEach((element) => {
      if (!element[key]) {
        keys.push(element);
      }
    });

    if (val === "Bad") {
      setscore([...keys, { [key]: 25 }]);
    } else if (val === "Good") {
      setscore([...keys, { [key]: 70 }]);
    } else {
      setscore([...keys, { [key]: 95 }]);
    }
  };

  const onValueChange = (e) => {
    getScore(e.target.name, e.target.value);

    setReport({
      ...report,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    sethealthScoreInputs({
      ...healthScoreInputs,
      diagnosticVal: `${Number.parseInt(calculateSum(score) / score.length)}`,
    });
  }, [score]);

  useEffect(async () => {
    setloading(true);
    const reportRef = firestore
      .collection("Report")
      .doc(customerDoc)
      .collection("Report")
      .doc(requestDoc);

    const fetched_report = await reportRef.get();

    if (!fetched_report.data()) return setloading(false);

    setreportAvailable(true);
    setReport(fetched_report.data());

    return setloading(false);
  }, []);

  const onSubmitReport = (e) => {
    e.preventDefault();
    const reportRef = firestore
      .collection("Report")
      .doc(customerDoc)
      .collection("Report")
      .doc(requestDoc);

    reportRef.set(report);

    return sendPushNotifications(currentPushToken, "diagnostic", reqData);
  };

  if (loading) return <p>loading report ...</p>;

  return (
    <div>
      <div className="diagnosisReport">
        <h3>Diagnostic Report</h3>
        <form>
          <div className="diagnosisReportItem">
            <Collapsible trigger="Interior">
              <div className="newDiagnosisItem">
                <div>
                  <span>Fuel Door Release</span>
                </div>
                <div className="reportItem">
                  <input
                    type="radio"
                    name="fuelDoorRelease"
                    id="excellent"
                    value="Excellent"
                    checked={report.fuelDoorRelease === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="fuelDoorRelease"
                    id="good"
                    value="Good"
                    checked={report.fuelDoorRelease === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="fuelDoorRelease"
                    id="bad"
                    value="Bad"
                    checked={report.fuelDoorRelease === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Hood Release</span>
                </div>
                <div className="reportItem">
                  <input
                    type="radio"
                    name="hoodRelease"
                    id="excellent"
                    value="Excellent"
                    checked={report.hoodRelease === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="hoodRelease"
                    id="good"
                    value="Good"
                    checked={report.hoodRelease === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="hoodRelease"
                    id="bad"
                    value="Bad"
                    checked={report.hoodRelease === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Trunk Release</span>
                </div>
                <div className="reportItem">
                  <input
                    type="radio"
                    name="trunkRelease"
                    id="excellent"
                    value="Excellent"
                    checked={report.trunkRelease === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="trunkRelease"
                    id="good"
                    value="Good"
                    checked={report.trunkRelease === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="trunkRelease"
                    id="bad"
                    value="Bad"
                    checked={report.trunkRelease === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Air bags</span>
                </div>
                <div className="reportItem">
                  <input
                    type="radio"
                    name="airBags"
                    id="excellent"
                    value="Excellent"
                    checked={report.airBags === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="airBags"
                    id="good"
                    value="Good"
                    checked={report.airBags === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="airBags"
                    id="bad"
                    value="Bad"
                    checked={report.airBags === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Tilt/telescopic steering wheels</span>
                </div>
                <div className="reportItem">
                  <input
                    type="radio"
                    name="steeringWheels"
                    id="excellent"
                    value="Excellent"
                    checked={report.steeringWheels === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="steeringWheels"
                    id="good"
                    value="Good"
                    checked={report.steeringWheels === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="steeringWheels"
                    id="bad"
                    value="Bad"
                    checked={report.steeringWheels === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Horn</span>
                </div>
                <div className="reportItem">
                  <input
                    type="radio"
                    name="horn"
                    id="excellent"
                    value="Excellent"
                    checked={report.horn === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="horn"
                    id="good"
                    value="Good"
                    checked={report.horn === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="horn"
                    id="bad"
                    value="Bad"
                    checked={report.horn === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Wiper controls</span>
                </div>
                <div className="reportItem">
                  <input
                    type="radio"
                    name="wiperControls"
                    id="excellent"
                    value="Excellent"
                    checked={report.wiperControls === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="wiperControls"
                    id="good"
                    value="Good"
                    checked={report.wiperControls === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="wiperControls"
                    id="bad"
                    value="Bad"
                    checked={report.wiperControls === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Washer controls</span>
                </div>
                <div className="reportItem">
                  <input
                    type="radio"
                    name="washerControls"
                    id="excellent"
                    value="Excellent"
                    checked={report.washerControls === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="washerControls"
                    id="good"
                    value="Good"
                    checked={report.washerControls === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="washerControls"
                    id="bad"
                    value="Bad"
                    checked={report.washerControls === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>AC</span>
                </div>
                <div className="reportItem">
                  <input
                    type="radio"
                    name="ac"
                    id="excellent"
                    value="Excellent"
                    checked={report.ac === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="ac"
                    id="good"
                    value="Good"
                    checked={report.ac === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="ac"
                    id="bad"
                    value="Bad"
                    checked={report.ac === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>
              </div>
            </Collapsible>
          </div>

          <div className="diagnosisReportItem">
            <Collapsible trigger="Exterior">
              <div className="newDiagnosisItem">
                <div>
                  <span>Wind Shield</span>
                </div>
                <div className="reportItem">
                  <input
                    type="radio"
                    name="windShield"
                    id="excellent"
                    value="Excellent"
                    checked={report.windShield === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="windShield"
                    id="good"
                    value="Good"
                    checked={report.windShield === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="windShield"
                    id="bad"
                    value="Bad"
                    checked={report.windShield === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Wiper</span>
                </div>
                <div className="newUserGender">
                  <input
                    type="radio"
                    name="wiper"
                    id="excellent"
                    value="excellent"
                    checked={report.wiper === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="wiper"
                    id="good"
                    value="Good"
                    checked={report.wiper === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="Good">Good</label>
                  <input
                    type="radio"
                    name="wiper"
                    id="bad"
                    value="Bad"
                    checked={report.wiper === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Side Mirrors</span>
                </div>
                <div className="newUserGender">
                  <input
                    type="radio"
                    name="sideMirrors"
                    id="excellent"
                    value="excellent"
                    checked={report.sideMirrors === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="sideMirrors"
                    id="good"
                    value="Good"
                    checked={report.sideMirrors === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="sideMirrors"
                    id="bad"
                    value="Bad"
                    checked={report.sideMirrors === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Head Lights</span>
                </div>
                <div className="newUserGender">
                  <input
                    type="radio"
                    name="headLights"
                    id="excellent"
                    value="excellent"
                    checked={report.headLight === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="headLights"
                    id="good"
                    value="Good"
                    checked={report.headLight === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="headLights"
                    id="bad"
                    value="Bad"
                    checked={report.headLight === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Turn Signals</span>
                </div>
                <div className="newUserGender">
                  <input
                    type="radio"
                    name="turnSignals"
                    id="excellent"
                    value="excellent"
                    checked={report.turnSignals === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="turnSignals"
                    id="good"
                    value="Good"
                    checked={report.turnSignals === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="turnSignals"
                    id="bad"
                    value="Bad"
                    checked={report.turnSignals === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Tail Lights</span>
                </div>
                <div className="newUserGender">
                  <input
                    type="radio"
                    name="tailLights"
                    id="excellent"
                    value="excellent"
                    checked={report.tailLights === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="tailLights"
                    id="good"
                    value="Good"
                    checked={report.tailLights === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="tailLights"
                    id="bad"
                    value="Bad"
                    checked={report.tailLights === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Brake Lights</span>
                </div>
                <div className="newUserGender">
                  <input
                    type="radio"
                    name="brakeLights"
                    id="excellent"
                    value="excellent"
                    checked={report.brakeLights === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="brakeLights"
                    id="good"
                    value="Good"
                    checked={report.brakeLights === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="brakeLights"
                    id="bad"
                    value="Bad"
                    checked={report.brakeLights === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Reverse Lights</span>
                </div>
                <div className="newUserGender">
                  <input
                    type="radio"
                    name="reverseLights"
                    id="excellent"
                    value="excellent"
                    checked={report.reverseLights === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="reverseLights"
                    id="good"
                    value="Good"
                    checked={report.reverseLights === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="reverseLights"
                    id="bad"
                    value="Bad"
                    checked={report.reverseLights === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Front Bumber</span>
                </div>
                <div className="newUserGender">
                  <input
                    type="radio"
                    name="frontBumper"
                    id="excellent"
                    value="excellent"
                    checked={report.frontBumper === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="frontBumper"
                    id="good"
                    value="Good"
                    checked={report.frontBumper === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="frontBumper"
                    id="bad"
                    value="Bad"
                    checked={report.frontBumper === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Rear Bumber</span>
                </div>
                <div className="newUserGender">
                  <input
                    type="radio"
                    name="rearBumper"
                    id="excellent"
                    value="excellent"
                    checked={report.rearBumper === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="rearBumper"
                    id="good"
                    value="Good"
                    checked={report.rearBumper === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="rearBumper"
                    id="bad"
                    value="Bad"
                    checked={report.rearBumper === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>
              </div>
            </Collapsible>
          </div>

          <div className="diagnosisReportItem">
            <Collapsible trigger="Tires">
              <div className="newDiagnosisItem">
                <div>
                  <span>Alignment</span>
                </div>
                <div className="reportItem">
                  <input
                    type="radio"
                    name="alignment"
                    id="excellent"
                    value="excellent"
                    checked={report.alignment === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="alignment"
                    id="good"
                    value="Good"
                    checked={report.alignment === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="alignment"
                    id="bad"
                    value="Bad"
                    checked={report.alignment === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Left Front Tire</span>
                </div>
                <div className="newUserGender">
                  <input
                    type="radio"
                    name="leftFrontTire"
                    id="excellent"
                    value="excellent"
                    checked={report.leftFrontTire === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="leftFrontTire"
                    id="good"
                    value="Good"
                    checked={report.leftFrontTire === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="leftFrontTire"
                    id="bad"
                    value="Bad"
                    checked={report.leftFrontTire === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Left Rear Tire</span>
                </div>
                <div className="newUserGender">
                  <input
                    type="radio"
                    name="leftRearTire"
                    id="excellent"
                    value="excellent"
                    checked={report.leftRearTire === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="leftRearTire"
                    id="good"
                    value="Good"
                    checked={report.leftRearTire === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="leftRearTire"
                    id="bad"
                    value="Bad"
                    checked={report.leftRearTire === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Right Front Tire</span>
                </div>
                <div className="newUserGender">
                  <input
                    type="radio"
                    name="rightFrontTire"
                    id="excellent"
                    value="excellent"
                    checked={report.rightFrontTire === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="rightFrontTire"
                    id="good"
                    value="Good"
                    checked={report.rightFrontTire === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="rightFrontTire"
                    id="bad"
                    value="Bad"
                    checked={report.rightFrontTire === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Right Rear Tire</span>
                </div>
                <div className="newUserGender">
                  <input
                    type="radio"
                    name="rightRearTire"
                    id="excellent"
                    value="excellent"
                    checked={report.rightRearTire === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="rightRearTire"
                    id="good"
                    value="Good"
                    checked={report.rightRearTire === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="rightRearTire"
                    id="bad"
                    value="Bad"
                    checked={report.rightRearTire === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Spare Tire</span>
                </div>
                <div className="newUserGender">
                  <input
                    type="radio"
                    name="spareTire"
                    id="excellent"
                    value="excellent"
                    checked={report.spareTire === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="spareTire"
                    id="good"
                    value="Good"
                    checked={report.spareTire === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="spareTire"
                    id="bad"
                    value="Bad"
                    checked={report.spareTire === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>
              </div>
            </Collapsible>
          </div>

          <div className="diagnosisReportItem">
            <Collapsible trigger="Underhood">
              <div className="newDiagnosisItem">
                <div>
                  <span>Engine Oil</span>
                </div>
                <div className="reportItem">
                  <input
                    type="radio"
                    name="engineOil"
                    id="excellent"
                    value="excellent"
                    checked={report.engineOil === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="engineOil"
                    id="good"
                    value="Good"
                    checked={report.engineOil === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="engineOil"
                    id="bad"
                    value="Bad"
                    checked={report.engineOil === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Brake Fluid</span>
                </div>
                <div className="reportItem">
                  <input
                    type="radio"
                    name="brakeFluid"
                    id="excellent"
                    value="excellent"
                    checked={report.breakFluid === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="brakeFluid"
                    id="good"
                    value="Good"
                    checked={report.breakFluid === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="brakeFluid"
                    id="bad"
                    value="Bad"
                    checked={report.breakFluid === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Cooolant</span>
                </div>
                <div className="reportItem">
                  <input
                    type="radio"
                    name="coolant"
                    id="excellent"
                    value="excellent"
                    checked={report.coolant === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="coolant"
                    id="good"
                    value="Good"
                    checked={report.coolant === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="coolant"
                    id="bad"
                    value="Bad"
                    checked={report.coolant === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Power Steering Fluid</span>
                </div>
                <div className="reportItem">
                  <input
                    type="radio"
                    name="powerSteeringFluid"
                    id="excellent"
                    value="excellent"
                    checked={report.powerSteeringFluid === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="powerSteeringFluid"
                    id="good"
                    value="Good"
                    checked={report.powerSteeringFluid === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="powerSteeringFluid"
                    id="bad"
                    value="Bad"
                    checked={report.powerSteeringFluid === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Transmission Fluid</span>
                </div>
                <div className="reportItem">
                  <input
                    type="radio"
                    name="transmissionFluid"
                    id="excellent"
                    value="excellent"
                    checked={report.transmissionFluid === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="transmissionFluid"
                    id="good"
                    value="Good"
                    checked={report.transmissionFluid === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="transmissionFluid"
                    id="bad"
                    value="Bad"
                    checked={report.transmissionFluid === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Engine Mounts</span>
                </div>
                <div className="reportItem">
                  <input
                    type="radio"
                    name="engineMounts"
                    id="excellent"
                    value="excellent"
                    checked={report.engineMounts === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="engineMounts"
                    id="good"
                    value="Good"
                    checked={report.engineMounts === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="engineMounts"
                    id="bad"
                    value="Bad"
                    checked={report.engineMounts === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Engine Belts</span>
                </div>
                <div className="reportItem">
                  <input
                    type="radio"
                    name="engineBelts"
                    id="excellent"
                    value="excellent"
                    checked={report.engineBelts === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="engineBelts"
                    id="good"
                    value="Good"
                    checked={report.engineBelts === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="engineBelts"
                    id="bad"
                    value="Bad"
                    checked={report.engineBelts === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Radiator</span>
                </div>
                <div className="reportItem">
                  <input
                    type="radio"
                    name="radiator"
                    id="excellent"
                    value="excellent"
                    checked={report.radiator === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="radiator"
                    id="good"
                    value="Good"
                    checked={report.radiator === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="radiator"
                    id="bad"
                    value="Bad"
                    checked={report.radiator === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Battery</span>
                </div>
                <div className="reportItem">
                  <input
                    type="radio"
                    name="battery"
                    id="excellent"
                    value="excellent"
                    checked={report.battery === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="battery"
                    id="good"
                    value="Good"
                    checked={report.battery === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="battery"
                    id="bad"
                    value="Bad"
                    checked={report.battery === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Alternator</span>
                </div>
                <div className="reportItem">
                  <input
                    type="radio"
                    name="alternator"
                    id="excellent"
                    value="excellent"
                    checked={report.alternator === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="alternator"
                    id="good"
                    value="Good"
                    checked={report.alternator === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="alternator"
                    id="bad"
                    value="Bad"
                    checked={report.alternator === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Fuel Filter</span>
                </div>
                <div className="reportItem">
                  <input
                    type="radio"
                    name="fuelFilter"
                    id="excellent"
                    value="excellent"
                    checked={report.fuelFilter === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="fuelFilter"
                    id="good"
                    value="Good"
                    checked={report.fuelFilter === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="fuelFilter"
                    id="bad"
                    value="Bad"
                    checked={report.fuelFilter === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Fuel Pump</span>
                </div>
                <div className="reportItem">
                  <input
                    type="radio"
                    name="fuelPump"
                    id="excellent"
                    value="excellent"
                    checked={report.fuelPump === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="fuelPump"
                    id="good"
                    value="Good"
                    checked={report.fuelPump === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="fuelPump"
                    id="bad"
                    value="Bad"
                    checked={report.fuelPump === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>
              </div>
            </Collapsible>
          </div>
          <div className="diagnosisReportItem">
            <Collapsible trigger="Road Test">
              <div className="newDiagnosisItem">
                <div>
                  <span>Starting</span>
                </div>
                <div className="reportItem">
                  <input
                    type="radio"
                    name="starting"
                    id="excellent"
                    value="excellent"
                    checked={report.starting === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="starting"
                    id="good"
                    value="Good"
                    checked={report.starting === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="starting"
                    id="bad"
                    value="Bad"
                    checked={report.starting === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Idling</span>
                </div>
                <div className="reportItem">
                  <input
                    type="radio"
                    name="idling"
                    id="excellent"
                    value="excellent"
                    checked={report.idling === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="idling"
                    id="good"
                    value="Good"
                    checked={report.idling === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="idling"
                    id="bad"
                    value="Bad"
                    checked={report.idling === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Engine Noise</span>
                </div>
                <div className="reportItem">
                  <input
                    type="radio"
                    name="engineNoise"
                    id="excellent"
                    value="excellent"
                    checked={report.engineNoise === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="engineNoise"
                    id="good"
                    value="Good"
                    checked={report.engineNoise === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="engineNoise"
                    id="bad"
                    value="Bad"
                    checked={report.engineNoise === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Throttle</span>
                </div>
                <div className="reportItem">
                  <input
                    type="radio"
                    name="throttle"
                    id="excellent"
                    value="excellent"
                    checked={report.throttle === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="throttle"
                    id="good"
                    value="Good"
                    checked={report.throttle === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="throttle"
                    id="bad"
                    value="Bad"
                    checked={report.throttle === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Transmission Shift</span>
                </div>
                <div className="reportItem">
                  <input
                    type="radio"
                    name="transmissionShift"
                    id="excellent"
                    value="excellent"
                    checked={report.transmissionShift === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="transmissionShift"
                    id="good"
                    value="Good"
                    checked={report.transmissionShift === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="transmissionShift"
                    id="bad"
                    value="Bad"
                    checked={report.transmissionShift === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Accelerating</span>
                </div>
                <div className="reportItem">
                  <input
                    type="radio"
                    name="accelerating"
                    id="excellent"
                    value="excellent"
                    checked={report.accelerating === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="accelerating"
                    id="good"
                    value="Good"
                    checked={report.accelerating === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="accelerating"
                    id="bad"
                    value="Bad"
                    checked={report.accelerating === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Steering Alignment</span>
                </div>
                <div className="reportItem">
                  <input
                    type="radio"
                    name="steeringAlignment"
                    id="excellent"
                    value="excellent"
                    checked={report.steeringAlignment === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="steeringAlignment"
                    id="good"
                    value="Good"
                    checked={report.steeringAlignment === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="steeringAlignment"
                    id="bad"
                    value="Bad"
                    checked={report.steeringAlignment === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>Braking</span>
                </div>
                <div className="reportItem">
                  <input
                    type="radio"
                    name="braking"
                    id="excellent"
                    value="excellent"
                    checked={report.braking === "Excellent"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="braking"
                    id="good"
                    value="Good"
                    checked={report.braking === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="braking"
                    id="bad"
                    value="Bad"
                    checked={report.braking === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>

                <div>
                  <span>ABS (Anti-lock Braking System)</span>
                </div>
                <div className="reportItem">
                  <input
                    type="radio"
                    name="abs"
                    id="excellent"
                    checked={report.abs === "Excellent"}
                    value="excellent"
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="abs"
                    id="good"
                    value="Good"
                    checked={report.abs === "Good"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="abs"
                    id="bad"
                    value="Bad"
                    checked={report.abs === "Bad"}
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>
              </div>
            </Collapsible>
          </div>
          <div>
            <input
              type="submit"
              value={`${reportAvailable ? "Edit report" : "Submit"}`}
              onClick={onSubmitReport}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
