import React,{useState} from 'react';
import './App.css';

function App() {
 const [isCompleteScreen,setIsCompleteScreen] = useState(false); 
  return (
    <div className="App">
      <h1>My TodoMan</h1>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Tittle</label>
            <input type="text" placeholder="what's the task tittle?"/>

          </div>
          <div className="todo-input-item">
            <lablel>Description</lablel>
            <input type="text" placeholder="what's the task  description?"/>

          </div>
          <div className="todo-input-item">
            <button type ="button" className="primaryBtn">Add</button>

          </div>
        </div>
        <div className='btn-area'>
          <button className={`secondaryBtn ${isCompleteScreen === false && 'active'}`}
            onClick={() => setIsCompleteScreen (false)}
          >
          Todo</button>

          <button className={`secondaryBtn ${isCompleteScreen === true && 'active'}`}
            onClick={() => setIsCompleteScreen (true)}
          >
          Completed</button>
        </div>
        <div className="todo-list">
          <div className="todo-list-item">
            <h3>Task 1</h3>
            <p>Description</p>

          </div>

        </div>
        

      </div>
      </div>


  );
}

export default App;
