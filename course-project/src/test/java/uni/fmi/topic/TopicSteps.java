package uni.fmi.topic;

import static org.junit.Assert.assertEquals;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import jdk.internal.module.IllegalAccessLogger.Mode;
import uni.fmi.service.topic.TopicService;
import uni.fmi.topic.model.TopicScreenModel;

public class TopicSteps {
	TopicScreenModel model;
	
	public TopicSteps(TopicScreenModel model) {
		this.model=model;
	}

	@Given("^Вписва се потребител с администраторски права$")
	public void вписва_се_потребител_с_администраторски_права() throws Throwable {
		this.model.setCurrentUser(TopicService.initAdmin());
	}

	@Given("^Потребителят отваря екрана за създаване на тема$")
	public void потребителят_отваря_екрана_за_създаване_на_тема() throws Throwable {
	}

	@When("^Въведе заглавие на тема: \"([^\"]*)\"$")
	public void въведе_заглавие_на_тема(String arg1) throws Throwable {
		model.setName(arg1);
	}

	@When("^Натисне бутона за създаване$")
	public void натисне_бутона_за_създаване() throws Throwable {
		model.clickCreateTopicButton();
	}

	@Then("^Вижда съобщение: \"([^\"]*)\"$")
	public void вижда_съобщение(String arg1) throws Throwable {
		assertEquals(arg1,model.getMessage());
	}

	@Given("^Потребителят избира тема \"([^\"]*)\"$")
	public void потребителят_избира_тема(String arg1) throws Throwable {
		model.setName(arg1);
	}

	@When("^Натисне бутона за триене$")
	public void натисне_бутона_за_триене() throws Throwable {
		model.clickDeleteTopicButton();
	}

	@When("^Натиска върху добавяне на подтема$")
	public void натиска_върху_добавяне_на_подтема() throws Throwable {
	}

	@When("^Въведе заглавие на подтема \"([^\"]*)\"$")
	public void въведе_заглавие_на_подтема(String arg1) throws Throwable {
		model.setName(arg1);
	}

	@When("^Натисне бутона за добавяне на подтема$")
	public void натисне_бутона_за_добавяне_на_подтема() throws Throwable {
		model.clickAddSubTopicButton();
	}
	@Given("^Потребителят отваря тема \"([^\"]*)\"$")
	public void потребителят_отваря_тема(String arg1) throws Throwable {
		TopicService.initParam(arg1);
	}
}
