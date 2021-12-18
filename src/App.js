
import './App.css';
import Employees from './Components/Employees';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <header>
      <nav class="d-flex navbar navbar-expand-lg navbar-light bg-dark justify-content-between">
  <div class="container-fluid">
    <a class="navbar-brand me-auto" href="#"> Islanders<br/> Coding<br/> School<br/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class=" collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav  mb-2 mb-lg-0 ms-auto">
        <li class="nav-item">
          <a class="nav-link active  " aria-current="page" href="#">Home</a>
        </li>
        </ul> 
    </div>
  </div>
</nav>
    
    <div className="App">
      <Employees/>
    </div>
    </header>
  );
}

export default App;
