//React Render a Component

const Hello = () => {
    const name = 'Fred';
    return (<h1> Hello {name} </h1>
    );
};

ReactDOM.render(<Hello />, document.getElementById('root'));
