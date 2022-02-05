package uni.fmi.topic.model;

import java.util.Set;

import uni.fmi.models.Topic;
import uni.fmi.models.User;
import uni.fmi.service.topic.TopicService;

public class TopicScreenModel {
	private User currentUser;
	 private String name;
	    private User owner;
	    private Topic parent;
	    private String message;
	    
	    public void setCurrentUser(User user) {
	    	this.currentUser=user;
	    }
	    public void setName(String name){
	    	this.name=name;
	    }
	    public void setOwner(User owner) {
	    	this.owner=owner;
	    }
	    public void setParent(Topic parent) {
	    	this.parent=parent;
	    }
	    public void clickCreateTopicButton() {
	    	this.message=TopicService.createTopic(name,currentUser);
	    }
	    public void clickDeleteTopicButton() {
	    	this.message=TopicService.deleteTopic(name,currentUser);
	    }
	    public void clickAddSubTopicButton() {
	    	this.message=TopicService.addSubTopic(name);
	    }
	    public String getMessage() {
	    	return this.message;
	    }
}
