const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [],
			data: ["hello", "world"]
		},
		actions: {
			addTodo: todo => {
				let list = getStore().data;
				setStore({ data: [...list, todo] });
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
