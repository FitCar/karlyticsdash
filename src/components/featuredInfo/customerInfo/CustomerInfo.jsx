import './customerInfo.css'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

export default function CustomerInfo({title, stats}) {
  return (
    <div className="customerInfo">
      <span className="customerInfoTitle">{title}</span>
      <div className="customerInfoStats">
        {stats}
        <MdOutlineKeyboardArrowDown />
      </div>
    </div>
  )
}
