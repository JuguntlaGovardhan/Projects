package com.wipro.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.Service.Myservice;
import com.wipro.model.Foor_Items_Details;
import com.wipro.model.Pizza_Store_Details;
import com.wipro.model.User;

@RestController
@RequestMapping("")
@CrossOrigin
public class MainController {
	
	@Autowired
	Myservice service; 
	
	@PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody com.wipro.model.User user) {
        return service.registerUser(user);
    }
    //=======getBy userEmail=======//
    @GetMapping("/email/{email}")
    public ResponseEntity<Object> getByemail(@PathVariable String email) {
    	User obj=service.getByemail(email);
    	if(obj!=null) return new ResponseEntity<Object>(obj,HttpStatus.OK);
    	else return new ResponseEntity<Object>("Data Not Found",HttpStatus.BAD_GATEWAY);
   }
	
	
	
	//===========postmapping=========
	@PostMapping("/addstore")
	public ResponseEntity<Pizza_Store_Details> savestore(@RequestBody Pizza_Store_Details store){
		Pizza_Store_Details obj=service.savestore(store);
		return new ResponseEntity<Pizza_Store_Details>(obj,HttpStatus.ACCEPTED);
	}
	@PostMapping("/additem")
	public ResponseEntity<Foor_Items_Details> saveItem(@RequestBody Foor_Items_Details item){
		Foor_Items_Details obj=service.saveitem(item);
		return new ResponseEntity<Foor_Items_Details>(obj,HttpStatus.ACCEPTED);
	}
	
	//===========putmapping==============//
	//========pizza Store====/
	@PutMapping("/addstore/{id}")
    public ResponseEntity<Pizza_Store_Details> updatePizzaStore(@PathVariable Integer id, @RequestBody Pizza_Store_Details updatedStore) {
    	Pizza_Store_Details updatedPizzaStore = service.updatePizzaStoreDetails(id, updatedStore);
        if (updatedPizzaStore != null) {
            return new ResponseEntity<>(updatedPizzaStore, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    //========Food items=====//
    @PutMapping("/additem/{id}")
    public ResponseEntity<Foor_Items_Details> updatefoodItems(@PathVariable Integer id, @RequestBody Foor_Items_Details item) {
    	Foor_Items_Details updatedFoode = service.updatefoodItemsDetails(id, item);
        if (updatedFoode != null) {
            return new ResponseEntity<>(updatedFoode, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    } 
    //============getAlll===========//
    //======pizza store========//
    @GetMapping("/getStores")
    public ResponseEntity<List<Pizza_Store_Details>> GetAllPizzaStoreDetails() {
    	List<Pizza_Store_Details> getAll=service.GetAllPizzaStoreDetails();
		 return new ResponseEntity<List<Pizza_Store_Details>>(getAll,HttpStatus.CREATED);
       
   }
    
    @GetMapping("/getitems")
    public ResponseEntity<List<Foor_Items_Details>> GetItems() {
    	List<Foor_Items_Details> getAll=service.GetAllFitemDetails();
		 return new ResponseEntity<List<Foor_Items_Details>>(getAll,HttpStatus.CREATED);
       
   }
    //======item getById========//
    @GetMapping("/{Id}")
    public ResponseEntity<Object> getById(@PathVariable int Id) {
    	Foor_Items_Details obj=service.getById(Id);
    	if(obj!=null) return new ResponseEntity<Object>(obj,HttpStatus.OK);
    	else return new ResponseEntity<Object>("Data Not Found",HttpStatus.BAD_GATEWAY);
   }
    
    @GetMapping("store/{Id}")
    public ResponseEntity<Object> getBystoreId(@PathVariable int Id) {
    	Pizza_Store_Details obj=service.getByStoreId(Id);
    	if(obj!=null) return new ResponseEntity<Object>(obj,HttpStatus.OK);
    	else return new ResponseEntity<Object>("Data Not Found",HttpStatus.BAD_GATEWAY);
   }
    
    
    
    
    //------------------Deleet By Id------------//
    @DeleteMapping("/{Id}")
    public ResponseEntity<String> deleteById(@PathVariable int Id){
    	String res=service.deleteId(Id);
    	return new ResponseEntity<String>(res,HttpStatus.ACCEPTED);
    }
    
    

}
