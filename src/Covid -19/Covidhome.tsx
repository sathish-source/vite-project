import homebg from './home-bg-01.png'

const CovidHome = () => {
    return(
        <div>
            <div >
            <div >
            <h1>Stay Home Saves Lives.</h1>
            <img className='w-50'  src= {homebg}  />
            <h2 className='h1'>#alonetogether</h2>
            </div>

            <div className='d-flex p-5 bg-primary '>
                <h1>The Last Situation</h1>

                <div className=' h3 p-4'>
                <h2>178,196</h2>
                <p>People Tested</p>
                </div>

                <div  className=' h3 p-4' >
                <h2>26,098</h2>
                <p>Cases</p>
                </div>

                <div  className=' h3 p-4' >
                <h2>4,333</h2>
                <p>Hospitalized</p>
                </div>
            </div>

            <div className='container'>
                <img src="" alt="" />
                <h1>Travel Advice</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus nulla, sagittis a tempus at, feugiat vel lectus. Cras aliquam augue eget lacus euismod, vel mollis est eleifend. Nulla eros justo, sagittis at orci at, commodo condimentum ex.</p>
            </div>

            <div className='container'>
                <img src="" alt="" />
                <h1>Social Distancing</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus nulla, sagittis a tempus at, feugiat vel lectus. Cras aliquam augue eget lacus euismod, vel mollis est eleifend. Nulla eros justo, sagittis at orci at, commodo condimentum ex.</p>
            </div>

            <div className='container'>
                <img src="" alt="" />
                <h1>Symptoms</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus nulla, sagittis a tempus at, feugiat vel lectus. Cras aliquam augue eget lacus euismod, vel mollis est eleifend. Nulla eros justo, sagittis at orci at, commodo condimentum ex.</p>
            </div>
            </div>
        </div>
    )

}

export default  CovidHome