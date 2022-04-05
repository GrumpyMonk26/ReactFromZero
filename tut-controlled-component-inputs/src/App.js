import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from "react";

function App() {
  const [items,setItems] = useState([
      {
          id:1,
          checked:false,
          item: "Buy Milk"
      },
      {
          id:2,
          checked:false,
          item: "Buy Bread"
      },
      {
          id:3,
          checked:false,
          item: "Buy Eggs"
      },
      {
          id:4,
          checked:false,
          item: "Buy Cheese"
      }
  ]);

  const handleCheck = (id) => {
    setItems(items.map(item => {
        if(item.id === id){
            item.checked = !item.checked;
        }
        return item;
    }));
    localStorage.setItem('Shopping List',JSON.stringify(items));
  }

const handleDelete = (id) => {
  setItems(items.filter(item => item.id !== id));
  localStorage.setItem('Shopping List',JSON.stringify(items));
}

  return (
    <div className="App">
      <Header title="My Groceries List" />
      <Content 
        items={items}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer 
        length={items.length}
      />
    </div>
  );
}

export default App;