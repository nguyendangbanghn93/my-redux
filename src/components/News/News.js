import React, { Component } from 'react';
import { connect } from 'react-redux';
class News extends Component {
    // editStatusInStore = () => {
    //     var { dispatch } = this.props; // dispatch = this.props.dispatch;
    //     dispatch({ type:"editStatus"})
    // }
    render() {
        return (
            <div>
                <h2>Day la component 2</h2>
                <button onClick={this.props.editStatusInStore}>Click di</button>
           </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.editStatus
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        editStatusInStore: () => {
            dispatch({ type:"editStatus"})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(News)