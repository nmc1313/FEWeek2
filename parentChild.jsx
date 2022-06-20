//Need to start jsx web components with CAPITAL letters or it won't work

const App = () => {
    const handler = () => alert(`hello`);
    return <MyButton onClick={handler}> </MyButton>
};

// child will be button. need handler in child or it won't work,
// pass it on to the child by making it a property
const MyButton = (props) => {
    //why .onClick?? Isn't that defined by the outer part? 
    return <button onClick={props.onClick}>Click Me</button>;
}

// destructured version: 
// const MyButton = ({ onClick }) => { 
//     return <button onClick={onClick}>Click Me</button>;
// }

//------------------
ReactDOM.render(<App />, document.getElementById('root'));