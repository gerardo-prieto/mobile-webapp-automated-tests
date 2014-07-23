
<b>
Installation Steps
</b>

1) Download following Firefox plugins:

- Selenium IDE -> http://release.seleniumhq.org/selenium-ide/2.5.0/selenium-ide-2.5.0.xpi

- SelBlocks -> https://addons.mozilla.org/en-US/firefox/addon/selenium-ide-sel-blocks/

2) Restart Firefox

<b>
Run tests!
</b>

1) Open Selenium IDE<br>
2) Go to File -> Open Test Suite<br>
3) Open "Regression Test Suite" file placed in each specific directory (selenium_wap, selenium_html4 or selenium_html5)<br>
4) Ensure that <b>forXml</b> file path is OK on your system<br>
4) Click on PLAY<br>


- More information and tricks -> http://docs.seleniumhq.org/docs/02_selenium_ide.jsp

<b>
Multiple countries execution
</b>

1) Open testData.xml<br>
2) Uncomment or add countries that you'd like to include into Selenium tests execution<br>
3) Save it<br>
4) Run tests again!<br>


<b>
How to run tests in Dev environment
</b>

1) Open testData.xml<br>
2) Make a find & replace changing baseURL with the right parameters of dev machine

<u>Example</u>:

Find: " /> <br>
Replace: :3030" /> <br>
