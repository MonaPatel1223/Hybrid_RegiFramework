package ResultVerification;

import CommanPage.Utils;
import org.testng.Assert;

public class ResultverificationforRegisterPage extends Utils {
    public void registerPageTitle(){
        String registerPageTitle = driver.getTitle();
        Assert.assertEquals(registerPageTitle,"nopCommerce demo store. Register","Register title page not matched");
    }
}
