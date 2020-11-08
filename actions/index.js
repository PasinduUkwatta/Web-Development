import jsonPlaceHolder from "../apis/jsonPlaceHolder";
import _ from 'lodash'


export const fetchPosts= ()=>async dispatch=>{
    const responce =  await jsonPlaceHolder.get("posts")

    dispatch({type:"FETCH_POSTS",payload:responce.data})
}

// export const fetchUser =(id)=>async dispatch=>{
//     const responce =await jsonPlaceHolder.get(`/users/${id}`)
//
//     dispatch({type:"FETCH_USER",payload:responce.data})
// }


export const fetchUser =_.memoize( function(id) {

     return async function (dispatch) {
        const responce = await jsonPlaceHolder.get(`/users/${id}`)

        dispatch({type: "FETCH_USER", payload: responce.data})
    }
})