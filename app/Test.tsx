import React from "react";

function Sa(){
    return <div>123123123</div>
}

class Test extends React.Component{
    render(){
        return <div>
            <div><Sa /></div>

        </div>
    }
}

export default Test