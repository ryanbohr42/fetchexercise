//import {useState} from 'react';

export default function UserForm(){
    function httpGetAsync(){
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
                callback(xmlHttp.responseText);
            }
        }
        xmlHttp.open("GET", TODO, true);
        xmlHttp.send(null);
    }

    return (
        <div>
        <h1>User Creation</h1>
            <form>
                <div>
                    <label htmlFor="name">Enter your full name:</label><br></br>
                    <input id="name" type="text" placeholder='ex: John Smith'></input>
                </div>
                <div>
                    <label htmlFor="email">Enter your email:</label><br></br>
                    <input id="email" type="email" placeholder='ex: jSmith@gmail.com'></input>
                </div>
                <div>
                    <label htmlFor="password">Enter your password:</label><br></br>
                    <input id="password" type="password"></input>
                </div>
                <div>
                    <label htmlFor="occupation">Please choose your occupation:</label><br></br>
                    <input id="occupation"></input>
                </div>
                <div>
                    <label htmlFor="state">Please choose your state:</label><br></br>
                    <input id="state"></input>
                </div>
            </form>
        </div>
    );
}