package com.wipro.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Foor_Items_Details {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int ItemId;
	private String ItemName;
	private double ItemCost;
	public Foor_Items_Details() {
		// TODO Auto-generated constructor stub
	}
	public Foor_Items_Details(int itemId, String itemName, double itemCost) {
		super();
		ItemId = itemId;
		ItemName = itemName;
		ItemCost = itemCost;
	}
	public int getItemId() {
		return ItemId;
	}
	public void setItemId(int itemId) {
		ItemId = itemId;
	}
	public String getItemName() {
		return ItemName;
	}
	public void setItemName(String itemName) {
		ItemName = itemName;
	}
	public double getItemCost() {
		return ItemCost;
	}
	public void setItemCost(double itemCost) {
		ItemCost = itemCost;
	}
	@Override
	public String toString() {
		return "Foor_Items_Details [ItemId=" + ItemId + ", ItemName=" + ItemName + ", ItemCost=" + ItemCost + "]";
	}
	
	

}
