import React from "react";
import { connect } from "../../../react-redux"

class Home extends React.Component {
    componentDidMount() {
        this.props.dispatch({ type: 'home/add' })
    }
    render() {
        return <div onClick={() => this.props.dispatch({ type: 'home/add' })}>1231111111</div>
    }
}

export default connect((state) => {
    console.log('1111111111111111111111111111111111111',state)
    return { ...state }
})(Home)