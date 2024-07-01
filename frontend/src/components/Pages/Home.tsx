import { Box, Typography } from "@mui/material";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { useContext } from "react";
import { UserContext } from "./Root";

function Home() {
  const user = useContext(UserContext);
  function createData(
    id: number,
    datetime: string,
    filename: string,
    status: string,
  ) {
    return { id, datetime, filename, status };
  }
  const columns: GridColDef[] = [
    { field: "datetime", headerName: "Date Time", width: 180 },
    { field: "filename", headerName: "File Name", flex: 1 },
    { field: "status", headerName: "Status", width: 100 },
  ];
  const rows = [
    createData(1, "2024-12-02 15:23:31", "sample_6.png", "Processing"),
    createData(2, "2024-11-03 18:04:36", "sample_5.png", "Done"),
    createData(3, "2024-10-05 09:01:17", "sample_4.png", "Done"),
    createData(4, "2024-09-03 09:01:17", "sample_3_1.png", "Done"),
    createData(6, "2024-09-01 15:25:45", "sample_3.png", "Error"),
    createData(5, "2024-08-03 16:58:45", "sample_2.png", "Done"),
    createData(7, "2024-07-01 13:45:22", "sample_1.png", "Done"),
  ];
  return (
    <Box>
      <Typography variant="subtitle1" component="div" sx={{ ml: 1 }}>
        Hello {user?.username}
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </Box>
  );
}

export default Home;
