import './App.css';
import ApplyValidation from './Components/ApplyValidation';
import CreateUser from './Components/CreateUser';
import RegisterFields from './Components/RegisterFields'

function App() {
  return (
    <div className="App">
      <CreateUser />
      <RegisterFields />
      <ApplyValidation />
    </div>
  );
}

export default App;
