import React from 'react';
import './App.css';

function Member(props) {
	const {member} = props;

	return (
		<div class='member'>
			<h1>Name: {member.name}</h1>
			<h2>Email: {member.email}</h2>
			<p>Roles: {member.roles}</p>
		</div>
	);
};


export default Member;
