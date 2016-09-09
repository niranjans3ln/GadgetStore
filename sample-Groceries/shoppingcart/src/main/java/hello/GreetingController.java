package hello;

import hello.Greeting;
import hello.Items;
import hello.MongoConnector;

import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@RequestMapping(“/gadgetstore”)
public class GreetingController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/greeting")
    public Greeting greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return new Greeting(counter.incrementAndGet(),
                            String.format(template, name));
    }
    
    @RequestMapping("/register")
    public String registerUser(@RequestParam(value="loginId", defaultValue="") String loginId, 
    		@RequestParam(value="password", defaultValue="") String password) {
        return MongoConnector.registerUser(loginId, password);
    }
    
    @RequestMapping("/login")
    public String validateLogin(@RequestParam(value="loginId", defaultValue="") String loginId, 
    		@RequestParam(value="password", defaultValue="") String password) {
        return MongoConnector.getLoginStatus(loginId, password);
    }
    
    @RequestMapping("/itemsList")
    public String getItemsList() {
        return MongoConnector.getStoreItems();
    }
}
