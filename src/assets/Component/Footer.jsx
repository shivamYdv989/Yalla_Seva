import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer>
                <div class='footer-color'></div>
                    <p style={{ paddingLeft: '20px', fontSize: '22px' }}>Copyright © 2024 yallaseva.com - All Rights Reserved. </p>
                    <div style={{ textAlign: 'center' }}><a href='https://yallaseva.com/terms-%26-conditions' style={{ cursor: 'pointer', fontSize: '22px' }}>TERMS & CONDITIONS</a></div>
            </footer>
        </>
    )
}

export default Footer