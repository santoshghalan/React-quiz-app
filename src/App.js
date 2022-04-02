
import { BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';
import { useState } from 'react';
import axios from 'axios';


function App() {

  const[name, setName]= useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  
  const fetchQuestions = async(category="", difficulty="")=>{
       const {data} = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results)
  } 

  return (
    <BrowserRouter>
    <div className="app" style= {{ backgroundImage: ' url("https://img.freepik.com/free-vector/white-background-with-triangle-patterns_1017-18410.jpg?t=st=1648105702~exp=1648106302~hmac=11b3e6a4e8fa7d5017811c0fb7d22f86f8f0474360d5989bb97adfaf86ef65f3&w=1480")'}}>
   <Header  />

   <Switch>
     
     <Route  path='/'  exact>
     <Home  
     name= {name} 
     setName= {setName} 
     fetchQuestions= {fetchQuestions}
     />
    </Route>

    <Route  path='/quiz'  exact>
     <Quiz 
     name={name}
     questions={questions}
     score={score}
     setScore={setScore}
     setQuestions={setQuestions}
     />
    </Route>

    <Route  path='/result'  exact>
     <Result />
    </Route>

   </Switch>

  
    
    

       </div>
       <Footer  />
       </BrowserRouter>  
  );
}

export default App;
