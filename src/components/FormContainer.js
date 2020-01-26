import React from 'react'; 

import SnoozeForm from './SnoozeForm'; 
import EatForm from './EatForm';
import PoopForm from './PoopForm';

// a component that will render one or more components
// based on a switch statement
export const SwitchedComponent = (props) => {

        let Output; // save the rendered JSX to return

        // check the type of the component given in props
        switch (props.type) {

            // render Sleeping Form with props
            case 'snooze':
            Output = ( <SnoozeForm addCard={props.addCard}/>);
                break;

            // render Eating Form with props
            case 'chow':
                Output = ( <EatForm addCard={props.addCard}/>);
                break;

            // render Poop Form with props
            case 'butt':
                Output = ( <PoopForm addCard={props.addCard}/>);
                break;

            // unknown type ... output null to not render
            default:
                Output = (null); // to return nothing, use null
                break;

                }

            return Output; // return the output created in switch/case

        };

    export default SwitchedComponent;