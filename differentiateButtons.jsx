//Need to start jsx web components with CAPITAL letters or it won't work

//more elegant solution than differentiateButtons.jsx

const App = () => { 
    const handler = (event1) => alert(`button: ${event1.target.getAttribute("index")}`);
    let a = [1, 2, 3, 4];
    let list = a.map((item, index) => {
        //add index key to give button a key # matched to what # item it has cycled through
    <MyButton index={index} onClick={handler} key={index='9'}> </MyButton>; 
    });
    return ({list});
};

// destructured version from parentChild file: 
const MyButton = ({ onClick, index }) => { 
    //changes look of button using bootstrap property "Button"  -must call it this way to access Bootstap property. Extra ": BootButton" is renaming and not recommended
    let { Button : BootButton } = ReactBootstrap;
    return (
    <BootButton index={index} onClick={onClick} index='9'>Click Me</BootButton>
    );
}

//------------------
ReactDOM.render(<App />, document.getElementById('root'));


