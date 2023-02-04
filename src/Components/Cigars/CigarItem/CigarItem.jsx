import React from 'react'
import classes from './CigarItem.module.css'
import CigarItemForm from './CigarItemForm';

export const CigarItem = (props) => {

    const price = `$${props.cigar.price.toFixed(2)}`;
  return (
    <li className={classes.cigar}>
        <div>
            <h3>{props.cigar.name}</h3>
        <div className={classes.description}>{props.cigar.description}</div>
        <div className={classes.price}>{price}</div>
        </div>
        <div>
          <CigarItemForm  id={props.cigar.id}/>
        </div>
    </li>
  )
}
