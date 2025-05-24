interface AnimationConfig {
  loop: boolean;
  autoplay: boolean;
  className: string;
  style?: React.CSSProperties;
}

export const educationAnimationConfig: AnimationConfig = {
  loop: true,
  autoplay: true,
  className: "w-full h-full",
  style: {
    maxWidth: "400px",
    margin: "0 auto",
  }
}; 