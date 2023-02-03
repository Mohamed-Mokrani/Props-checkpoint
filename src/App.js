
import './App.css';
import Profile from './Componant/Profile/Profile';



function App() {
    function show(message){
        alert(message)
    }
  return (
    <div className='container'>
   <Profile fullname="MOKRANI Mohamed" bio="King" profession="FullStack developper" show={show}/>
    </div>
  );
}

export default App;