$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("uni/fmi/topic/topic.feature");
formatter.feature({
  "line": 1,
  "name": "Управление на теми",
  "description": "",
  "id": "управление-на-теми",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Вписва се потребител с администраторски права",
  "keyword": "Given "
});
formatter.match({
  "location": "TopicSteps.вписва_се_потребител_с_администраторски_права()"
});
formatter.result({
  "duration": 146172200,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Създаване на тема успешно",
  "description": "",
  "id": "управление-на-теми;създаване-на-тема-успешно",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Потребителят отваря екрана за създаване на тема",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Въведе заглавие на тема: \"test\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Натисне бутона за създаване",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Вижда съобщение: \"Създадохте тема успешно!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopicSteps.потребителят_отваря_екрана_за_създаване_на_тема()"
});
formatter.result({
  "duration": 27200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 26
    }
  ],
  "location": "TopicSteps.въведе_заглавие_на_тема(String)"
});
formatter.result({
  "duration": 1461500,
  "status": "passed"
});
formatter.match({
  "location": "TopicSteps.натисне_бутона_за_създаване()"
});
formatter.result({
  "duration": 68200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Създадохте тема успешно!",
      "offset": 18
    }
  ],
  "location": "TopicSteps.вижда_съобщение(String)"
});
formatter.result({
  "duration": 1297700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Вписва се потребител с администраторски права",
  "keyword": "Given "
});
formatter.match({
  "location": "TopicSteps.вписва_се_потребител_с_администраторски_права()"
});
formatter.result({
  "duration": 118500,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Създаване на тема без заглавие",
  "description": "",
  "id": "управление-на-теми;създаване-на-тема-без-заглавие",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "Потребителят отваря екрана за създаване на тема",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Натисне бутона за създаване",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Вижда съобщение: \"Моля, въведете заглавие на тема!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopicSteps.потребителят_отваря_екрана_за_създаване_на_тема()"
});
formatter.result({
  "duration": 20100,
  "status": "passed"
});
formatter.match({
  "location": "TopicSteps.натисне_бутона_за_създаване()"
});
formatter.result({
  "duration": 24000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля, въведете заглавие на тема!",
      "offset": 18
    }
  ],
  "location": "TopicSteps.вижда_съобщение(String)"
});
formatter.result({
  "duration": 49100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Вписва се потребител с администраторски права",
  "keyword": "Given "
});
formatter.match({
  "location": "TopicSteps.вписва_се_потребител_с_администраторски_права()"
});
formatter.result({
  "duration": 108500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Триене на тема от потребител с администраторски права",
  "description": "",
  "id": "управление-на-теми;триене-на-тема-от-потребител-с-администраторски-права",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "Потребителят избира тема \"testTopic\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Натисне бутона за триене",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Вижда съобщение: \"Темата е изтрита успешно!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "testTopic",
      "offset": 26
    }
  ],
  "location": "TopicSteps.потребителят_избира_тема(String)"
});
formatter.result({
  "duration": 69300,
  "status": "passed"
});
formatter.match({
  "location": "TopicSteps.натисне_бутона_за_триене()"
});
formatter.result({
  "duration": 73700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Темата е изтрита успешно!",
      "offset": 18
    }
  ],
  "location": "TopicSteps.вижда_съобщение(String)"
});
formatter.result({
  "duration": 58500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Вписва се потребител с администраторски права",
  "keyword": "Given "
});
formatter.match({
  "location": "TopicSteps.вписва_се_потребител_с_администраторски_права()"
});
formatter.result({
  "duration": 145200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Добавяне на подтема успешно",
  "description": "",
  "id": "управление-на-теми;добавяне-на-подтема-успешно",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "Потребителят отваря тема \"testTopic\"",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Натиска върху добавяне на подтема",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Въведе заглавие на подтема \"subTopic\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Натисне бутона за добавяне на подтема",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Вижда съобщение: \"Добавихте подтема успешно!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "testTopic",
      "offset": 26
    }
  ],
  "location": "TopicSteps.потребителят_отваря_тема(String)"
});
formatter.result({
  "duration": 59100,
  "status": "passed"
});
formatter.match({
  "location": "TopicSteps.натиска_върху_добавяне_на_подтема()"
});
formatter.result({
  "duration": 19300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "subTopic",
      "offset": 28
    }
  ],
  "location": "TopicSteps.въведе_заглавие_на_подтема(String)"
});
formatter.result({
  "duration": 38500,
  "status": "passed"
});
formatter.match({
  "location": "TopicSteps.натисне_бутона_за_добавяне_на_подтема()"
});
formatter.result({
  "duration": 87300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Добавихте подтема успешно!",
      "offset": 18
    }
  ],
  "location": "TopicSteps.вижда_съобщение(String)"
});
formatter.result({
  "duration": 39700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Вписва се потребител с администраторски права",
  "keyword": "Given "
});
formatter.match({
  "location": "TopicSteps.вписва_се_потребител_с_администраторски_права()"
});
formatter.result({
  "duration": 99800,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Добавяне на подтема без заглавие",
  "description": "",
  "id": "управление-на-теми;добавяне-на-подтема-без-заглавие",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "Потребителят отваря тема \"testTopic\"",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "Натиска върху добавяне на подтема",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Натисне бутона за добавяне на подтема",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Вижда съобщение: \"Моля, въведете заглавие на подтема!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "testTopic",
      "offset": 26
    }
  ],
  "location": "TopicSteps.потребителят_отваря_тема(String)"
});
formatter.result({
  "duration": 40500,
  "status": "passed"
});
formatter.match({
  "location": "TopicSteps.натиска_върху_добавяне_на_подтема()"
});
formatter.result({
  "duration": 12400,
  "status": "passed"
});
formatter.match({
  "location": "TopicSteps.натисне_бутона_за_добавяне_на_подтема()"
});
formatter.result({
  "duration": 21500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля, въведете заглавие на подтема!",
      "offset": 18
    }
  ],
  "location": "TopicSteps.вижда_съобщение(String)"
});
formatter.result({
  "duration": 37200,
  "status": "passed"
});
});