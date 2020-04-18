import React,{Component} from 'react';
import {Button} from  'react-bootstrap'
import Header from "./Header"
// import { response } from 'express';

class Postpage extends Component{
    
    constructor(){
        super();
        this.state = {
            posts:[],
            comments:[]
        }
    }

    componentDidMount(){
        console.log(this.props.value)
        this.getPost();
        this.getComments();
        
    }

    getPost = _ =>{
        var post = this.props.match.params.postid;
        fetch(`http://localhost:4000/single/${post}`)
        .then(response => response.json())
        .then(response =>this.setState({posts:response.posts}))
        .catch(err => console.error(err)) 
        
    }

    getComments = () =>{
        var post = this.props.match.params.postid;  
        fetch(`http://localhost:4000/comment/${post}`)
        .then(response => response.json())
        .then(response =>this.setState({comments:response.comment}))
        .catch(err=>console.log(err))
    }

    create = () =>{
        var post = this.props.match.params.postid;
        if(this.props.value.isLoggedIn === true){
        this.props.history.push(`/createcomment/${post}`);}
        else{
            alert("Log in first");
            this.props.history.push("/login");
        }
    }
    
    /*

    Bhaari workaround begins here

    */

    renderpost = ({post_id, post_title, post_content, author, upvote, downvote}) =>
      <div>
        <div key = {post_id} className = "boxed">
            <br />
            <div>
                <div className="title">
                <Button onClick={()=> this.props.history.push(`/posts/${post_id}`)}>{post_title}</Button>
                </div>
                <div className = "author">
                Posted by <Button onClick={() => this.props.history.push(`/users/${author}`)}>{author}</Button>
                </div>
            </div>
            <h4>{post_content}</h4>
            <div>
                <button className = "votebutton">Upvotes:</button>{upvote} 
                <br />                           
                <button className = "votebutton">Downvotes:</button>{downvote}
            </div>
        </div>
    </div>

    rendercomments =({comm_id,comm_desc,author,post_id}) =>
    <div className="boxed">
        {comm_desc}
        <br/>
        <div className = "comment">
            {author}
        </div>
    </div>
    
    callheader = ({post_id, post_title, post_content, author, upvote, downvote}) =>
    <div>
        <Header value={post_title}/>
    </div>
    
    /*

      Bhaari workaround ends here

    */

    render(){
        var post = this.state.posts ;
        var comment = this.state.comments;
        return(
            <div>
                {post.map(this.callheader)}
                <div className = "outerbox">
                    {post.map(this.renderpost)}
                    <br />
                    <Button onClick= {this.create} className="createbutton">Create Comment</Button> 
                    <br />
                    Comments:
                    {comment.map(this.rendercomments)} 
                </div>
            </div>
        )
    }
}

export default Postpage;