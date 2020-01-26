// import React from 'react';
import React, {
    Component
} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

// const Menu = (props) => {
class SnoozeForm extends Component {
    //inputs to state
    
    date = new Date(Date.now());
    
 
    
    state = {
        typeOfCard: 'snooze',
        date: this.date.toDateString(),
        startTime: 'no start time',
        endTime: 'no end time',
        notes: ''
    }


    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addCard({
            typeOfCard: this.state.typeOfCard,
            date: this.state.date.toString(),
            startTime: this.state.startTime.toString(),
            endTime: this.state.endTime.toString(),
            notes: this.state.notes
        });
        
    }

    handleStartTimeChange = (e) => {
        this.setState({
            startTime: e.target.value
        });
    }

     handleEndTimeChange = (e) => {
        this.setState({endTime: e.target.value}); 
     }
    
    handleNotesChange = (e) => {
        this.setState({
            notes: e.target.value
        });
    }


    render() {
        return (
            //<Form className="d-none" style={{width: "80%", margin: "auto"}}>
            < Form style = {
                {
                    width: "80%",
                    margin: "10px auto",
                    padding: '20px',
                    backgroundColor: "#9AC4F8",
                    borderRadius: "5px"
                }
            } >
               
                <header id="sleepHeader"><h1>Record a Snooze:</h1></header>
                
                <Row>
                    <Col>
                        <h5>Time Remy fell asleep:</h5><br/>
                        <Form.Group controlId="formBasicPassword" style={{textAlign:"center"}}>
                            <input type="time" id="st" 
                                min = "01:00"
                                max = "12:00"
                                placeholder = "12:00"
                                name="startTime"
                                onChange={this.handleStartTimeChange}    
                            /><br/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <h5>Time Remy woke up:</h5><br/>
                        <Form.Group controlId="formBasicPassword" style={{textAlign:"center"}}>
                            <input type="time" id="et" 
                                min="01:00" max="12:00" placeholder="13:00"
                                name="startTime"
                                onChange={this.handleEndTimeChange}        
                            /><br/>
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            
                        </Form.Group>
                    </Col>
                </Row>
                 <Form.Group controlId="formBasicEmail">
                    <Form.Label>Snooze notes:</Form.Label>
                    {/* <Form.Control type="text" placeholder="Sleep notes" onChange={this.handleNotesChange}/> */}
                    <Form.Control as="textarea" rows="3" placeholder="Notes go here..." onChange={this.handleNotesChange}/>
                </Form.Group>
                <Button variant="secondary" type="submit" onClick={this.handleSubmit}>
                {/* <Button variant="secondary" type="submit"> */}
                    Submit
                </Button>
            </Form>
        );
    }
}


export default SnoozeForm;
