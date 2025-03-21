import { Box, SxProps } from "@mui/material";
import { LayerState, RoomState } from "./hooks/useRoomsState";
import { Link } from "./config/layouts";
import { Theme } from "@emotion/react";

export interface RoomRenderProps {
    roomState: RoomState
    layer: LayerState
}

const LAYER_WIDTH = 700;
const LAYER_HEIGHT = 700;
const MIN_SEGMENT_SIZE = 10;

function RoomRender({ roomState, layer }: RoomRenderProps) {

    const emplacment = layer.layout.emplacments[roomState.emplacment];
    if (!emplacment) {
        console.error("No emplacment found for room", roomState.room.name, "at index", roomState.emplacment);
        return null;
    }

    const width = `${emplacment.width}px`;
    const height = `${emplacment.height}px`;
    const left = `${emplacment.x + LAYER_WIDTH/2}px`;
    const top = `${emplacment.y + LAYER_HEIGHT/2}px`;

    const sx: SxProps<Theme> = {
        position: "absolute",
        width,
        height,
        top,
        left,
        border: "1px solid white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    }

    return (
        <Box sx={sx}>
            { roomState.room.name || emplacment.name }
        </Box>
    )
}

interface LinkRenderProps {
    link: Link
    layer: LayerState
}

function getSegmentFromRectangle(x: number, y: number, width: number, height: number): { x1: number, y1: number, x2: number, y2: number }[] {
    return [
        { x1: x, y1: y, x2: x + width, y2: y },
        { x1: x + width, y1: y, x2: x + width, y2: y + height },
        { x1: x + width, y1: y + height, x2: x, y2: y + height },
        { x1: x, y1: y + height, x2: x, y2: y },
    ]
} 

function LinkRender({ link, layer }: LinkRenderProps) {
    const fromEmplacment = layer.layout.emplacments[link.emplacmentIdA];
    const toEmplacment = layer.layout.emplacments[link.emplacmentIdB];

    if (!fromEmplacment || !toEmplacment) {
        console.error("No emplacment found for link", link, "from", link.emplacmentIdA, "to", link.emplacmentIdB);
        return null;
    }

    const fromSegments = getSegmentFromRectangle(fromEmplacment.x, fromEmplacment.y, fromEmplacment.width, fromEmplacment.height);
    const toSegments = getSegmentFromRectangle(toEmplacment.x, toEmplacment.y, toEmplacment.width, toEmplacment.height);

    const commonSegments: {x: number, y: number, vector: { x: number, y: number }}[] = []
    fromSegments.forEach(fromSegment => {
        const fromVector = { x: fromSegment.x2 - fromSegment.x1, y: fromSegment.y2 - fromSegment.y1 };
        const segmentOverlap: typeof commonSegments = [];
        toSegments.forEach(toSegment => {
            const toVector = { x: toSegment.x2 - toSegment.x1, y: toSegment.y2 - toSegment.y1 };
            const fromVectorNormalized = { x: fromVector.x / Math.sqrt(fromVector.x * fromVector.x + fromVector.y * fromVector.y), y: fromVector.y / Math.sqrt(fromVector.x * fromVector.x + fromVector.y * fromVector.y) };
            const toVectorNormalized = { x: toVector.x / Math.sqrt(toVector.x * toVector.x + toVector.y * toVector.y), y: toVector.y / Math.sqrt(toVector.x * toVector.x + toVector.y * toVector.y) };
            const crossProduct = fromVectorNormalized.x * toVectorNormalized.y - fromVectorNormalized.y * toVectorNormalized.x;
            
            if (crossProduct === 0 && (
                (fromSegment.x1 === toSegment.x1 && toVector.x === 0) ||
                (fromSegment.y1 === toSegment.y1 && toVector.y === 0))
            ) {
                if (toVector.x === 0) {
                    const allY = [fromSegment.y1, fromSegment.y2, toSegment.y1, toSegment.y2].sort((a, b) => a - b);
                    if (Math.abs(allY[2] - allY[1]) >= MIN_SEGMENT_SIZE) {
                        console.log("Common segment found x==0", allY);
                        segmentOverlap.push({
                            x: fromSegment.x1,
                            y: (allY[2] - allY[1]) / 2 + allY[1],
                            vector: { x: 1, y: 0 }
                        });
                    }
                }
                if (toVector.y === 0) {
                    const allX = [fromSegment.x1, fromSegment.x2, toSegment.x1, toSegment.x2].sort((a, b) => a - b);
                    if (Math.abs(allX[2] - allX[1]) >= MIN_SEGMENT_SIZE) {
                        segmentOverlap.push({
                            x: (allX[2] - allX[1]) / 2 + allX[1],
                            y: fromSegment.y1,
                            vector: { x: 0, y: 1 }
                        });
                    }
                }
            }
        })
        commonSegments.push(...segmentOverlap);
    });

    if (commonSegments.length === 0) {
        console.error("No common segments found for link", link);
        return null;
    }

    const segment = commonSegments[0];

    const SQUARE_SIZE = 10;

    const sx: SxProps<Theme> = {
        position: "absolute",
        border: "1px solid red",
        backgroundColor: "red",
        width: "10px",
        height: "10px",
        top: `${segment.y + LAYER_HEIGHT/2 - SQUARE_SIZE/2}px`,
        left: `${segment.x + LAYER_WIDTH/2 - SQUARE_SIZE/2}px`,
    }

    return (
        <Box sx={sx} />
    )
}


export interface ShowCurrentLayerProps {
    layer: LayerState
    showEmplacments?: boolean
}

export default function ShowCurrentLayer({layer, showEmplacments}: ShowCurrentLayerProps) {
    const rooms = showEmplacments ? layer.layout.emplacments.map<RoomState>((empl, index) => ({
        emplacment: index,
        roomId: `emplacment-${index}`,
        room: {
            name: `${empl.name} - ${index}` || "Emplacment",
            maxGenerated: 0,
            chance: 0,
            sideStories: []
        }
    })) : layer.rooms;

    return (
        <Box sx={{ border: "1px solid white", position: "relative", width: `${LAYER_WIDTH}px`, height: `${LAYER_HEIGHT}px` }}>
            {
                rooms.map((roomState) => (
                    <RoomRender key={roomState.roomId} roomState={roomState} layer={layer} />
                ))
            }
            {
                layer.layout.links.map((link, index) => (
                    <LinkRender key={index} link={link} layer={layer} />
                ))
            }
        </Box>
    )
}