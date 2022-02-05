package uni.fmi.models;
import java.util.*;

public class User {


    public User() {
    }

    private String username;
    private String password;
    private String email;
    private Set<Topic> topics;
    private Set<Role> roles;
    private Set<Message> sentMessages;
    private Set<Message> receivedMessages;

    public User(String username,String password,String email,String role) {
    	this.username=username;
    	this.email=email;
    	this.password=password;
    	this.roles=new HashSet<Role>();
    	Role newRole=new Role(role);
    	this.roles.add(newRole);
    }
    
    public String getUsername() {
        // TODO implement here
        return this.username;
    }

    public void setUsername(String username) {
    	this.username=username;
    }

    public String getPassword() {
        return this.password;
    }


    public void setPassword(String password) {
    	this.password=password;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
    	this.email=email;
    }

    public Set<Role> getRoles() {
    	return this.roles;
    }
    
    public void setRoles(Set<Role> roles) {
    	this.roles=roles;
    }

    public Set<Topic> getTopics() {
    	return this.topics;
    }
    
    public void setTopics(Set<Topic> topics) {
    	this.topics=topics;
    }

    public Set<Message> getSentMessages() {
    	return this.sentMessages;
    }
    
    public void setSentMessages(Set<Message> messages) {
    	this.sentMessages=messages;
    }

    public Set<Message> getReceivedMessages() {
    	return this.receivedMessages;
    }

    public void setReceivedMessages(Set<Message> messages) {
    	this.receivedMessages=messages;
    }

}