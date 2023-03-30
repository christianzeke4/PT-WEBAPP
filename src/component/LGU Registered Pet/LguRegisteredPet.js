import React, { useState,useEffect } from 'react'
import petProfile from '../../Assets/bingo.jpg';
import {LguNavbar} from '../Navbar/Navbar';
import storage from '../../FirebaseStorage';
import db from '../../Firebase.js';
// import 'bootstrap/dist/css/bootstrap.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
//CSS
import '../../profile.css';
import '../../App.css';
function LguRegisteredPet() {
    const [allPets, setAllPets] = useState([]);

  useEffect(() => {
    db.collection("Pets_Profile")
      .get()
      .then((querySnapshot) => {
        const promises = [];
        querySnapshot.forEach((doc) => {
          const id = doc.data().P_IDNumber;
          const pets = doc.data().P_Name;

          const promise = storage
            .ref()
            .child(`Pet/${id}`)
            .getDownloadURL()
            .then((url) => {
              return { pets, url };
            })
            .catch((error) => {
              console.log(error);
              return null;
            });

          promises.push(promise);
        });

        Promise.all(promises).then((data) => {
          setAllPets(data.filter((item) => item !== null));
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);
    
  return (
	<div className='main-bg'>
        <LguNavbar/>
        <div className="main-content">
            
            <header>
                <h1>
                    LGU Registered Pets
                </h1>
            </header>
            <div className="container">
                <div className="row">
                    <a>
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
                <div className="row rowCard">
                    {allPets.map((doc) => (
                        <div className="pet-card" key={doc.id}>
                            <a>
                                <img src={doc.url} alt="profile"/>
                                <div>
                                    <h4><center><b>{doc.pets}</b></center></h4> 
                                </div>
                            </a>   
                        </div>
                    ))}
                </div>
            </div>	
        </div>
    </div>	
	
  )
}

export default LguRegisteredPet