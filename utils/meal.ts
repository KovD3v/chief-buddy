import { useEffect, useState } from "react";

export interface Meal {
	strMeal: string;
	strMealThumb: string;
	strInstructions: string;
}

export const useMeal = () => {
	const [meal, setMeal] = useState<Meal | null>();

	const fetchMeal = async () => {
		const response = await fetch(
			"https://www.themealdb.com/api/json/v1/1/random.php"
		);
		const data = await response.json();
		setMeal(data.meals[0]);
	};

	useEffect(() => {
		fetchMeal();
	}, []);

	return [meal, fetchMeal, setMeal] as const;
};