const AddMessageId = 'ADD-MESSAGE'
const newMessageTextId = 'NEW-MESSAGE-TEXT'

let initialState = {
    Data: [
        { imgId: 'https://avatars.githubusercontent.com/u/106112109?v=4', id: 2, name: 'Юлия мельникова', message: 'Здарова' },
        { imgId: 'https://sun9-west.userapi.com/sun9-56/s/v1/ig2/Eb5u1nzOQwdMZxRHx57lKDcq8P5bm3_aQONFwbViIMeWTCPfZtu5LnTJ8VFbpK_Is9DtiAf6yZyM4jwNL9Qjmhws.jpg?size=1080x1080&quality=95&type=album', id: 1, name: 'Вячеслав Украинцев', message: 'Привяу' },
    ],
    MessengerWindow: {
        newMessageText: '',
        MessageDataId2: [
            { id: 3, message: "Здрасте" },
            { id: 4, message: "Чо делаешь" },

        ],
        MessageDataId1: [
            { id: 1, message: "Здарова" },
            { id: 2, message: "Чо как" },
        ],
    }

}

const messengerReducer = (state = initialState, action) => {
    switch (action.type) {
        case AddMessageId:
            let newPost = {
                id: 7,
                message: action.message,
            }
            let stateCopy = { ...state }
            stateCopy.MessengerWindow.MessageDataId1 = [...state.MessengerWindow.MessageDataId1]
            stateCopy.MessengerWindow.MessageDataId1.unshift(newPost)
            stateCopy.MessengerWindow.newMessageText = ''
            return stateCopy
        case newMessageTextId:
            let CopyState = { ...state }
            CopyState.MessengerWindow.newMessageText = { ...state.MessengerWindow.newMessageText }
            CopyState.MessengerWindow.newMessageText = action.message;
            return CopyState

        default:
            return state;
    }
}

export default messengerReducer