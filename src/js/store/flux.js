const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [],
			data: []
		},
		actions: {
			getTodo: () => {
				fetch("https://assets.breatheco.de/apis/fake/todos/user/rosheika1")
					.then(res => res.json())
					.then(response => setStore({ data: response }));
			},
			addTodo: todo => {
				todo = [...getStore().data, todo];
				console.log("todo", todo);
				fetch("https://assets.breatheco.de/apis/fake/todos/user/rosheika1", {
					method: "PUT",
					body: JSON.stringify(todo),
					headers: {
						"Content-Type": "application/json"
					}
				}).then(() => getActions().getTodo());
				// let list = getStore().data;
				// setStore({ data: [...list, todo] });
			},
			deleteTodo: element => {
				let deleteItem = getStore().data;
				deleteItem = deleteItem.filter(remove => remove !== element);
				setStore({ data: deleteItem });
			}
		}
	};
};

export default getState;
