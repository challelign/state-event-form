import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
	Box,
	Card,
	CssBaseline,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	LinearProgress,
	Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/system";
import { useState } from "react";
const DateCounter = () => {
	const [step, setStep] = useState(1);
	const [count, setCount] = useState(0);

	const date = new Date();
	date.setDate(date.getDate() + count);
	const handleStepPrev = () => {
		setStep((step) => step - 1);
	};
	const handleStepNext = () => {
		setStep((step) => step + 1);
	};

	const handleCountPrev = () => {
		setCount((count) => count - step);
	};
	const handleCountNext = () => {
		setCount((count) => count + step);
	};
	return (
		<>
			<Container fixed>
				<LinearProgress color="inherit" />

				<CssBaseline />
				<Box>
					<Button onClick={handleStepPrev}>-</Button>
					<Button disabled>Step : {step}</Button>
					<Button onClick={handleStepNext}>+</Button>
				</Box>
				<Box>
					<Button onClick={handleCountPrev}>-</Button>
					<Button disabled>Count : {count}</Button>
					<Button onClick={handleCountNext}>+</Button>
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
			</Container>
		</>
	);
};

export default DateCounter;
