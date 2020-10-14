import React from 'react'

export default function Screen(props) {



    return (
        <div id="screen">
            <div id="roll">
                {props.formula}
            </div>
            <div id="display">
                {props.currentVal}
            </div>
        </div>
    )
}
