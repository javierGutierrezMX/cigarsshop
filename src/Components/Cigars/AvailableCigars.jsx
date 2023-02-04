import React from 'react'
import classes from './AvailableCigars.module.css'
import Card from '../UI/Card'
import {CigarItem}  from './CigarItem/CigarItem';

const DUMMY_Cigars = [
    {
      id: 'm1',
      name: 'Cohiba',
      description: 'Finest cuban cigar',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Hoyo de Monterrey',
      description: 'Finest cuban cigar!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Oliva',
      description: 'Finest nicaraguan cigar',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Drew State',
      description: 'Finest domincan cigar',
      price: 18.99,
    },
  ];

const AvailableCigars = () => {

    const cigarList = DUMMY_Cigars.map(c => 
        <CigarItem
        key={c.id}
        cigar = {c}
         >{c.name} -- {c.price}</CigarItem>)
  return (
    <section className={classes.cigars}>
    <Card>
        <ul>
            {cigarList}
        </ul>
    </Card>
    </section>
  )
}

export default AvailableCigars