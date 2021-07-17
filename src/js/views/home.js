import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export function Home() {
	return (
		<div classNameName="text-center mt-5 notepad">
			<div className="jumbotron justify-content-center text-center">
				<h1 className="display-4 ">Welcome to the Task List</h1>

				<hr className="my-4" />
				<p>
					It uses utility classNamees for typography and spacing to space content out within the larger
					container.
				</p>
				<Link to="/demo">
					<button className="justify-content-center btn btn-primary btn-lg">Enter Here</button>
				</Link>
			</div>
		</div>
	);
}
