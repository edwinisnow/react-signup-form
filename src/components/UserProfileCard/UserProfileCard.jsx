import './UserProfileCard.css'
import profile_picture from '../assets/profile.jpg'
const UserProfileCard = () => {

    return (
        <div className="upc">
            <div className="gradiant">
                <div className="profile-down">
                    <img src={profile_picture} alt="" />
                    <div className="profile-title">Edwin George</div>
                    <div className="profile-description">
                        I am a front end developer, working currently with Lloyds Bank, UK.
                    </div>
                    <div className="profile-button">
                        <a>Contact me</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfileCard