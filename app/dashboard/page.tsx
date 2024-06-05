'use client';

import CreateNewOrder from "../create-new-order";
import Orders from "../orders";
import Week from "../week";
import Month from "../month";
import OrderDetails from "../order-details";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { redirect } from 'next/navigation';

export default function Home() {
	const { data: session } = useSession();

    // if signout button has been clicked, then go back to the sign in page
    if (!session) { redirect("../")};

    return (
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