import React from "react";

const Button = ({
  label,
  link,
  style,
  rel,
}: {
  label: string;
  link: string;
  style?: string;
  rel?: string;
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel={`noopener noreferrer ${rel ? (rel === "follow" ? "" : rel) : "nofollow"
        }`}
      className={`btn no-underline mb-4 me-4 ${style === "outline" ? "btn-outline" : "btn-primary"
        }`}
    >
      {label}
    </a>
  );
};

export default Button;
