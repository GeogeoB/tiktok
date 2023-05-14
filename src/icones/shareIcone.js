import { useContext } from "react";
import urlJboss from "../config";
import { appContext } from "../context";

function ShareIcone({ videoID }) {
  let context = useContext(appContext);

  const onClick = () => {
    navigator.clipboard.writeText(
      `${urlJboss}/DataServlet?op=getVideo&id=${videoID}`
    );
    context.setToastOpen(true);
    setTimeout(() => context.setToastOpen(false), 4000);
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icone"
      viewBox="0 0 512 512"
      onClick={onClick}
    >
      <path d="M384 336a63.78 63.78 0 00-46.12 19.7l-148-83.27a63.85 63.85 0 000-32.86l148-83.27a63.8 63.8 0 10-15.73-27.87l-148 83.27a64 64 0 100 88.6l148 83.27A64 64 0 10384 336z" />
    </svg>
  );
}

export default ShareIcone;
