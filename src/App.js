import "./App.css";
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
	Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/system";
import { useState } from "react";
const messages = [
	"Learn React *",
	"Apply for Jobs ",
	"Invest your new income ",
];

function App() {
	const [step, setStep] = useState(1);
	const [isOpen, setIsOpen] = useState(true);
	const [showMore, setShowMore] = useState(false);

	const handlePrevious = () => {
		// if (step > 1) setStep(step - 1);
		// best general way
		if (step > 1) {
			setStep((s) => s - 1);
		}
	};

	const handleNext = () => {
		// if (step < 3) setStep(step + 1);
		if (step < 3) {
			setStep((s) => s + 1);
		}
	};
	return (
		<>
			<Container>
				<Button className="close" onClick={() => setIsOpen((open) => !open)}>
					&times;
				</Button>
			</Container>

			{isOpen && (
				<Container fixed>
					<CssBaseline />
					<Box>
						<Button className={step >= 1 ? "active" : ""} variant="contained">
							1
						</Button>
						<Button className={step >= 2 ? "active" : ""}>2</Button>
						<Button className={step >= 3 ? "active" : ""}>3</Button>
					</Box>
					<Typography>
						Step {step}: {messages[step - 1]}
					</Typography>

					<Stack spacing={2} direction="row">
						<Button onClick={handlePrevious} variant="contained">
							previous
						</Button>
						<Button onClick={handleNext} variant="outlined">
							Next
						</Button>
					</Stack>

					<Button className="show" onClick={() => setShowMore((open) => !open)}>
						Detail
					</Button>

					{showMore && (
						<Typography>
							Step {step}: {messages[step - 1]}
							<br></br>
							Frontend Masters - Check out the new Complete Intro to React
							course and learn to build real-world apps. ad by Carbon
						</Typography>
					)}
				</Container>
			)}
		</>
	);
}

export default App;
