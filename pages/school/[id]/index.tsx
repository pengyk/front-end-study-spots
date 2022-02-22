import React from "react";
import {server} from "../../../config"
import {useRouter} from "next/router";

const School = (school:any) => {
    const router = useRouter();
    const id = router.query
    console.log(school);
    return (
        <div>
            {school.id}
        </div>
    )
}

export const getStaticProps = async (context:any) => {
    const res = await fetch(`${server}/api/v1/school/${context.params.id}`)

    const school = await res.json()

    return {
        props: {
            school
        },
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/v1/school/`)

    const articles = await res.json()

    const ids = articles.map((article) => article.id)
    const paths = ids.map((id) => ({ params: { id: id.toString() } }))
    console.log(paths);
    return {
        paths,
        fallback: false,
    }
}



export default School;