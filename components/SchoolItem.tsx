import Link from 'next/link'

const SchoolItem = ({ school }:any) => {
    return (
        <Link href={`/school/${school.id}`}>
                <h3>{school.name} &rarr;</h3>
                <p>{school.id}</p>
        </Link>
    )
}

export default SchoolItem