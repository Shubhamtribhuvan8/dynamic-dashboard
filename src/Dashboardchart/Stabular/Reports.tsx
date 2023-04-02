import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useState, useEffect } from "react";
import { Box } from "@mui/system";

interface TableItem {
  id: number;
  name: string;
  age: number;
  email: string;
}

interface ColumnItem {
  key: keyof TableItem;
  header: string;
}

interface RowItem {
  id: number;
  name: string;
  range1: number;
  range2: string;
}

interface TableData {
  data: TableItem[];
  columns: ColumnItem[];
}

export default function AccessibleTable() {
  const [tabular, setTabular] = useState<TableItem[]>([]);
  const [columns, setColumns] = useState<ColumnItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res: any = await axios.get<TableData>(
        "http://172.20.10.4:3001/api/widget/02d2e80c-6675-4288-aabc-0d23451a7f71"
      );
      setTabular(res.data.data);
      setColumns(res.data.columns);
      
      // console.log(res.data.data);
    };

    fetchData();
  }, []);

  const createData = (
    id: number,
    name: string,
    range1: number,
    range2: string
  ): RowItem => {
    return { id, name, range1, range2 };
  };

  const rows: RowItem[] = tabular.map((item: TableItem) =>
    createData(item.id, item.name, item.age, item.email)
  );
  return (
    <div>
      <Box>
        <Box marginTop={3}>
          <h1>Reports</h1>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 450 }} aria-label="caption table">
              <caption>Table</caption>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell key={column.key}>{column.header}</TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center" style={{ textAlign: "start" }}>
                      {row.range1}
                    </TableCell>
                    <TableCell align="center" style={{ textAlign: "start" }}>
                      {row.range2}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </div>
  );
}
