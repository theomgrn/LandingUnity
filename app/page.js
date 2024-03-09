import styles from "./page.module.css";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Home() {
  return (
      <header className={styles.headerPart}>
          <p>Unity</p>
          <Stack spacing={2} direction="row">
              <Button variant="text">Text</Button>
              <Button variant="contained">Contained</Button>
              <Button variant="outlined">Outlined</Button>
          </Stack>
      </header>
  );
}
