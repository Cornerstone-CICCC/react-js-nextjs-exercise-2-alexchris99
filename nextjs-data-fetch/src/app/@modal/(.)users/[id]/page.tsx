import type { User } from "@/app/users/page";
import Link from "next/link";

type Props = {
	params: Promise<{ id: string }>;
};

const page = async ({ params }: Props) => {
	const { id } = await params;
	const res = await fetch(`http://localhost:3001/api/users/${id}`);
	const data: User = await res.json();
	return (
		<div className="fixed w-screen h-screen top-0 left-0 bg-black/70 flex items-center justify-center">
			<div className="bg-white text-black p-3 w-1/3 items-center text-center">
				<h3>Id: {data.id}</h3>
				<h3>First Name:{data.firstName}</h3>
				<h3>Last Name: {data.lastName} </h3>
				<a
					className="border-1 p-2  inline-block rounded-md shadow-md"
					href="/users"
				>
					Close
				</a>
				<a
					className="border-1 p-2  inline-block rounded-md shadow-md"
					href={`/users/${data.id}`}
				>
					View User
				</a>
			</div>
		</div>
	);
};

export default page;
