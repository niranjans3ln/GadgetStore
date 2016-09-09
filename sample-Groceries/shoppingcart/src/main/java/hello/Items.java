package hello;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Items {
	private String $oid;
	private String name;
	private String price;
	private String stock;
	
	@Override
	public String toString() {
		return "Items [name=" + name + ", price=" + price + ", stock=" + stock
				+ ", getName()=" + getName() + ", getPrice()=" + getPrice()
				+ ", getStock()=" + getStock() + ", getClass()=" + getClass()
				+ ", hashCode()=" + hashCode() + ", toString()="
				+ super.toString() + "]";
	}
	
	public String get$oid() {
		return $oid;
	}

	public void set$oid(String $oid) {
		this.$oid = $oid;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getStock() {
		return stock;
	}
	public void setStock(String stock) {
		this.stock = stock;
	}
	
	public static class ItemsMaster {
		@JsonProperty("_id")
		   private List<Items> items;

		public List<Items> getItems() {
			return items;
		}

		public void setItems(List<Items> items) {
			this.items = items;
		} 
	}

}
