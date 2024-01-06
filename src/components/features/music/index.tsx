import { useAudio } from "./hooks/use-audio";
import { IconVolume, IconVolumeOff } from "@tabler/icons-react";
import { FC } from "react";
import { Button } from "@/components/shared";

export const Music: FC = () => {
  const [playing, toggle] = useAudio("/audio/music.mp3", 0.5);
  return (
    <Button variant="ghost" size="icon" onClick={toggle}>
      {playing ? <IconVolumeOff /> : <IconVolume />}
    </Button>
  );
};
