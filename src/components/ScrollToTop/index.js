import React from 'react'
import { FaCircleArrowUp } from "react-icons/fa6";


function ScrollToTop() {
    const handleScrollToTop = () => window.scrollTo(0, 0)
    return (
        <div className="text-[#FFC175] fixed bottom-7 right-5 z-50 cursor-pointer">
            <FaCircleArrowUp size={45} onClick={handleScrollToTop} />
        </div>
    )
}

export default ScrollToTop