//Need to start jsx web components with CAPITAL letters or it won't work

const App = () => {
    ////Destructure an object
    let product = { name: 'pear', cost: 2, inStock: 7 };
    let { name, inStock } = product; 
    let item = { name, inStock };
    //object literals using above info
    //what was the point of splitting all of that up into diff vars? 
    const handler = () => alert(`item: ${item.name}, instock: ${item.inStock}`);
    return <button onClick={handler}>Click Me</button>;
};


//------------------
ReactDOM.render(<App />, document.getElementById('root'));