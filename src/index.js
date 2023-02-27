import React, {useRef, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function List(){
   // const [value, setValue] = useState('');
    const [listItems, setListItems] = useState([]);
    const ref = useRef();
    function createListItem(){
        setListItems([...listItems, ref.current.value])

    }

    function deleteListItem(i){
        const oldList = [...listItems];
        oldList.splice(i,1)
        setListItems(oldList)
    }

    function ListItem({onDelete, index, element}){
        return(
            <div>
                <p>{element}</p>
                <button onClick={()=> onDelete(index)}>delete</button>
                <button onClick={()=> onDelete(index)}>edit</button>
            </div>
        )
    }

    console.log('before', listItems)
    return(
        <div>
            <input
                ref={ref}
                type="text"
                className="input"
                //onChange={e => setValue(e.target.value)}
            />
            <button onClick={createListItem}>Create</button>
            <div>
                {listItems.map((el,i)=>
                    <ListItem onDelete={deleteListItem} index={i} element={el}/>
                )}
            </div>
        </div>
    );

}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <List />,
);


