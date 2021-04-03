import React , {useState, useEffect} from "react"
import Character from "./components/Character"
import axios from "axios"
import styled from "styled-components"
import './App.css';
import {Container, Row, Col} from 'reactstrap'


const StyledHeader = styled.div`
  h1{
    color: white;
  }
  button{
    background-color: black;
    color: white;
    border: 2px solid green;
    text-align: center;
    display: block;
    margin:auto;
    font-size: 100px
    position: relative;
  
  }
`
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [character, setCharacter] = useState([])
  const [currentCharacter, setCurrentCharacter] = useState(null)

  const openDetails = item => {
      setCurrentCharacter(item)
  }
  const closeDetails = () => {
      setCurrentCharacter(null)
  }
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/`)
        .then(res => {
            console.log(res.data)
            setCharacter(res.data)
        })
        .catch(err => {
            console.log(err)
        })
  }, [])

  return (
    <StyledHeader className="App">
      <Container>
        <h1>REACT WARS </h1>
          <Row>
          {character.map ((item, index)=> (
            <button key = {index} onClick = {() => openDetails(item)}>{item.name}</button>
          ))}
          {currentCharacter && < Character currentCharacter = {currentCharacter}  close = {closeDetails} character = {character}/>}
          </Row>
      </Container>
    </StyledHeader>
  );
}

export default App;
