import user32 from '../../../service/win32/user32'

const HelloWorld = {
    onExecute() {
        user32.MessageBoxA("Hello from within UOSA.exe", "Title for message box");
    }
}

export default HelloWorld