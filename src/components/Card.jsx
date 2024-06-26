export default function Card(props) {

  return (
    <section className="card">
      <figure className="card--image-area">
        <img src={`./images/${props.imageFile}`}  alt="" />
      </figure>
      <div className="card--text-area">
        <div className="card--google-info">
          <span className="location">{props.title}</span>
          <span className="link"><a href={`${props.googleMapsUrl}`} target="_blank">View on Google Maps</a></span>
        </div>
        <h2 className="card--heading">{props.title}</h2>
        <h3 className="card--date-details">{props.startDate} - {props.endDate}</h3>
        <p className="card--description">{props.description}</p>
      </div>
    </section>
  )
}