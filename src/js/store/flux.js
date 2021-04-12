const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getPeople: async () => {
				await fetch("https://swapi.dev/api/people/")
					.then(res => res.json())
					.then(data => setStore({ people: data.results }))
					.catch(err => console.error(err));
			},

			getPlanets: async () => {
				await fetch("https://swapi.dev/api/planets/")
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }))
					.catch(err => console.error(err));
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
