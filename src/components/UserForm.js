import React, { useState } from "react";
import { connect } from "react-redux";
import { setUserInfo } from "../redux/actions";
import styles from "../styles/UserForm.module.css"; 

const UserForm = ({ setUserInfo }) => {
  
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

   
    setUserInfo({ name, status });


    setName('');
    setStatus('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Имя:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Статус:</label>
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        />
      </div>
      <button type="submit">Обновить информацию</button>
    </form>
  );
};


const mapDispatchToProps = {
  setUserInfo,
};

export default connect(null, mapDispatchToProps)(UserForm);