import React from "react";
import { cat } from "../../Store/sagas/catSaga";

type OwnProps = {
  cat: cat
}

const Cat: React.FC<OwnProps> = ({ cat }) => {
  return (
    <div key={cat.id} className="row">
      <div className='column column-left'>
        <img 
          src={cat.image}
          alt={cat.name} 
          height="200"
          width="200"
        />
      </div>

      <div className='column column-right'>
        <h2>{cat.name}</h2>
        <h5>Temperament: {cat.temperament}</h5>
        <p>{cat.description}</p>
      </div>
    </div>
  );
}

export default Cat;