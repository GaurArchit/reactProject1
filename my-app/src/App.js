
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
   <>
 
<Navbar title="Project1" home1="PropsGood "></Navbar>
<div className="container">
  <TextForm heading="Enter your text"></TextForm>
  <br>
  </br>
  <br></br>
  <br></br>
  <Footer></Footer>
</div>
   </>
  );
}

export default App;
