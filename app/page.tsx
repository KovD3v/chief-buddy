"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";

import Navbar from "@/components/Navbar";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { Lightbulb, Star, HelpCircle, Flame } from "lucide-react";

import { useMeal } from "@/utils/meal";

const pagesCard = [
	{
		title: "Give Me Ideas",
		description: "Like tinder but for food",
		icon: <Lightbulb className="w-full" size={64} />,
	},
	{
		title: "Whit this?",
		description: "Suggestion by ingredients",
		icon: <HelpCircle className="w-full" size={64} />,
	},
	{
		title: "Kinda Want",
		description: "Meals by preference",
		icon: <Star className="w-full" size={64} />,
	},
	{
		title: "Burn",
		description: "The best of th less",
		icon: <Flame className="w-full" size={64} />,
	},
];

export default function Index() {
	const [placeholder] = useMeal();

	return (
		<div className="flex flex-col w-full items-center gap-20">
			<Navbar />
			<div className="grid w-full max-w-sm items-center gap-1.5">
				<Label
					htmlFor="search"
					className="text-xl font-bold text-center">
					Search for a dish
				</Label>
				<Input
					id="search"
					placeholder={placeholder?.strMeal}
					className="m-2 shadow-md"
				/>
			</div>
			<div className="grid w-full sm:grid-cols-2 lg:grid-cols-4 gap-5 p-8">
				{pagesCard.map((card, index) => (
					<Card key={index}>
						<CardHeader>
							<CardTitle>{card.title}</CardTitle>
							<CardDescription>
								{card.description}
							</CardDescription>
						</CardHeader>
						<CardContent>{card.icon}</CardContent>
						<CardFooter>
							<Button className="flex w-full">Try it</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
}
