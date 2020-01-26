import React from 'react';
import { PropTypes } from 'react';
import Form from 'react-bootstrap/Form';

class BreastMilk extends React.Component  {
    // constructor(props) {
    //     super(props);
        
    //   }

    state = {
        boobUsed:'',
        qualityOfFeed:''
    }


    handleChangeQuality = (e) =>{
         e.preventDefault();
        this.props.quality({
            qualityOfFeed: e.target.value
        });
    }
    


    handleChangeBoob = (e) =>{
        
        console.log(this.state);
        e.preventDefault();
        this.props.boob({
            boobUsed: e.target.value
        });
        console.log(this.props);
    
    }


   
    render() {
        
        return (
            
            <React.Fragment>
                <Form.Label>How'd he do?</Form.Label>
                <Form.Control as="select" onChange={this.handleChangeQuality.bind(this)} defaultValue={'Choose one...'}>
                    <option disabled>Choose one...</option>
                    <option>Great</option>
                    <option>Fell asleep</option>
                    <option>Average</option>
                    <option>Not paying attention</option>
                    <option>Very short feed</option>
                    <option>He bit me!!</option>
                </Form.Control>

                <Form.Label>Last boob used:</Form.Label>
            
                <Form.Control as="select" onChange={this.handleChangeBoob.bind(this)} defaultValue={'Choose one...'}>
                    <option disabled>Choose one...</option> 
                    <option>Leftie</option>
                    <option>Rightie</option>
                </Form.Control>
            </React.Fragment>
                
        );
    }
}

export default BreastMilk;