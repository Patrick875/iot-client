//jshint esversion:9
import "./App.css";
import io from "socket.io-client";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MinerPage from "./pages/MinerPage";
import { useState, useEffect } from "react";
import axios from "axios";
import Login from "./pages/Login";
//import Header from "./pages/Header";

const socket = io("http://colorful-suspenders-cow.cyclic.app/api/sensor", {
	withCredentials: true,
	extraHeaders: {
		"my-custom-header": "abcd",
	},
	secure: true,
	reconnect: true,
	rejectUnauthorized: false,
});
console.log(socket);
function customizeDateOnData(data) {
	data = data.map((miner) => {
		miner.createdAt = new Date(miner.createdAt).toLocaleTimeString([], {
			timeStyle: "short",
		});
		return miner;
	});
	return data;
}
// function customizeDate(data) {
// 	data.createdAt = new Date(data.createdAt).toLocaleTimeString();
// 	return data;
// }

function App() {
	const [data, setData] = useState([]);
	const [updated, setUpdated] = useState(false);

	useEffect(() => {
		const getData = async () => {
			let res = await axios.get(
				"https://colorful-suspenders-cow.cyclic.app/api/sensor"
			);
			let miners = res.data.data;
			miners = customizeDateOnData(miners);
			setData(miners);
		};
		getData();
		socket.on("newData", () => {
			// newData = customizeDate(newData);
			setUpdated(!updated);
			// setData([...data, newData]);
		});
	}, [updated]);
	//console.log();
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/user/miner" element={<MinerPage data={data} />} />

				<Route path="/login" element={<Login />} />
			</Routes>
		</Router>
	);
}

export default App;
