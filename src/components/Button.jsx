/* eslint-disable react/prop-types */


export default function Button({title, handler}) {
  return (
    <button onClick={handler}>{title}</button>
  )
}
