import React,{Component} from 'react';
import { Form,Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom'
;
import Header from './Header';

class Post extends Component{

    constructor(){
        super();
        this.state = {
            post_title :'',
            post_content :'',
            // author : this.props.value.loggedUser
        }
        this.handlecontent = this.handlecontent.bind(this);
        this.handletitle = this.handletitle.bind(this);
        this.handlesubmit = this.handlesubmit.bind(this);
    }
    componentDidMount(){
        console.log(this.props.value);
    }

    handletitle = (e) =>{
        this.setState({
            post_title:e.target.value}
        );
    }

    handlecontent= (e) => {
        this.setState({
            post_content:e.target.value
        });
    }

    handlesubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:4000/posts/add?post_title=${this.state.post_title}&post_content=${this.state.post_content}&author=${this.props.value.loggedUser}`)
        .then(res => {
            console.log(res);
            if(res.status === 200 ){
                alert("New post created");
                this.props.history.push("/");
            }
            else if(res.status === 201){
                alert("Failed to create post");
            }
        })  
        .catch(err => console.log(err))
    }

    render(){
        var head = "Create Post"
        
        if(this.props.value.isLoggedIn === true )
        {
            return(
                <div>   
                    <Header value ={head} />
                    <div className = "post">
                        <Form>
                            <Form.Group controlId="formBasicText">
                                <Form.Label>Post Title</Form.Label>
                                <input className="form-control" type="text" placeholder="Enter Title here" value = {this.post_title} onChange ={this.handletitle} />
                                <Form.Text className="text-muted">Limit is 50 total characters.</Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicText">
                                <Form.Label>Post content</Form.Label>
                                <input className="form-control" type="text" placeholder="Enter post content here"  value = {this.post_content} onChange={this.handlecontent}/>
                                <Form.Text className="Text-muted">Linit is a total of 200 characters</Form.Text>
                            </Form.Group>   
                            
                            <Button variant="primary" type="submit" onClick={this.handlesubmit}>Submit</Button>
                        </Form>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div>
                    <h1>Need to be logged in to create a post</h1>
                </div>
            )
        }
    }
 
}

export default withRouter(Post);