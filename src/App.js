
import Navebar from './Components/Navebar';
import './App.css';
import About from './Components/About';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";

function App() {
  // const navigate=useNavigate();
  const [mod,setMode]=useState('white');
  const [alert, setalert] = useState('null');
  const showAlert=(message,typ)=>{
    setalert({
      msg:message,
      type:typ});

      setTimeout(() => {
        setalert('null')
        
      },1500);
    

  }
  const remove=()=>{
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
  }
  const handleSuccess =(clss)=>{
    remove()
    document.body.classList.add('bg-'+clss);

  }
  const modeToggler=()=>{
    remove();
  
    if(mod==='white'){
      setMode('black');
      document.body.style.backgroundColor='black';
      showAlert("Dark mode enabled","Success!");
      
      
    }
    else{
      setMode('white');
      document.body.style.backgroundColor='white';
      showAlert("Light mode enabled","Success!");
    
        
      
        
     
    }
  }
  return (
  
  <>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <Router>
    
  <div>  <Navebar title="TextR" mode={mod} modetoggler={modeToggler} AboutUs="Contact US" modSuccess={handleSuccess}/> </div>
  
<div className="container" >
<Alert alrt={alert}/>
<Routes>
          <Route   path="/about" element={<About sty={mod}/>} />
          <Route   path="/home" element={ <TextForm heading="Enter your text below to analyze"  showAlert={showAlert} mode={mod}/>}/>
          <Route   path="/" element={ <TextForm heading="Enter your text below to analyze"  showAlert={showAlert} mode={mod}/>}/>

         </Routes>
       
      </div>
      
     </Router>

</>

  );
}

export default App;
