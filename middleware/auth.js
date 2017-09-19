export default function ({redirect, store, error}) {
  if (!store.state.authUser) {
    return redirect('/login')
    // error({
    //   message: '未授权，请先登录！',
    //   statusCode: 403
    // })
  }
}