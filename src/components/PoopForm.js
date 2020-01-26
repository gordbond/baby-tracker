// import React from 'react';
import React, {
    Component
} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// const Menu = (props) => {
class PoopForm extends Component {

    date = new Date(Date.now());

    state = {
        typeOfCard: 'poop',
        colorOfPoop: '',
        consistency: '',
        date: this.date.toDateString(),
        startTime: 'no start time',
        notes: ''
    }


    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addCard({
            typeOfCard: this.state.typeOfCard,
            date: this.state.date.toString(),
            startTime: this.state.startTime.toString(),
            colorOfPoop: this.state.colorOfPoop.toString(),
            consistency: this.state.consistency.toString(),
            notes: this.state.notes
        });
        
    }

    handleStartTimeChange = (e) => {
        this.setState({
            startTime: e.target.value
        });
    }

    handleConsistencyChange = (e) => {
        this.setState({
            consistency: e.target.value
        });
    }

    handleColorChange = (e) => {
        this.setState({
            colorOfPoop: e.target.value
        });
    }

    
    handleNotesChange = (e) => {
        this.setState({
            notes: e.target.value
        });
    }


    render() {
        return (
            < Form style = {
                {
                    width: "80%",
                    margin: "10px auto",
                    padding: '20px',
                    backgroundColor: "rgb(146, 128, 114)",
                    borderRadius: "5px"
                }
            } >
                <header id="poopHeader"><h1>Record a Poop:</h1></header>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicPassword" style={{textAlign:"center"}}>
                            <Form.Label style={{paddingTop:"10%", fontSize:"20px"}}>Poop time:</Form.Label>
                            <input type="time" id="et" 
                                min="01:00" max="12:00" placeholder="13:00"
                                name="startTime"   
                                onChange={this.handleStartTimeChange}
                                style={{fontSize:"30px", width:"70%"}}
                            /><br/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Consistency:</Form.Label>
                            <Form.Control as="select" onChange={this.handleConsistencyChange} defaultValue={'Choose one...'}>
                                <option disabled>Choose one...</option>
                                <option>Solid as a rock</option>
                                <option>Firm</option>
                                <option>Mushy</option>
                                <option>Sticky</option>
                                <option>Liquid</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Colour:</Form.Label>
                            <Form.Control as="select" onChange={this.handleColorChange} defaultValue={'Choose one...'}>
                                <option disabled>Choose one...</option>
                                <option>Light Brown</option>
                                <option>Green</option>
                                <option>Yellow</option>
                                <option>Redish</option>
                                <option>Black</option>
                            </Form.Control>
                        </Form.Group>
                        
                    </Col>
                </Row>
                <Form.Group controlId="notes">
                    <Form.Label>Poop Notes:</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder="Notes go here..." onChange={this.handleNotesChange}/>
                </Form.Group>
                <Button variant="secondary" type="submit" onClick={this.handleSubmit}>
                    Submit
                </Button>
            </Form>
        );
    }
}


export default PoopForm;