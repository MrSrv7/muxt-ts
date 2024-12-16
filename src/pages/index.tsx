import { useState } from "react";
import {
  Button,
  CircularProgress,
  IconButton,
  Snackbar,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { useScreenSize } from "@/hooks/useScreenSize";

const Homepage = () => {
  const [snackbarState, setSnackbarState] = useState(false);
  const theme = useTheme();
  const { isMobile } = useScreenSize();

  const stackDirection = isMobile ? "column" : "row";

  const handleGitHubClick = () =>
    window.open(
      "https://github.com/MrSrv7/muxt-ts",
      "_blank",
      "noopener,noreferrer"
    );

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        paddingBottom: 32,
      }}
    >
      <Typography color={"secondary"} mt={0}>
        <a href="https://github.com/MrSrv7/muxt-ts">MUXT TS</a> is a NextJS app
        example built with <strong> Typescript </strong>
        and MUI based on{" "}
        <a href="https://github.com/HPouyanmehr/muxt-ts">HPouyanmehr&apos;s </a>
        repository but with ReactJS&apos;s <strong> useContext </strong> API to
        provide the context to the application globally. In this application, we
        will implement the context (using useContext API) for theming where the
        user can toggle the themes (light/dark) with useContext&apos;s actions
        and getters.
      </Typography>

      {/* Generate a simple Button component with GitHub as label and with GitHub icon from the react-icons library */}
      <Button
        variant="contained"
        startIcon={<FaGithub />}
        onClick={handleGitHubClick}
        sx={{
          textTransform: "none",
          textDecoration: "underline",
          mt: 4,
        }}
      >
        View on GitHub
      </Button>

      <Typography mt={4}>
        Following are some of the component examples
      </Typography>

      <Typography variant="h5" marginTop={4}>
        Buttons
      </Typography>

      <Stack
        direction={stackDirection}
        spacing={4}
        sx={{
          my: 4,
        }}
      >
        <Button variant="text" color="secondary">
          Text Button
        </Button>
        <Button variant="contained" color="secondary">
          Contained Button
        </Button>
        <Button variant="outlined" color="secondary">
          Outlined Button
        </Button>
      </Stack>

      <Typography variant="h5">TextFields</Typography>

      <Stack
        spacing={3}
        direction={stackDirection}
        sx={{
          my: 4,
        }}
      >
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
          variant="outlined"
          color="secondary"
        />
        <TextField
          required
          id="standard-required"
          label="Standard"
          defaultValue="Hello World"
          variant="standard"
          color="secondary"
        />

        <TextField
          required
          id="filled-required"
          label="Filled"
          defaultValue="Hello World"
          variant="filled"
          color="secondary"
        />
      </Stack>

      <Typography variant="h5">Progress</Typography>

      <Stack
        spacing={3}
        direction={stackDirection}
        sx={{
          my: 4,
        }}
      >
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="inherit" />
      </Stack>

      <Button
        color="secondary"
        variant="outlined"
        onClick={() => setSnackbarState(true)}
      >
        Snackbar
      </Button>

      <Snackbar
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        open={snackbarState}
        autoHideDuration={6000}
        onClose={() => setSnackbarState(false)}
        message="MUI Snackbar"
        color="secondary"
        sx={{
          ".MuiPaper-root": {
            backgroundColor: theme.palette.secondary.main,
          },
        }}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="secondary"
            onClick={() => setSnackbarState(false)}
          >
            <AiOutlineClose
              style={{
                color: theme.palette.secondary.contrastText,
              }}
            />
          </IconButton>
        }
      />
    </section>
  );
};

export default Homepage;
