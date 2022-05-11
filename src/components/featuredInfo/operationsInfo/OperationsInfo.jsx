import { useEffect, useState } from "react";
import "./operationsInfo.css";
export default function OperationsInfo({ requests, users, plans }) {
  
  const [confirmed, setconfirmed] = useState([])
  const [pending, setpending] = useState([])
  const [membershipPlan, setmembershipPlan] = useState([])
  const [maintenance, setmaintenance] = useState([])
  const [insurance, setInsurance] = useState([])
  const [health, setHealth] = useState([])

  useEffect(() => {
    if(!requests.length) return 

    setconfirmed(requests.filter(req => req.status === "Confirmed"))
    setpending(requests.filter(req => req.status === "Pending"))
  }, [requests])

  useEffect(() => {
    if(!plans.length) return 

    setmembershipPlan(plans.filter(plan => plan.data.Name === "Membership"))
    setmaintenance(plans.filter(plan => plan.data.plan?.Name === "Maintenance" ))
    setInsurance(plans.filter(plan => plan.data.plan?.Name === "Insurance" ))
    setHealth(plans.filter(plan => plan.data.plan?.Name === "Health" ))

  }, [plans])
  

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
          <li>Maintenance Plan: {maintenance.length}</li>
          <li>Vehicle Health Plan: {health.length}</li>
          <li>Insurance Plan: {insurance.length}</li>
          <li>Membership Plan: {membershipPlan.length}</li>
        </ul>
      </div>
    </div>
  );
}
