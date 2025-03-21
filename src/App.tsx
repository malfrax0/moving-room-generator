import { Button, Card, CardActions, CardContent, CardHeader, Container, Grid2, Typography } from '@mui/material'
import { useState } from 'react'
import ShowCurrentLayer from './ShowCurrentLayer'
import { LayerState } from './hooks/useRoomsState'
import { Layouts } from './config/layouts'

function App() {

  const [layerIndex, setLayerIndex] = useState(0);

  const layer: LayerState = {
    rooms: [],
    layout: Layouts[layerIndex]
  }

  return (
    <Grid2 container>
      <Grid2 size={6} >
        <ShowCurrentLayer showEmplacments layer={layer} />
      </Grid2>
      <Grid2 size={6}>
        <Card sx={{ width: "100%", height: "100%" }}>
          <CardHeader title="Controls" />
          <CardContent>
            <Typography variant="body1">
              This is a card with some controls
            </Typography>
            <Button onClick={() => setLayerIndex((layerIndex + 1) % Layouts.length)}>
              Next Layer
            </Button>
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  )
}

export default App
