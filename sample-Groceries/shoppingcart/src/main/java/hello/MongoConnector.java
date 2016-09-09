package hello;

import hello.Items.ItemsMaster;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.MongoClient;
import com.mongodb.MongoException;

public class MongoConnector {
	
	public static String registerUser(String loginId, String password) {
		String status = "SUCCESS";
		try{
			System.out.println("LOG: initiating.....");
			MongoClient mongo = new MongoClient( "localhost" , 27017 );
			System.out.println("LOG: DB initialized");
			DB db = mongo.getDB("admin");
			System.out.println("LOG: DB Connected");
			DBCollection table = db.getCollection("user");
			System.out.println("LOG: Collection fetched");
            
            String isUserPresent = getLoginStatus(loginId, password);
            if(isUserPresent.contains("FALSE")){
                BasicDBObject document = new BasicDBObject();
                document.put("name", loginId);
                document.put("password", password);
                table.insert(document);
            }else{
                status = "FAILURE";
            }
	
			
		}/* catch (UnknownHostException e) {
			e.printStackTrace();
	    }*/ catch (MongoException e) {
			status = "FAILURE";
	    	e.printStackTrace();
	    }
		return "{\"status\": \"" + status + "\"}";
	}
	
	public static String getLoginStatus(String loginId, String password) {
		String status = "FALSE";
		try{
			System.out.println("LOG: initiating.....");
			MongoClient mongo = new MongoClient( "localhost" , 27017 );
			System.out.println("LOG: DB initialized");
			DB db = mongo.getDB("admin");
			System.out.println("LOG: DB Connected");
			DBCollection table = db.getCollection("user");
			System.out.println("LOG: Collection fetched");
	
			BasicDBObject searchQuery = new BasicDBObject();
			System.out.println("LOG: Query Initializing.....");
			searchQuery.put("name", loginId);
			searchQuery.put("password", password);
			System.out.println("LOG: Parameters: name='" + loginId + "', password='" + password + "'");
	
			DBCursor cursor = table.find(searchQuery);
			System.out.println("LOG: Query Executed");
	
			if (cursor.hasNext()) {
				System.out.println("LOG: Record found in Collection.");
				status = "TRUE";
			}
		}/* catch (UnknownHostException e) {
			e.printStackTrace();
	    }*/ catch (MongoException e) {
	    	e.printStackTrace();
	    }
		return "{\"status\": \"" + status + "\"}";
	}

	public static String getStoreItems() {
		List<Items> items = new ArrayList();
		String responsePlainText = "[";//"{\"items\": [";
		try{
			System.out.println("LOG: initiating.....");
			MongoClient mongo = new MongoClient( "localhost" , 27017 );
			System.out.println("LOG: DB initialized");
			DB db = mongo.getDB("admin");
			System.out.println("LOG: DB Connected");
			DBCollection table = db.getCollection("Items");
			System.out.println("LOG: Collection fetched");
	
	
			DBCursor cursor = table.find();
			
			
			/*BasicDBObject query = new BasicDBObject();
			BasicDBObject fields = new BasicDBObject();
			fields.put("name", 1);
			fields.put("price", 1);
			fields.put("stock", 1);
			DBCursor cursor = table.find(query, fields);*/
			System.out.println("LOG: Query Executed");
			
	
			while(cursor.hasNext()) {
				/*ObjectMapper mapper = new ObjectMapper();
				Items obj = mapper.readValue(cursor.next().toString(), Items.class);
				items.add(obj);*/
						
				//items.add(cursor.next());
				//System.out.println("JSON: " + cursor.next().toString());
				
				/*RestTemplate restTemplate = new RestTemplate();
				List<Items> item = restTemplate.getForObject(cursor.next().toString(),ItemsMaster.class).getItems();
				items.add(item.get(0));*/
				
				responsePlainText+= cursor.next().toString() + ",";
				System.out.println("Object added to List.....");
			}
		} catch (MongoException e){
			e.printStackTrace();
		} /*catch (JsonParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}*/
		
		//return items;
		//return responsePlainText.substring(0, responsePlainText.length() - 1) + "]}";
		return responsePlainText.substring(0, responsePlainText.length() - 1) + "]";
	}
}
