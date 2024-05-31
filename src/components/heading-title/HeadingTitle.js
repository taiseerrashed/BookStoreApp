const HeadingTitle = ({title}) => {
    const divStyles = {
        padding: "10px 30px",
    };
    const h2styles = {
        color: "#fff",
        backgroundColor: "#29b0e6",
        fontSize: "30px",
        fontWeight: "500",
        width: "max-content",
        padding: "10px 30px",
        borderRadius: "20px",
        letterSpacing: "1.5px",
        cursor: "pointer"
    };

  return (
    <div style={divStyles}>
        <h2 style={h2styles}>{title}</h2>
    </div>
  );
};

export default HeadingTitle;