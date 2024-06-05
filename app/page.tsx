'use client';

import CreateNewOrder from "./create-new-order";
import Orders from "./orders";
import Week from "./week";
import Month from "./month";
import OrderDetails from "./order-details";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { LoginForm } from "./authentication-page";
import { redirect } from 'next/navigation';


export default function Home() {
	const { data: session } = useSession();

	// if session exists, redirect to the dashboard
	if (session) {
		redirect("dashboard");
	}
	return (
		<>
			<h1>You are not logged in</h1>
			<Button onClick={() => signIn('github')}>Sign in with github</Button>

			{/* <LoginForm /> */}
		</>
	)

}



// !!! order-details is not coming out as expected (look at the text in this component)
// !!! add a middleware