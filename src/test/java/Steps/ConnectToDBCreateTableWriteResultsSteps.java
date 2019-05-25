package Steps;

import java.io.IOException;
import java.sql.SQLException;

import Lib.Lib;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class ConnectToDBCreateTableWriteResultsSteps {
	

	static String currentDateTime;
	
	@Given("^I connect to a database$")
	public void connectToDB() throws IOException {

		Lib.getJDBCconnection("root", "Friday26");

	}
	
	@Then("^I create a table$")
	public void createTable() throws IOException {

		
		currentDateTime=Lib.getcurrentdatefolder();
		Lib.createResultsTable("root", "Friday26",currentDateTime);

	}
	
	@Then("^I write my results$")
	public void writeResults() throws IOException, SQLException {

		Lib.insertIntoResultsTable("root", "Friday26",currentDateTime, currentDateTime, "SIT", "ParaBank", "active", "Login", "SuccessfulLogin", "Failed","expecting [successful Login], actual [Invalid Password]");
		

	}
}
