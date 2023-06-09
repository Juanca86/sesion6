import { GET_POSTS, GET_POSTS_OK, GET_POSTS_FAIL } from "./actionTypes";
//accion cuando lanzo la peticion al servidor
export function actionGetPosts() {
  return {
    type: GET_POSTS,
  };
}
//accion cuando recibo bien los posts
export function actionGetPostsOk(posts) {
  return {
    type: GET_POSTS_OK,
    payload: posts,
  };
}
// accion cuando no recibo bien la peticion
export function actionGetPostsFail(error) {
  return {
    type: GET_POSTS_FAIL,
    payload: error,
  };
}
export function getPosts() {
  return async (dispatch) => {
    //empiezo a  pedir los posts a la API
    dispatch(actionGetPosts());
    try {
      const response = await fetch.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch(actionGetPostsOk(response.data));
    } catch (error) {
      dispatch(actionGetPostsFail(error));
    }
  };
}
