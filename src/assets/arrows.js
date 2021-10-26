export default function Arrows() {
return (
    <svg onclick="triOnClick" width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="triangles" clip-path="url(#clip0)" onclick="triOnClick">
            <g id="lightGroup">
                <path id="light1" opacity="0.7" d="M60.7768 46.8827C61.8747 47.6814 61.8747 49.3186 60.7768 50.1173L28.6765 73.469C27.3546 74.4306 25.5 73.4863 25.5 71.8517L25.5 25.1483C25.5 23.5137 27.3546 22.5694 28.6765 23.531L60.7768 46.8827Z"/>
            </g>
            <g id="darkGroup">
                <path id="dark1" opacity="0.7" d="M44.7768 46.8827C45.8747 47.6814 45.8747 49.3186 44.7768 50.1173L12.6765 73.469C11.3546 74.4306 9.5 73.4863 9.5 71.8517L9.5 25.1483C9.5 23.5137 11.3546 22.5694 12.6765 23.531L44.7768 46.8827Z"/>
                <path id="dark2" opacity="0.7" d="M44.7768 46.8827C45.8747 47.6814 45.8747 49.3186 44.7768 50.1173L12.6765 73.469C11.3546 74.4306 9.5 73.4863 9.5 71.8517L9.5 25.1483C9.5 23.5137 11.3546 22.5694 12.6765 23.531L44.7768 46.8827Z"/>
            </g>
        </g>
        <defs>
            <clipPath id="clip0">
                <rect width="120" height="100" fill="white"/>
            </clipPath>
        </defs>
       
        
    </svg>
);
   
}