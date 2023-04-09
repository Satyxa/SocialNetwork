import React from 'react'
import Id1 from './Id1';
import { connect } from 'react-redux';
// function Id1Container(props) {
//     let addMessage = (text) => {
//         if (text === '') {
//             return
//         }
//         props.store.dispatch({
//             type: 'ADD-MESSAGE',
//             message: text
//         })

//     }

//     const MessageTextWasChanged = (text) => {
//         props.store.dispatch({
//             type: 'NEW-MESSAGE-TEXT',
//             message: text
//         })
//     }

//     return (
//         <Id1
//             newMessageText={props.store.getState().MessengerData.MessengerWindow.newMessageText}
//             Data={props.store.getState().MessengerData.Data}
//             MessageDataId1={props.store.getState().MessengerData.MessengerWindow.MessageDataId1}
//             MessageTextWasChanged={MessageTextWasChanged}
//             addMessage={addMessage} />
//     );
// }

const mapStateToProps = (state) => {
    return {
        Data: state.MessengerData.Data,
        newMessageText: state.MessengerData.MessengerWindow.newMessageText,
        MessageDataId1: state.MessengerData.MessengerWindow.MessageDataId1
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        MessageTextWasChanged: (text) => {
            dispatch({
                type: 'NEW-MESSAGE-TEXT',
                message: text
            })
        },
        addMessage: (text) => {
            if (text === '') {
                return
            }
            dispatch({
                type: 'ADD-MESSAGE',
                message: text
            })
        }
    }

}

let Id1Container = connect(mapStateToProps, mapDispatchToProps)(Id1)

export default Id1Container;