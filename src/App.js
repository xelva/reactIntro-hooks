import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';


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


const App = () => {
    return (
        <div>
            <Search />
        </div>
        )
};

export default App;