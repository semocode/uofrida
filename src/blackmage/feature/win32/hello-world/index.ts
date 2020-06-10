import { MessageBoxA } from "../../../service/win32/user32";
import { Feature } from "../../../Feature";

export class HelloWorld extends Feature {
  onExecute() {
    MessageBoxA("Hello from within UOSA.exe", "Title for message box");
  }
}
