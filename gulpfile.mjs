import childProcess from "child_process";



function sh(command) {
    return childProcess.execSync(command, { stdio: "inherit" });
}

export const start = async () => {
   
    sh("npx vite");
};
start.description = "Start the application locally.";

export const build = async () => {
   
    sh("npx vite build");
};
build.description = "Build the application.";

