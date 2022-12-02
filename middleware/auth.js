export default function({store, redirect}) {
  if (!store.getters.hasToken) {
    redirect('/logins?message=login')
  }
}
