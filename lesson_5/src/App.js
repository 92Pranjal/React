import Greet from './components/Greet';
import Welcome from './components/Welcome';
function App() {
  return (
    <div>
      {/* If Sure what needs to be passed pass it as props 
      else access it as props.children */}
     <Greet name="Pranjal" title="Priyadarshi"> 
       <p>This is Children Props!!</p>
     </Greet>
     <Greet name="Anku" title="Priyadarshi"/>
      {/* Props are immutable */}
     <Welcome name= "Batman" wife="Diana"/>
    </div>
  );
}

export default App;
