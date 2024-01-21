export default function ProfilePicture({profilePicture, className}) {
    return (
        <div className= {`default-user-icon ${className}`}>
            {profilePicture}
        </div>
    )
}