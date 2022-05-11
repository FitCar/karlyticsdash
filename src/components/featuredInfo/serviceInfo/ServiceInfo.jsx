import "./serviceInfo.css";
import ProgressBar from "../../progressbar/ProgressBar";

export default function ServiceInfo({ doNotNeedServicing, garage, needServicing }) {
  return (
    <div>
      <h2 className="serviceInfoHeader"> {needServicing.length} out of {garage.length} cars due for servicing</h2>
      
      <ProgressBar doNotNeedServicing={doNotNeedServicing} garage={garage} />
      
      <div className="serviceInfoLabel">
        <h3 className="serviceInfoNotDue">{doNotNeedServicing.length} cars</h3>
        <h3 className="serviceInfoDue"> {needServicing.length} cars</h3>
      </div>
    </div>
  );
}
