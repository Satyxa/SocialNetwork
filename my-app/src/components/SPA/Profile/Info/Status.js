import './Info.css';
import Preloader from './../../../Preloader'
import React from 'react';


class Status extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    changeStatus() {
        this.setState({
            editMode: true
        })
    }

    saveStatus() {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }


    render() {
        return (<>{this.state.editMode
            ? <div>
                <input
                    onChange={this.onStatusChange}
                    autoFocus={true}
                    className='profile__info__changeStatus'
                    value={this.state.status}
                    onBlur={this.saveStatus.bind(this)}
                /></div>
            : <div>
                <h2
                    className="profile__info-subtitle font"
                    onClick={this.changeStatus.bind(this)}>
                    {this.props.status}</h2>
            </div >

        }
        </>);
    }
}

export default Status;