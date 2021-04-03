// Write your Character component here
import React from "react"
import styled from "styled-components"

const StyleDetail = styled.div`
    color: white;
`
export default function Character({currentCharacter ,close, character}){

    return (
        <StyleDetail className = "details">
            <p> Gender: {currentCharacter.gender}</p>
            <p> Height: {currentCharacter.height}</p>
            <p> Mass: {currentCharacter.mass}</p>
            <p> Birth Year: {currentCharacter.birth_year}</p>
            <p> Eye Color: {currentCharacter.eye_color}</p>
            <p> Hair Color: {currentCharacter.hair_color}</p>
            <p> Skin Color: {currentCharacter.skin_color}</p>
        </StyleDetail>
    )
}