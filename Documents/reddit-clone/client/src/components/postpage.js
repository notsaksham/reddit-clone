import React,{Component} from 'react';
import {Button} from  'react-bootstrap'
import Header from "./Header"

class postpage extends Component{
    
    constructor(){
        super();
        this.state = {
            posts:[]
        }
    }

    componentDidMount(){
        this.getPost();
    }

    getPost = _ =>{
        var post = this.props.match.params.postid;
        fetch(`http://localhost:4000/single/${post}`)
        .then(response => response.json())
        .then(response =>this.setState({posts:response.posts}))
        .catch(err => console.error(err)) 
        
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

    callheader = ({post_id, post_title, post_content, author, upvote, downvote}) =>
        <div>
              <Header value={post_title}/>
        </div>
    /*

      Bhaari workaround ends here

    */

    render(){
        var post = this.state.posts ;
        return(
            <div>
                {post.map(this.callheader)}
                {post.map(this.renderpost)}
            </div>
        )
    }
}

export default postpage;