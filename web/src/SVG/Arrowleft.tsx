import DamagePercent from "./durablity";
export default function Arrowleft({ styles, durablitystyles, percent, label }: { styles?: React.CSSProperties, durablitystyles?: React.CSSProperties, percent: number, label: string }) {
    return (
        <>
            <DamagePercent percent={percent} label={label} styles={durablitystyles} />
            <svg style={styles} viewBox="0 0 146 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 45V45.5L7.5 45H8ZM7.64645 0.646447C7.84171 0.451184 8.15829 0.451184 8.35355 0.646447L11.5355 3.82843C11.7308 4.02369 11.7308 4.34027 11.5355 4.53553C11.3403 4.7308 11.0237 4.7308 10.8284 4.53553L8 1.70711L5.17157 4.53553C4.97631 4.7308 4.65973 4.7308 4.46447 4.53553C4.2692 4.34027 4.2692 4.02369 4.46447 3.82843L7.64645 0.646447ZM154.053 45.5C153.776 45.5 153.553 45.2761 153.553 45C153.553 44.7239 153.776 44.5 154.053 44.5V45.5ZM150.158 44.5C150.434 44.5 150.658 44.7239 150.658 45C150.658 45.2761 150.434 45.5 150.158 45.5V44.5ZM146.263 45.5C145.987 45.5 145.763 45.2761 145.763 45C145.763 44.7239 145.987 44.5 146.263 44.5V45.5ZM142.368 44.5C142.645 44.5 142.868 44.7239 142.868 45C142.868 45.2761 142.645 45.5 142.368 45.5V44.5ZM138.474 45.5C138.198 45.5 137.974 45.2761 137.974 45C137.974 44.7239 138.198 44.5 138.474 44.5V45.5ZM134.579 44.5C134.855 44.5 135.079 44.7239 135.079 45C135.079 45.2761 134.855 45.5 134.579 45.5V44.5ZM130.684 45.5C130.408 45.5 130.184 45.2761 130.184 45C130.184 44.7239 130.408 44.5 130.684 44.5V45.5ZM126.789 44.5C127.066 44.5 127.289 44.7239 127.289 45C127.289 45.2761 127.066 45.5 126.789 45.5V44.5ZM122.895 45.5C122.619 45.5 122.395 45.2761 122.395 45C122.395 44.7239 122.619 44.5 122.895 44.5V45.5ZM119 44.5C119.276 44.5 119.5 44.7239 119.5 45C119.5 45.2761 119.276 45.5 119 45.5V44.5ZM115.105 45.5C114.829 45.5 114.605 45.2761 114.605 45C114.605 44.7239 114.829 44.5 115.105 44.5V45.5ZM111.211 44.5C111.487 44.5 111.711 44.7239 111.711 45C111.711 45.2761 111.487 45.5 111.211 45.5V44.5ZM107.316 45.5C107.04 45.5 106.816 45.2761 106.816 45C106.816 44.7239 107.04 44.5 107.316 44.5V45.5ZM103.421 44.5C103.697 44.5 103.921 44.7239 103.921 45C103.921 45.2761 103.697 45.5 103.421 45.5V44.5ZM99.5263 45.5C99.2502 45.5 99.0263 45.2761 99.0263 45C99.0263 44.7239 99.2502 44.5 99.5263 44.5V45.5ZM95.6316 44.5C95.9077 44.5 96.1316 44.7239 96.1316 45C96.1316 45.2761 95.9077 45.5 95.6316 45.5V44.5ZM91.7368 45.5C91.4607 45.5 91.2368 45.2761 91.2368 45C91.2368 44.7239 91.4607 44.5 91.7368 44.5V45.5ZM87.8421 44.5C88.1182 44.5 88.3421 44.7239 88.3421 45C88.3421 45.2761 88.1182 45.5 87.8421 45.5V44.5ZM83.9474 45.5C83.6712 45.5 83.4474 45.2761 83.4474 45C83.4474 44.7239 83.6712 44.5 83.9474 44.5V45.5ZM80.0526 44.5C80.3288 44.5 80.5526 44.7239 80.5526 45C80.5526 45.2761 80.3288 45.5 80.0526 45.5V44.5ZM76.1579 45.5C75.8817 45.5 75.6579 45.2761 75.6579 45C75.6579 44.7239 75.8817 44.5 76.1579 44.5V45.5ZM72.2632 44.5C72.5393 44.5 72.7632 44.7239 72.7632 45C72.7632 45.2761 72.5393 45.5 72.2632 45.5V44.5ZM68.3684 45.5C68.0923 45.5 67.8684 45.2761 67.8684 45C67.8684 44.7239 68.0923 44.5 68.3684 44.5V45.5ZM64.4737 44.5C64.7498 44.5 64.9737 44.7239 64.9737 45C64.9737 45.2761 64.7498 45.5 64.4737 45.5V44.5ZM60.5789 45.5C60.3028 45.5 60.0789 45.2761 60.0789 45C60.0789 44.7239 60.3028 44.5 60.5789 44.5V45.5ZM56.6842 44.5C56.9603 44.5 57.1842 44.7239 57.1842 45C57.1842 45.2761 56.9603 45.5 56.6842 45.5V44.5ZM52.7895 45.5C52.5133 45.5 52.2895 45.2761 52.2895 45C52.2895 44.7239 52.5133 44.5 52.7895 44.5V45.5ZM48.8947 44.5C49.1709 44.5 49.3947 44.7239 49.3947 45C49.3947 45.2761 49.1709 45.5 48.8947 45.5V44.5ZM45 45.5C44.7238 45.5 44.5 45.2761 44.5 45C44.5 44.7239 44.7238 44.5 45 44.5V45.5ZM41.1053 44.5C41.3814 44.5 41.6053 44.7239 41.6053 45C41.6053 45.2761 41.3814 45.5 41.1053 45.5V44.5ZM37.2105 45.5C36.9344 45.5 36.7105 45.2761 36.7105 45C36.7105 44.7239 36.9344 44.5 37.2105 44.5V45.5ZM33.3158 44.5C33.5919 44.5 33.8158 44.7239 33.8158 45C33.8158 45.2761 33.5919 45.5 33.3158 45.5V44.5ZM29.421 45.5C29.1449 45.5 28.921 45.2761 28.921 45C28.921 44.7239 29.1449 44.5 29.421 44.5V45.5ZM25.5263 44.5C25.8024 44.5 26.0263 44.7239 26.0263 45C26.0263 45.2761 25.8024 45.5 25.5263 45.5V44.5ZM21.6316 45.5C21.3554 45.5 21.1316 45.2761 21.1316 45C21.1316 44.7239 21.3554 44.5 21.6316 44.5V45.5ZM17.7368 44.5C18.013 44.5 18.2368 44.7239 18.2368 45C18.2368 45.2761 18.013 45.5 17.7368 45.5V44.5ZM13.8421 45.5C13.566 45.5 13.3421 45.2761 13.3421 45C13.3421 44.7239 13.566 44.5 13.8421 44.5V45.5ZM9.94739 44.5C10.2235 44.5 10.4474 44.7239 10.4474 45C10.4474 45.2761 10.2235 45.5 9.94739 45.5V44.5ZM7.5 43.1667C7.5 42.8905 7.72386 42.6667 8 42.6667C8.27614 42.6667 8.5 42.8905 8.5 43.1667H7.5ZM8.5 39.5C8.5 39.7761 8.27614 40 8 40C7.72386 40 7.5 39.7761 7.5 39.5H8.5ZM7.5 35.8333C7.5 35.5572 7.72386 35.3333 8 35.3333C8.27614 35.3333 8.5 35.5572 8.5 35.8333H7.5ZM8.5 32.1667C8.5 32.4428 8.27614 32.6667 8 32.6667C7.72386 32.6667 7.5 32.4428 7.5 32.1667H8.5ZM7.5 28.5C7.5 28.2239 7.72386 28 8 28C8.27614 28 8.5 28.2239 8.5 28.5H7.5ZM8.5 24.8333C8.5 25.1095 8.27614 25.3333 8 25.3333C7.72386 25.3333 7.5 25.1095 7.5 24.8333H8.5ZM7.5 21.1667C7.5 20.8905 7.72386 20.6667 8 20.6667C8.27614 20.6667 8.5 20.8905 8.5 21.1667H7.5ZM8.5 17.5C8.5 17.7761 8.27614 18 8 18C7.72386 18 7.5 17.7761 7.5 17.5H8.5ZM7.5 13.8333C7.5 13.5572 7.72386 13.3333 8 13.3333C8.27614 13.3333 8.5 13.5572 8.5 13.8333H7.5ZM8.5 10.1667C8.5 10.4428 8.27614 10.6667 8 10.6667C7.72386 10.6667 7.5 10.4428 7.5 10.1667H8.5ZM7.5 6.5C7.5 6.22386 7.72386 6 8 6C8.27614 6 8.5 6.22386 8.5 6.5H7.5ZM8.5 2.83333C8.5 3.10947 8.27614 3.33333 8 3.33333C7.72386 3.33333 7.5 3.10947 7.5 2.83333H8.5ZM156 45.5H154.053V44.5H156V45.5ZM150.158 45.5H146.263V44.5H150.158V45.5ZM142.368 45.5H138.474V44.5H142.368V45.5ZM134.579 45.5H130.684V44.5H134.579V45.5ZM126.789 45.5H122.895V44.5H126.789V45.5ZM119 45.5H115.105V44.5H119V45.5ZM111.211 45.5H107.316V44.5H111.211V45.5ZM103.421 45.5H99.5263V44.5H103.421V45.5ZM95.6316 45.5H91.7368V44.5H95.6316V45.5ZM87.8421 45.5H83.9474V44.5H87.8421V45.5ZM80.0526 45.5H76.1579V44.5H80.0526V45.5ZM72.2632 45.5H68.3684V44.5H72.2632V45.5ZM64.4737 45.5H60.5789V44.5H64.4737V45.5ZM56.6842 45.5H52.7895V44.5H56.6842V45.5ZM48.8947 45.5H45V44.5H48.8947V45.5ZM41.1053 45.5H37.2105V44.5H41.1053V45.5ZM33.3158 45.5H29.421V44.5H33.3158V45.5ZM25.5263 45.5H21.6316V44.5H25.5263V45.5ZM17.7368 45.5H13.8421V44.5H17.7368V45.5ZM9.94739 45.5H8V44.5H9.94739V45.5ZM7.5 45V43.1667H8.5V45H7.5ZM7.5 39.5V35.8333H8.5V39.5H7.5ZM7.5 32.1667V28.5H8.5V32.1667H7.5ZM7.5 24.8333V21.1667H8.5V24.8333H7.5ZM7.5 17.5V13.8333H8.5V17.5H7.5ZM7.5 10.1667V6.5H8.5V10.1667H7.5ZM7.5 2.83333V1H8.5V2.83333H7.5ZM8 45V46L7 45H8ZM7.29289 0.292893C7.68342 -0.0976311 8.31658 -0.0976311 8.70711 0.292893L15.0711 6.65685C15.4616 7.04738 15.4616 7.68054 15.0711 8.07107C14.6805 8.46159 14.0474 8.46159 13.6569 8.07107L8 2.41421L2.34315 8.07107C1.95262 8.46159 1.31946 8.46159 0.928932 8.07107C0.538408 7.68054 0.538408 7.04738 0.928932 6.65685L7.29289 0.292893ZM154.053 46C153.5 46 153.053 45.5523 153.053 45C153.053 44.4477 153.5 44 154.053 44V46ZM150.158 44C150.71 44 151.158 44.4477 151.158 45C151.158 45.5523 150.71 46 150.158 46V44ZM146.263 46C145.711 46 145.263 45.5523 145.263 45C145.263 44.4477 145.711 44 146.263 44V46ZM142.368 44C142.921 44 143.368 44.4477 143.368 45C143.368 45.5523 142.921 46 142.368 46V44ZM138.474 46C137.921 46 137.474 45.5523 137.474 45C137.474 44.4477 137.921 44 138.474 44V46ZM134.579 44C135.131 44 135.579 44.4477 135.579 45C135.579 45.5523 135.131 46 134.579 46V44ZM130.684 46C130.132 46 129.684 45.5523 129.684 45C129.684 44.4477 130.132 44 130.684 44V46ZM126.789 44C127.342 44 127.789 44.4477 127.789 45C127.789 45.5523 127.342 46 126.789 46V44ZM122.895 46C122.342 46 121.895 45.5523 121.895 45C121.895 44.4477 122.342 44 122.895 44V46ZM119 44C119.552 44 120 44.4477 120 45C120 45.5523 119.552 46 119 46V44ZM115.105 46C114.553 46 114.105 45.5523 114.105 45C114.105 44.4477 114.553 44 115.105 44V46ZM111.211 44C111.763 44 112.211 44.4477 112.211 45C112.211 45.5523 111.763 46 111.211 46V44ZM107.316 46C106.764 46 106.316 45.5523 106.316 45C106.316 44.4477 106.764 44 107.316 44V46ZM103.421 44C103.973 44 104.421 44.4477 104.421 45C104.421 45.5523 103.973 46 103.421 46V44ZM99.5263 46C98.974 46 98.5263 45.5523 98.5263 45C98.5263 44.4477 98.974 44 99.5263 44V46ZM95.6316 44C96.1839 44 96.6316 44.4477 96.6316 45C96.6316 45.5523 96.1839 46 95.6316 46V44ZM91.7368 46C91.1846 46 90.7368 45.5523 90.7368 45C90.7368 44.4477 91.1846 44 91.7368 44V46ZM87.8421 44C88.3944 44 88.8421 44.4477 88.8421 45C88.8421 45.5523 88.3944 46 87.8421 46V44ZM83.9474 46C83.3951 46 82.9474 45.5523 82.9474 45C82.9474 44.4477 83.3951 44 83.9474 44V46ZM80.0526 44C80.6049 44 81.0526 44.4477 81.0526 45C81.0526 45.5523 80.6049 46 80.0526 46V44ZM76.1579 46C75.6056 46 75.1579 45.5523 75.1579 45C75.1579 44.4477 75.6056 44 76.1579 44V46ZM72.2632 44C72.8154 44 73.2632 44.4477 73.2632 45C73.2632 45.5523 72.8154 46 72.2632 46V44ZM68.3684 46C67.8161 46 67.3684 45.5523 67.3684 45C67.3684 44.4477 67.8161 44 68.3684 44V46ZM64.4737 44C65.026 44 65.4737 44.4477 65.4737 45C65.4737 45.5523 65.026 46 64.4737 46V44ZM60.5789 46C60.0267 46 59.5789 45.5523 59.5789 45C59.5789 44.4477 60.0267 44 60.5789 44V46ZM56.6842 44C57.2365 44 57.6842 44.4477 57.6842 45C57.6842 45.5523 57.2365 46 56.6842 46V44ZM52.7895 46C52.2372 46 51.7895 45.5523 51.7895 45C51.7895 44.4477 52.2372 44 52.7895 44V46ZM48.8947 44C49.447 44 49.8947 44.4477 49.8947 45C49.8947 45.5523 49.447 46 48.8947 46V44ZM45 46C44.4477 46 44 45.5523 44 45C44 44.4477 44.4477 44 45 44V46ZM41.1053 44C41.6575 44 42.1053 44.4477 42.1053 45C42.1053 45.5523 41.6575 46 41.1053 46V44ZM37.2105 46C36.6582 46 36.2105 45.5523 36.2105 45C36.2105 44.4477 36.6582 44 37.2105 44V46ZM33.3158 44C33.8681 44 34.3158 44.4477 34.3158 45C34.3158 45.5523 33.8681 46 33.3158 46V44ZM29.421 46C28.8688 46 28.421 45.5523 28.421 45C28.421 44.4477 28.8688 44 29.421 44V46ZM25.5263 44C26.0786 44 26.5263 44.4477 26.5263 45C26.5263 45.5523 26.0786 46 25.5263 46V44ZM21.6316 46C21.0793 46 20.6316 45.5523 20.6316 45C20.6316 44.4477 21.0793 44 21.6316 44V46ZM17.7368 44C18.2891 44 18.7368 44.4477 18.7368 45C18.7368 45.5523 18.2891 46 17.7368 46V44ZM13.8421 46C13.2898 46 12.8421 45.5523 12.8421 45C12.8421 44.4477 13.2898 44 13.8421 44V46ZM9.94739 44C10.4997 44 10.9474 44.4477 10.9474 45C10.9474 45.5523 10.4997 46 9.94739 46V44ZM7 43.1667C7 42.6144 7.44772 42.1667 8 42.1667C8.55228 42.1667 9 42.6144 9 43.1667H7ZM9 39.5C9 40.0523 8.55228 40.5 8 40.5C7.44772 40.5 7 40.0523 7 39.5H9ZM7 35.8333C7 35.281 7.44772 34.8333 8 34.8333C8.55228 34.8333 9 35.281 9 35.8333H7ZM9 32.1667C9 32.719 8.55228 33.1667 8 33.1667C7.44772 33.1667 7 32.719 7 32.1667H9ZM7 28.5C7 27.9477 7.44772 27.5 8 27.5C8.55228 27.5 9 27.9477 9 28.5H7ZM9 24.8333C9 25.3856 8.55228 25.8333 8 25.8333C7.44772 25.8333 7 25.3856 7 24.8333H9ZM7 21.1667C7 20.6144 7.44772 20.1667 8 20.1667C8.55228 20.1667 9 20.6144 9 21.1667H7ZM9 17.5C9 18.0523 8.55228 18.5 8 18.5C7.44772 18.5 7 18.0523 7 17.5H9ZM7 13.8333C7 13.2811 7.44772 12.8333 8 12.8333C8.55228 12.8333 9 13.2811 9 13.8333H7ZM9 10.1667C9 10.719 8.55228 11.1667 8 11.1667C7.44772 11.1667 7 10.719 7 10.1667H9ZM7 6.5C7 5.94772 7.44772 5.5 8 5.5C8.55228 5.5 9 5.94772 9 6.5H7ZM9 2.83333C9 3.38562 8.55228 3.83333 8 3.83333C7.44772 3.83333 7 3.38562 7 2.83333H9ZM156 46H154.053V44H156V46ZM150.158 46H146.263V44H150.158V46ZM142.368 46H138.474V44H142.368V46ZM134.579 46H130.684V44H134.579V46ZM126.789 46H122.895V44H126.789V46ZM119 46H115.105V44H119V46ZM111.211 46H107.316V44H111.211V46ZM103.421 46H99.5263V44H103.421V46ZM95.6316 46H91.7368V44H95.6316V46ZM87.8421 46H83.9474V44H87.8421V46ZM80.0526 46H76.1579V44H80.0526V46ZM72.2632 46H68.3684V44H72.2632V46ZM64.4737 46H60.5789V44H64.4737V46ZM56.6842 46H52.7895V44H56.6842V46ZM48.8947 46H45V44H48.8947V46ZM41.1053 46H37.2105V44H41.1053V46ZM33.3158 46H29.421V44H33.3158V46ZM25.5263 46H21.6316V44H25.5263V46ZM17.7368 46H13.8421V44H17.7368V46ZM9.94739 46H8V44H9.94739V46ZM7 45V43.1667H9V45H7ZM7 39.5V35.8333H9V39.5H7ZM7 32.1667V28.5H9V32.1667H7ZM7 24.8333V21.1667H9V24.8333H7ZM7 17.5V13.8333H9V17.5H7ZM7 10.1667V6.5H9V10.1667H7ZM7 2.83333V1H9V2.83333H7Z" fill="white" />
            </svg>
        </>
    )
}