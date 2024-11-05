// Avatar.js
import React from 'react';


function Avatar({ user, type }) {
    console.log(user.name);

    const getUserInitials = () => {
        return user.name
            .split(' ')
            .map((name) => name[0].toUpperCase())
            .join('');
    };

    return (
        <div className={type + "-avatar"}>
            {user.avatar ? (
                <img src={user.avatar} alt={`${user.name}'s avatar`} className="avatar-image" />
            ) : (
                <div className={type + `-initials`}>
                    {getUserInitials()}
                </div>
            )}
            <span className={`availability-badge-${type} ${user.available ? 'available' : 'unavailable'}`}></span>
        </div>
    );
}

export default Avatar;
