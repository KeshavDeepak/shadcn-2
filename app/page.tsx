'use client';

import CreateNewOrder from "./create-new-order";
import Orders from "./orders";
import Week from "./week";
import Month from "./month";
import OrderDetails from "./order-details";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function Home() {
	const { data: session } = useSession()

	if (session) {
		return (
			// do not change the order of the components inside the div
			// append new components to the end of the list
			<div id="home-page">
				<CreateNewOrder />
				<Week />
				<Month />
				<Orders />
				<OrderDetails />

				<Button onClick={() => signOut()}>Sign out</Button>
			</div>
		);
	}
	else {
		return (
			<>
				<h1>You are not logged in</h1>
				<Button onClick={() => signIn('github')}>Sign in with github</Button>
			</>
		)
	}

}



// !!! order-details is not coming out as expected (look at the text in this component)
