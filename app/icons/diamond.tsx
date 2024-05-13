import { IconProps } from ".";

function Diamond({ color = "white", className = "" }: IconProps) {
  return (
    <svg
      fill={color}
      className={className}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 5.04V4l4-4h8l4 4v1.04L8 16 0 5.04zM2 5l6 8.5L4 5H2zm12 0h-2l-4 8.5L14 5zM6 5l2 6 2-6H6zM4 2L2 4h2l2-2H4zm8 0h-2l2 2h2l-2-2zM7 2L6 4h4L9 2H7z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Diamond;
