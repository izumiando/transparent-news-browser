import React from 'react'
import './Header.css'

interface AccountButtonProps {
    loginStatus: boolean;
    accountAction: () => void;
}

function AccountButton({ loginStatus, accountAction }: AccountButtonProps) {    
    var action: String = "Log In";
    if(loginStatus){
        action = "Log Out";
    }

    return(
        <button className="account-button" onClick={accountAction}>{action}</button>
    );
}

export default AccountButton