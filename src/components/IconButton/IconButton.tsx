import { MouseEvent } from "react";
import styles from "./IconButton.module.css";

type IconButtonProps = {
  src: string;
  alt: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  style?: string;
  width?: number;
  height?: number;
};

function IconButton({
  src,
  alt,
  onClick,
  style,
  height,
  width,
}: IconButtonProps) {
  return (
    <button onClick={onClick} className={style ?? styles.iconButton}>
      <img src={src} alt={alt} width={width} height={height} />
    </button>
  );
}

export default IconButton;
