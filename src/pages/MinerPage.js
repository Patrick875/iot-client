//jshint esversion:9
import React from "react";
import ECGE from "./ECGE";
import Header from "./Header";
import Humidity from "./Humidity";
import MQ from "./MQ";
import Temperature from "./Temperature";

// const data = [
// 	{
// 		temperature: 38,
// 		humidity: 0.87,
// 		ecg: 82,
// 		co_level: 96,
// 		createdAt: "9:02 AM",
// 	},
// 	{
// 		temperature: 38,
// 		humidity: 0.0,
// 		ecg: 69,
// 		co_level: 52,
// 		createdAt: "9:38 AM",
// 	},
// 	{
// 		temperature: 42,
// 		humidity: 0.47,
// 		ecg: 57,
// 		co_level: 25,
// 		createdAt: "10:21 AM",
// 	},
// 	{
// 		temperature: 37,
// 		humidity: 0.15,
// 		ecg: 77,
// 		co_level: 5,
// 		createdAt: "8:11 AM",
// 	},
// 	{
// 		temperature: 18,
// 		humidity: 0.1,
// 		ecg: 110,
// 		co_level: 39,
// 		createdAt: "9:24 AM",
// 	},
// 	{
// 		temperature: 17,
// 		humidity: 0.48,
// 		ecg: 96,
// 		co_level: 86,
// 		createdAt: "8:30 AM",
// 	},
// 	{
// 		temperature: 41,
// 		humidity: 0.8,
// 		ecg: 131,
// 		co_level: 64,
// 		createdAt: "11:14 AM",
// 	},
// 	{
// 		temperature: 17,
// 		humidity: 0.49,
// 		ecg: 150,
// 		co_level: 33,
// 		createdAt: "9:30 AM",
// 	},
// 	{
// 		temperature: 19,
// 		humidity: 0.34,
// 		ecg: 56,
// 		co_level: 9,
// 		createdAt: "11:16 AM",
// 	},
// 	{
// 		temperature: 45,
// 		humidity: 0.83,
// 		ecg: 137,
// 		co_level: 22,
// 		createdAt: "10:04 AM",
// 	},
// 	{
// 		temperature: 43,
// 		humidity: 0.84,
// 		ecg: 169,
// 		co_level: 63,
// 		createdAt: "10:35 AM",
// 	},
// 	{
// 		temperature: 33,
// 		humidity: 0.39,
// 		ecg: 64,
// 		co_level: 78,
// 		createdAt: "8:54 AM",
// 	},
// 	{
// 		temperature: 49,
// 		humidity: 0.33,
// 		ecg: 55,
// 		co_level: 60,
// 		createdAt: "9:03 AM",
// 	},
// 	{
// 		temperature: 37,
// 		humidity: 0.95,
// 		ecg: 101,
// 		co_level: 25,
// 		createdAt: "10:19 AM",
// 	},
// 	{
// 		temperature: 34,
// 		humidity: 0.12,
// 		ecg: 90,
// 		co_level: 89,
// 		createdAt: "9:19 AM",
// 	},
// 	{
// 		temperature: 24,
// 		humidity: 0.43,
// 		ecg: 165,
// 		co_level: 1,
// 		createdAt: "9:42 AM",
// 	},
// 	{
// 		temperature: 34,
// 		humidity: 0.45,
// 		ecg: 185,
// 		co_level: 33,
// 		createdAt: "8:53 AM",
// 	},
// 	{
// 		temperature: 17,
// 		humidity: 0.67,
// 		ecg: 64,
// 		co_level: 49,
// 		createdAt: "9:20 AM",
// 	},
// 	{
// 		temperature: 16,
// 		humidity: 0.84,
// 		ecg: 138,
// 		co_level: 71,
// 		createdAt: "9:53 AM",
// 	},
// 	{
// 		temperature: 16,
// 		humidity: 0.82,
// 		ecg: 79,
// 		co_level: 31,
// 		createdAt: "9:17 AM",
// 	},
// ];

function MinerPage({ data }) {
	const temperature = data.map((data) => {
		return {
			x: data.createdAt,
			y: data.temperature,
		};
	});
	const humidity = data.map((data) => {
		return {
			x: data.createdAt,
			y: data.humidity,
		};
	});
	const co_level = data.map((data) => {
		return {
			x: data.createdAt,
			y: data.co_level,
		};
	});
	const ecg = data.map((data) => {
		return {
			x: data.createdAt,
			y: data.ecg,
		};
	});

	return (
		<div className="container-fluid mx-0 px-0 ">
			<Header />
			<div className="head  text-center  d-flex flex-row justify-content-between shadow">
				<p
					className="text-uppercase  pt-2 px-2"
					style={{ fontFamily: "Merriweather" }}>
					{" "}
					Dei Francois
				</p>
				<p
					className="text-uppercase  pt-2 px-2"
					style={{ fontFamily: "Merriweather" }}>
					{" "}
					Age: 20
				</p>
				<p
					className="text-uppercase pt-2 px-2 text-danger "
					style={{ fontFamily: "Merriweather" }}>
					{" "}
					Emergency Tel: 0780000000
				</p>
			</div>
			<div className="d-flex flex-column g-2">
				<div className="d-flex flex-row my-2 ">
					<Temperature graphData={temperature} />
					<ECGE graphData={ecg} />
				</div>
				<div className="d-flex flex-row ">
					<Humidity graphData={humidity} />
					<MQ graphData={co_level} />
				</div>
			</div>
		</div>
	);
}

export default MinerPage;
