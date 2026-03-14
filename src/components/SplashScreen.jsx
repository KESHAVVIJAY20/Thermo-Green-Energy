import { useEffect } from "react";
import LOGO from "../assets/Logo_nobg.png";

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2500); // show for 3 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash">
      <img src={LOGO} alt="logo" width={100} height={100} className="logo" />
    </div>
  );
}