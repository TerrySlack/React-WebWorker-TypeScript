const styles = {
  container: {
    color: "goldenrod",
    width: "100%",
  },
  launchTitle: {
    paddingTop: "3rem",
    paddingBottom: "3rem",
    color: "yellowgreen",
    fontWeight: "bold",
    textAlign: "center",
  },
  launchContainer: {
    display: "flex",
    justifyContent: "center",
  },
  scroll: {
    overflowY: "scroll",
    overflowX: "hidden",
    height: "500px",
  },
  center: {
    display: "flex",
    justifyContent: "center",
  },
  //Table css
  "@media screen and (max-width : 600px) and (orientation: portrait)": {
    responsiveTable: {
      "& >thead": {
        visibility: "visible",
      },
      "& > tr": {
        display: "table-row",
        borderBottomWidth: "1px",
        marginBottom: 0,
        "&:nth-child": {
          background: "#fafafa",
        },
      },
      "& > td": {
        display: "table-cell",
        textAlign: "left",        
        borderBottom: "none",
        "&:before": {
          content: '""',
          display: "none",
        },
      },
    },
  },
  table: {
    width: "80%",
    fontFamily: '"Comic Sans MS", "Comic Sans", cursive;',
    borderCollapse: "collapse",
    overflow: "hidden",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
    "& thead": {
      position: "sticky",
      top: 0,  
      marginBottom:'1rem'   
    },
    "& tbody tr": {
      "& td": {
        position: "relative",
        "&:hover": {
          "&:before": {
            content: "''",
            position: "absolute",
            left: 0,
            right: 0,
            top: -9999,
            bottom: -9999,
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            zIndex: -1,
          },
        },
      },
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        cursor: "pointer",
      },
    },
    "& tr":{
      paddingTop:'1rem',
     paddingBottom:'1rem',
    },
    "& th, &td": {
      padding: "0.25em 0.5em",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      color: "#fff",
      textAlign: "left",
    },
    "& th": {
      textAlign: "left",
    },
    "& td:nth-child(2)": {
      textAlign: "left",
    }
  },
  zigzag: {
    borderCollapse: "separate",
    borderSpacing: "8rem 1rem",
    "& thead tr": {
      transform: "rotate(-1deg)",
    },
    "& tbody tr": {     
      "&:nth-child(odd)": {
        transform: "rotate(1deg)",
        color:"#fff"
      },
      "&:nth-child(even)": {
        transform: "rotate(-1deg)",
      },
    },
  },
};

export default styles;
