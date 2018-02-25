package com.suraj.sample.dao;

import java.util.List;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import com.suraj.sample.model.Book;

@ContextConfiguration(locations = "classpath:application-context-test.xml")
@RunWith(SpringJUnit4ClassRunner.class)
public class BookDaoImplTest {

	@Autowired
	private BookDAO bookDAO;

	@Test
	@Transactional
	@Rollback(true)
	public void testAddBook() {
		Book book = new Book("New Book", "Author Name", "author@email.com");

		bookDAO.addBook(book);
		List<Book> books = bookDAO.getAllBooks();
		Assert.assertEquals("New Book", books.get(0).getName());
		Assert.assertEquals("Author Name", books.get(0).getAuthor());
		Assert.assertEquals("author@email.com", books.get(0).getEmail());

	}

	@Test
	@Transactional
	@Rollback(true)
	public void testGetBook() {
		Book book = new Book("New Book", "Author Name", "author@email.com");

		bookDAO.addBook(book);
		List<Book> books = bookDAO.getAllBooks();

		Book result = bookDAO.getBookById(books.get(0).getId());

		Assert.assertEquals("New Book", result.getName());
		Assert.assertEquals("Author Name", result.getAuthor());
		Assert.assertEquals("author@email.com", result.getEmail());

	}

	@Test
	@Transactional
	@Rollback(true)
	public void testGetAllBooks() {
		Book book = new Book("New Book", "Author Name", "author@email.com");
		bookDAO.addBook(book);

		Book book2 = new Book("New Book 2", "Author Name 2",
				"author2@email.com");
		bookDAO.addBook(book2);

		List<Book> books = bookDAO.getAllBooks();
		Book result = books.get(0);
		Assert.assertEquals("New Book", result.getName());
		Assert.assertEquals("Author Name", result.getAuthor());
		Assert.assertEquals("author@email.com", result.getEmail());

		Book result2 = books.get(1);
		Assert.assertEquals("New Book 2", result2.getName());
		Assert.assertEquals("Author Name 2", result2.getAuthor());
		Assert.assertEquals("author2@email.com", result2.getEmail());

	}

}
