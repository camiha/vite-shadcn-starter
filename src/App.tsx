import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { TypographyH1, TypographyP } from "@/components/typography";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<div className="h-screen w-screen flex flex-col justify-center items-center gap-8">
				<TypographyH1>Vite + shadcn/ui</TypographyH1>
				<div className="flex flex-col gap-2">
					<Button onClick={() => setCount((count) => count + 1)}>
						{" "}
						count is {count}
					</Button>
					<TypographyP>
						Edit <code>src/App.tsx</code> and save to test HMR
					</TypographyP>
				</div>
				<div className="fixed top-8 right-8">
					<ModeToggle />
				</div>
			</div>
		</div>
	);
}

export default App;
