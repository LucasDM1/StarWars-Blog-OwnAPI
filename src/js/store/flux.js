const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			tokenS: "",
			problem: null,
			registerProblem: null,
			people: [],
			planets: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getPeople: async () => {
				await fetch("https://3000-amethyst-krill-i0j4c55p.ws-us03.gitpod.io/character")
					.then(res => res.json())
					.then(data => setStore({ people: data }))
					.catch(err => console.error(err));
			},

			getPlanets: async () => {
				await fetch("https://3000-amethyst-krill-i0j4c55p.ws-us03.gitpod.io/planet")
					.then(res => res.json())
					.then(data => setStore({ planets: data }))
					.catch(err => console.error(err));
			},

			handleLogin: (user, password) => {
				fetch("https://3000-amethyst-krill-i0j4c55p.ws-us03.gitpod.io/login", {
					method: "POST",
					body: JSON.stringify({
						username: user,
						password: password
					}), // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => {
						if (res.status != 200) {
							setStore({ problem: "Wrong username or password" });
						} else {
							setStore({ problem: null });
							return res.json();
						}
					})
					.then(data => {
						console.log(data),
							sessionStorage.setItem("token", data.token),
							setStore({ tokenS: data.token });
					})
					.catch(err => console.error("Error ", err));
			},

			LogOut: () => {
				sessionStorage.removeItem("token");
				setStore({ tokenS: "" });
			},

			handleRegister: async (name, lastname, email, username, password) => {
				await fetch("https://3000-amethyst-krill-i0j4c55p.ws-us03.gitpod.io/user", {
					method: "POST", // or 'POST'
					body: JSON.stringify({
						name: name,
						lastname: lastname,
						username: username,
						email: email,
						password: password
					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => {
						if (res.status != 200) {
							setStore({ registerProblem: "Some fields are missing" });
						} else {
							setStore({ registerProblem: null });
							return res.json();
						}
					})
					.then(data => {
						console.log("data: ", data);
					})
					.catch(err => console.error("Error ", err));
			},

			getFavCharacters: index => {
				const store = getStore();
				let object = store.favorites.includes(store.people[index]);

				if (object == false) {
					store.favorites.push(store.people[index]);
					setStore(store);
				}
			},
			getFavPlanets: index => {
				const store = getStore();
				let object = store.favorites.includes(store.planets[index]);

				if (object == false) {
					store.favorites.push(store.planets[index]);
					setStore(store);
				}
			},
			RemoveFav: id => {
				const store = getStore();
				store.favorites.splice(id, 1);
				setStore(store);
			}
		}
	};
};

export default getState;
