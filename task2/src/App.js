import logo from './logo.svg';
import { useEffect,useState } from 'react';
import Cards from './Components/Cards';
import './App.css';
import Header from './Components/header';
import Loading from './Components/Loading';

function App() {
  const usersUrl = "https://reqres.in/api/users?page=1";

  const [userData,setUserData]=useState([]);
  const [load,setLoad]=useState(true);
  const[btn,setBtn] = useState(false);
  const getUsersWithFetch = async()=>{
    try{
    const response = await fetch(usersUrl);
    const jsonData = await response.json();
    setUserData(jsonData);
    console.log(jsonData.data);
    }
    catch(error){
      setLoad(false);
    }
    
  }
  useEffect(() => {
    getUsersWithFetch();
}, []);
  
const btnC=()=>{
  getUsersWithFetch();
  var c = !(btn);
    setBtn(c);
}
  
  return (
    <div className="App">
      <Header title="MODERN UI"/>
      <button onClick={btnC} style={{margin:'100px'}}>Get Users</button>
      {btn?
      
        load?
        <Cards users = {userData.data} />:<Loading/>
      
      :null}
      
    </div>
  );
}

export default App;
