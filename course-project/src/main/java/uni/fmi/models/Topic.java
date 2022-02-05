package uni.fmi.models;

import java.util.*;

public class Topic {

    public Topic() {
    }
    public Topic(String name,User owner) {
    	this.name=name;
    	this.owner=owner;
    }
    public Topic(String name) {
    	this.name=name;
    }

    private String name;
    private User owner;
    private Set<Topic> children;
    private Topic parent;

    public Topic getParent() {
    	return this.parent;
    }

    public void setParent(Topic parent) {
    	this.parent=parent;
    }

    public Set<Topic> getChildren() {
    	return this.children;
    }

    public void setChildren(Set<Topic> children) {
    	this.children=children;
    }

    public String getName() {
    	return this.name;
    }

    public void setName(String name) {
    	this.name=name;
    }
    public User getOwner() {
    	return this.owner;
    }
    public void setOwner(User owner) {
    	this.owner=owner;
    }

}