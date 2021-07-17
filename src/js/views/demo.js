import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	let data = store.data;
	const [list, setList] = useState([]);
	const [todo, setTodo] = useState("");

	return (
		<div className="container">
			<div className="text-center mt-5 notepad">
				<div className="list">
					<h1>To-Do List</h1>
					<input
						className="input text-center"
						value={todo}
						placeholder="What do you need to do? "
						onChange={e => setTodo(e.target.value)}
					/>

					<button
						onClick={() => {
							// setList([...list, todo]);
							if (todo === "") {
								alert("Add Task");
							} else {
								actions.addTodo(todo);
								setTodo("");
							}
						}}
						className="btn btn-success m-2 add">
						Add{" "}
					</button>

					{data.map((element, index) => (
						<div key={index}>
							{element}
							<button onClick={() => actions.deleteTodo(element)} className=" delete btn btn-warning">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
					))}
				</div>
			</div>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
