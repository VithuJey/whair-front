import React from 'react'

const TalentItem = (props) => (
        <div className="bt b--moon-gray pv2 w-20-l pointer" key={props.firstName}>
            <p className="f5  bluee mv0 lh-copy inter">{props.firstName} {props.lastName}</p>
            <p className="f5 bluee-50  mt0 inter">{props.currentSalon.name}, {props.currentSalon.location}</p>
            {/* <p className="f6 mv0 lh-copy mt4 fw4">Previously:</p> */}
            {props.prevSalons.map(prevSalon => (
                <p className="f7 pv1 bt b--moon-gray bluee-50 mv0 lh-copy inter">{prevSalon.name}, {prevSalon.location}</p>
            ))}
            <p className="f7 fw3  inter bluee">Reunite →</p>
        </div>
)

export default TalentItem