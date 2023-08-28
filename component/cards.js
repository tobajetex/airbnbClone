import React from "react"
export default function Cards(props){ 
      const {id,title,description ,price,stats,openSpots,location,coverImg} =props;
    console.log(stats.rating)
    const btnContent = !openSpots ? "SOLDOUT":location==="Online"?"Online":null
    return (
        <div className="card--container">
           <div className="card--img--container">
             { btnContent && <span className="alert">{btnContent}</span>}
            <img src={`../images/${coverImg}`} alt={`${title}images`} className="card--img"/>
            </div>
            <div>
            <div className="card-stats">
            <img src="../images/star.png" alt="" className="star" />
            <span>{stats.rating}</span>
            <span>({stats.reviewCount})</span>
            <span>{location}</span>
            </div>
            <p>{title}</p>
            <p><span>From ${price}</span>/person</p>
            
            </div>
        </div>
    )
}