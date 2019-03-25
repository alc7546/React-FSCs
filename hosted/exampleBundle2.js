"use strict";

var HelloUser = function HelloUser(props) {
    return React.createElement(
        "div",
        null,
        "Hello ",
        props.username,
        React.createElement(
            "p",
            null,
            "Change Name: "
        ),
        React.createElement("input", { type: "text", value: props.username, onChange: handleNameChange })
    );
};

var handleNameChange = function handleNameChange(e) {
    ReactDOM.render(React.createElement(HelloUser, { username: e.target.value }), document.getElementById('app'));
};

var init = function init() {
    ReactDOM.render(React.createElement(HelloUser, { username: "yeet" }), document.getElementById('app'));
};

window.onload = init;
