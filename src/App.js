import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import io from "socket.io-client";

const socket = io("http://localhost:3500");
// const sendMessage = () => {
// 	socket.emit("cool", "It works");
// };

function App() {
	const [dbChange, setDbChange] = useState(false);
	const [isConnected, setIsConnected] = useState(socket.connected);
	//const [lastPong, setLastPong] = useState(null);

	const [data, setData] = useState([]);
	const [content, setcontent] = useState();
	useEffect(() => {
		fetch("https://iotserver.vercel.app/api/sensor")
			.then((res) => res.json())
			.then((data) => setData(data.data));

		socket.on("newData", (newData) => {
			setIsConnected(true);
			console.log(newData);
			setDbChange(!dbChange);
		});

		socket.on("disconnect", () => {
			setIsConnected(false);
		});
		socket.on("message", (data) => {
			setcontent(data);
		});
		// socket.on("pong", () => {
		// 	setLastPong(new Date().toISOString());
		// });

		// return () => {
		// 	socket.off("connect");
		// 	socket.off("disconnect");
		// 	socket.off("pong");
		// };
	}, [dbChange]);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer">
					{data.length}
				</a>
				<p>{content}</p>
				<button>Click</button>
			</header>
		</div>
	);
}

export default App;
