import React from 'react';





const Card = (props) => {
  
  return (
    <div className='fixture-card'>
            <div className='fixture-league'>
                <img src={props.league.logo} />
                <span>{props.league.name}</span>
            </div>
            <div className='fixture-details'>
                <div className='fixture-time'>
                    <span>{props.date}</span><br/>
                    {props.time}
                </div>

                <div className='fixture-teams'>
                    <div className='home-team team'>
                        <p className='team-name'>{props.teams.home.name}</p>
                        <img className='team-logo' src={props.teams.home.logo}></img>
                    </div>
                    <div className='verses'>Vs</div>
                    <div className='away-team team'>
                        <img className='team-logo' src={props.teams.away.logo}></img>
                        <p className='team-name'>{props.teams.away.name}</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Card