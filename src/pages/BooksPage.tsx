import { booksQuery } from "@/api/books.api";
import AddBookModal from "@/components/AddBookModal";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { BookOpen } from "lucide-react";

export default function BooksPage() {
  const { data, isFetching, isError, error } = useQuery({
    queryKey: ["BOOKS"],
    queryFn: booksQuery,
  });

  if (isFetching) {
    return <p>Fetaching...</p>;
  }
  if (isError) {
    return <p>{JSON.stringify(error)}</p>;
  }

  const books = data?.data?.data;
  console.log(books);
  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <AddBookModal />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-25">Cover</TableHead>
              <TableHead>Title & Description</TableHead>
              <TableHead>Genre</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {books?.map((book) => (
              <TableRow key={book?.slug}>
                <TableCell>
                  <img
                    src={book?.coverImage}
                    alt={book?.title}
                    className="h-16 w-12 object-cover rounded shadow-sm"
                  />
                </TableCell>
                <TableCell className="max-w-md">
                  <div className="font-bold text-blue-600">{book?.title}</div>
                  <div className="text-sm text-muted-foreground line-clamp-1 text-ellipsis">
                    {book?.description}
                  </div>
                </TableCell>
                <TableCell>
                  <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold">
                    {book?.genre}
                  </span>
                </TableCell>
                <TableCell className="text-sm">
                  {new Date(book?.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-right">
                  <a
                    href={book.file}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <BookOpen className="h-4 w-4" />
                    Read PDF
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
