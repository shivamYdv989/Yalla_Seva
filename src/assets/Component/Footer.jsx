import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer>
                <div class='footer-color'></div>
                <div style={{ paddingTop: '60px' }}>
                    <p style={{ paddingLeft: '20px', fontSize: '22px' }}>Copyright © 2024 yallaseva.com - All Rights Reserved. </p>
                    <p style={{ textAlign: 'right', paddingRight: '30px', fontSize: '22px' }}>Powered by <a href='https://www.godaddy.com/'>GoDaddy</a></p>
                    <div style={{ textAlign: 'center' }}><a href='https://yallaseva.com/terms-%26-conditions' style={{ cursor: 'pointer', fontSize: '22px' }}>TERMS & CONDITIONS</a></div>
                </div>
            </footer>
        </>
    )
}

export default Footer