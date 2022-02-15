import "./operationsInfo.css";
export default function OperationsInfo() {
  return (
    <div className="operationInfo">
      <div className="operationsInfoContainer">
        <span className="operationsInfoTitle">Requests</span>
        <ul className="operationsInfoRequestData">
          <li>Total:</li>
          <li>Confirmed:</li>
          <li>Pending:</li>
          <li>Completed:</li>
        </ul>
      </div>
      <div className="operationsInfoContainer">
        <span className="operationsInfoTitle">Subscriptions</span>
        <ul className="operationsInfoRequestData">
          <li>Free:</li>
          <li>Savvy Driver:</li>
          <li>Insight:</li>
          <li>Maintenance:</li>
          <li>Prime wheels:</li>
        </ul>
      </div>
    </div>
  );
}
