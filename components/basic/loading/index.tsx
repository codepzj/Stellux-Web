import React from "react";
import "./index.css";

export const LoadingComponent = ({
  size = "normal",
  dark = false,
  text,
}: {
  size?: "sm" | "normal" | "2x" | "3x";
  dark?: boolean;
  text?: string;
}) => {
  const classNames = ["loading"];
  if (dark) classNames.push("la-dark");
  if (size === "sm") classNames.push("la-sm");
  else if (size === "2x") classNames.push("la-2x");
  else if (size === "3x") classNames.push("la-3x");

  return (
    <div className="flex flex-col items-center gap-2">
      <div className={classNames.join(" ")}>
        <div></div>
        <div></div>
      </div>
      {text && <div className="mt-2 text-sm">{text}</div>}
    </div>
  );
};

/**
 * 带头部加载
 */
export const Loading = () => {
  return (
    <div className="flex h-dvh w-full items-center justify-center">
      <LoadingComponent text="加载中..." />
    </div>
  );
};
