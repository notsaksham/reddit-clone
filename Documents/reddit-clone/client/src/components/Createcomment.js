import React,{Component} from 'react';
import { Form,Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom'


import Header from './Header'

class Createcomment extends Component{
    
   constructor(){
       super();
       this.state = {
           comment:""
       }
   }
   
    componentDidMount(){
    console.log(this.props.value)
       if(this.props.value.isLoggedIn === false){
           alert("Need to be logged in for this action");
           this.props.history.push('/')
       }
   } 

   handlecomment = (e) =>{
    this.setState({
        comment:e.target.value}
    );
}


handlesubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4000/comments/add?comm_desc=${this.state.comment}&author=${this.props.value.loggedUser}&post_id=${this.props.match.params.postid}`)
    .then(res => {
        console.log(res);
        if(res.status === 200 ){
            alert("New comment created");
            this.props.history.push(`/posts/${this.props.match.params.postid}`);
        }
        else if(res.status === 201){
            alert("Failed to create post");
        }
    })  
    .catch(err => console.log(err))
}

    render(){
        return(
            <div>
               <Header value ={"Create comment"}/>
               <div className = "post">
                        <Form>
                            <Form.Group controlId="formBasicText">
                                <Form.Label>Comment Text</Form.Label>
                                <input className="form-control" type="text" placeholder="Enter Comment here" value = {this.comment} onChange ={this.handlecomment} />
                                <Form.Text className="text-muted">Limit is 1000 total characters.</Form.Text>
                            </Form.Group>
                            
                            <Button variant="primary" type="submit" onClick={this.handlesubmit}>Submit</Button>
                        </Form>
                    </div>
            </div>
        )
    }
}

export default withRouter(Createcomment);