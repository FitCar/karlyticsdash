import { useState } from "react";
import "./quotation.css";
import { useParams } from "react-router-dom";
import firebase from "firebase";
import { useEffect } from "react";

const firestore = firebase.firestore();

export default function Quotation() {
  const [quotes, setQuotes] = useState([
    { index: 1, partNumber: "", description: "", qty: "", unitPrice: "", total: ""  }
  ]);

  const [loading, setloading] = useState(false)
  const [quotationAvailable, setquotationAvailable] = useState(false)
  
  const id = useParams();
  const requestDoc = id.requestId;
  const customerDoc = id.customerId;

  const addItem = (e) => {
    e.preventDefault();
    setQuotes([ ...quotes, { index: quotes.length+1, partNumber: "", description: "", qty: "", unitPrice: "", total: "" } ])
  };

  useEffect(async () => {
    setloading(true)

    const quotationRef = firestore
    .collection("Quotation")
    .doc(customerDoc)
    .collection("Quotation")
    .doc(requestDoc);

    const quotations = await quotationRef.get()

    if(!quotations.data()) return setloading(false)

    setQuotes(quotations.data().quotes)
    setquotationAvailable(true)
    return setloading(false)
  
  }, [])

  const setItem = (e, num) => {
    const changedQuote = quotes.map(item => {
      if(e.target.name === "qty" && Number.parseInt(e.target.value) === NaN ) return 
      if(e.target.name === "unitPrice" && Number.parseInt(e.target.value) === NaN ) return

      return item.index === num ? { ...item, [e.target.name]: e.target.value } : { ...item }
    })

    const calculatedQuote = changedQuote.map(item => {
      let itemQty = Number.parseInt(item.qty) === NaN ? 0 : Number.parseInt(item.qty)
      let itemunitPrice = Number.parseInt(item.unitPrice) === NaN ? 0 : Number.parseInt(item.unitPrice)

      return { ...item, total: (itemQty * itemunitPrice) }
    })

    return setQuotes(calculatedQuote)
  };

  const sendQuotation = () => {
    const quotationRef = firestore
    .collection("Quotation")
    .doc(customerDoc)
    .collection("Quotation")
    .doc(requestDoc);

    quotationRef.set({quotes});
  }

  if(loading) return <p>Getting Quotations...</p>

  return (
    <div>
      <h3>Quotation</h3>

      <div className="quotationItem">
        
        <form onSubmit={addItem}>
          <input type="submit" value="Add new Cell" />

          {quotes.map((item) => {
            return (
              <div className="quotationList">
                <input type="text" placeholder="Part Number" value={item.partNumber} name="partNumber" onChange={(e) => setItem(e, item.index)} />
                <input type="text" placeholder="Description" value={item.description} name="description" onChange={(e) => setItem(e, item.index)} />
                <input type="number" placeholder="quantity" value={item.qty} name="qty" onChange={(e) => setItem(e, item.index)} />
                <input type="number" placeholder="Unit price" value={item.unitPrice} name="unitPrice" onChange={(e) => setItem(e, item.index)} />
                <input type="number" placeholder="Total" value={item.total} name="total" disabled  />
              </div>
            );
          })}

        </form>
      </div>

      <div className="quotationSend">
        <button onClick={sendQuotation}>{!quotationAvailable ? "Send Quotation" : "Edit Quotation"}</button>
      </div>
    </div>
  );
}
