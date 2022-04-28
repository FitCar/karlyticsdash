import { useEffect, useState } from "react";
import "./operationsInfo.css";
export default function OperationsInfo({ requests }) {
  
  const [confirmed, setconfirmed] = useState([])
  const [pending, setpending] = useState([])

  useEffect(() => {
    if(!requests.length) return 

    setconfirmed(requests.filter(req => req.status === "Confirmed"))
    setpending(requests.filter(req => req.status === "Pending"))
  }, [requests])
  
  return (
    <div className="operationInfo">
      <div className="operationsInfoContainer">
        <span className="operationsInfoTitle">Requests</span>
       
        <ul className="operationsInfoRequestData">
          <li>Total: {requests.length}</li>
          <li>Confirmed: {confirmed.length}</li>
          <li>Pending: {pending.length}</li>
          <li>Completed: ---</li>
        </ul>
      </div>

      <div className="operationsInfoContainer">
        <span className="operationsInfoTitle">Subscriptions</span>
       
        <ul className="operationsInfoRequestData">
          <li>Free: ---</li>
          <li>Savvy Driver: ---</li>
          <li>Insight: ---</li>
          <li>Maintenance: ---</li>
          <li>Prime wheels: ---</li>
        </ul>
      </div>
    </div>
  );
}
