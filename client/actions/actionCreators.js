// action is an object with information about what happened and what needs to change

// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}
// add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comment
export function removeComment(postId, index) {
  return {
    type: 'REMOVE_COMMENT',
    index,
    postId
  }
}
