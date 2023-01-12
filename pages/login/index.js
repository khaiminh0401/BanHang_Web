import styled from "./index.module.scss";
import Image from "next/image";
import photo from '@image/Login/photo1.jpg';
import Input from "@components/Input";
import Button from "@components/Button";
function Login() {
    return (
        <div className={styled.container}>
            <div className={styled.content}>
                <Image src={photo} className={styled.photo} />
                <div className={styled.box_form}>
                    <form className={styled.form} action="">
                        <legend>Đăng nhập</legend>
                        <div className="form-group my-2">
                            <Input name="username" placeholder="Tài khoản" />
                        </div>
                        <div className="form-group my-2">
                            <Input name="password" placeholder="Mật khẩu" />
                        </div>
                        <div className="form-group my-5">
                            <Button appearance="primary" width={"100%"} text="Đăng nhập" />
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Login;