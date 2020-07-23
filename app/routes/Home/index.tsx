import React from "react";
import { connect } from "../../../react-redux/index"

class Home extends React.Component {
    componentDidMount() {
        // this.props.dispatch({ type: 'home/add' })
    }
    render() {
        return <div onClick={() => this.props.dispatch({ type: 'home/add' })}>1231111111 </div>
    }
}

function mapDispatchToProps(dispatch){
    return {
        add: ()=> dispatch({type:'home/add'})
    }
}

export default connect((state) => {
    return {
        ...state
    }
},mapDispatchToProps)(Home)