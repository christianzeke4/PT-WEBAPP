import React from 'react'
import {LguNavbar} from '../Navbar/Navbar';
import sellerProfile from '../../Assets/pet-seller-profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

//CSS
import '../../profile.css';
import '../../App.css';
function LguPetSeller() {
  return (
    <div className='main-bg'>
        <LguNavbar/>
        <div className="main-content">
            
            <header>
                <h1>
                    Pet Seller
                </h1>
            </header>
            <div className="container">
                <div className="row">
                    <a href="../LGU-RegisteredPet/Add Pet/lgu-add-pet.html">
                        <div className="button-wrapper">
                            <button type="button" className="add">ADD NEW</button>
                        </div>
                    </a>
                </div>
                <div className="row filter">
                    <div className="col search-wrapper">
                        <FontAwesomeIcon className='glass' icon={faMagnifyingGlass}/>
                        <input className='search' type="search" placeholder="Search here"/>
                    </div>
                    <div className="col select-wrapper">
                        <form className="form">
                            <label className=''>Search By</label>
                            <select>
                                <option value = "ID_Number"> ID Number 
                                </option>
                                <option value = "Name"> Name 
                                </option>
                                <option value = "Color"> Color
                                </option>
                                <option value = "Breed"> Breed
                                </option>
                            </select>
                        </form>
                    </div>
                    <div className="col">
                        <button type="button" className="button">Search</button>
                    </div>

                    <div className="cold dropdown">
                        <button className="button">Sort By</button>
                        <div className="dropdown-content">
                        <a href="#">Name</a>
                        <a href="#">Date Registered</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="pet-card">
                        <a>
                            <img src={sellerProfile} alt="profile"/>
                            <div>
                                <h4><center><b>John Doe</b></center></h4> 
                            </div>
                        </a>
                    </div>
                </div>
            </div>	
        </div>
    </div>	
  )
}

export default LguPetSeller