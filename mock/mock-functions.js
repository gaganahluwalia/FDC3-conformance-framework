const onFdc3Ready = () => new Promise((resolve) => {
    if (window.fdc3) {
        resolve();
    } else {
        window.addEventListener('fdc3Ready', () => resolve());
    }
});

const setupCloseListener = async (fdc3) => {
    const channel = await fdc3.getOrCreateChannel("fdc3.raiseIntent");
    await channel.addContextListener("closeWindow", async (context) => {
        if (FSBL) {
        await FSBL.Clients.WindowClient.close({
            removeFromWorkspace: false,
            closeWindow: false
        });
        }
    });
};
