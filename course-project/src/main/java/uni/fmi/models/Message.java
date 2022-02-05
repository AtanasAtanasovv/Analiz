package uni.fmi.models;



public class Message {

    public Message() {
    }

    private String content;
    private User owner;
    private User receiver;

    public String getContent() {
    	return this.content;
    }

    public void setContent(String content) {
    	this.content=content;
    }

    public User getOwner() {
    	return this.owner;
    }

    public void setOwner(User user) {
    	this.owner=user;
    }

    public User getReceiver() {
    	return this.receiver;
    }

    public void setReceiver(User user) {
    	this.receiver=user;
    }
}