import { useEffect, useState } from 'react'

function useFetch(url) {
    const [users, setUsers] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                console.log(data[3].address.street);
            })
    }, [])

    return [users]
}

export default useFetch