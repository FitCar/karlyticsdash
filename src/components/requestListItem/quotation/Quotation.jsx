import { useState } from "react";
import "./quotation.css";
import { useParams } from "react-router-dom";
import firebase from "firebase";

const firestore = firebase.firestore();

export default function Quotation() {
  const [item, setItem] = useState([]);
  const [quote, setQuote] = useState([]);
  const id = useParams();
  const requestDoc = id.requestId;
  const customerDoc = id.customerId;

  let pan = {};

  const runPan = (name, value) => {
    console.log(name);
    console.log(value);
    pan[name] = value;
    console.log(pan);
  };

  const addItem = (e) => {
    e.preventDefault();
    setItem([...item, pan]);
    pan = {};
    e.target.reset();
  };

  console.log(item);
  console.log(pan);

  const setItems = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    let name = e.target.name;
    let value = e.target.value;
    runPan(name, value);
  };

  const sendQuotation = () => {
    const quotationRef = firestore
    .collection("Quotation")
    .doc(customerDoc)
    .collection("Quotation")
    .doc(requestDoc);

    quotationRef.set({item});
  }

  return (
    <div>
      <h3>Quotation</h3>

      <div className="quotationItem">
        <form onSubmit={addItem}>
          <input
            placeholder="Part number"
            type="text"
            name="partNumber"
            onChange={setItems}
          />
          <input
            placeholder="Description"
            type="text"
            name="description"
            onChange={setItems}
          />
          <input
            placeholder="Qty"
            type="number"
            name="qty"
            onChange={setItems}
          />
          <input
            placeholder="Unit Price"
            type="text"
            name="unitPrice"
            onChange={setItems}
          />
          <input
            placeholder="Total"
            type="text"
            name="total"
            onChange={setItems}
          />
          <input type="submit" value="Add" />
        </form>
        <div>
          {item.map((items) => {
            return (
              <div className="quotationList">
                <input type="text" value={items.partNumber} />
                <input type="text" value={items.description} />
                <input type="text" value={items.qty} />
                <input type="text" value={items.unitPrice} />
                <input type="text" value={items.total} />
              </div>
            );
          })}
        </div>
      </div>

      {/* <div>
        <button onClick={addItem}>Add Item</button>
      </div> */}

      <div className="quotationSend">
        <button onClick={sendQuotation}>Send Quotation</button>
      </div>
    </div>
  );
}
