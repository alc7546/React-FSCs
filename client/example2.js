const HelloUser = (props) => {
    return(
        <div>
            Hello {props.username}
            <p>Change Name: </p>    
            <input type="text" value={props.username} onChange={handleNameChange} />
        </div>
    );
};

const handleNameChange = (e) => {
    ReactDOM.render(
        <HelloUser username={e.target.value} />,
        document.getElementById('app')
    );
};

const init = () => {
    ReactDOM.render(
        <HelloUser username="yeet" />,
        document.getElementById('app')
    );
};

window.onload = init;