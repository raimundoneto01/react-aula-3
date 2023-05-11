import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Header'

const PageLayout = ()=>{
    return(

        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
        
        </>
    )
}

export default PageLayout