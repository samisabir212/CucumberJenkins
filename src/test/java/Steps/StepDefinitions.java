package Steps;

import java.io.File;
import java.io.IOException;

import Lib.Lib;
import cucumber.api.java.en.Given;

public class StepDefinitions {

	@Given("^i create a results folder and write to excel$")
	public void createFoldlerAndWriteToExcel() throws IOException {

		// try to read excel file
		String projpath = "/Users/sami/Desktop/Automation/sidrissi/CucumberJenkins/Runs/";

		// create reqresAPI results folder
		String runsFolderPath = createRunResultFolder(projpath);

		// create log folder
		String logFolderPath = Lib.createLogFolder(runsFolderPath);

		String logfolder = logFolderPath + "/ScratchPaper";
		String loginLogFolderPath = Lib.createLogFolder_for_Service(logfolder, "scratchPaper");
		System.out.println("Login Log folder path : " + loginLogFolderPath);

		// create excel sheet with columns
		Constants.Constants.excelResultsPath = runsFolderPath + "/RunResults.xlsx";

		Lib.create_SetupExcelResultsSheet(Constants.Constants.excelResultsPath);

	}

	@Given("^i read a cell from a test data sheet$")
	public void readExcelSheetThroughJenkins() throws IOException {

		String excelFilePath = "/Users/sami/eclipse-workspace/JenkinsCucumber/src/resources/java/testdata/TestData.xlsx";

		String value = Lib.readexcelvalue(1, 1, excelFilePath);

		System.out.println("excelValue : " + value);

	}
	
	
	
	@Given("^i read a cell from a test data sheet using jenkins Build Parameters$")
	public void readExcelSheetThroughJenkinsBuildParameters() throws IOException {

		String excelFilePath = "/Users/sami/eclipse-workspace/JenkinsCucumber/src/resources/java/testdata/TestData.xlsx";

		String value = Lib.readexcelvalue(1, 1, excelFilePath);

		System.out.println("excelValue : " + value);

	}
	
	
	
	// i create a results folder and write to excel inside project
	@Given("^i create a results folder and write to excel inside project$")
	public void createFoldlerAndWriteToExcel_InsideProject() throws IOException {

		// try to read excel file
		String projpath = "/Users/sami/eclipse-workspace/JenkinsCucumber/src/resources/java/ssidrissi/Runs/";

		// create reqresAPI results folder
		String runsFolderPath = createRunResultFolder(projpath);

		// create log folder
		String logFolderPath = Lib.createLogFolder(runsFolderPath);

		String logfolder = logFolderPath + "/ScratchPaper";
		String loginLogFolderPath = Lib.createLogFolder_for_Service(logfolder, "scratchPaper");
		System.out.println("Login Log folder path : " + loginLogFolderPath);

		// create excel sheet with columns
		Constants.Constants.excelResultsPath = runsFolderPath + "/RunResults.xlsx";

		Lib.create_SetupExcelResultsSheet(Constants.Constants.excelResultsPath);

		String value = Lib.readexcelvalue(0, 0, Constants.Constants.excelResultsPath);

		System.out.println("Excel column value 0, 0 : "+value);
	
	}

	public static String createRunResultFolder(String runsFolderPath) throws IOException {

		File dir = new File(runsFolderPath + Lib.getcurrentdatefolder());

		dir.mkdir();

		return dir.getAbsolutePath();
	}

}
