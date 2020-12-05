import React, {useState} from 'react';

function MemberForm(props) {
	const [newMember, setNewMember] = useState({name: '', email: '', roles: '',})
	const {addNewMember} = props;

	const handleChange = (event) => {
		setNewMember({ ...newMember, [event.target.name]: event.target.value});
	};
	
	const submitForm = (event) => {
		event.preventDefault();
		addNewMember(newMember);
		setNewMember({name: '', email: '', roles: '',})
	}

	return (
		<form onSubmit={submitForm}>
			<label htmlFor="name">Name </label>
			<input
				type = "text"
				id = "name"
				name = "name"
				placeholder = "Joe Schmo"
				onChange = {handleChange}
				value = {newMember.name}
			/><br/>
			
			<label htmlFor="email">Email </label>
			<input
				type="email"
				id = "email"
				name = "email"
				placeholder = "js@pm.me"
				onChange = {handleChange}
				value = {newMember.email}
			/><br/>
				
			<label htmlFor="email">Roles </label>
			<input
				type="text"
				id = "roles"
				name = "roles"
				placeholder = "Chief Snack Eater"
				onChange = {handleChange}
				value = {newMember.roles}
			/><br/>
			<button type='submit'>Add Member</button>
		</form>
	)
}

export default MemberForm;