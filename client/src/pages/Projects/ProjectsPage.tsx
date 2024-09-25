import { useContext } from "react";
import { ProjectsToolbar } from "../../widgets/projects-toolbar";
import { DisplayTypeContext } from "../../features/change-display-type";
import { usePresentations } from "./hooks";
import { Paginator } from "./ui";

export function ProjectsPage() {
    const { presentations } = usePresentations();
    const { renderPresentation, wrapperClassName } = useContext(DisplayTypeContext);

    return (
        <main className="px-4">
            <div className="container mx-auto">
                <ProjectsToolbar />

                {presentations && (
                    <div className={`${wrapperClassName} w-full mt-10`}>
                        {presentations.map(renderPresentation)}
                    </div>
                )}

                <Paginator />
            </div>
        </main>
    );
}
