import './progressBar.css';

export default function ProgressBar({ doNotNeedServicing, garage }) {
  const fillBar =  (doNotNeedServicing.length/garage.length)*100
  return (
    <div className="progressBar">
      <div className="progressBarFill" style={{ width: `${fillBar}%` }}></div>
    </div>
  )
}
