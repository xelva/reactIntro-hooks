import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';


const items = [
    {
        title: 'what is React?',
        content: 'React is a frontend js library'
    },
    {
        title: 'why would you use React?',
        content: 'React makes it super easy to do a lot of stuff'
    },
    {
        title: 'Do you like using it?',
        content: 'so far so good'
    }
]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    },
    {
        label: 'The Color Green',
        value: 'green'
    }
]


const App = () => {
    const [selected, setSelected] = useState(options[0])
 
    return (
        
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
            <Route path="/dropdown">
                <Dropdown 
                label="Select a color"
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
                 />
            </Route>
        </div>
        )
};

export default App;

