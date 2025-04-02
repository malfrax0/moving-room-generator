import { Badge, Button, Card, CardContent, CardHeader, Grid2, Stack, TextField, Typography } from '@mui/material'
import ShowCurrentLayer from './ShowCurrentLayer'
import { useRoomsState } from './hooks/useRoomsState'
import React, { useEffect } from 'react';
import { usePlayerState } from './hooks/usePlayerState';
import { PLAYER_COLORS } from './config/layouts';

function App() {
  const { playerStates, addPlayerState } = usePlayerState();
  const { layers, generateLayer, removeLayer, findRoomById } = useRoomsState();
  const [floor, setFloor] = React.useState(0);
  const [playerName, setPlayerName] = React.useState("");

  const newLayer = () => {
    const floor = layers.length;
    generateLayer(floor, true);
  }

  const removeCurrentLayer = () => {
    if (layers.length === 1) {
      console.error("Can't remove last layer");
      return;
    }
    removeLayer(floor);
  }

  useEffect(() => {
    if (floor >= layers.length) {
      setFloor(layers.length - 1);
    }
  }, [layers, floor]);

  return (
    <Grid2 container>
      <Grid2 size={8} >
        <ShowCurrentLayer layer={layers[floor] || null} floor={floor} />
      </Grid2>
      <Grid2 size={4}>
        <Card sx={{ width: "100%", height: "100%" }}>
          <CardHeader title="Controls" />
          <CardContent>
            <Typography variant="h6">Floors</Typography>
            <Stack spacing={2} direction="row">
              <Button onClick={() => newLayer()}>New Layer</Button>
              <Button onClick={() => removeCurrentLayer()}>Remove current layer</Button>
              <Button onClick={() => generateLayer(floor)}>Regenerate current layer</Button>
            </Stack>
            <Typography variant="h6">Players</Typography>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 2 }}>
              <TextField label="Player Name" value={playerName} onChange={(e: any) => setPlayerName(e.target.value)} />
              <Button onClick={() => addPlayerState(playerName, {
                roomId: layers[0].rooms[0].roomId,
                floor: 0
              })}>Add Player</Button>
            </Stack>
            <Stack spacing={2} direction="column">
              {
                playerStates.map((player, index) => {
                  const room = findRoomById(player.roomId || "");
                  return (
                    <Badge key={player.name} variant="dot" badgeContent=" " color={PLAYER_COLORS[index]} sx={{ backgroundColor: PLAYER_COLORS[index], padding: 1}}>
                      <Grid2 container sx={{width: "100%"}}>
                        <Grid2 size={{ xs: 6 }}>
                          <Typography>{player.name}</Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 6}}>
                          <Typography sx={{textAlign: "right"}}>{ (room && room.foundRoom) ? `${room.foundRoom.room.name} (${player.floor})` : `Unknown ${player.floor}`}</Typography>
                        </Grid2>
                      </Grid2>
                    </Badge>
                  )
                })
              }
            </Stack>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 size={12}>
        <Card>
          <CardContent>
            <Stack spacing={2} direction="row">
              {
                layers.map((_, index) => {
                  return (
                    <Button variant={floor !== index ? "outlined" : "contained"} fullWidth key={index} onClick={() => setFloor(index)}>{index}</Button>
                  )
                })
              }
            </Stack>
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  )
}

export default App
