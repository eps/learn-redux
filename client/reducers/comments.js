function comments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT' :
      console.log('adding comment');
    default:
      return state;
  }
}

export default comments;
