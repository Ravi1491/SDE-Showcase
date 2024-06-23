function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 .5H8v4H0v12h8v-4h8V.5h-4zm-8 12h4v-4h4v-4H8v4H4v4z"
        fill="#fff"
      />
    </svg>
  );
}

export default Logo;
