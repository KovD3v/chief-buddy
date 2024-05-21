"use client";

import React,{ useEffect } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { redirect } from "next/navigation";

const formSchema = z.object({
	email: z.string().email(),
	password: z.string().min(4, "Password must be at least 4 characters"),
	signIn: z.boolean(),
});

export function LoginForm({
	signIn,
	signUp,
	message,
}: {
	signIn: ({
		email,
		password,
	}: {
		email: string;
		password: string;
	}) => Promise<void>;
	signUp: ({
		email,
		password,
	}: {
		email: string;
		password: string;
	}) => Promise<void>;
	message: string;
}) {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
			signIn: true,
		},
	});

	function onSubmit(data: z.infer<typeof formSchema>) {
		data.signIn ? signIn(data) : signUp(data);
	}

	useEffect(() => {
		if (message) {
			console.log(message);
			toast.error(message, { duration: 5000 });
			return redirect("/login");
		}
	}, [message]);

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-8 contents">
				<FormField
					control={form.control}
					name="signIn"
					render={({ field }) => (
						<FormItem>
							<div className="flex justify-center items-center">
								<FormLabel>Sign Up</FormLabel>
								<FormControl>
									<Switch
										className="mx-6"
										checked={field.value}
										onCheckedChange={field.onChange}
									/>
								</FormControl>
								<FormLabel>Sign In</FormLabel>
							</div>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									placeholder="example.mail@gmail.com"
									{...field}
								/>
							</FormControl>
							<FormMessage className="text-red-500" />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									type="password"
									placeholder="••••••••"
									{...field}
								/>
							</FormControl>
							<FormMessage className="text-red-500" />
						</FormItem>
					)}
				/>
				<Button type="submit">
					{
						form.getValues().signIn ? "Sign In" : "Sign Up"
					}
				</Button>
			</form>
		</Form>
	);
}