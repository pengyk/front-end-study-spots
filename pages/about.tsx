import type {NextPage} from "next";


const About:NextPage = (schools) => {
    console.log(schools);
    return (
        <div>
            something
        </div>
    )
}

export const getStaticProps = async() => {
    const res = await fetch(`http://localhost:8080/api/v1/school`);
    const schools = await res.json();
    return {
        props:{
            schools
        }
    }
}

export default About;