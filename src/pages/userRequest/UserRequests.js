import "./userRequests.css";
import firebase from "firebase";
import { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Link, useParams } from "react-router-dom";
import RequestListItem from "../../components/requestListItem/RequestListItem";

const db = firebase.firestore();
const firestore = firebase.firestore();

export default function UserRequests() {
  const userId = useParams();
  const doc = userId.userId;
  console.log(doc);

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true); // Set loading to true on component mount

  useEffect(() => {
    const subscriber = firestore
      .collection("Requests")
      .doc(doc)
      .collection("Requests")
      .onSnapshot((querySnapshot) => {
        const requests = [];

        querySnapshot.forEach((documentSnapshot) => {
          requests.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setRequests(requests);
        setLoading(false);
      });
  }, []);


  return (
    <div className="userRequests">
      {!requests.length && <p className="text-blue-500">No requests made yet</p> }

      {requests.map((requests) => {
        return (
          <RequestListItem
            car={requests.Car}
            location={requests.Location}
            schedule={requests.Schedule}
            requestType={requests.requestType}
            requestId={requests.key}
            status={requests.status}
            customerId={requests.requestId}
          />
        );
      })}
    </div>
  );
}
