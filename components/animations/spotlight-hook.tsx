'use client';

import { useEffect, useRef } from "react";

export const useSpotlight = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const applyOverlayMask = (e: PointerEvent) => {
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        container.style.setProperty("--x", `${x}px`);
        container.style.setProperty("--y", `${y}px`);
        container.style.setProperty("--opacity", "1");
    };

    const removeOverlayMask = () => {
        if (!containerRef.current) return;
        containerRef.current.style.setProperty("--opacity", "0");
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handlePointerMove = (e: PointerEvent) => applyOverlayMask(e);
        const handlePointerLeave = () => removeOverlayMask();

        container.addEventListener("pointermove", handlePointerMove);
        container.addEventListener("pointerleave", handlePointerLeave);

        return () => {
            container.removeEventListener("pointermove", handlePointerMove);
            container.removeEventListener("pointerleave", handlePointerLeave);
        };
    }, []);

    return containerRef;
};