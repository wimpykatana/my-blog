import React from "react";

interface PharalaxProps {
    id: string;
    subtitle?: string;
    mainTitle?: string;
    belowTitle?: string;
    minHeight?: boolean;
    component?: React.ReactNode;
}

export function Pharalax({ id,subtitle, mainTitle, belowTitle, minHeight, component }: PharalaxProps) {
    return (
       <section>
        <div className={`relative bg-fixed bg-center bg-no-repeat bg-cover ${minHeight ? 'h-96' : 'h-screen'} ${id}`}>
            <div className="flex justify-center items-center h-4/5">
                <div className="flex flex-col p-5">
                    {subtitle && <span className="bg-slate-100 max-w-40 text-center py-2 z-10">{subtitle}</span>}
                    {mainTitle && <span className="text-8xl bg-slate-100 px-5 drop-shadow-lg text-center">{mainTitle}</span>}
                    {belowTitle && <span className="bg-zinc-700 p-2 text-white drop-shadow-lg px-5">{belowTitle}</span>}
                    {component && component}
                </div>
            </div>
        </div>
       </section>
    );
}