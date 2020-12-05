import React from 'react';
import './App.css';
import Member from './Member'

function Members(props) {
	const {members} = props;
	const membersArr = Array.from(members);
	return (
		<div>
			{membersArr.map(m => (
				<Member member={m} />
			))}
		</div>
	)
};

export default Members;