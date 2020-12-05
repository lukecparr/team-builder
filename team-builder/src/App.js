import React, {useState} from 'react';
import './App.css';
import Members from './Members'
import Form from './Form'

function App() {
  const [members, setMembers] = useState([{name: 'Luke', email: 'lp@pm.me', roles: 'Admin'}])

  const addNewMember = (member) => {
  const newMember = {
      name: member.name,
      email: member.email,
      roles: member.roles
    };

    setMembers([...members, newMember]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Form addNewMember={addNewMember}/>
        <Members members={members}/>
      </header>
    </div>
  );
}

export default App;
