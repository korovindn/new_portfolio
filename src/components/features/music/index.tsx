import { useAudio } from "./hooks/use-audio";
import { IconVolume, IconVolumeOff } from "@tabler/icons-react";
import { FC } from "react";
import { Button } from "@/components/shared";

interface Props {
  className?: string;
}

export const Music: FC<Props> = ({ className }) => {
  const [playing, toggle] = useAudio("/audio/music.mp3", 0.5);
  return (
    <Button variant="ghost" size="icon" onClick={toggle} className={className}>
      {playing ? <IconVolumeOff /> : <IconVolume />}
    </Button>
  );
};
