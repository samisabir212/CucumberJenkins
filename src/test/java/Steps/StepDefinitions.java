package Steps;

import java.io.File;
import java.io.IOException;

import Lib.Lib;
import cucumber.api.java.en.Given;

public class StepDefinitions {

	
	@Given("^i create a results folder and write to excel$")
	public void createFoldlerAndWriteToExcel() throws IOException {
		
		
		//try to read excel file
		String projpath = "/Users/sami/Desktop/Automation/sidrissi/CucumberJenkins/Runs/";

		// create reqresAPI results folder
		String runsFolderPath = createRunResultFolder(projpath);

		// create log folder
		String logFolderPath = Lib.createLogFolder(runsFolderPath);

		
		String logfolder = logFolderPath + "/ScratchPaper";
		String loginLogFolderPath = Lib.createLogFolder_for_Service(logfolder, "scratchPaper");
		System.out.println("Login Log folder path : " + loginLogFolderPath);

		// create excel sheet with columns
		Constants.Constants.excelResultsPath = runsFolderPath+"/RunResults.xlsx";
		
		Lib.create_SetupExcelResultsSheet(Constants.Constants.excelResultsPath);
		
		
		
		
	}
	
	
	public static String createRunResultFolder(String runsFolderPath) throws IOException {


		File dir = new File(runsFolderPath + Lib.getcurrentdatefolder());

		dir.mkdir();

		return dir.getAbsolutePath();
	}
	
	
}
