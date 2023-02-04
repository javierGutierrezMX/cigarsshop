import React from 'react'
import { loremIpsum } from 'react-lorem-ipsum';
import classes from './CigarsSummary.module.css'

const CigarsSummary = () => {
  return (
    <section className={classes.summary}>
        <h2>Greate Cigars, Delivered To You</h2>
        <p>{loremIpsum(3)}</p>
        <p>{loremIpsum(3)}</p>
    </section>
  )
}

export default CigarsSummary