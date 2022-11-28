export const notificated = (
    title:string, body: any, tag:any):any => {

    Notification.requestPermission().then(perm => {
        if (perm === "granted") {
            new Notification(title, {
                body,
                icon: "store.svg",
                tag,
            });
        }
    })
}