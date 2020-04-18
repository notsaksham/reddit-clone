import React,{Component} from 'react';
import { Form,Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom'

import Header from './Header';

class Createsub extends Component{

    constructor(){
        super();
        this.state = {
            sub_name:"",
            sub_desc:""
        }
    }

    handlesubname = (e) =>{
        this.setState({
            sub_name:e.target.value}
        );
    }
    
    handlesubdesc = (e) =>{
        this.setState({
            sub_desc:e.target.value}
        );
    }
    
    
    handlesubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:4000/sub/add?sub_name=${this.state.sub_name}&sub_desc=${this.state.sub_desc}`)
        .then(res => {
            console.log(res);
            if(res.status === 200 ){
                alert("New Sub created");
                this.props.history.push(`/`);
            }
            else if(res.status === 201){
                alert("Failed to create Sub");
            }
        })  
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                <Header value={"Create New Subreddit"}/>
                <div className = "post">
                        <Form>
                            <Form.Group controlId="formBasicText">
                                <Form.Label>Subreddit Name</Form.Label>
                                <input className="form-control" type="text" placeholder="Enter Subreddit Name here" value = {this.sub_name} onChange ={this.handlesubname} />
                                <Form.Text className="text-muted">Limit is 100 total characters.</Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicText">
                                <Form.Label>Subreddit Descriptio</Form.Label>
                                <input className="form-control" type="text" placeholder="Enter Subreddit Description here" value = {this.sub_desc} onChange ={this.handlesubdesc} />
                                <Form.Text className="text-muted">Limit is 1000 total characters.</Form.Text>
                            </Form.Group>
                            
                            <Button variant="primary" type="submit" onClick={this.handlesubmit}>Submit</Button>
                        </Form>
                    </div>
            </div>
        )
    }

}

export default withRouter(Createsub);