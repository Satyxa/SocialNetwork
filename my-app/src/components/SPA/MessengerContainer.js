import React from 'react'
import Messenger from './Messenger';
import withAuthRedirect from './../../HOC/withAuthRedirect'
import { connect } from 'react-redux';
import { compose } from 'redux';

class MessengerContainer extends React.Component {
    render() {
        return <Messenger {...this.props} />
    }
}
let mapStateToProps = (state) => ({
    Data: state.MessengerData.Data,
})

export default compose(withAuthRedirect, connect(mapStateToProps))(MessengerContainer)

