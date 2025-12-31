import React from "react";
import { UserCards } from "./components/PackApi.ts";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Sticker from "./assets/Sticker.svg";
import Sticker1 from "./assets/Sticker1.svg";
import Sticker2 from "./assets/Sticker2.svg";
// Define the type for a single item in the list

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import "./photos.css";

import photos from "./photos.ts";


export default function PackPage() {
  React.useEffect(() => {
    UserCards(1, 10).then((result: any) => {
      console.log(result);
    });
  }, []);

  return (
    <main>
      <RowsPhotoAlbum photos={photos} />
    </main>
  );
}
      {
        /* <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */
      }