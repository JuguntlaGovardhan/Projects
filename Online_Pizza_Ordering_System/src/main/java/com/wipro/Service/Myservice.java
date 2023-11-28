package com.wipro.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.wipro.Dao.Items_Dao;
import com.wipro.Dao.Pizza_storeDao;
import com.wipro.Dao.UserRepository;
import com.wipro.model.Foor_Items_Details;
import com.wipro.model.Pizza_Store_Details;
import com.wipro.model.User;

@Service
public class Myservice {
	
	@Autowired
	UserRepository repo;
	
	
	@Autowired
	Items_Dao itemDao;
	
	@Autowired
	Pizza_storeDao storeDao;
	//===========Registration=========//
	public ResponseEntity<String> registerUser(User user) {
        // Implement your registration logic here, including validation

        // For example, you can add validation checks here
        if (user.getName() == null || user.getEmail() == null || user.getPassword() == null) {
            return ResponseEntity.badRequest().body("Missing user information");
        }

        // Check for duplicate email address (you can customize this)
        if (repo.existsByEmail(user.getEmail())) {
            return ResponseEntity.badRequest().body("Email address is already registered");
        }

 

        // Perform any other validation or business logic checks

 

        // Save the user to the database
        repo.save(user);

 

        return ResponseEntity.ok("User registered successfully");
    }
	
	//========getBy UserEmnail========//
	//===== getll byId items======//
		public User getByemail(String email) {
			Optional<User> obj=repo.findByemail(email);
			if(obj.isPresent())
				return obj.get();
			else return null;
		}
	
	//===========postmapping=========//
	public Pizza_Store_Details savestore(Pizza_Store_Details store) {
		return storeDao.save(store);
	}
	
	public Foor_Items_Details saveitem(Foor_Items_Details item) {
		return itemDao.save(item);
	}
	//=================putmaping===============//
	//======pizza Store======//
	public Pizza_Store_Details updatePizzaStoreDetails(Integer id, Pizza_Store_Details store) {
		Pizza_Store_Details existingStore = storeDao.findById(id).orElse(null);
        if (existingStore != null) {
            existingStore.setStoreName(store.getStoreName());
            existingStore.setStoreAddress(store.getStoreAddress());
            return storeDao.save(existingStore);
        }
        return null;
    }
	//========foodItem======//
	public Foor_Items_Details updatefoodItemsDetails(Integer id, Foor_Items_Details item) {
		Foor_Items_Details existingStore = itemDao.findById(id).orElse(null);
        if (existingStore != null) {
            existingStore.setItemName(item.getItemName());
            existingStore.setItemCost(item.getItemCost());
            return itemDao.save(existingStore);
        }
        return null;
    }
	//==============Get Mapping==========//
	//======Pizza store=======//
	public List<Pizza_Store_Details> GetAllPizzaStoreDetails() {
		 return (List<Pizza_Store_Details>)storeDao.findAll();
        
    }
	
	public List<Foor_Items_Details> GetAllFitemDetails() {
		 return (List<Foor_Items_Details>)itemDao.findAll();
       
   }
	//===== getll byId items======//
	public Foor_Items_Details getById(int Id) {
		Optional<Foor_Items_Details> obj=itemDao.findById(Id);
		if(obj.isPresent())
			return obj.get();
		else return null;
	}
	
	
	//-----------
	public Pizza_Store_Details getByStoreId(int Id) {
		Optional<Pizza_Store_Details> obj=storeDao.findById(Id);
		if(obj.isPresent())
			return obj.get();
		else return null;
	}
	//------------
	public String deleteId(int Id) {
		Foor_Items_Details obj=getById(Id);
		itemDao.delete(obj);
		return "";
	}

	

	
	
	

}
