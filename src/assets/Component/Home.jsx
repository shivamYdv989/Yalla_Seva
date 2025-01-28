import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ContectUs from './Contectus'
const Home = () => {
    return (
        <>
            <Navbar />
            <div className='backgroundimg'></div>
            <div> <section className="Section">
                <div className="container">
                    <div>
                        <div >
                            <div data-ux="Group">
                                <h1>ONBOARDING PROMOTION OFFER</h1>
                                <h6 style={{ marginTop: '40px', fontSize: '22px' }}> FIRST 5000 SERVICE PROVIDERS GETS</h6>
                            </div></div></div><div data-ux="Grid">
                        <div>
                            <div><a rel="noopener" data-ux-btn="primary" data-ux="ButtonPrimary" color="PRIMARY" fill="SOLID" shape="PILL" decoration="NONE" shadow="NONE" href="https://play.google.com/store/apps/details?id=com.yallasevapartner&amp;pcampaignid=web_share" target="_blank"></a>
                                <div class='btn'>
                                    <button type="button" style={{
                                        background: '#fff',
                                        padding: '20px 130px',
                                        minHeight: '56px',
                                        borderRadius: '48px'
                                    }} class="btn btn-default">90 DAYS FREE SUBSCRIPTION- CLICK HERE TO INSTALL </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
            <div style={{ textAlign: "center", paddingTop: '40px' }}><h1><b>ABOUT US</b></h1></div>

            <div style={{ display: 'flex' }}>

                <section class="section">
                    <div class="card">
                        <div class="container" >
                            <h4><b>Our vision</b></h4>
                            <p style={{
                                fontSize: '18px',
                                fontFamily: `'Source Sans Pro', arial, sans-serif`
                            }}> Our vision is to become the foremost platform for on-demand job creation, empowering professionals, homemakers, and anyone looking to offer or find services and products. We strive to generate extensive job opportunities and enhance the ease of everyday life for our users.
                            </p>
                        </div>
                    </div>
                </section>
                <section class="section">
                    <div class="card">
                        <div class="container" >
                            <h4><b>Our Services</b></h4>
                            <p style={{
                                fontSize: '18px',
                                fontFamily: `'Source Sans Pro', arial, sans-serif`
                            }}> Our vision is to become the foremost platform for on-demand job creation, empowering professionals, homemakers, and anyone looking to offer or find services and products. We strive to generate extensive job opportunities and enhance the ease of everyday life for our users.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <div style={{ display: 'flex' }}>
                <section class="section">
                    <div class="card">
                        <div class="container" >
                            <h4><b>Our vision</b></h4>
                            <p style={{
                                fontSize: '18px',
                                fontFamily: `'Source Sans Pro', arial, sans-serif`
                            }}> Our vision is to become the foremost platform for on-demand job creation, empowering professionals, homemakers, and anyone looking to offer or find services and products. We strive to generate extensive job opportunities and enhance the ease of everyday life for our users.
                            </p>
                        </div>
                    </div>
                </section>
                <section class="section">
                    <div class="card">
                        <div class="container" >
                            <h4><b>Our Services</b></h4>
                            <p style={{
                                fontSize: '18px',
                                fontFamily: `'Source Sans Pro', arial, sans-serif`
                            }}> Our vision is to become the foremost platform for on-demand job creation, empowering professionals, homemakers, and anyone looking to offer or find services and products. We strive to generate extensive job opportunities and enhance the ease of everyday life for our users.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            {/* Footer*/}
            <ContectUs />
            <Footer />
        </>
    )
}
export default Home