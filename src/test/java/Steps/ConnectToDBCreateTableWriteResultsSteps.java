package Steps;

import java.io.IOException;
import java.sql.SQLException;

import Lib.Lib;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;

public class ConnectToDBCreateTableWriteResultsSteps {
	

	static String tableTimeStamp;
	static String comment;
	
	@Given("^I connect to a database$")
	public void connectToDB() throws IOException {

		Lib.getJDBCconnection("root", "Friday26");

	}
	
	@Then("^I create a table$")
	public void createTable() throws IOException {

		tableTimeStamp = Lib.getcurrentdateyyMMddHHmm();

		Lib.createResultsTable(tableTimeStamp);
		
	}
	
	@Then("^I write my results$")
	public void writeResults() throws IOException, SQLException {
		
		String testTimeStamp = Lib.getcurrentdateyyMMddHHmm();
		
		try {
			
			Assert.assertEquals(200, 500);
		}catch(java.lang.AssertionError e) {
			
			comment = e.getMessage();
		}
		
		Lib.insertIntoResultsTable(tableTimeStamp,"'"+testTimeStamp+"'","'SIT'", "'Parabank'", "'ACTIVE'", "'Login'", "'Successful'", "'Passed'","'"+comment+"'");

		
	}
}
