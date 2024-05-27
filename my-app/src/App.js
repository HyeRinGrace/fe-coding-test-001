
import { useState } from 'react';
import './App.css';

function App() {

  const [todoList, setTodoList] = useState([]);
  const [input,setInput] = useState([]);
  const [done, setDone] = useState(false);

  const arr = [{
    id: new Date(),
    text: '할일1',
    done: false
  }]; // 기본 배열값

  const inputValue = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setInput([...todoList, e.target.value]);

  }

  const addHandle = () => {
    setTodoList([...todoList, input]);
  }

  const doneHandle = () => {
    setDone(!done);
  }





  console.log(todoList);
  return (
    <div className="App">
      <div>TodoList</div>
      <div>
        <input type="text" placeholder='할일 입력' onChange={(e) => inputValue(e)}></input>
        <button className='addBtn' onClick={addHandle}>추가</button>
      </div>
        {todoList.map((item) => (
          <>
            <li onClick={doneHandle}>{item}</li>
            <button>삭제</button>
          </>
        ))}
      
    </div>
  );
}

export default App;
