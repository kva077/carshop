import SvgIcons from "../../../assets/svgIcons.svg";
import PropTypes from "prop-types";

const SvgIcon = ({
    name,
    width,
    height,
    classes,
    fillColor,
    strokeColor,
    onClick = null
}) => {
    return (
        <svg
            onClick={() => onClick()}
            className={classes}
            fill={fillColor}
            stroke={strokeColor}
            width={width}
            height={height}
        >
            <use xlinkHref={`${SvgIcons}#${name}`} />
        </svg>
    );
};

SvgIcon.propTypes = {
    name: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    classes: PropTypes.string,
    fillColor: PropTypes.string,
    strokeColor: PropTypes.string
};

export default SvgIcon;
