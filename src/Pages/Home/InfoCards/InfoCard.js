import React from "react";

const InfoCard = ({ card }) => {
  const { name, description, icon, bgClass } = card;
  console.log(icon);
  return (
    <div
      className={`card text-white  p-6 md:card-side bg-base-100 shadow-xl ${bgClass}`}
    >
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Click the button to watch on Jetflix app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
