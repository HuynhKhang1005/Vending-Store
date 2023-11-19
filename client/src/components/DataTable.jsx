import React from "react";
import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from "@mui/material";

const DataTable = ({ columns, data, title, actions }) => {
  const defaultMaterialTheme = createTheme();

  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      {data ? (
        <MaterialTable
          columns={columns}
          data={data}
          title={title}
          actions={actions}
        />
      ) : (
        <p>Không có dữ liệu</p>
      )}
    </ThemeProvider>
  );
};

export default DataTable;
