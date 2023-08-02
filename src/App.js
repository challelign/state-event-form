import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, CssBaseline, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/system";
import { useState } from "react";
import CommonButton from "./components/CommonButton";
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
		//  general way
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
				<Button
					variant="outlined"
					className="close"
					onClick={() => setIsOpen((open) => !open)}
					sx={{ m: 2 }}
				>
					&times;
				</Button>
			</Container>

			{isOpen && (
				<Container fixed>
					<CssBaseline />
					<Box>
						<Button
							sx={{
								...(step >= 1 && {
									border: "1px solid",
									borderColor: "primary",
									color: "primary",
									m: 1,
									backgroundColor: "transparent",
								}),
							}}
						>
							1
						</Button>
						<Button
							sx={{
								...(step >= 2 && {
									border: "1px solid",
									borderColor: "primary",
									color: "primary",
									m: 1,
									backgroundColor: "transparent",
								}),
							}}
						>
							2
						</Button>
						<Button
							sx={{
								...(step >= 3 && {
									border: "1px solid",
									borderColor: "primary",
									color: "primary",
									m: 1,
									backgroundColor: "transparent",
								}),
							}}
						>
							3
						</Button>
					</Box>
					<Typography>
						Step {step}: {messages[step - 1]}
					</Typography>

					<Stack spacing={2} direction="row">
						<Button onClick={handlePrevious} variant="outlined">
							previous
						</Button>
						<Button onClick={handleNext} variant="outlined">
							Next
						</Button>

						{/* using Common Button  */}
						<CommonButton
							textColor="#fff"
							bgColor="#7950f2"
							onClick={handlePrevious}
						>
							<span>👈</span> previous Using Common Btn
						</CommonButton>
						<CommonButton
							textColor="#fff"
							bgColor="#7950f2"
							onClick={handleNext}
						>
							Next Using Common Btn<span>👉</span>
						</CommonButton>
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
