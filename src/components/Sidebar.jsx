import './sidebar.css';
function Sidebar() {
	return (
		<ul className="new_sidebar  flex-column align-items-center pt-3">
			<li className="px-3 py-2 text-white">Dashboard</li>
			<li className="px-3 py-2 text-white">Candidates</li>
			<li className="px-3 py-2 text-white">Voters</li>
			<li className="px-3 py-2 text-white">votes</li>
			<li className="px-3 py-2 text-white">admin</li>
		</ul>
	);
}

export default Sidebar;
