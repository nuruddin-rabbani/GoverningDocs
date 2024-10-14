import React from "react";

function ReviewCard({ img, name, title }) {
    return (
        <div className="flex items-center gap-2 bg-white basis-1/2 rounded-xl p-3 hover:bg-primary hover:text-white transition-colors duration-150">
            <img src={img} alt={name} />
            <div>
                <h4 className="font-bold">{name}</h4>
                <p>{title}</p>
            </div>
        </div>
    );
}

export default ReviewCard;
