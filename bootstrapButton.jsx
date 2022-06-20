//Need to start jsx web components with CAPITAL letters or it won't work

const App = () => {
    const handler = () => alert(`hello world`);
    return <MyButton onClick={handler} index='9'> </MyButton>
};

// destructured version from parentChild file: 
const MyButton = ({ onClick }) => { 
    //changes look of button using bootstrap property "Button"  -must call it this way to access Bootstap property. Extra ": BootButton" is renaming and not recommended
    let { Button : BootButton } = ReactBootstrap;
    return <BootButton onClick={onClick} index='9'>Click Me</BootButton>;
}

//------------------
ReactDOM.render(<App />, document.getElementById('root'));