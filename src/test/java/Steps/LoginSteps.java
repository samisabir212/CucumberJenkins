package Steps;

import java.io.IOException;

import org.apache.poi.EncryptedDocumentException;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;

import Services.Login;
import cucumber.api.java.en.Then;

public class LoginSteps {

	
	@Then("^Login with valid username and password \"([^\"]*)\"$")
	public void Login_with_valid_username_and_password(String testname) throws EncryptedDocumentException, InvalidFormatException, IOException {
		
		
		Login.Successful_Login_webservice("eve.holt@reqres.in", "cityslicka", testname);
			
	
	}
}
