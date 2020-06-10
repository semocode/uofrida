import user32 from '../../../service/win32/user32'
import { Feature } from '../../../Feature';

export class HelloWorld extends Feature {
    onExecute() {
        user32.MessageBoxA("Hello from within UOSA.exe", "Title for message box");
    }
}