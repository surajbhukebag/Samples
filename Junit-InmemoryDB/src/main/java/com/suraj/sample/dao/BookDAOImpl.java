package com.suraj.sample.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.suraj.sample.model.Book;

@Repository
@Transactional
public class BookDAOImpl implements BookDAO {

	@PersistenceContext
	private EntityManager manager;

	public List<Book> getAllBooks() {
		List<Book> books = manager.createQuery("Select a From Book a",
				Book.class).getResultList();
		return books;
	}

	public Book getBookById(Integer id) {
		return manager.find(Book.class, id);
	}

	public boolean addBook(Book book) {
		try {
			manager.persist(book);
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}

}
