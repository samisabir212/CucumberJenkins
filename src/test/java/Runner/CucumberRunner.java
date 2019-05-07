package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;



@CucumberOptions(features = "src/resources/java/Features", glue = "Steps", tags = {"@excel"}, format = {
		"pretty", "html:target/site/cucumber-pretty" })
public class CucumberRunner extends AbstractTestNGCucumberTests {
	
	
	


}
