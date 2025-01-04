import gsap from "gsap";

export const createTimeline = (
    mode: "show" | "hide",
    mobileNav: HTMLDivElement | null,
    links: NodeListOf<HTMLAnchorElement> | undefined,
    navItemsList: NodeListOf<HTMLLIElement> | undefined
) => {
    const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        onComplete: () => void tl.kill(),
    });

    if (links?.length === 2 && mobileNav && navItemsList) {
        const isShow = mode === "show";
        const scale = isShow ? 180 : 0;
        const xValue = isShow ? "0%" : "-100%";
        const afterWidth = isShow ? "100%" : "0%";

        if (isShow) {
            tl.add("start")
                .to(links[0], { opacity: 0 }, "start")
                .to(links[1], { opacity: 1 }, "start")
                .to(mobileNav, { scale }, "start")
                .add("items")
                .to(
                    Array.from(navItemsList),
                    { x: xValue, duration: 0.3, stagger: 0.1 },
                    "items-=90%"
                )
                .to(
                    Array.from(navItemsList),
                    { "--after-width": afterWidth, duration: 0.3, stagger: 0.1 },
                    "<+=30%"
                );
        } else {
            tl.add("items")
                .to(
                    Array.from(navItemsList),
                    { x: xValue, duration: 0.3, stagger: 0 },
                    "items"
                )
                .to(
                    Array.from(navItemsList),
                    { "--after-width": afterWidth, duration: 0.3, stagger: 0 },
                    "items"
                )
                .add("final", "<10%")
                .to(links[1], { opacity: 0 }, "final")
                .to(links[0], { opacity: 1 }, "final")
                .to(mobileNav, { scale }, "final");
        }
    }

    return tl;
};
