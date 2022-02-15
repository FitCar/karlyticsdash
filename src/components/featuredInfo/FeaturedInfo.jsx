import CustomerInfo from './customerInfo/CustomerInfo';
import './featuredInfo.css';
import OperationsInfo from './operationsInfo/OperationsInfo';
import ServiceInfo from './serviceInfo/ServiceInfo';

export default function FeaturedInfo() {
  return (
    <div className="featuredInfo">
      <div className="userInfo">
      <CustomerInfo title="No of Users" stats={10000} />
      <CustomerInfo title="No of Cars" stats={10000} />
      </div>
      <div className="serviceInfo">
        <ServiceInfo />
      </div>
      <div className="operationsInfo">
        <OperationsInfo />
      </div>
    </div>
  )
}
