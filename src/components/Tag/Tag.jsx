const Tag = ({ tagName, tagColor }) => {
  return (
    <span
      style={{ backgroundColor: tagColor }}
      className="badge  badge--info  br-xl   color-white m-r-xs m-b-xs"
    >
      {tagName}
    </span>
  );
};

export { Tag };
