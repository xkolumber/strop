import React from "react";

interface Props {
  content: any;
}

const ReusablePortableText = ({ content }: Props) => {
  return (
    <div>
      {content.map((section: any, index: number) => (
        <div className="mb-4" key={index}>
          {section.style === "normal" && (
            <p className={section.children.style}>{section.children[0].text}</p>
          )}
          {section.style === "h1" && (
            <h1 className={section.children.style}>
              {section.children[0].text}
            </h1>
          )}
          {section.style === "h2" && (
            <h2 className={section.children.style}>
              {section.children[0].text}
            </h2>
          )}
          {section.style === "h3" && (
            <h3 className={section.children.style}>
              {section.children[0].text}
            </h3>
          )}
          {section.style === "h4" && (
            <h4 className={section.children.style}>
              {section.children[0].text}
            </h4>
          )}
          {section.style === "h5" && (
            <h5 className={section.children.style}>
              {section.children[0].text}
            </h5>
          )}
          {section.style === "h6" && (
            <h6 className={section.children.style}>
              {section.children[0].text}
            </h6>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReusablePortableText;
