const App = () => {
    const { useState } = React;
    let [numbers, setNumbers] = useState([1, 2, 3, 4]);
    const removeButton = (item) => {
        //code goes here
        let newNumbers = numbers.filter(number => number != item)
        setNumbers(newNumbers)
    };
    let list = numbers.map((item) => {
        <MyButton onClick={() => removeButton(item)} item={item}> </MyButton>; 
    });
    return list;
};

const MyButton = ({ onClick, item }) => { 
    let { Button } = ReactBootstrap;
    return <Button onClick={onClick} item={item}>Click Me</Button>
}

//------------------
ReactDOM.render(<App />, document.getElementById('root'));