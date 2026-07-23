import React from 'react';
import { BsStars } from "react-icons/bs";
import '../styles/CSS/AIsummaryCard.css';

const AIsummaryCard = ({ props }) => {

    return (
        <div className="ai_summary_card">
            <div className="ai_summary_header">
                <BsStars className="ai_icon" />
                <span>AI Summary</span>
            </div>

            <p className="ai_summary_text">
                {props}
            </p>
        </div>
    )
}

export default AIsummaryCard