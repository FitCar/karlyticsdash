import "./serviceInfo.css";
import ProgressBar from "../../progressbar/ProgressBar";

export default function ServiceInfo() {
  return (
    <div>
      <span>18 out of 100 cars due for servicing</span>
      <ProgressBar />
      <div className="serviceInfoLabel">
        <span className="serviceInfoNotDue">82 cars</span>
        <span className="serviceInfoDue"> 18 cars</span>
      </div>
    </div>
  );
}
