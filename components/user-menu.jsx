'use client';

import { ChartNoAxesGantt } from 'lucide-react'
import React from 'react'

const UserMenu = () => {
    return <UserButton appearance={{
        elements: {
            avatarBox :'w-10 h-10',
        },
    }}
    >
        <UserButton.MenuItems>
            <UserButton.Link
                label='My Organizations'
                labelIcon={<ChartNoAxesGantt size={15} href='/onboarding' />} />
            <UserButton.Action label='manageAccount'/>
        </UserButton.MenuItems>
    </UserButton>
    (
    <div>UserMenu</div>
  )
}

export default UserMenu