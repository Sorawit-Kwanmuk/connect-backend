import { useState } from 'react';
import axios from 'axios';

function App() {
  // localStorage.setItem('message', 'Welcome Local Storage');
  // console.log(localStorage.getItem('message'));
  // console.log(localStorage.getItem('user'));
  // localStorage.removeItem('message');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(null);

  const handleSubmitLogin = async e => {
    try {
      e.preventDefault();
      const res = await axios.post('http://localhost:8524/login', {
        username: username,
        password: password,
      });
      console.log(res.data);
    } catch (error) {
      console.dir(error); //dir = directory
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '2rem' }}>
      <form onSubmit={handleSubmitLogin}>
        <label htmlFor=''>Username</label>
        <input
          type='text'
          name='username'
          placeholder='Username'
          onChange={e => setUsername(e.target.value)}
        />
        <label htmlFor=''>Password</label>
        <input
          type='text'
          name='password'
          placeholder='Password'
          onChange={e => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default App;
