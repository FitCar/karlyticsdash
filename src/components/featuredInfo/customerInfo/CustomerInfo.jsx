import './customerInfo.css'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

export default function CustomerInfo({title, stats}) {
  return (
    <div className="customerInfo">
      <h3 className="customerInfoTitle">{title}</h3>
      <div className="customerInfoStats">
        {stats}
        <MdOutlineKeyboardArrowDown />
      </div>
    </div>
  )
}
