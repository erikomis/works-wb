import {
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Product } from "../../types/product";
import { ProductService } from "../../service/product.service";
import { Button } from "../../components/ui/Button";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { LucideTrash2 } from "../../components/icons/Trash";
import { LucideFilePenLine } from "../../components/icons/FilePenLine";

type ProductTable = Product & { actions: string };

type TableProductProps = {
  openModal: (id: number) => void;
};

export const useTableProduct = ({ openModal }: TableProductProps) => {
  const columnHelper = createColumnHelper<ProductTable>();
  const service = new ProductService();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns: any = [
    columnHelper.accessor("id", {
      id: "id",
      cell: (info) => <span>{info.row.index + 1}</span>,
      header: "id",
    }),
    columnHelper.accessor("plu", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "plu",
    }),
    columnHelper.accessor("description", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "description",
    }),
    columnHelper.accessor("ncm", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "ncm",
    }),
    columnHelper.accessor("unidade", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "unidade",
    }),
    columnHelper.accessor("created_at", {
      cell: (info) => (
        <span>{new Date(info.getValue()).toLocaleDateString()}</span>
      ),
      header: "created_at",
    }),
    columnHelper.accessor("actions", {
      cell: (info) => (
        <div className="flex items-center space-x-3.5">
          <Button type="button" color="ghost">
            <LucideFilePenLine />
          </Button>
          <Button
            color="ghost"
            type="button"
            onClick={() => openModal(info.row.original.id)}
          >
            <LucideTrash2 />
          </Button>
        </div>
      ),
      header: "actions",
    }),
  ];
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [globalFilter, setGlobalFilter] = useState("");
  const { data } = useQuery({
    queryKey: ["products", pagination],
    queryFn: () =>
      service.listAllProducts(pagination.pageIndex + 1, pagination.pageSize),
  });

  const table = useReactTable({
    data: data ?? [],
    columns,
    state: {
      globalFilter,
      pagination,
    },
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
  });

  return {
    table,
    globalFilter,
    setGlobalFilter,
  };
};
