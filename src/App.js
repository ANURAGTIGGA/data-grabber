import {useState} from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import QueryContainer from './components/QueryContainer/QueryContainer.jsx';


function App() {
  const [isCustomQuery, setIsCustomQuery] = useState(true)

  function handleOnTabChange(flag){
    setIsCustomQuery(flag);
  }

  return (
    <div className="App">
      <Header isCustomQuery={isCustomQuery} onTabChange={(flag)=>handleOnTabChange(flag)}></Header>
      <QueryContainer isCustomQuery={isCustomQuery}></QueryContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
