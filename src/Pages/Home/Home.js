
import { Button, MenuItem, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Categories from '../../Data/Catagory';
import './Home.css';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const Home = ({name, setName, fetchQuestions}) => {

const [category,  setCategory] = useState("");
const [difficulty, setDifficulty] = useState("");
const [error, setError] = useState(false);

const history= useHistory();

const handleSubmit = () =>{
if (!category || !difficulty || !name){
  setError(true);
  return;
}
else {
  setError(false);
  fetchQuestions(category, difficulty);
  history.push("/quiz");
}

}


  return (
    <div className='content'>
      <div className='setting'>
        <span style={{  fontSize:  30 }} >Quiz Setting</span>
       <div className='settings__select'>

         {error && <ErrorMessage>Please fill all the fields</ErrorMessage>}
         <TextField 
         style={{ marginBottom: 25}}
          label='Enter Your Name'    
          variant='outlined' 
          
          onChange={(e) => setName(e.target.value)}

          />

          <TextField 
             select 
             label='Select Category'  
             variant='outlined'
             style= {{marginBottom: 30}}
             onChange={(e) => setCategory(e.target.value)}
             value={category}

             >
               {
               Categories.map((cat) =>(
               <MenuItem   key= {cat.category} value={cat.value}>

                {cat.category}
 
                </MenuItem>
              )) }
              
              </TextField>

              <TextField
              select
              label='Difficulty level'
              variant='outlined'
              style={{marginBottom:30}}
              onChange={(e) => setDifficulty(e.target.value)}
              value={difficulty}

              >
                <MenuItem key='Easy' value='easy'>
                  Easy
                </MenuItem>
                <MenuItem key='Medium' value='medium'>
                  Medium
                </MenuItem>
                <MenuItem key='Hard' value='hard'>
                  Hard
                </MenuItem>

              </TextField>

              <Button   variant='contained' color='primary' size='large'
              onClick={handleSubmit}
              > 
                Start Quiz 
              </Button>

       </div>
      </div>
      <img src="/quizvector.svg"  className="banner" />
       </div> 
  )
}

export default Home