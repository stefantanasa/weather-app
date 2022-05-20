import React, { useEffect, useState } from "react"
import { Form, Row, Container } from "react-bootstrap"
import Results from "./Results";
import Search from './Search';
import { Details } from "../types/Interfaces";

const Homepage=()=>{
    const [data,setData] = useState<Details | null>(null)
    const [city, setCity]= useState("London")

    const fetchData = async(city:string)=>{
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b0f2c7e2a9b97a2e1a02bea8e90f50ee`)
        if (response.ok){
            let allData = await response.json() as Details
            setData(allData)
            console.log(allData)
        }
    }
    useEffect(()=>{
        fetchData(city)
        console.log(city)
    },[])
    useEffect(()=>{
        
        console.log(city)
    },[city])

    return <Row>
        <Container>
            <Row>

            <Search setCity={setCity}/>
            </Row>
            <Row>
                {data && <Results allData={data}/>}

            </Row>
        </Container>
    </Row>
}

export default Homepage