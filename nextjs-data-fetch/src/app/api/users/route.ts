// this route will behave as an json document
export const revalidate = 3600; // this will keep the info
export async function GET() {
	const res = await fetch("https://dummyjson.com/users");
	const data = await res.json();
	return Response.json(data);
}
