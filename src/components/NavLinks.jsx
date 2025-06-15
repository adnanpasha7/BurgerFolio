import React from "react";
import { Link } from "react-router-dom";
import { cva } from "class-variance-authority";

const classes = cva("sparkle-btn", {
  variants: {
    variant: {
      primary: "bg-[#A9070C] text-[#FAEFD2] border-[#A9070C]",
      secondary: "border-yellow-600 text-[#A9070C] bg-transparent",
    },
  },
});

const NavLinks = (props) => {
  const { variant, className, ...otherProps } = props;
  return (
    <Link
      className={classes({
        variant,
        className,
      })}
      {...otherProps}
    />
  );
};

export default NavLinks;
