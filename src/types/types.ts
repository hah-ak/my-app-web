export type ApiResult<T> = {
    status: 'fail' | 'success'
    message : string
    data : T
}