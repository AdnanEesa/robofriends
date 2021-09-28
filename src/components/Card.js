import React from "react";

const Card = ({ name, email }) => {
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5'>
      <img
        alt='robots'
        src={`https://ui-avatars.com/api/?name=${name}&background=random&size=300&rounded=true`}
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
