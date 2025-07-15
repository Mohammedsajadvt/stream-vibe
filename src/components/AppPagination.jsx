import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '../components/ui/pagination';

function AppPagination({
    currentPage = 1,
    totalPages = 1,
    onPageChange,
}) {
    const showEllipsis = totalPages > 7;

    const getPageNumbers = () => {
        if (!showEllipsis) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        if (currentPage <= 4) {
            return [1, 2, 3, 4, 5, '...', totalPages];
        }

        if (currentPage >= totalPages - 3) {
            return [
                1,
                '...',
                totalPages - 4,
                totalPages - 3,
                totalPages - 2,
                totalPages - 1,
                totalPages,
            ];
        }

        return [
            1,
            '...',
            currentPage - 1,
            currentPage,
            currentPage + 1,
            '...',
            totalPages,
        ];
    };

    const pages = getPageNumbers();

    return (
        <Pagination className='border rounded-lg border-[#333333] px-3 py-3 bg-black'>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            if (currentPage > 1) {
                                onPageChange(currentPage - 1);
                            }
                        }}
                        className={
                            currentPage === 1 ? 'pointer-events-none opacity-50' : ''
                        }
                    />
                </PaginationItem>

                <PaginationItem className="flex pr-3 pl-3 gap-1">
                    {Array.from({ length: totalPages }, (_, i) => {
                        const page = i + 1;
                        const isActive = currentPage === page;
                        return (
                            <span
                                key={page}
                                onClick={() => onPageChange(page)}
                                className={`w-4 h-1  rounded-full cursor-pointer transition-all duration-300 ${isActive ? 'bg-red-600 w-6' : 'bg-[#444]'
                                    }`}
                            />
                        );
                    })}
                </PaginationItem>

                <PaginationItem>
                    <PaginationNext
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            if (currentPage < totalPages) {
                                onPageChange(currentPage + 1);
                            }
                        }}
                        className={
                            currentPage === totalPages ? 'pointer-events-none opacity-50' : ''
                        }
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}

export { AppPagination };
