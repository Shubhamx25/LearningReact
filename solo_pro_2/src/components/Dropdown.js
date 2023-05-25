import React from 'react'

const Dropdown = () => {
  return (
    <div class="container">
  <ul>
    <li class="dropdown">
      <input type="checkbox" />
      <a href="#" data-toggle="dropdown">Primier League</a>
      <ul class="dropdown-menu">
        <li><a href="#" id='serieA'>Serie A</a></li>
        <li><a href="#" id='bundesliga'>BundesLiga</a></li>
        <li><a href="#" id='laliga'>La liga</a></li>
        <li><a href="#" id='league1'>league 1</a></li>
      </ul>
    </li>
   
  </ul>
</div>
  )
}

export default Dropdown