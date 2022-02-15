import './customerInfo.css'
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function CustomerInfo({title, stats}) {
  return (
    <div className="customerInfo">
      <span className="customerInfoTitle">{title}</span>
      <div className="customerInfoStats">
        {stats}
        <ArrowUpward className="customerInfoStatsIcon" />
      </div>
    </div>
  )
}
