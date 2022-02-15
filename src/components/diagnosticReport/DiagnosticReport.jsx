import "./diagnosticReport.css";
import Collapsible from "react-collapsible";
import { useState } from "react";
import firebase from "firebase";
import { useParams } from "react-router-dom";

const firestore = firebase.firestore();
export default function DiagnosticReport() {
  const [report, setReport] = useState({});

  const id = useParams();
  console.log(id);
  let pan = {};

  const runPan = (name, value) => {
    console.log(name);
    console.log(value);
    pan[name] = value;
    console.log(pan);
  };

  const onValueChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    runPan(name, value);
    // setReport(pan)
  };

  console.log(report);

  const requestDoc = id.requestId;
  const customerDoc = id.customerId;

  const onSubmitReport = (e) => {
    e.preventDefault();
    setReport(pan);
    const reportRef = firestore
      .collection("Report")
      .doc(customerDoc)
      .collection("Report")
      .doc(requestDoc);

    reportRef.set(pan);
  };

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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="fuelDoorRelease"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="fuelDoorRelease"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="hoodRelease"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="hoodRelease"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="trunkRelease"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="trunkRelease"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="airBags"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="airBags"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="steeringWheels"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="steeringWheels"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="horn"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="horn"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="wiperControls"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="wiperControls"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="washerControls"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="washerControls"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="ac"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="ac"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="windShield"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="windShield"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="wiper"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="Good">Good</label>
                  <input
                    type="radio"
                    name="wiper"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="sideMirrors"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="sideMirrors"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="headLights"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="headLights"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="turnSignals"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="turnSignals"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="tailLights"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="tailLights"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="brakeLights"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="brakeLights"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="reverseLights"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="reverseLights"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="frontBumper"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="frontBumper"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="rearBumper"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="rearBumper"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="alignment"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="alignment"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="leftFrontTire"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="leftFrontTire"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="leftRearTire"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="leftRearTire"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="rightFrontTire"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="rightFrontTire"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="rightRearTire"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="rightRearTire"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="spareTire"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="spareTire"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="engineOil"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="engineOil"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="brakeFluid"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="brakeFluid"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="coolant"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="coolant"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="powerSteeringFluid"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="powerSteeringFluid"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="transmissionFluid"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="transmissionFluid"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="engineMounts"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="engineMounts"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="engineBelts"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="engineBelts"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="radiator"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="radiator"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="battery"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="battery"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="alternator"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="alternator"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="fuelFilter"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="fuelFilter"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="fuelPump"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="fuelPump"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="starting"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="starting"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="idling"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="idling"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="engineNoise"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="engineNoise"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="throttle"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="throttle"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="transmissionShift"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="transmissionShift"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="accelerating"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="accelerating"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="steeringAlignment"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="steeringAlignment"
                    id="bad"
                    value="Bad"
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
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="braking"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="braking"
                    id="bad"
                    value="Bad"
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
                    value="excellent"
                    onChange={onValueChange}
                  />
                  <label htmlFor="excellent">Excellent</label>
                  <input
                    type="radio"
                    name="abs"
                    id="good"
                    value="Good"
                    onChange={onValueChange}
                  />
                  <label htmlFor="good">Good</label>
                  <input
                    type="radio"
                    name="abs"
                    id="bad"
                    value="Bad"
                    onChange={onValueChange}
                  />
                  <label htmlFor="bad">Bad</label>
                </div>


              </div>
            </Collapsible>
          </div>
          <div>
            <input type="submit" value="Submit" onClick={onSubmitReport} />
          </div>
        </form>
      </div>
    </div>
  );
}
