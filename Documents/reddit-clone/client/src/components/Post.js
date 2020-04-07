import React,{Component} from 'react';

import Header from './Header';

class Post extends Component{
    render(){

        var head = "Create Post"

        return(
             <div>   
                <Header value ={head} />
                <div className = "Post">
                    <form>
                        
                    </form>
                </div>
            </div>
        )
    }
}

export default Post;