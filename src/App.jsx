import { PersonAdd } from "./components/PersonAdd"
import { PersonList } from "./components/PersonList"


function App() {

  return (
    <div className="container">
      <div className="alert">
        <p>
          Service Status:
          <span className="text-success"> Online</span>
          <span className="text-danger"> Offline</span>
        </p>
      </div>

      <h1>QuickVote</h1>
      <hr />

      <div className="row">
        <div className="col-8">
          <PersonList />
        </div>
        
        <div className="col-4">
          <PersonAdd />
        </div>
      </div>

    </div>
  )
}

export default App
