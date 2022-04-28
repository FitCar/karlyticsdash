import CustomerInfo from './customerInfo/CustomerInfo';
import './featuredInfo.css';
import OperationsInfo from './operationsInfo/OperationsInfo';
import ServiceInfo from './serviceInfo/ServiceInfo';
import firebaseApp from '../../firebase'
import { useEffect, useState } from 'react';

const firestore = firebaseApp.firestore()

export default function FeaturedInfo() {
  const [users, setusers] = useState([])
  const [garage, setgarage] = useState([])
  const [requests, setrequests] = useState([])
  const [needServicing, setneedServicing] = useState([])
  const [doNotNeedServicing, setdoNotNeedServicing] = useState([])

  useEffect(async () => {
    await firestore.collection("users").onSnapshot(snapshot => {
      setusers(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  useEffect(async () =>{ 
    if(users.length < 1) return 
    
    firestore.collectionGroup("Garage").get().then(data => {
      setgarage(data.docs.map(doc => doc.data()))
    })
    
    firestore.collectionGroup("Requests").get().then(data => {
      setrequests(data.docs.map(doc => doc.data()))
    })

  } ,[users])

  useEffect(() => {
    if(garage.length < 1) return 
    const today = new Date(Date.now()).getTime()

    setneedServicing(garage.filter(car => new Date(car.nextServiceDate).getTime() < today ))
    setdoNotNeedServicing(garage.filter(car => new Date(car.nextServiceDate).getTime() > today ))

  }, [garage])


  return (
    <div className="featuredInfo">
      <div className="userInfo">
        <CustomerInfo title="No of Users" stats={users.length} />
        <CustomerInfo title="No of Cars" stats={garage.length} />
      </div>

      <div className="serviceInfo">
        <ServiceInfo doNotNeedServicing={doNotNeedServicing} needServicing={needServicing} garage={garage} />
      </div>
      
      <div className="operationsInfo">
        <OperationsInfo requests={requests} />
      </div>
    </div>
  )
}
