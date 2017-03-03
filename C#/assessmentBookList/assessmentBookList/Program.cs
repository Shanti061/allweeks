using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace assessmentBookList
{

    // creating a BookList class
    class BookList
    {
        public string bookTitle;
        public string bookAuthor;
        public double price;
        public double isbn;
        public string deleteBook;

        //creating a constructor
        public BookList(string bookTitle, string bookAuthor, double price, double isbn)
        {
            this.bookTitle = bookTitle;
            this.bookAuthor = bookAuthor;
            this.price = price;
            this.isbn = isbn;
         } 
   
    //displaying the book list
    public static void DisplayBookList(List<BookList> myBooks)
    {
            Console.WriteLine("Lists of the book: \n ");
            foreach (BookList book in myBooks)
        {
           
            Console.WriteLine("Title: {0} ", book.bookTitle);
            Console.WriteLine("Author: {0}", book.bookAuthor);
            Console.WriteLine("Price: {0}", book.price);
            Console.WriteLine("ISBN: {0} \n", book.isbn);
            }
    }

        //public static void RemoveBookList(List<BookList> myBooks)
        //{
        //    Console.WriteLine("Type the name of the book you would like to delete:");
        //    deleteBook = Console.ReadLine();

        //    if (deleteBook == myBooks.bookTitle)
        //    {
               
        //            myBooks.Remove(myBooks.bookTitle);
        //            myBooks.Remove(myBooks.bookAuthor);
        //            myBooks.Remove(myBooks.price);

               
        //    }

        //}


    }

    class Program
    {
        static void Main(string[] args)
        {
            string addBook, deleteBook, title, author;
            double price, isbn;

            List<BookList> myBooks = new List<BookList>();

            //adding value to the list
            BookList book1 = new BookList("The Alchemist", "Paulo Coehlo", 20, 0061964360);
            myBooks.Add(book1);

            BookList book2 = new BookList("Zero", "Don DeLillo", 16.99d, 0061964369);
            myBooks.Add(book2);

            BookList book3 = new BookList("The Noise of Time", "Julian Barnes", 14.99d, 0061974360);
            myBooks.Add(book3);

            BookList.DisplayBookList(myBooks);
            Console.WriteLine();

            Console.WriteLine("Would you like to add a book in the above list, press A; to delete a book, press D; to list all books, press L; to sort all books, press S: \n");
           
            Console.WriteLine("To exit, press X.");
            char response = Convert.ToChar(Console.ReadLine().ToUpper());

            do
            {
                switch (response)
                {

                    //If the user chooses to add a book in list its case 'A'
                    case 'A':
                        Console.WriteLine("Type the title of the book you would like to add:");
                        title = Console.ReadLine();
                        Console.WriteLine("Type the name of author");
                        author = Console.ReadLine();
                        Console.WriteLine("Type the price of the book");
                        price = Convert.ToDouble(Console.ReadLine());
                        Console.WriteLine("Type the ISBN of the book");
                        isbn = Convert.ToDouble(Console.ReadLine());
                        BookList book4 = new BookList(title, author, price, isbn);


                        myBooks.Add(book4);

                        BookList.DisplayBookList(myBooks);
                        Console.WriteLine();

                        break;

                        //displaying the list of books if the user enter 'l'
                    case 'L':
                        
                        Console.WriteLine();
                        BookList.DisplayBookList(myBooks);
                     break;

                    //case 'D':

                    //   myBooks.RemoveBookList();

                    //    break;


                     case 'S':
                     Console.WriteLine("Sorting the list alphabetically: ");
                     myBooks.Sort();
                        break;

                    default:
                        break;
                }
                Console.WriteLine("What would you like to do next: Add(A), Del(D), List(L), Sort(S) or exit(X)?:");
                response = Convert.ToChar(Console.ReadLine().ToUpper());
            }
            while (response != 'X');


        }
    }
}
