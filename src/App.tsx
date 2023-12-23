import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<div className="h-screen w-screen flex flex-col justify-center items-center gap-8">
				<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
					Vite + shadcn/ui
				</h1>
				<div className="flex flex-col gap-2">
					<Button onClick={() => setCount((count) => count + 1)}>
						{" "}
						count is {count}
					</Button>
					<p className="leading-7">
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<div className="fixed top-8 right-8">
					<ModeToggle />
				</div>
			</div>
		</div>
	);
}

export default App;
