import "../assets/travel-plans.json"

const Image = ({ image }) => {
  return (
    <img src={image} className="image" alt="destination image" />
  )
}

export default Image