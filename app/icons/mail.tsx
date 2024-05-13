import { IconProps } from ".";

function Mail({ className, color }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="miter"
      stroke={color}
      className={className}
    >
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M16,8v5a3,3,0,0,0,3,3h0a3,3,0,0,0,3-3V12a9.87,9.87,0,0,0-.79-3.89,10,10,0,0,0-5.32-5.32,10,10,0,0,0-7.78,0A10,10,0,0,0,2.79,8.11a10,10,0,0,0,0,7.78,10,10,0,0,0,5.32,5.32,10,10,0,0,0,7.78,0"></path>
    </svg>
  );
}

export default Mail;
