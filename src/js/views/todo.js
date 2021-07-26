import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const Todo = ({ element, index }) => {
	const { store, actions } = useContext(Context);
	const [update, setUpdate] = useState("");
	const [edit, setEdit] = useState(false);
	const data = store.data;

	return (
		<div>
			{edit === true ? (
				<input className="border" paceholder={element.label} onChange={e => setUpdate(e.target.value)} />
			) : (
				element.label
			)}
			{!edit ? <i className="fas fa-pencil-alt" onClick={() => setEdit(true)} /> : ""}
			{edit ? (
				<button
					className="btn btn-outline-secondary"
					onClick={() => {
						actions.updateTodo(update, index);
						setEdit(false);
					}}>
					<i className="fas fa-edit" />
				</button>
			) : (
				""
			)}
			<button
				onClick={() => actions.deleteTodo(data.filter(remove => remove !== element))}
				className="delete btn btn-warning">
				<i className="fas fa-trash" />
			</button>
		</div>
	);
};

Todo.propTypes = {
	element: PropTypes.object,
	index: PropTypes.number
};

export default Todo;
