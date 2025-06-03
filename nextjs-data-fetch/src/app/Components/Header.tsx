import Link from "next/link";
const Header = () => {
	return (
		<header>
			<nav>
				<menu>
					<ul className="flex justify-around mb-8 mt-8">
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/users">Users</Link>
						</li>
					</ul>
				</menu>
			</nav>
		</header>
	);
};

export default Header;
