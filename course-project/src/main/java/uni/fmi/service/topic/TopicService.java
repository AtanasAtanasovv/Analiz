package uni.fmi.service.topic;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import uni.fmi.models.Role;
import uni.fmi.models.Topic;
import uni.fmi.models.User;

public class TopicService {

private static List<Topic> topicsDB=new ArrayList<>();
private static void initDB() {
	topicsDB.clear();
	topicsDB.add(new Topic("testTopic",initAdmin()));
}
public static void initParam(String name) {
	topicsDB.clear();
	topicsDB.add(new Topic(name,initAdmin()));
}
public static User initAdmin(){
	return new User("admin","adminpass","adminmail","admin");
}
public static User initNormal() {
	return new User("normal","normalpass","normalmail","normal");
}
public static String createTopic(String name,User user) {
	if (name==null) {
		return "Моля, въведете заглавие на тема!";
	}
	else {
		topicsDB.add(new Topic(name,user));
		return "Създадохте тема успешно!";
	}
}

public static String deleteTopic(String name,User user) {
	initDB();
	Role role =(Role)user.getRoles().toArray()[0];
	if (role.getRoleCode()!="admin") {
		return "Нямате права!";
	}
	if (topicsDB.get(0).getName().equals(name))
	{
		topicsDB.clear();
	}
	
	if (topicsDB.isEmpty()) {
		return "Темата е изтрита успешно!";
	}
	
return "Неуспешно изтриване";
}
public static String addSubTopic(String name) {
	initParam(name);
	if (name==null) {
		return "Моля, въведете заглавие на подтема!";
	}
	Topic parent=topicsDB.get(0);
	Set<Topic> toAdd=new HashSet<Topic>();
	toAdd.add(new Topic(name));
	parent.setChildren(toAdd);
	if (!parent.getChildren().isEmpty()) {
		return "Добавихте подтема успешно!";
	}
	
	return "Неуспешно добавяне на подтема";
}

}
