import './App.css'
import {SpreadsheetComponent} from "@syncfusion/ej2-react-spreadsheet";
import {registerLicense} from "@syncfusion/ej2-base"

// Note there seems to be some bug in the syncfusion spreadsheet module due to which it parses an incorrect
// license key. This is not my real license key. You can confirm this by changing the last character from
// 'P' to 'U' and note that it still works
registerLicense("Ngo9BigBOggjHTQxAR8/V1NMaF1cXmhKYVB2WmFZfVtgcl2HYFZRRGYuP1ZhSXxWdkdmUX9Z2HxXAGlcUP")

function App() {
    return (
        <div className={"App"}>
            <SpreadsheetComponent allowOpen={true}
                                  openUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open"
                                  allowSave={true}
                                  saveUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save"
            height={document.documentElement.clientHeight} width={document.documentElement.clientWidth}>
            </SpreadsheetComponent>
        </div>
    )
}

export default App
