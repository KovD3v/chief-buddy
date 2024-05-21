import Image from "next/image";
import logo from "../app/logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
	return (
		<div className="flex flex-row w-full p-6 justify-around items-center">
			<div className="flex flex-col items-center gap-3 font-bold font-mono">
				<Image src={logo} alt="logo" width={75} height={75} />
				Chief Buddy
			</div>
			<Button>
				<Link href="/login">Login</Link>
			</Button>
		</div>
	);
}
