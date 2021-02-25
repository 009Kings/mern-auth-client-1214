import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import BountyCard from '../partials/BountyCard';
import ErrorCard from '../partials/ErrorCard';
import axios from 'axios';

export default function Bounties(props) {
  const [bounties, setBounties] = useState([]);
  const [bountyNum, setBountyNum] = useState(0);
  const [error, setError] = useState(null);
  const [toggleRefresh, setToggleRefresh] = useState(false);

  // call to API to get all bounties
  useEffect(()=>{
    // Call the server
    axios.get(`${process.env.REACT_APP_SERVER_URL}/bounties`)
    .then(response => {
      // check response is good
      if (response.status >= 200) {
        // set the bounties
          setBounties(response.data)
          setBountyNum(response.data.length)
        } else {
          setError(response.statusText)
        }
      })
      .catch(err => {
        console.log('💔')
        setError(err.message)
      })
  }, [bountyNum])

  let bountyList = bounties.length < 1 ? 
    <h3>There are no bounties</h3> :
    bounties.map((bounty, i) => (
      // TODO: pass bounty deets
      <BountyCard key={`bounty-${i}`} {...bounty} setError={setError} setBountyNum={setBountyNum} />
    ))

  if (toggleRefresh) return <Redirect to='/bounties' />
  
  return (
    <div>
      {error ? <ErrorCard error={error} /> : null}
      <h1>Intergalactic Bounty Board</h1>
      <Link className="new-bounty-card" to='/bounties/add'>Add a Bounty</Link>
      <div className="bounty-container">
        {bountyList}
      </div>
    </div>
  )
}