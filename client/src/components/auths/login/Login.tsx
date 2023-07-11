import React, { useState } from "react";
import BaseDialog from "../../dialogs/BaseDialog";
import { useTranslation } from "react-i18next";
import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { ImAppleinc } from "react-icons/im";
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../../apis/test";
import { toast } from "react-hot-toast";
import Cookies from "universal-cookie";

interface LoginFormProps {
	openDialog: boolean;
	setOpenDialog?: any;
	isLogin?: any;
	setIsLogin?: any;
}

const LoginForm: React.FC<LoginFormProps> = (props) => {
	const { openDialog, setOpenDialog, isLogin, setIsLogin } = props;
	const { t } = useTranslation();
	const cookies = new Cookies();
	const [email, setEmail] = useState<any>(null);
	const [password, setPassword] = useState<any>(null);

	const mutation = useMutation({
		mutationFn: loginApi,
		onError: (error: any, variables: any, context: any) => {
			toast.error(error.response.data.message, { duration: 3000 });
		},
		onSuccess: async (data: any, variables: any, context: any) => {
			setOpenDialog(false);
			setIsLogin(true);
			cookies.set("TOKEN", data.data.token, {
				path: "/",
			});
			window.location.href = "/auth";
			toast.success(data.data.message, { duration: 3000 });
		},
		onSettled: (data, error, variables, context) => {
			console.log("done");
		},
	});
	const handleChangeEmail = (event: any) => {
		setEmail(event.target.value);
	};
	const handleChangePassword = (event: any) => {
		setPassword(event.target.value);
	};
	const handleSubmit = () => {
		const data = { email, password };
		mutation.mutate(data);
	};
	const LoginTitle = () => {
		return (
			<span className="text-[18px] font-semibold text-[#222222]">
				{t("Log in")}
			</span>
		);
	};
	const LoginContent = () => {
		return (
			<div>
				<Typography variant="h6" component="h6" sx={{ fontWeight: 600 }}>
					{t("Welcome to")}
					{` `}Whalebnb
				</Typography>
				<div className="mt-7">
					<Grid container spacing={1}>
						<Grid item xs={12}>
							<TextField
								color="secondary"
								fullWidth={true}
								id="outlined-basic"
								label={t("Email or Username")}
								placeholder="example@gmail.com"
								onChange={(event) => handleChangeEmail(event)}
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								color="secondary"
								fullWidth={true}
								id="outlined-basic"
								label={t("Password")}
								onChange={(event) => handleChangePassword(event)}
								variant="outlined"
							/>
						</Grid>
					</Grid>
					<Typography variant="caption" display="block" sx={{ mt: 1 }}>
						{t("Please read the policy carefully before logging in")}
						{`. `}
						<span className="font-semibold underline">
							{t("Privacy Policy")}
						</span>
					</Typography>
					<Button
						sx={{ mt: 3 }}
						variant="contained"
						fullWidth={true}
						color="secondary"
						onClick={handleSubmit}
					>
						{t("Continue")}
					</Button>
					<Divider sx={{ mt: 3, fontSize: "13px" }}>{t("Or")}</Divider>
					<div className="mt-5">
						<Button
							sx={{ paddingY: "10px" }}
							variant="outlined"
							fullWidth={true}
							color="inherit"
						>
							<Grid container alignItems="center">
								<Grid item>
									<ImFacebook2 color="#3F51B5" size="24px" />
								</Grid>
								<Grid item xs={11}>
									<span className="normal-case font-semibold">
										{t("Continue with")}
										{` `}Facebook
									</span>
								</Grid>
							</Grid>
						</Button>
					</div>
					<div className="mt-5">
						<Button
							sx={{ paddingY: "10px" }}
							variant="outlined"
							fullWidth={true}
							color="inherit"
						>
							<Grid container alignItems="center">
								<Grid item>
									<FcGoogle size="24px" />
								</Grid>
								<Grid item xs={11}>
									<span className="normal-case font-semibold">
										{t("Continue with")}
										{` `}Google
									</span>
								</Grid>
							</Grid>
						</Button>
					</div>
					<div className="mt-5">
						<Button
							sx={{ paddingY: "10px" }}
							variant="outlined"
							fullWidth={true}
							color="inherit"
						>
							<Grid container alignItems="center">
								<Grid item>
									<ImAppleinc color="black" size="24px" />
								</Grid>
								<Grid item xs={11}>
									<span className="normal-case font-semibold">
										{t("Continue with")}
										{` `}Apple
									</span>
								</Grid>
							</Grid>
						</Button>
					</div>
				</div>
			</div>
		);
	};
	const LoginActions = () => {
		<>
			<Button autoFocus onClick={() => setOpenDialog(false)}>
				Save changes
			</Button>
		</>;
	};
	return (
		<BaseDialog
			open={openDialog}
			setOpen={setOpenDialog}
			maxWidth="sm"
			dialogAction={false}
			dialogTitle={true}
			fullWidth={true}
			title={LoginTitle()}
			content={LoginContent()}
			actions={LoginActions()}
		/>
	);
};

export default LoginForm;
