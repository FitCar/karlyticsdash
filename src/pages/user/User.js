import UserHeader from "../../components/userHeader/UserHeader";
import "./user.css";
import { useParams } from "react-router-dom";
import ProgressBar from "../../components/progressbar/ProgressBar";
import firebaseApp from "../../firebase";
import { useEffect, useState } from "react";

const firestore = firebaseApp.firestore();

export default function User() {
  const userId = useParams();

  const [user, setuser] = useState(null);
  const [garage, setgarage] = useState([]);
  const [plans, setplans] = useState([]);
  const [requests, setrequests] = useState([]);
  const [dontNeedServicing, setdontNeedServicing] = useState([]);
  const [confirmed, setconfirmed] = useState([]);
  const [pending, setpending] = useState([]);

  useEffect(async () => {
    await firestore
      .collection("users")
      .doc(`${userId.userId}`)
      .get()
      .then((data) => {
        setuser(data.data());
      });

    firestore
      .collection("Garage")
      .doc(userId.userId)
      .collection("Garage")
      .onSnapshot((snapshot) => {
        setgarage(snapshot.docs.map((doc) => doc.data()));
      });

    firestore
      .collection("Requests")
      .doc(userId.userId)
      .collection("Requests")
      .onSnapshot((snapshot) => {
        setrequests(snapshot.docs.map((doc) => doc.data()));
      });

    firestore
      .collection("Plans")
      .doc(userId.userId)
      .collection("Plans")
      .onSnapshot((snapshot) => {
        setplans(snapshot.docs.map((plan) => plan.data()));
      });
  }, []);

  useEffect(() => {
    if (garage.length < 1) return;
    const today = new Date(Date.now()).getTime();

    setdontNeedServicing(
      garage.filter((car) => new Date(car.nextServiceDate).getTime() > today)
    );
  }, [garage]);

  useEffect(() => {
    if (!requests.length) return;

    setconfirmed(requests.filter((req) => req.status === "Confirmed"));
    setpending(requests.filter((req) => req.status === "Pending"));
  }, [requests]);

  return (
    <div className="user">
      <UserHeader userId={userId} />

      <div className="userPages">
        <div className="userDetails">
          <h3>{user?.name}</h3>
          <h4>{user?.email}</h4>
          <p>user ID: {user?.uid}</p>
        </div>

        <div className="CarInfo">
          <span>
            <h3>Cars</h3>
            <p>({garage.length})</p>
          </span>

          <h3 className="carServiceInfo">
            {garage.length - dontNeedServicing.length} out of {garage.length}{" "}
            cars are due for servicing
          </h3>

          <ProgressBar doNotNeedServicing={dontNeedServicing} garage={garage} />
        </div>

        <div className="MoreUserInfo">
          <div className="RequestInfo">
            <h3>Requests</h3>
            <p>Total: {requests.length}</p>
            <p>Pending: {pending.length}</p>
            <p>Confirmed: {confirmed.length}</p>
          </div>

          <div className="PlanInfo">
            <h3>No of Plans: {plans.length}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
