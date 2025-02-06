import React from 'react'
import 'Header.css'

function AccountButton(loginStatus: boolean, accountAction: any){    
    var action: String = "Log In";
    if(loginStatus){
        action = "Log Out";
    }

    return(
        <button className="account" onClick={accountAction}>{action}</button>
    );
}

export default AccountButton