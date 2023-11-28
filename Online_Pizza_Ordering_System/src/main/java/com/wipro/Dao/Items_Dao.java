package com.wipro.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wipro.model.Foor_Items_Details;


@Repository
public interface Items_Dao extends JpaRepository<Foor_Items_Details, Integer>{

	
	
}
