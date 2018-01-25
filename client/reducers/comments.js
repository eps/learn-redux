function comments(state = [], action) {
  if (typeof action.postId !== undefined) {
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one
      [action.postId] : postComments(state[action.postId], action)
    }
  }
  return state
}

export default comments;

// reducer composition
function postComments(state = [], action) {
  console.log('post comment', state, action);
  switch(action.type) {
    case 'ADD_COMMENT' :
    return [...state,{
      user: action.author,
      text: action.comment
    }];
    case 'REMOVE_COMMENT' :
      return state;
    default:
      return state;
  }
  return state
}
