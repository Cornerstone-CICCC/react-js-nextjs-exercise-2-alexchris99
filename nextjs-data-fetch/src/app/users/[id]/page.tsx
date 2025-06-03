import type { User } from "../page";

type Props = {
	params: Promise<{ id: string }>;
};
const page = async ({ params }: Props) => {
	const { id } = await params;
	const res = await fetch(`https://dummyjson.com/users/${id}`);
	const data: User = await res.json();

	return (
		<div className="text-center text-2xl m-50">
			<h2>First Name: {data.firstName}</h2>
			<h2>Middle Name: {data.maidenName}</h2>
			<h2>Last Name: {data.lastName}</h2>
			<h2>Age: {data.age}</h2>
		</div>
	);
};

export default page;
