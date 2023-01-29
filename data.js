const [received, setReceived] = useState([]);
const labels = received.map((data) => data.createdAt);
const humidity = received.map((data) => data.humidity);
const data = {
	labels: labels,
	datasets: [
		{
			data: humidity,
			backgroundColor: "transparent",
			borderColor: "#f26c6d",
			pointBorderColor: "transparent",
			pointBorderWidth: 4,
		},
	],
};
const [dbChange, setDbChange] = useState(false);
const options = {
	plugins: {
		legend: false,
	},
	scales: {
		x: {
			grid: {
				display: false,
			},
		},
		y: {
			ticks: {
				stepSize: 0.1,
			},
		},
	},
};
useEffect(() => {
	setReceived(getData());
	socket.on("newData", (newData) => {
		console.log(newData);
		setDbChange(!dbChange);
	});
}, [dbChange]);
