import React from 'react';
import Form from 'react-bootstrap/Form';

class SolidFood extends React.Component  {
    

    handleChangeHowMuch = (e) =>{
        this.props.howMuch({
            howMuchSolid: e.target.value
        });
    }
    


    handleChangeFood = (e) =>{
        this.props.food({
            food: e.target.value
        });
    
    }

    render(){
        return (
            <React.Fragment>
                <Form.Label>What did he eat?</Form.Label>
                <Form.Control type="text" placeholder="Food goes here..." onChange={this.handleChangeFood.bind(this)}/>
            
                <Form.Label>How much did he eat?</Form.Label>
                <Form.Control as="select" onChange={this.handleChangeHowMuch.bind(this)} defaultValue={'Choose one...'}>
                    <option disabled>Choose one...</option>
                    <option>So much!</option>
                    <option>Average amount</option>
                    <option>Not very much</option>
                    <option>He windshieldwipered it</option>
                </Form.Control>
            </React.Fragment>
        );
    }
}

export default SolidFood;