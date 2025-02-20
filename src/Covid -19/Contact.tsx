import contImage from './Contacts.png'

const Contact = () => {
    return (
        <div>
            <div className="container">
                <h1>Contact</h1>
                <img src={contImage} />
                <h3>#alonetogether</h3>
                <h4>
                    Address
                    Patricia C. Amedee 4401
                    Waldeck Street Grapevine
                    Nashville, TX 76051
                </h4>
                <h4>
                    Phone
                    +99 (0) 101 0000 888
                </h4>
                <h4>
                    Email
                    info@yourdomain.com
                </h4>

            </div>
        </div>
    )

}
export default Contact