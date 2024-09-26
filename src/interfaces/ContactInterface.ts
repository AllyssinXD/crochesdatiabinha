export default interface ContactInterface {
    _id: string
    name: string;
    email: string;
    message: string;
    createdAt: string;
    reloadComponent?: Function
}