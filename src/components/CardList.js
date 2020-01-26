import React from 'react';
import { Consumer } from './context';
import BabyCard from './BabyCard';
const CardList = (props) => {
    
    return (
        <Consumer>
        { context => (
            <React.Fragment>
            {context.babyEvents.map( (babyEvent, index) => 
                //if statement checking the typeOfCard
                <BabyCard 
                    {...babyEvent}
                    key={babyEvent.id.toString()}
                    index={index}
                /> 
            )}
        </React.Fragment>
        ) }
        
        </Consumer>


        
    );
}

export default CardList;