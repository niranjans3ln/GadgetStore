package hello;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ItemsMaster_old {
	@JsonProperty("_id")
	   private List<Items> items;

	public List<Items> getItems() {
		return items;
	}

	public void setItems(List<Items> items) {
		this.items = items;
	} 
}
