/* eslint-disable react/prop-types */
import './Tempcard.css'

export default function Tempcard({temp, incHandler, decHandler}) {
  return (
    <>
        <div className="card-container">
            <h1 className='display'>{temp}°C</h1>
            <div className='btn-div'>
                <button onClick={incHandler}>+</button>
                <button onClick={decHandler}>-</button>
            </div>
        </div>
    </>
  )
}
