// {
//     "notification":
//     {
//       "title": "COMANDERA",
//       "body": "Soy un mensajito"
//     }
// }

export interface INotificacion
{
    notification: NotificationMessagePayload;
    data?: any;
    token?: string;
}

interface NotificationMessagePayload
{
    title: string;
    body: string;
    clickAction?: string; // Handler de la notificacion
    badge?: string;
    bodyLocArgs?: string;
    bodyLocKey?: string;
    color?: string;
    icon?: string;
    sound?: string;
    tag?: string;
    titleLocArgs?: string;
    titleLocKey?: string;
}

export interface Respuesta
{
    status: number;
    headers: Header[];
    data: string;
}

interface Header
{
    'Access-Control-Allow-Origin'?: string;
    Connection?: string;
    'Content-Length'?: string;
    'Content-Type'?: string;
    Date?: string;
    Etag?: string;
    Server?: string;
    Via?: string;
    'X-Android-Received-Millis'?: string;
    'X-Android-Response-Source'?: string;
    'X-Android-Selected-Protocol'?: string;
    'X-Android-Sent-Millis'?: string;
    'X-Powered-By'?: string;
}