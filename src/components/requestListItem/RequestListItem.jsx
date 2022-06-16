import { Link } from "react-router-dom";
import "./requestListItem.css";

export default function RequestListItem({
  car,
  location,
  schedule,
  requestType,
  requestId,
  status,
  customerId,
  carId,
}) {
  return (
    <div className="requestListItems">
      <div className="requestListItem">Request ID: {requestId}</div>
      <div className="requestListItem">Car: {car}</div>
      <div className="requestListItem">Location: {location}</div>
      <div className="requestListItem">Schedule: {schedule}</div>
      <div className="requestListItem">Request type: {requestType}</div>
      <div className="requestListItem">Request Status: {status}</div>
      <Link
        to={`/request/${customerId}/${requestId}${
          carId ? `?carID=${carId}` : `?carType=${car}`
        }`}
      >
        <button>View</button>
      </Link>
    </div>
  );
}
