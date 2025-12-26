import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import * as React from "react";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "Cardtype", headerName: "Type", width: 130 },
  { field: "approved", headerName: "Approved", width: 130 },
];

//Add back Id number for CARD later
interface Image {
  id: number;
  name: string;
  Cardtype: string;
  approved: string;
}

interface TableProps {
  rows: Image[];
}

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable({ rows }: TableProps) {

  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
