import React, { useState } from "react";
import BaseDialog from "../../dialogs/BaseDialog";
import { useTranslation } from "react-i18next";
import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getTestApi, signupApi } from "../../../apis/test";
import toast from "react-hot-toast";

interface SignupFormProps {
	openDialog: boolean;
	setOpenDialog?: any;
	setOpenLoginDialog?: any;
}

const SignupForm: React.FC<SignupFormProps> = (props) => {
	const { openDialog, setOpenDialog, setOpenLoginDialog } = props;
	const { t } = useTranslation();
	const [firstName, setFirstName] = useState<any>(null);
	const [lastName, setLastName] = useState<any>(null);
	const [userName, setUserName] = useState<any>(null);
	const [email, setEmail] = useState<any>(null);
	const [password, setPassword] = useState<any>(null);
	const query = useQuery({ queryKey: ["tests"], queryFn: getTestApi });

	const mutation = useMutation({
		mutationFn: signupApi,
		// onMutate: (variables) => {

		// 	return { id: 1 };
		// },
		onError: (error: any, variables: any, context: any) => {
			toast.error(error.response.data.message, { duration: 3000 });
		},
		onSuccess: async (data: any, variables: any, context: any) => {
			setOpenDialog(false);
			toast.success(data.data.message, { duration: 3000 });
		},
		onSettled: (data, error, variables, context) => {
			console.log("done");
		},
	});

	const returnLoginDialog = () => {
		setOpenDialog(false);
		setTimeout(() => {
			setOpenLoginDialog(true);
		}, 550);
	};
	const handleChangeFirstName = (event: any) => {
		setFirstName(event.target.value);
	};
	const handleChangeLastName = (event: any) => {
		setLastName(event.target.value);
	};
	const handleChangeUserName = (event: any) => {
		setUserName(event.target.value);
	};
	const handleChangeEmail = (event: any) => {
		setEmail(event.target.value);
	};
	const handleChangePassword = (event: any) => {
		setPassword(event.target.value);
	};
	const handleSubmit = () => {
		const data = { firstName, lastName, userName, email, password };
		mutation.mutate(data);
	};

	const SignupTitle = () => {
		return (
			<span className="text-[18px] font-semibold text-[#222222]">
				{t("Sign up")}
			</span>
		);
	};

	const SignupContent = () => {
		return (
			<div>
				<Typography variant="h6" component="h6" sx={{ fontWeight: 600 }}>
					{t("Welcome to")}
					{` `}Whalebnb
				</Typography>
				<div className="mt-7">
					<Grid container spacing={1}>
						<Grid item xs={6}>
							<TextField
								color="secondary"
								fullWidth={true}
								id="outlined-basic"
								label={t("First Name")}
								onChange={(event) => handleChangeFirstName(event)}
								defaultValue={firstName}
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								color="secondary"
								fullWidth={true}
								id="outlined-basic"
								label={t("Last Name")}
								onChange={(event) => handleChangeLastName(event)}
								defaultValue={lastName}
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								color="secondary"
								fullWidth={true}
								id="outlined-basic"
								label={t("Username")}
								onChange={(event) => handleChangeUserName(event)}
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								color="secondary"
								fullWidth={true}
								id="outlined-basic"
								label={t("Email or Username")}
								onChange={(event) => handleChangeEmail(event)}
								type="email"
								placeholder="example@gmail.com"
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								color="secondary"
								fullWidth={true}
								type="password"
								id="outlined-basic"
								label={t("Password")}
								onChange={(event) => handleChangePassword(event)}
								variant="outlined"
							/>
						</Grid>
					</Grid>
					<Typography variant="caption" display="block" sx={{ mt: 1 }}>
						{t(
							"We'll send a verification code to the email address you used to create your account. If you don't verify your address, you won't be able to create an account"
						)}
						{t(`. `)}
						<span className="font-semibold underline">
							{t("Privacy Policy")}
						</span>
					</Typography>
					<Button
						sx={{ mt: 3 }}
						type="button"
						variant="contained"
						fullWidth={true}
						color="secondary"
						onClick={handleSubmit}
					>
						{t("Continue")}
					</Button>
					<Divider sx={{ mt: 3, fontSize: "13px" }}>
						{t("Or if you had an account")}
					</Divider>
					<div className="mt-5">
						<Button
							onClick={returnLoginDialog}
							variant="contained"
							fullWidth={true}
							color="primary"
						>
							{t("Login")}
						</Button>
					</div>
				</div>
			</div>
		);
	};
	const SignupAction = () => {
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
			title={SignupTitle()}
			content={SignupContent()}
			actions={SignupAction()}
		></BaseDialog>
	);
};

export default SignupForm;
