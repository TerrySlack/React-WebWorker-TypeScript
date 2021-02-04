const styles = {
  container: {
    backgroundColor: "#000",
    color: "goldenrod",
    width: "100%",
  },
  td1: {
    color: "dodgerblue",
    padding: "1em",
    fontWeight: "bold",
  },
  td2: {
    color: "#C0C0C0",
    padding: "1em",
    fontWeight: "bold",
  },
  td3: {
    color: "dodgerblue",
    padding: "1em",
    fontWeight: "bold",
  },
  thead: {
    color: "#C0C0C0",
    padding: "1em",
    fontWeight: "bold",
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
  responsiveTable: {
    width: "100%",
    margin: "0",
    padding: "0",
    borderCollapse: "collapse",
    borderSpacing: 0,

    "& > thead": {
      visibility: "visible",
      background: "#000",
      position: "sticky",
      top: 0,
    },
    "& > tr": {
      border: "1px solid #ddd",
      borderBottom: "2px solid #ddd",
      padding: "5px",
      marginBottom: "10px",
      display: "block",
      color: "black !important",
    },
    "& > td": {
      padding: "10px",
      display: "block",
      textAlign: "center",
      fontSize: "13px",
      borderBottom: "1px dotted #ddd",
      "&:last-child": {
        borderBottom: "none",
      },
      "&:before": {
        content: "attr(data-label)",
        float: "left",
        textTransform: "uppercase",
        fontWeight: "bold",
      },
    },
    "& > th": {
      padding: "10px",
      textAlign: "center",
      textTransform: "uppercase",
      fontSize: "11",
    },
  },
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
        fontSize: "14px",
        borderBottom: "none",
        "&:before": {
          content: '""',
          display: "none",
        },
      },
    },
  },
};

export default styles;
