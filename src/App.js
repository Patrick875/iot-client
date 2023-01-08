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

	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("https://iotserver.vercel.app/api/sensor")
			.then((res) => res.json())
			.then((data) => setData(data.data));

		socket.on("newData", (newData) => {
			console.log(newData);
			setDbChange(!dbChange);
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

				<button>Click</button>
			</header>
		</div>
	);
}

export default App;
