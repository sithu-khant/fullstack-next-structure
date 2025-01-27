# Book API Routes

## Explanation of the Routes

1. **Create**:

   - **Route**: `create`
   - **Purpose**: Used to create a new book.
   - **Input**: Takes the book data (e.g., name, start date) as input.

2. **Update**:

   - **Route**: `update`
   - **Purpose**: Used to update an existing book.
   - **Input**: Takes an object containing the book ID and the new data to update the book.

3. **Delete**:

   - **Route**: `delete`
   - **Purpose**: Used to delete a specific book.
   - **Input**: Takes the book ID as input to identify which book to delete.

4. **Get**:

   - **Route**: `get`
   - **Purpose**: Retrieves a specific book based.
   - **Input**: Takes the book ID as input to identify which book to retrieve.

5. **Get All**:

   - **Route**: `getAll`
   - **Purpose**: Retrieves all subscriptions.
   - **Input**: None (this is a query that returns a list of subscriptions).

## Example

Using Drizzle ORM with SQLite in a tRPC API for managing books involves setting up the ORM, defining your database schema, and integrating it with your tRPC routes. Below is a step-by-step guide to achieve this.

### Step 1: Install Dependencies

First, ensure you have the necessary packages installed. You will need `drizzle-orm`, `sqlite3`, and `@trpc/server`:

```bash
npm install drizzle-orm sqlite3 @trpc/server zod
```

### Step 2: Set Up Drizzle ORM with SQLite

Create a file to configure your database connection and define your schema. For example, you can create a file named `db.ts`:

```typescript
// db.ts
import { drizzle } from "drizzle-orm/sqlite3";
import sqlite3 from "sqlite3";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

// Create a SQLite database connection
const db = new sqlite3.Database(":memory:"); // Use ':memory:' for an in-memory database or provide a file path for persistent storage

// Define the Book table schema
export const booksTable = sqliteTable("books", {
   id: integer("id").primaryKey().autoincrement(),
   title: text("title").notNull(),
   author: text("author").notNull(),
   publishedDate: text("published_date").notNull(),
});

// Initialize the Drizzle ORM
export const drizzleDb = drizzle(db);
```

### Step 3: Create the Book Router

Now, create the tRPC router for managing books, integrating Drizzle ORM for database operations:

```typescript
// bookRouter.ts
import { z } from "zod";
import { procedure, router } from "./client"; // Adjust the import based on your setup
import { drizzleDb, booksTable } from "./db"; // Import the database and table schema

// Define a Zod schema for book input
const bookSchema = z.object({
   title: z.string().min(1, "Title is required"),
   author: z.string().min(1, "Author is required"),
   publishedDate: z.string().refine(
      (date) => {
         const parsedDate = new Date(date);
         return !isNaN(parsedDate.getTime()); // Check if the date is valid
      },
      {
         message: "Invalid date format",
      },
   ),
});

// Define the books router
export const bookRouter = router({
   // Create a new book
   create: procedure.input(bookSchema).mutation(async (opts) => {
      const { input } = opts;
      // Logic to create a book
      await drizzleDb.insert(booksTable).values({
         title: input.title,
         author: input.author,
         published_date: input.publishedDate,
      });
      return { success: true, message: "Book created!", book: input };
   }),

   // Get all books
   getAll: procedure.query(async () => {
      // Logic to get all books
      const books = await drizzleDb.select().from(booksTable);
      return books;
   }),

   // Get a book by ID
   get: procedure
      .input(z.number()) // Input is the book ID
      .query(async (opts) => {
         const { input } = opts;
         // Logic to get a book by ID
         const book = await drizzleDb
            .select()
            .from(booksTable)
            .where(booksTable.id.eq(input))
            .execute();
         return book[0]; // Return the first matching book
      }),

   // Update a book
   update: procedure
      .input(
         z.object({
            id: z.number(),
            data: bookSchema,
         }),
      )
      .mutation(async (opts) => {
         const { input } = opts;
         // Logic to update a book
         await drizzleDb
            .update(booksTable)
            .set({
               title: input.data.title,
               author: input.data.author,
               published_date: input.data.publishedDate,
            })
            .where(booksTable.id.eq(input.id));
         return { success: true, message: "Book updated!", book: input.data };
      }),

   // Delete a book
   delete: procedure
      .input(z.number()) // Input is the book ID
      .mutation(async (opts) => {
         const { input } = opts;
         // Logic to delete a book
         await drizzleDb.delete(booksTable).where(booksTable.id.eq(input));
         return { success: true, message: "Book deleted!" };
      }),
});

// Export type definition of the API
export type BookRouter = typeof bookRouter;
```

### Step 4: Accessing the Book Routes

You can access these routes from the client side as follows:

```typescript
import { trpc } from "./trpc"; // Adjust the import based on your setup

// Create a new book
async function createBook() {
   const response = await trpc.app.book.create.mutate({
      title: "New Book",
      author: "New Author",
      publishedDate: "2023-01-01",
   });
   console.log(response);
}

// Get all books
async function getAllBooks() {
   const books = await trpc.app.book.getAll.query();
   console.log(books);
}

// Get a book by ID
async function getBookById(id: number) {
   const book = await trpc.app.book.getById.query(id);
   console.log(book);
}

// Update a book
async function updateBook(id: number) {
   const response = await trpc.app.book.update.mutate({
      id,
      data: {
         title: "Updated Book Title",
         author: "Updated Author",
         publishedDate: "2023-01-01",
      },
   });
   console.log(response);
}

// Delete a book
async function deleteBook(id: number) {
   const response = await trpc.app.book.delete.mutate(id);
   console.log(response);
}
```

### Summary of the Workflow

1. **Create**: Use the `create` route to add a new book with the required data.
2. **Get All**: Use the `getAll` route to retrieve a list of all books.
3. **Get By ID**: Use the `getById` route to retrieve a specific book by its ID.
4. **Update**: Use the `update` route to modify an existing book's details.
5. **Delete**: Use the `delete` route to remove a book by its ID.

### Conclusion

This setup provides a complete workflow for managing books using Drizzle ORM with SQLite in a tRPC API. You can easily extend this example to include more features or handle additional edge cases as needed. If you have any further questions or need additional details, feel free to ask!
