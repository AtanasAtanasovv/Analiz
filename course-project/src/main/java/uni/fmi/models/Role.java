package uni.fmi.models;

import java.util.*;


public class Role {

    public Role() {
    }
public Role(String role) {
	this.roleCode=role;
}
    private String roleCode;
    private Set<User> users;

    public String getRoleCode() {
    	return this.roleCode;
    }

    public void setRoleCode(String code) {
    	this.roleCode=code;
    }

    public Set<User> getUsers() {
    	return this.users;
    }

    public void setUsers(Set<User> users) {
    	this.users=users;
    }

}