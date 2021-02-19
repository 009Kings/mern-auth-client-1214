import { useState } from 'react';

const Signup = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // TODO add form password verification

  const handleSubmit = e => {
    e.preventDefault();

    console.log(`Sending up new user data`, {name, email, password})
  }

  return (
    <section>
      <h2>SIGNUP</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-elem">
          <label htmlFor="name">Name: </label>
          {/* TODO: see if I need an ID for the label to work */}
          <input 
            type="text" 
            name="name" 
            placeholder="Display Name"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-elem">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            placeholder="lovemtns@provider.com"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-elem">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            placeholder="more long more better"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" value="Signup" />
      </form>
    </section>
  );
}

export default Signup;