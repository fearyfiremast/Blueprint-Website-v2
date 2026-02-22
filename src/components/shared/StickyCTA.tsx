import React from "react";

/**
 * Common StickyCTA component
 * @returns {JSX.Element} - JSX representation of StickyCTA Component
 */
const StickyCTA = () => {
    return (
        <>
        {/* Outer Container 
            - Internal tailwindcss classnames organized from top to bottom: shared rules, larger breakpoints -> smaller*/}
        <div className="h-[84px] z-20 bg-blueprint-white py-[12px] pl-[36px] pr-[12px] rounded-[8px] shadow-[2px_4px_10px_0_rgba(0_0_0_0.07)] fixed bottom-0 right-0 w-[100%]
                        min-[460.02px]:w-[460px]
                        max-[460.01px]:pl-[24px] max-[460.01px]:rounded-[5px]">
            {/* Content Flex Row Container */}
            <div className="flex flex-row items-center h-[100%] overflow-hidden
                            min-[460.02px]:justify-between 
                            max-[460.01px]:gap-[36px]">
                {/* Text */}
                <p className="w-[171px] decoration-black font-poppins text-[16px] overflow-hidden
                              max-[460.01px]:text-[14px]">Launch a project for your non profit!</p>
                {/* BTN */}
                <div className="bg-blueprint-deepblue w-[200px] h-[60px] 
                max-[460.01px]:bg-red-700" ></div>
            </div>
        </div>
        </>
    );
}

export default StickyCTA;