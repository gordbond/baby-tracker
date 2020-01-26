// import React from 'react';
import React, {
    Component
} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import BreastMilk from './BreastMilk';
import SolidFood from './SolidFood';


// const Menu = (props) => {
class EatForm extends React.Component {


    date = new Date(Date.now());

    state = {
        Output: '',
        typeOfCard: 'meal',
        date: this.date.toDateString(),
        foodType:'',
        qualityOfFeed:'',
        boobUsed:'',
        mealTime:'',
        food:'',
        howMuchSolid:'',
        mealNotes:''
    }
     
    handleChangeToMilk = (e) =>{
            this.setState({
                Output: (<BreastMilk boob={this.handleChangeBoob} quality={this.handleChangeQuality}/>),
                foodType:'breast milk'
            });
        
    }

    handleChangeToSolid = (e) =>{
            this.setState({
                // Output: (<SolidFood howMuchSolid={this.state.howMuchSolid} food={this.state.food}/>)
                Output: (<SolidFood food={this.handleChangeFood} howMuch={this.handleChangeHowMuch}/>),
                foodType:'solid'
            });
        
    }


    handleChangeFood = (data) =>{
        this.setState({
            food: data.food
        });
    }

    handleChangeHowMuch = (data) =>{
        this.setState({
            howMuchSolid: data.howMuchSolid
        });
    }

     handleChangeBoob = (data) =>{
         console.log(data);
        this.setState({
            boobUsed: data.boobUsed
        });
    }

    handleChangeQuality = (data) =>{
        this.setState({
            qualityOfFeed: data.qualityOfFeed
        });
    }

    handleTime = (e) => {
        this.setState(
            {
                mealTime: e.target.value
            }
        );
    }

    handleNotes = (e) => {
        this.setState(
            {
                mealNotes: e.target.value
            }
        );
    }



 
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log('TESTTTTTT:' + this.state.mealNotes);
        this.props.addCard({
            typeOfCard: this.state.typeOfCard,
            date: this.state.date.toString(),
            foodType: this.state.foodType,
            qualityOfFeed: this.state.qualityOfFeed,
            boobUsed: this.state.boobUsed,
            mealTime: this.state.mealTime.toString(),
            food: this.state.food,
            howMuchSolid: this.state.howMuchSolid,
            mealNotes: this.state.mealNotes
        });
        console.log('TESTTTTTT:' + this.state.mealNotes);
        
    }

    render() {
        

        return (
            //<Form className="d-none" style={{width: "80%", margin: "auto"}}>
            < Form style = {
                {
                    width: "80%",
                    margin: "10px auto",
                    padding: '20px',
                    backgroundColor: "rgb(212, 122, 129)",
                    borderRadius: "5px"
                }
            } >
                
                <header id="eatHeader"><h1>Record a Meal:</h1></header>
                <Row>
                    <Col>
                        <fieldset style={{padding: "30px 40px"}}>
                            
                                <ToggleButtonGroup type="radio" name="options" >
                                    <ToggleButton variant="outline-dark" value={1} onChange={this.handleChangeToMilk}> Breast Milk</ToggleButton>
                                    <ToggleButton variant="outline-dark" value={2} onChange={this.handleChangeToSolid}>Solid Food</ToggleButton>
                                </ToggleButtonGroup>
                        </fieldset>
                        <Form.Group controlId="formBasicPassword" style={{textAlign:"center"}}>
                            <Form.Label>Meal time:</Form.Label>
                            <input type="time" id="et" 
                                min="01:00" max="12:00" 
                                name="startTime"
                                onChange={this.handleTime}        
                            /><br/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicPassword">
                            {this.state.Output}
                        </Form.Group>
                        
                    </Col>
                </Row>
                <Form.Group controlId="notes">
                    <Form.Label>Meal Notes:</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder="Notes go here..." onChange={this.handleNotes}/>
                </Form.Group>
                <Button variant="secondary" type="submit" onClick={this.handleSubmit}>
                    Submit
                </Button>
            </Form>
        );
    }
}


export default EatForm;