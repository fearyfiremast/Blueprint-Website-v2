import React from "react";

/**
 * Common polaroid photograph component
 * @param {string} imageSrc - URL of image
 * @param {string} caption - Description or comment for image
 * @param {string} alt - Optional argument that represents alt text for
 * @param {string} class - Optional argument that applies contents as additional TailWindCSS to highest level container
 * @returns {JSX.Element} - JSX representation of Polaroid photo component
 */

type PolaroidPhotoProps = {
    imageSrc: string;
    caption: string;
    alt?: string;
    className?: string;
    style?: React.CSSProperties;
    /** Tailwind classes for the inner photo: object-position, scale, etc. Scales up to shrink apparent white margin vs asset with letterboxing or loose framing. */
    imageCropClassName?: string;
}

const PolaroidPhoto = ({ imageSrc, caption, alt, className = "", style, imageCropClassName }: PolaroidPhotoProps) => {
    return (
    <div className={`bg-bp-white gap-[8px] shadow-[2px_4px_10px_0px_rgba(0,0,0,0.07)] w-[306px] h-[270px] pt-[11px] pr-[12px] pb-[15px] pl-[13px]
                    md:h-[345px] md:w-[377px] md:px-[18px] md:pt-[20px] md:pb-[24px] overflow-hidden ${className}`}
         style={style}>
        <div className="flex flex-col self-stretch shrink-0 items-center gap-[8px] md:gap-[10px]">
            <div className="relative h-[206px] w-full overflow-hidden md:h-[267px]">
                <img
                    className={
                        imageCropClassName
                            ? `absolute inset-0 h-full w-full min-h-0 min-w-0 origin-center object-cover ${imageCropClassName}`
                            : "absolute inset-0 h-full w-full min-h-0 min-w-0 object-cover object-top"
                    }
                    src={imageSrc}
                    alt={alt}
                />
            </div>
            <p className="decoration-bp-black text-center font-caveat text-[24px] md:text-3xl text-wrap">{caption}</p>
        </div>
    </div>
    );
};

export default PolaroidPhoto
