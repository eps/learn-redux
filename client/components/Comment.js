import React from 'react';

class Comment extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment"
            onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>
            &times;
          </button>
        </p>
      </div>
    )
  }

  handleSubmit(e){
    e.preventDefault();
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  }

  render() {
    const { comment } = this.props;
    return (
      <div className="comments">
        {comment.map(this.renderComment.bind(this))}
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}


export default Comment;
