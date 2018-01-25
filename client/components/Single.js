import React from 'react';
import Photo from './Photo';
import Comment from './Comment';
// import comments


class Single extends React.Component {
  render() {
    // index of post
    const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
    const post = this.props.posts[i];
    console.log(post);
    const postComments = this.props.comments[this.props.params.postId] || [];

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comment comment={postComments} {...this.props} />
      </div>
    );
  }
}

export default Single;
