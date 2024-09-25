import { useState } from "react";
import { presentationsApi } from "../../../entities/presentations";
import { defaultPage, presentationsPerPage } from "../constants";

export function usePresentations() {
    const [page, setPage] = useState<number>(defaultPage);

    const { data: presentations } = presentationsApi.useGetAllPresentationsQuery({
        page: page,
        count: presentationsPerPage,
    });

    const { data: pagesCount } =
        presentationsApi.useGetPresentationsCountQuery(presentationsPerPage);

    const handlePageChange = (event: { selected: number }) => {
        setPage(event.selected);
    };

    return {
        presentations,
        handlePageChange,
        pagesCount,
    };
}
