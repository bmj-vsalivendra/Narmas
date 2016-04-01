import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

/**
 * Created by Sudhakar on 25/03/2016.
 */
public class StepDef {
    homepage home=new homepage();
    Myaccount myac= new Myaccount();
    addsupplier newsupplier;
    LogoutAC logout= new LogoutAC();


    @Given("^I am navigavitive to the Narmans web page$")
    public void i_am_navigavitive_to_the_Narmans_web_page() throws Throwable {
        Assert.assertTrue(home.isOnHomePage().endsWith(".php"));
    }
    @And("^I enter the username and password$")
    public void i_enter_the_username_and_password() throws Throwable {
     home.Loginin();
    }

    @When("^I goto supplier and enter the details$")
    public void i_goto_supplier_and_enter_the_details() throws Throwable {
        newsupplier=myac.gotosupplier().enterfield();

    }

    @Then("^I am check new supplier$")
    public void i_am_check_new_supplier() throws Throwable {
logout=newsupplier.Addsupplier().verifyingsupplier();
    }

    @And("^I am logout my account$")
    public void i_am_logout_my_account() throws Throwable {
logout.myaccountlogout();

    }

}
