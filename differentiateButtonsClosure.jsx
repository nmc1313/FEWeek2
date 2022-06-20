//Need to start jsx web components with CAPITAL letters or it won't work

//add event to get index to show when button is clicked - use e.target.getAttributeNames() to see what attributes your button has that you could show

const App = () => {
    //why do we have to add index to both the parent and child? why .target? 
    //on click creates an event that we can catch in our handler. Call it "event1": 
    const handler = (index) => alert(`button: ${index}`);
    let a = [1, 2, 3, 4];
    let list = a.map((item, index) => {
        //onClick can't take a function with an arg, use anon function
        //this function will use closure to pass the first button with index 0, etc
    <MyButton onClick={() => handler(index)} index='9'> </MyButton>; 
    });
    return ({list});
};

// destructured version from parentChild file: 
const MyButton = ({ onClick }) => { 
    //changes look of button using bootstrap property "Button"  -must call it this way to access Bootstap property. Extra ": BootButton" is renaming and not recommended
    let { Button : BootButton } = ReactBootstrap;
    return (
    <BootButton onClick={onClick} index='9'>Click Me</BootButton>
    );
}

//------------------
ReactDOM.render(<App />, document.getElementById('root'));