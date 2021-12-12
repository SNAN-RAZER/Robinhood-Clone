
import React from 'react'
import './Chip.css'
export const Chip = (props) => {
    return (
        <div className="chip">
            <div className="chip__avataar">
           
            <img  src={`https://avatars.dicebear.com/api/human/${props.label}.svg`}  />
            </div>
            <div className="chip__label">
            <span>{props.label}</span>
            </div>
        </div>
    )
}
