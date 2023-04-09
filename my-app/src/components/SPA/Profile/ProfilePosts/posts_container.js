import React from 'react';
import Posts from './posts.js'
import { connect } from 'react-redux'
// function PostsContainer(props) {

//     let onAddPostCallback = (text) => {
//         props.store.dispatch({
//             type: 'ADD-POST',
//             message: text
//         })
//     }

//     const onPostChange = (text) => {
//         props.store.dispatch({
//             type: 'NEW-POST-TEXT',
//             newText: text

//         })
//     }

//     return (
//         <Posts
//             posts={props.store.getState().ProfileData.Posts}
//             onAddPost={onAddPostCallback}
//             updateNewPostText={onPostChange}
//             newPostText={props.store.getState().ProfileData.newPostText} />
//     );
// }

const mapStateToProps = (state) => {
    return {
        posts: state.ProfileData.Posts,
        newPostText: state.ProfileData.newPostText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: (text) => {
            dispatch({
                type: 'ADD-POST',
                message: text
            })
        },
        updateNewPostText: (text) => {
            dispatch({
                type: 'NEW-POST-TEXT',
                newText: text

            })
        }
    }
}

let PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;