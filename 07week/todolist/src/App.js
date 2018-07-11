import React, {Component} from 'react';
import './App.css';
import Post from './Post';

class App extends Component {
    state={  posts:[
      {id:1, author'Ted', text:'today I thought that bacon was so great',time: 'Mon May 28 2018 16:12:25 GMT-0500 (CDT)', likes: 0, dislikes: 0},
      {id: 2, author: 'Martha', text: 'having a great time in spain!', time: 'Wed May 30 2018 08:12:25 GMT-0500 (CDT)', likes: 0, dislikes: 0},
  {id: 3, author: 'Mark', text: 'Just got back from my trip it was great', time: 'Wed May 30 2018 11:59:25 GMT-0500 (CDT)', likes: 0, dislikes: 0},
  ],
    postInput: '',
    userNameInput: '',
  };

  renderPosts() {
      return
      this.state.posts.map((post, index) =>
      {
      const description = `${post.author} - ${post.time}`;
      return (
          <Post text={post.text} author={description} key={index} id = {post.id}
           likes = {post.likes} dislikes = {post.dislikes} likeButtonClick = {this.handleLikeButtonClick}
           dislikeButtonClick = {this.handleDislikeButtonClick}
          />
  )
    }).reverse()
  }

   handlePostInputChange(e){
   this.setState({postInput: e.target.value})
  }

    handleUserNameInputChange(e){
    this.setState({userNameInput: e.target.value})
  }

    handleSubmitPost(){
      const newPost = {
       author: this.state.userNameInput,
       text: this.state.postInput,
       id: this.state.posts.length + 1,
       likes: 0,
       dislikes: 0,
       time: new Date()
  };

       const posts = this.state.posts.map(post=>post);
          posts.push(newPost);
          this.setState({posts, postInput: '', userNameInput: '',})
}

    handleLikeButtonClick = (index) => {
       console.log('index',index)

       const newPosts = this.state.posts.map(post=>post);
             newPosts[index-1].likes ++
             this.setState({
             posts: newPosts
      })
  }

    handleDislikeButtonClick = (index) => {
      const newPosts = this.state.posts.map(post=>post);
        newPosts[index-1].dislikes ++
         this.setState({
          posts: newPosts
      })
  }

  renderSubmit(){
       if (this.state.postInput && this.state.userNameInput) {
  return <button onClick={() => this.handleSubmitPost()}>Submit post</button>
        }
  }

  render() {
  return (
      <div className="App">
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',}}>

      <input value={this.state.postInput} onChange={(e) => this.handlePostInputChange(e)} placeholder="write something..."/>
      <input value={this.state.userNameInput} onChange={(e) => this.handleUserNameInputChange(e)} placeholder="username"/>
         {this.renderSubmit()}
      </div>
         {this.renderPosts()}
      </div>
  );
  }
  }
     import React, { Component } from 'react';
     import './App.css';

      class Post extends Component {
        render() {
       return (
  < div>
  <p>{this.props.text}</p>
  <p style={{fontSize: '12px'}}>{this.props.author}</p>
  <p><button onClick = {()=> this.props.likeButtonClick(this.props.id)}>Like</button><span> {this.props.likes} </span><button onClick={()=>this.props.dislikeButtonClick(this.props.id)}>Dislike</button><span> {this.props.dislikes} </span></p>
  </div>
  );
  }
  }
