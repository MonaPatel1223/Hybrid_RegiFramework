import CommanPage.BrowserSelector;
import CommanPage.Utils;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends Utils {
    BrowserSelector browserSelector = new BrowserSelector();


    @Before
    public void openBrowser(){

        browserSelector.openSelectedBrowser();
    }

    @After
    public void closeBrowser(){

        driver.close();
    }
}
