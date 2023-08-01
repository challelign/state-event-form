import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
	Box,
	CssBaseline,
	Input,
	LinearProgress,
	Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import { useState } from "react";
const DateCounterRangeAndInputField = () => {
	const [step, setStep] = useState(1);
	const [count, setCount] = useState(0);

	const date = new Date();
	date.setDate(date.getDate() + count);

	const handleCountPrev = () => {
		setCount((count) => count - step);
	};
	const handleCountNext = () => {
		setCount((count) => count + step);
	};

	const handleReset = () => {
		setCount(0);
		setStep(1);
	};
	return (
		<>
			<Container fixed>
				<LinearProgress color="inherit" />
				<br></br>
				<CssBaseline />

				<input
					type="range"
					min="0"
					max="10"
					value={step}
					onChange={(e) => setStep(Number(e.target.value))}
				></input>
				<span>Step: {step}</span>
				<br></br>
				<Box>
					<Button sx={{ m: 2 }} variant="outlined" onClick={handleCountPrev}>
						-
					</Button>
					<Input
						type="text"
						value={count}
						onChange={(e) => setCount(Number(e.target.value))}
					/>
					<Button sx={{ m: 2 }} variant="outlined" onClick={handleCountNext}>
						+
					</Button>
				</Box>

				<Typography>
					<br></br>
					<span>
						{count === 0
							? "Today is "
							: count > 0
							? `${count} days from today is `
							: `${Math.abs(count)} days ago was `}
					</span>

					<span>{date.toDateString()}</span>
					<br></br>
				</Typography>
				{count !== 0 || step !== 1 ? (
					<Button variant="outlined" onClick={handleReset}>
						Reset
					</Button>
				) : null}
			</Container>
		</>
	);
};

export default DateCounterRangeAndInputField;
