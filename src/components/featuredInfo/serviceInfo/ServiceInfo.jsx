import "./serviceInfo.css";
import ProgressBar from "../../progressbar/ProgressBar";

export default function ServiceInfo() {
  return (
    <div>
      <h2 className="serviceInfoHeader">18 out of 100 cars due for servicing</h2>
      <ProgressBar />
      <div className="serviceInfoLabel">
        <h3 className="serviceInfoNotDue">82 cars</h3>
        <h3 className="serviceInfoDue"> 18 cars</h3>
      </div>
    </div>
  );
}
