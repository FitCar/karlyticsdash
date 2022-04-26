export const sendPushNotifications = async (pushToken, type, details) =>{
    let notification_data
    if(type === "request confirmed") {
        notification_data = {
            to: pushToken,
            data: { data: details },
            title: 'Karlytics',
            body: `Your ${details.requestType} Request for ${details.Car} has been confirmed`
        } 
    }else if(type === "quotation") {
        notification_data = {
            to: pushToken,
            data: { data: details },
            title: 'Karlytics',
            body: `New Quotation for ${details.Car} is available`
        }
    }else {
        notification_data = {
            to: pushToken,
            data: { data: details },
            title: 'Karlytics',
            body: `New Diagnostic Report on ${details.Car} for the ${details.requestType} request is available`
        }
    }

    await fetch('https://exp.host/--/api/v2/push/send', {
        method: 'POST',
        mode: "no-cors",
        headers: {
          Accept: 'application/json',
          'Accept-Encoding': 'gzip, deflate',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(notification_data),
      })
}
