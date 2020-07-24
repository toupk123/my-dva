import React, { useContext, useState, useEffect } from 'react';

const storeContext = React.createContext({})

function Provider(props) {
    return <storeContext.Provider value={props.store}>
        {props.children}
    </storeContext.Provider  >
}

// connect()(App)
function connect(mapStateToProps = (state: Object) => ({}), mapDispatchToProps = (dispatch: Function) => ({})) {
    return function (Component) {
        return class extends React.Component {
            constructor(props, context) {
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

function connectHook(mapStateToProps = (state: Object) => ({}), mapDispatchToProps = (dispatch: Function) => ({})) {
    return function (Component) {
        return function (props) {
            const [useStore, setStore] = useState(useContext(storeContext));
            useEffect(() => {
                useStore.subscribe(() => setStore({ ...useStore }))
            }, [])
            return <Component
                {...useStore}
                {...props}
                {...mapStateToProps(useStore.getState())}
                {...mapDispatchToProps(useStore.dispatch)}
            />
        }
    }
}


export {
    Provider,
    connect,
    connectHook
}