import {BrowserRouter, Switch, Route} from "react-router-dom"
import DashboardPage from "./screens/DashboardPage"
import CreatePage from "./screens/CreatePage"
import EditPage from './screens/EditPage'
import NotFoundPage from "./screens/NotFoundPage"
import Header from './components/Header';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path='/' component={DashboardPage} exact/>
      <Route path='/create' component={CreatePage} />
      <Route path='/note/:id' component={EditPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

export default App;