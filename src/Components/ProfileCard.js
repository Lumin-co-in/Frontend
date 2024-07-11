import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ProfileCard = ({ name, img, role }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    gsap.fromTo(
      card,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  return (
    <div className="profile-card-bg-overlay">
      <div className="profile-card" ref={cardRef}>
        <img src={img} alt={name} className="profile-avatar" />
        <div className="profile-info">
          <p className="profile-name">{name}</p>
          <p className="profile-role">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
