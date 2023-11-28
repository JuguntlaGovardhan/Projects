package com.wipro.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wipro.model.Pizza_Store_Details;

@Repository
public interface Pizza_storeDao extends JpaRepository<Pizza_Store_Details, Integer>{

}
