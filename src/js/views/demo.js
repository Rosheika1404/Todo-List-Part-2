import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const data = store.data;
	useState("");

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
								actions.addTodo({ label: todo, done: false });
								setTodo("");
							}
						}}
						className="btn btn-success m-2 add">
						Add{" "}
					</button>

					{data &&
						data.map((element, index) => (
							<div key={index}>
								{element.label}

								<button
									onClick={() => actions.deleteTodo(data.filter(remove => remove !== element))}
									className=" delete btn btn-warning">
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
