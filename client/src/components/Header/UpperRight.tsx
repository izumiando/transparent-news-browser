import React from 'react'
import 'Header.css'
import './AccountButton'
import AccountButton from './AccountButton'

function UpperRight(loginStatus: boolean, accountAction: any){
    return (
        <div className="upper-right">
            <AccountButton loginStatus={loginStatus} accountAction={accountAction} />
        </div>
    )
}
export default UpperRight