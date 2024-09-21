import { Button, FileInput, TextInput } from "../../../../shared/ui";
import { useLoginForm } from "../../lib";

export function LoginForm() {
    const { nickname, handleNicknameChange, avatar, handleAvatarChange, handleLogin, isLoading } =
        useLoginForm();

    return (
        <form className="w-[440px] p-4 rounded-lg shadow-xl" onSubmit={handleLogin}>
            <h2 className="font-semibold text-2xl mb-7 text-center">Login</h2>

            <div className="mb-10">
                <TextInput
                    label="Nickname:"
                    value={nickname}
                    onChange={handleNicknameChange}
                    placeholder="Enter your nickname for work"
                />
            </div>

            <div className="mb-10">
                <FileInput
                    label="Avatar:"
                    value={avatar}
                    onChange={handleAvatarChange}
                    placeholder="Choose avatar (optional)"
                    accept="image/png, image/jpeg"
                />
            </div>

            <div className="flex justify-center">
                <Button content="Submit" isLoading={isLoading} />
            </div>
        </form>
    );
}
