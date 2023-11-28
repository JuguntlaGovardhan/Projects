package com.wipro.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Pizza_Store_Details {
	@Id
	//@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int storeId;
	private String StoreName;
	private String StoreAddress;
	public Pizza_Store_Details() {
		// TODO Auto-generated constructor stub
	}
	public Pizza_Store_Details(int storeId, String storeName, String storeAddress) {
		super();
		storeId = storeId;
		StoreName = storeName;
		StoreAddress = storeAddress;
	}
	public int getStoreId() {
		return storeId;
	}
	public void setStoreId(int storeId) {
		storeId = storeId;
	}
	public String getStoreName() {
		return StoreName;
	}
	public void setStoreName(String storeName) {
		StoreName = storeName;
	}
	public String getStoreAddress() {
		return StoreAddress;
	}
	public void setStoreAddress(String storeAddress) {
		StoreAddress = storeAddress;
	}
	@Override
	public String toString() {
		return "Pizza_Store_Details [StoreId=" + storeId + ", StoreName=" + StoreName + ", StoreAddress=" + StoreAddress
				+ "]";
	}
	

}
