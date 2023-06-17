import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export interface DialogTitleProps {
	id: string;
	children?: React.ReactNode;
	onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
	const { children, onClose, ...other } = props;

	return (
		<DialogTitle sx={{ m: 0, p: 2, textAlign: "center" }} {...other}>
			{children}
			{onClose ? (
				<IconButton
					aria-label="close"
					onClick={onClose}
					sx={{
						position: "absolute",
						right: 8,
						top: 13,
						color: (theme) => theme.palette.grey[600],
					}}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</DialogTitle>
	);
}

interface BaseDialogProps {
	open: boolean;
	setOpen: any;
	maxWidth: "xs" | "sm" | "md" | "lg" | "xl";
	dialogAction: boolean;
	dialogTitle: boolean;
	title?: any;
	content: any;
	fullWidth?: boolean;
	actions?: any;
}

const BaseDialog: React.FC<BaseDialogProps> = (props) => {
	const {
		open,
		setOpen,
		maxWidth,
		title,
		content,
		actions,
		fullWidth = true,
		dialogAction = false,
		dialogTitle = false,
	} = props;
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Dialog
			open={open}
			maxWidth={maxWidth}
			TransitionComponent={Transition}
			keepMounted
			onClose={handleClose}
			fullWidth={fullWidth}
			aria-describedby="alert-dialog-slide-description"
		>
			{dialogTitle == true && (
				<BootstrapDialogTitle
					id="customized-dialog-title"
					onClose={handleClose}
				>
					{title}
				</BootstrapDialogTitle>
			)}
			<DialogContent dividers>{content}</DialogContent>
			{dialogAction == true && <DialogActions>{actions}</DialogActions>}
		</Dialog>
	);
};

export default BaseDialog;
