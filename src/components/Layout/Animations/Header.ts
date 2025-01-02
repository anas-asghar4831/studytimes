export const MainHeaderAnimation = async (_flag: boolean = true) => {

    console.log(_flag);

    // const waitForHeader = (): Promise<HTMLElement | null> => {
    //     return new Promise((resolve) => {
    //         const interval = setInterval(() => {
    //             const header = document.getElementById('Header');
    //             if (header) {
    //                 clearInterval(interval);
    //                 resolve(header);
    //             }
    //         }, 100);
    //     });
    // };

    // const header = await waitForHeader();
    // console.log("AnimationStart 1 Header", header);
    // if (!header) return;

    // // Set initial Tailwind CSS-based settings
    // header.style.transform = _flag ? 'translateY(0)' : 'translateY(-100%)';
};
