import React from 'react'
import './Header.css'
import AccountButton from './AccountButton'

interface UpperRightProps {
    loginStatus: boolean
}

function UpperRight({ loginStatus }: UpperRightProps) {
    function changeLoginStatus(){
        console.log("here we will log in or out");
    }
    return (
        <div className="upper-right">
            <AccountButton loginStatus={loginStatus} accountAction={() => changeLoginStatus()} />
        </div>
    )
}
export default UpperRight