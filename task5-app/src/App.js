import './App.css';
import { Navbar,ProfileDashboard,Trends,Feeds,HowToFollow } from './Compo';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='divideDiv'>
      <div style={{width:"26%",float:"left"}}>
      <br />
      <ProfileDashboard />
      <br />
      <Trends />
      </div>
      <div style={{height:"460px",width:"26%",float:"left"}}>
      <br />
      <Feeds />
      </div>
      <div style={{width:"26%",float:"left"}}>
      <br />
      <HowToFollow />
      </div>
      </div>
      
    </div>
  );
}

export default App;
// marginLeft:"40px"