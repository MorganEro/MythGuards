import React, { useEffect, useState } from 'react';
import { AdminView } from './AdminView';
import { ClientView } from './ClientView';
import { GuardView } from './GuardView';



export const AppViews= ({ user }) => {

	
        if (user.userTypeId == 2) {
                return <AdminView />
            } else if (user.userTypeId == 3) {
                return <ClientView />
            } else {
                return <GuardView/>
            }	
}
