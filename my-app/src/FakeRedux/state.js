import profileReducer from "./profile_reducer";
import messengerReducer from "./messenger_reducer";

let rerenderEntireTree = () => {
    console.log('Zdarova');
}
const store = {
    State: {
        MessengerData: {
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
        },
        ProfileData: {
            Posts: {
                PostData: [
                    {
                        id: 5,
                        name: 'Юлия мельникова',
                        message: 'Здарова',
                        likesCount: 17,
                        dislikesCount: 20
                    },
                ],
            },
            newPostText: ''
        }
    },
    subscribe(observer) {
        return rerenderEntireTree = observer
    },
    dispatch(action) {
        this.State.ProfileData =
            profileReducer(this.State.ProfileData, action)
        this.State.MessengerData =
            messengerReducer(this.State.MessengerData, action)



        rerenderEntireTree(this.State)

    },


}


export default store