import { useState } from "react";
import "./quotation.css";
import { useParams } from "react-router-dom";
import firebase from "firebase";

const firestore = firebase.firestore();

export default function Quotation() {
  const [quotes, setQuotes] = useState([
    { index: 1, partNumber: "", description: "", qty: 0, unitPrice: 0, total: 0  }
  ]);
  
  const id = useParams();
  const requestDoc = id.requestId;
  const customerDoc = id.customerId;

  const addItem = (e) => {
    e.preventDefault();
    setQuotes([ ...quotes, { index: quotes.length+1, partNumber: "", description: "", qty: 0, unitPrice: 0, total: 0  } ])
  };

  
  const setItem = (e, num) => {
    const changedQuote = quotes.map(item => {
      return item.index === num ? { ...item, [e.target.name]: e.target.value } : { ...item }
    })

    return setQuotes(changedQuote)
  };

  console.log(quotes)

  const sendQuotation = () => {
    const quotationRef = firestore
    .collection("Quotation")
    .doc(customerDoc)
    .collection("Quotation")
    .doc(requestDoc);

    quotationRef.set(quotes);
  }

  return (
    <div>
      <h3>Quotation</h3>

      <div className="quotationItem">
        
        <form onSubmit={addItem}>
          <input type="submit" value="Add new Cell" />

          {quotes.map((item) => {
            return (
              <div className="quotationList">
                <input type="text" value={item.partNumber} name="partNumber" onChange={(e) => setItem(e, item.index)} />
                <input type="text" value={item.description} name="description" onChange={(e) => setItem(e, item.index)} />
                <input type="number" value={item.qty} name="qty" onChange={(e) => setItem(e, item.index)} />
                <input type="number" value={item.unitPrice} name="unitPrice" onChange={(e) => setItem(e, item.index)} />
                <input type="number" value={item.total} name="total" onChange={(e) => setItem(e, item.index)} />
              </div>
            );
          })}

        </form>
      </div>

      <div className="quotationSend">
        <button onClick={sendQuotation}>Send Quotation</button>
      </div>
    </div>
  );
}
