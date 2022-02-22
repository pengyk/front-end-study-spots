import type { NextPage } from 'next'
import Hero from "../components/Hero";
import {useEffect, useState} from "react";
import {server} from "../config";
import School from "../shared/Elements";


const Home: NextPage = () => {
    const [schools, setSchools] = useState<School[]>([])

    useEffect(() => {
        fetch(server + "/api/v1/school")
            .then(res => res.json())
            .then(data => setSchools(data))
            .catch(err => console.log(err));
    });

    return (
    <div>
        <Hero schools={schools}/>
    </div>
  )
}

export default Home
