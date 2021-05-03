import PostAPI from '../API/Post';
import GetAPI from '../API/Get';
import DeleteAPI from '../API/Delete';

const getComment = () => GetAPI('comment?_sort=id&_order=desc');
const postComment = (dataYgDikirim) => PostAPI('comment', dataYgDikirim);
const deleteComment = (dataYgDihapus) => DeleteAPI('comment', dataYgDihapus);

const API = {
  getComment,
  postComment,
  deleteComment
}

export default API;