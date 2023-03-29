import React, { useMemo, memo } from "react";

const Filter = memo(
    ({ users }) => {
        console.log('Component runnn...');
        return (
            <>
                {
                    useMemo(() => {
                        return users.filter(user => {
                            console.log('sdfsd52')
                            return user.userName.length < 6
                        }).map(user => {
                            return <li key={user.pass}>
                                {user.userName} || {user.pass} || {user.birthDay}
                            </li>
                        })
                    }, [users])
                }
            </>
        )
    }
)

export default Filter