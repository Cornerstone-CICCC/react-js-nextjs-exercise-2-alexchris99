import Link from "next/link";

export type User = {
	id: number;
	firstName: string;
	lastName: string;
	maidenName: string;
	age: number;
};

const page = async () => {
	// fetching the data
	const fetchUsers = async () => {
		const res = await fetch("http://localhost:3001/api/users"); // using the api to fetch for the data
		const data = await res.json();
		return data.users;
	};
	// asing the data
	const users: User[] = await fetchUsers();

	return (
		<div className="w-screen items-center text-center">
			<h2 className="text-2xl">User List</h2>
			<ul className="grid grid-cols-6 m-20">
				{users.map((user) => (
					<li
						className="p-4 m-2 text-2xl border-2 border-amber-500"
						key={user.id}
					>
						<Link href={`/users/${user.id}`}>{user.firstName}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default page;
