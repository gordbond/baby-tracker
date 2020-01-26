import React, {PureComponent} from 'react';import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class BabyCard extends PureComponent{
    
    
    
    
    render()  {
        const {
            typeOfCard,
            date,
            startTime,
            endTime,
            notes,
            consistency,
            colorOfPoop,
            boobUsed,
            foodType,
            qualityOfFeed,
            mealTime,
            food,
            howMuchSolid,
            mealNotes,
            id,
            index
            
        } = this.props;
        if (typeOfCard === 'snooze') {
           
            return (
                

                < Card style = {
                    {
                        width: '80%',
                        margin: '10px auto',
                        //backgroundColor: "#9AC4F8"
                    }
                } >
                <Card.Header style={{textAlign:'center',backgroundColor: "#9AC4F8"}}><h1 >{typeOfCard}</h1></Card.Header>
                    <ListGroup variant="flush">
                        <Row>
                            <Col style={{ textAlign:'center'}}>
                                {/* <Card.Title style={{backgroundColor:'white', padding:'0.85rem 0', marginBottom:'0'}}>Slept from:</Card.Title> */}
                                <ListGroup.Item style={{borderBottom:'none', borderTop:'none'}}>Slept from: <h3>{ startTime } to { endTime }</h3></ListGroup.Item>
                                

                            </Col>
                            <Col style={{textAlign:'center'}}>
                                <ListGroup.Item style={{borderBottom:'none', marginTop:'1.5rem'}}><h3>{ date }</h3></ListGroup.Item>
                            </Col>   
                        </Row>   
                        
                    </ListGroup>
                    {/* <Card.Title style={{backgroundColor:'white', padding:'0.85rem 0', margin:'0 0 0 15px', fontSize: '16px'}}>Sleep Notes:</Card.Title> */}
                    <ListGroup.Item ><strong>Sleep Notes:</strong> <p>{ notes }</p></ListGroup.Item> 
                </Card>
                
            );
        }else 
        if (typeOfCard === 'poop'){
            return (
                < Card style = {
                    {
                        width: '80%',
                        margin: '10px auto',
                        // backgroundColor: "rgb(146, 128, 114)"
                    }
                } >
                <Card.Header style={{textAlign:'center', backgroundColor: "rgb(146, 128, 114)"}}><h1>{typeOfCard}</h1></Card.Header>
                    <ListGroup variant="flush">
                        <Row>
                            <Col>
                                <ListGroup.Item>Consistency: <h3>{ consistency }</h3></ListGroup.Item>
                                <ListGroup.Item>Colour of Poop: <h3>{ colorOfPoop }</h3></ListGroup.Item>
                            </Col>
                            <Col>
                                <ListGroup.Item><h3>{ date }</h3></ListGroup.Item>
                                <ListGroup.Item style={{textAlign:'center'}}>Poop Time: <h3>{ startTime }</h3></ListGroup.Item>
                            </Col>
                        </Row>
                        <ListGroup.Item><strong>Poop Notes:</strong> <p>{ notes }</p></ListGroup.Item>
                    </ListGroup>
                </Card>
                
            );
        }else
        if(typeOfCard === 'meal' && foodType === 'breast milk'){
            return (
                < Card style = {
                    {
                        width: '80%',
                        margin: '10px auto',
                        //backgroundColor:  "rgb(212, 122, 129)"
                    }
                } >
                <Card.Header style={{textAlign:'center',backgroundColor: "rgb(212, 122, 129)"}}><h1 >{typeOfCard}</h1></Card.Header>
                
                    <ListGroup variant="flush">
                        <Row>
                            <Col>
                                <ListGroup.Item>Last Boob Used: <h3>{ boobUsed }</h3></ListGroup.Item>
                                <ListGroup.Item>Quality of feed: <h3>{ qualityOfFeed }</h3></ListGroup.Item>
                            </Col>
                            <Col>
                                <ListGroup.Item><h3>{ date }</h3></ListGroup.Item>
                                <ListGroup.Item style={{textAlign:'center'}}>Meal Time: <h3>{ mealTime }</h3></ListGroup.Item>
                            </Col>
                        </Row>
                        <ListGroup.Item><strong>Meal notes:</strong><p>{ mealNotes }</p></ListGroup.Item>
                    </ListGroup>
                </Card>
                
            );
        }else
        if(typeOfCard === 'meal' && foodType === 'solid'){
            return (
                < Card style = {
                    {
                        width: '80%',
                        margin: '10px auto',
                        
                    }
                } >
                <Card.Header style={{textAlign:'center', backgroundColor:  "rgb(212, 122, 129)"}}><h1>{typeOfCard}</h1></Card.Header>
                    <ListGroup variant="flush">
                        <Row>
                            <Col>
                                <ListGroup.Item>Food Eaten: <h3>{ food }</h3></ListGroup.Item>
                                <ListGroup.Item>How much??: <h3>{ howMuchSolid }</h3></ListGroup.Item>
                            </Col>
                            <Col>
                                <ListGroup.Item><h3>{ date }</h3></ListGroup.Item>
                                <ListGroup.Item style={{textAlign:'center'}}>Meal Time: <h3>{ mealTime }</h3></ListGroup.Item>
                            </Col>
                        </Row>
                        <ListGroup.Item><strong>Meal notes:</strong><p>{ mealNotes }</p></ListGroup.Item>
                    </ListGroup>
                </Card>
                
            );
        }else{
            return(< Card style = {
                {
                    width: '80%',
                    margin: '10px auto',
                    
                }
            } >
            <Card.Header style={{textAlign:'center', backgroundColor:  "#4e7128"}}><h1>Start Tracking!</h1></Card.Header>
                <ListGroup variant="flush">

                    <ListGroup.Item style={{textAlign:'center'}}><h3>Choose and option in the menu above.</h3></ListGroup.Item>
                        
                </ListGroup>
            </Card>);
        }

        
    }
  }

  export default BabyCard;

