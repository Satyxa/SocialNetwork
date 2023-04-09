import React from 'react';
import { connect } from 'react-redux';
import DialogList from './dialogList';
// function DialogListContainer(props) {

//     let dialogElement = props.Data.map((d) => {
//         return <DialogItem
//             imgId={d.imgId}
//             id={d.id}
//             name={d.name}
//             message={d.message} />
//     })
//     return (
//         <DialogList />

//     );
// }

const mapStateToProps = (state) => {
    return {
        Data: state.MessengerData.Data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        privet: () => {
            console.log('priver');
        }
    }
}

let DialogListContainer = connect(mapStateToProps, mapDispatchToProps)(DialogList)

export default DialogListContainer;