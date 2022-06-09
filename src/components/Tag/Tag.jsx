const Tag = ({ tagName, tagColor }) => {
  console.log("this tage name is displayed",tagName);
  return (
    <span
      style={{ backgroundColor: tagColor?tagColor:"" }}
      className="badge  badge--info  br-xl   color-white m-r-xs m-b-xs"
    >
      {tagName}
    </span>
  );
};

export { Tag };
