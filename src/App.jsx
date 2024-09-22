import { useEffect } from "react";

function App() {
	useEffect(() => {
		const url = "https://api.themoviedb.org/3/account/19004214/lists?page=1";
		const options = {
			method: "GET",
			headers: {
				accept: "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDc0OTY3YTRjNTQ2MGYxNmI1OTc1NjE3OTQ0NTgwOCIsIm5iZiI6MTcyNjU1MzU3OC40Nzk0MSwic3ViIjoiNjQzZTNlOGRlMGNhN2YwMzEzMDZlMWM1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.F96vhULlm1e299o3tGRBwD90GuyzVE7g96Op0XNUheY",
			},
		};

		fetch(url, options)
			.then((res) => res.json())
			.then((json) => console.log(json))
			.catch((err) => console.error("error:" + err));
	}, []);
	return <div>App</div>;
}

export default App;
