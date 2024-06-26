function ProfileBackgroundGrid(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={156}
      height={156}
      viewBox="0 0 156 156"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask id="a" fill="#fff">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 39.75h77.5V78.5H38.75v38.75H77.5V156H0V39.75z"
        />
      </mask>
      <path
        d="M0 39.75v-1h-1v1h1zm77.5 0h1v-1h-1v1zm0 38.75v1h1v-1h-1zm-38.75 0v-1h-1v1h1zm0 38.75h-1v1h1v-1zm38.75 0h1v-1h-1v1zm0 38.75v1h1v-1h-1zM0 156h-1v1h1v-1zM38.75 38.75H0v2h38.75v-2zm38.75 0H38.75v2H77.5v-2zm1 39.75V39.75h-2V78.5h2zm-39.75 1H77.5v-2H38.75v2zm1 37.75V78.5h-2v38.75h2zm-1 1H77.5v-2H38.75v2zm37.75-1V156h2v-38.75h-2zm1 37.75H38.75v2H77.5v-2zM0 157h38.75v-2H0v2zm-1-39.75V156h2v-38.75h-2zm0-38.75v38.75h2V78.5h-2zm0-38.75V78.5h2V39.75h-2z"
        fill="#C778DD"
        mask="url(#a)"
      />
      <mask
        id="b"
        maskUnits="userSpaceOnUse"
        x={76.5}
        y={0}
        width={80}
        height={119}
        fill="#000"
      >
        <path fill="#fff" d="M76.5 0H156.5V119H76.5z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M77.5 1H155v116.25H77.5V78.5h38.75V39.75H77.5V1z"
        />
      </mask>
      <path
        d="M77.5 1V0h-1v1h1zM155 1h1V0h-1v1zm0 116.25v1h1v-1h-1zm-77.5 0h-1v1h1v-1zm0-38.75v-1h-1v1h1zm38.75 0v1h1v-1h-1zm0-38.75h1v-1h-1v1zm-38.75 0h-1v1h1v-1zM116.25 0H77.5v2h38.75V0zM155 0h-38.75v2H155V0zm1 39.75V1h-2v38.75h2zm0 38.75V39.75h-2V78.5h2zm0 38.75V78.5h-2v38.75h2zm-39.75 1H155v-2h-38.75v2zm0-2H77.5v2h38.75v-2zm-37.75 1V78.5h-2v38.75h2zm-1-37.75h38.75v-2H77.5v2zm37.75-39.75V78.5h2V39.75h-2zm-37.75 1h38.75v-2H77.5v2zM76.5 1v38.75h2V1h-2z"
        fill="#C778DD"
        mask="url(#b)"
      />
    </svg>
  );
}

export default ProfileBackgroundGrid;
