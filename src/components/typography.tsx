export function TypographyH1({ children }: { children: React.ReactNode }) {
	return (
		<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
			{children}
		</h1>
	);
}

export function TypographyH2({ children }: { children: React.ReactNode }) {
	return (
		<h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
			{children}
		</h2>
	);
}

export function TypographyH3({ children }: { children: React.ReactNode }) {
	return (
		<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
			{children}
		</h3>
	);
}

export function TypographyH4({ children }: { children: React.ReactNode }) {
	return (
		<h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
			{children}
		</h4>
	);
}

export function TypographyP({ children }: { children: React.ReactNode }) {
	return <p className="leading-7">{children}</p>;
}

export function TypographyBlockquote({
	children,
}: { children: React.ReactNode }) {
	return (
		<blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
	);
}

export function TypographyTable({ children }: { children: React.ReactNode }) {
	return <table className="w-full">{children}</table>;
}

export function TypographyTHead({ children }: { children: React.ReactNode }) {
	return <thead>{children}</thead>;
}

export function TypographyTBody({ children }: { children: React.ReactNode }) {
	return <tbody>{children}</tbody>;
}

export function TypographyTr({
	children,
}: { children: React.ReactNode; isMuted: boolean }) {
	return <tr className="m-0 border-t p-0 even:bg-muted">{children}</tr>;
}

export function TypographyTh({ children }: { children: React.ReactNode }) {
	return (
		<th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
			{children}
		</th>
	);
}

export function TypographyTd({ children }: { children: React.ReactNode }) {
	return (
		<td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
			{children}
		</td>
	);
}

export function TypographyUl({ children }: { children: React.ReactNode }) {
	return <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>;
}

export function TypographyLi({ children }: { children: React.ReactNode }) {
	return <li>{children}</li>;
}

export function TypographyCode({ children }: { children: React.ReactNode }) {
	return (
		<code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
			{children}
		</code>
	);
}

export function TypographyLead({ children }: { children: React.ReactNode }) {
	return <p className="text-xl text-muted-foreground">{children}</p>;
}

export function TypographyLarge({ children }: { children: React.ReactNode }) {
	return <div className="text-lg font-semibold">{children}</div>;
}

export function TypographySmall({ children }: { children: React.ReactNode }) {
	return <small className="text-sm font-medium leading-none">{children}</small>;
}

export function TypographyMuted({ children }: { children: React.ReactNode }) {
	return <p className="text-sm text-muted-foreground">{children}</p>;
}
