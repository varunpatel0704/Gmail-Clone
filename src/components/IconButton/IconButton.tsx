import { KeyboardEvent, MouseEvent } from "react";
import styles from "./IconButton.module.css";

type IconButtonProps = {
  src: string;
  alt: string;
  onClick: (event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void;
  style?: string;
  width?: number;
  height?: number;
  hoverEffect?:boolean;
};

function IconButton({
  src,
  alt,
  onClick,
  style,
  height,
  width,
  hoverEffect=true,
}: IconButtonProps) {
  let _default = styles.iconButton;
  
  if(hoverEffect)
    _default = `${_default} ${styles.hoverEffect}`;
  
  return (
    <button onClick={onClick} className={style ?? _default}>
      <img src={src} alt={alt} width={width} height={height} />
    </button>
  );
}

export default IconButton;
