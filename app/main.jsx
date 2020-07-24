import './app.css';
import dva from "../my-dva"

let app = dva();

app.model(require('./models').default)

app.router(require('./router').default)

app.start('#root')

