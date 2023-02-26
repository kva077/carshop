import React, { useRef, useEffect } from "react";

/**
 * Хук, который предупреждает о клике outside of the passed ref
 */
function useClickOutside(ref) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                alert("You clicked outside of me!");
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
const ClickOutside = (props) => {
    const wrapperRef = useRef(null);
    useClickOutside(wrapperRef);

    return <div ref={wrapperRef}>{props.children}</div>;
};
export default ClickOutside;
