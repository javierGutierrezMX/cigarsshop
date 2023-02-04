import React from 'react'
import classes from './CigarItemForm.module.css'
import { Input } from '../../UI/Input'

const CigarItemForm = (props) => {
  return (
    <form className={classes.form}>
        <Input label='Amount' input={{
            id: 'amount_' + props.id,
            type: 'number',
            min:'1',
            max:'5',
            step: '1',
            defaultValue: '0'
        }} />
        <button>
               + Add
            </button>
    </form>
  )
}

export default CigarItemForm