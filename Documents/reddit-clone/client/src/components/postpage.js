import React,{Component} from 'react';


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
          {post_id},{post_title},{post_content},{author},{upvote},{downvote}
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