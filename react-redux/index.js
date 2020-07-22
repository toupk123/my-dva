import React from 'react';

const storeContext = React.createContext({})

class Provider extends React.Component {

    render() {
        return <storeContext.Provider value={this.props.store}>
            {this.props.children}
        </storeContext.Provider  >
    }
}

// connect()(App)
function connect(mapStateToProps = () => ({}), mapDispatchToProps = () => ({})) {
    return function (Component) {
        return class extends React.Component {
            constructor(props,context) {
                super(props)
                context.subscribe(this.handleStoreChange.bind(this))
            }
            handleStoreChange() {
                this.forceUpdate()
            }
            static contextType = storeContext
            render() {
                return <Component
                    {...this.context}
                    {...mapStateToProps(this.context.getState())}
                    {...mapDispatchToProps(this.context.dispatch)}
                />
            }
        }
    }
}


export {
    Provider,
    connect
}